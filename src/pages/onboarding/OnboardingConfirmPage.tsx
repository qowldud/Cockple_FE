import { useLocation, useNavigate, useParams } from "react-router-dom";
import TagBtn from "../../components/common/DynamicBtn/TagBtn";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import IntroText from "../../components/onboarding/IntroText";
import Onboarding4 from "@/assets/images/onboarding3.png?url";
import { useMutation } from "@tanstack/react-query";
import { useOnboardingState } from "../../store/useOnboardingStore";
import api from "../../api/api";
import { useState } from "react";
import type { OnBoardingResponseDto } from "../../types/auth";
import { userLevelMapper } from "../../utils/levelValueExchange";
import { TAGMAP } from "../../constants/options";
import { useGroupMakingFilterStore } from "../../store/useGroupMakingFilter";
import type { GroupMakingKeywordsResponseDTO } from "../../types/groupMaking";

export const ConfirmPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onboarding = location.state?.onboarding ?? true;

  const params = useParams();
  const apiPartyId = Number(params.partyId);
  // console.log(typeof apiPartyId);
  const axios = api;

  const { level, memberName, gender, birth, keyword, imgKey, setTemp } =
    useOnboardingState();
  const { setFilter } = useGroupMakingFilterStore();
  const [selectedTag, setSelectedTag] = useState<string[]>(keyword ?? []);
  const { toEng } = userLevelMapper();
  //태그 선택
  const toggleTag = (tag: string) => {
    const tagUpdated = selectedTag.includes(tag)
      ? selectedTag.filter(t => t !== tag)
      : [...selectedTag, tag];
    setSelectedTag(tagUpdated);
    setTemp({ keyword: tagUpdated });
    setFilter("keywords", tagUpdated);
  };

  console.log(selectedTag);

  const keywordMap: Record<string, string> = {
    "브랜드 스폰": "BRAND",
    "가입비 무료": "FREE",
    친목: "FRIENDSHIP",
    "운영진이 게임을 짜드려요": "MANAGER_MATCH",
  };
  const mappedKeywords =
    selectedTag.length > 0
      ? selectedTag.map(tag => keywordMap[tag]).filter(Boolean)
      : ["NONE"];

  //onboarding
  const submitOnboarding = async (): Promise<OnBoardingResponseDto> => {
    const body = {
      memberName,
      gender: gender?.toUpperCase(),
      birth: birth.split(".").join("-"),
      level: toEng(level),
      keywords: mappedKeywords,
      imgKey: imgKey,
    };
    const { data } = await axios.post<OnBoardingResponseDto>(
      "/api/my/details",
      body,
    );
    return data;
  };

  //그룹만들기
  const onboardingMutation = useMutation<OnBoardingResponseDto>({
    mutationFn: submitOnboarding,
    onSuccess: data => {
      console.log("성공");
      console.log(data);
      navigate("/onboarding/confirm/start");
    },
    onError: err => {
      console.error(err);
    },
  });

  const submitGroupMaking = async (
    partyId: number,
  ): Promise<GroupMakingKeywordsResponseDTO> => {
    const body = {
      keywords: selectedTag,
    };
    const { data } = await axios.post<GroupMakingKeywordsResponseDTO>(
      `/api/parties/${partyId}/keywords`,
      body,
    );
    return data;
  };

  const groupKeywordsMutation = useMutation({
    mutationFn: (partyId: number) => submitGroupMaking(partyId),
    onSuccess: data => {
      console.log("성공");
      console.log(data);
      navigate(`/group/making/member/${apiPartyId}`);
    },
    onError: err => {
      console.error(err);
    },
  });

  const handleNext = () => {
    if (onboarding) {
      onboardingMutation.mutate();
    } else {
      groupKeywordsMutation.mutate(apiPartyId);
    }
  };

  return (
    <div
      className="w-full flex flex-col -mb-8 -mt-14"
      style={{ minHeight: "100dvh" }}
    >
      <section className="flex items-center flex-col gap-10 flex-1">
        <IntroText
          title={
            onboarding ? "가입이 완료되었어요!" : "멋진 모임이 만들어졌어요!"
          }
          text1="키워드를 선택하고"
          text2="더 많은 모임과 연결되어 볼까요?"
          isBar={false}
        />

        <div>
          <img src={Onboarding4} alt="가입완료 이미지" className="size-45" />
        </div>
        <div className="flex flex-wrap gap-[0.625rem] items-center justify-center">
          {TAGMAP.map(item => {
            return (
              <TagBtn
                key={item}
                isSelected={selectedTag.includes(item)}
                onClick={() => toggleTag(item)}
              >
                {item}
              </TagBtn>
            );
          })}
        </div>
      </section>
      <div
        className="flex items-center justify-center header-h4 mb-6 "
        onClick={handleNext}
      >
        <Btn_Static
          label={onboarding ? "다음" : "신규 멤버 추천 받기"}
          kind="GR400"
          size="L"
        />
      </div>
    </div>
  );
};
