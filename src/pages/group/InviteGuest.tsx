import { PageHeader } from "../../components/common/system/header/PageHeader";
import TextBox from "../../components/common/Text_Box/TextBox";
import { useState } from "react";
import Female from "../../assets/icons/female.svg?react";
import Male from "../../assets/icons/male.svg?react";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import InputField from "../../components/common/Search_Filed/InputField";
import DropCheckBox from "../../components/common/Drop_Box/DropCheckBox";
import { useForm } from "react-hook-form";
import { Member } from "../../components/common/contentcard/Member";
import Circle_Red from "@/assets/icons/cicle_s_red.svg?url";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../api/api";

import { userLevelMapper } from "../../utils/levelValueExchange";
import type { ResponseInviteGuest } from "../../types/guest";
import { LEVEL_KEY } from "../../constants/options";
import { useParams } from "react-router-dom";
import { handleInput } from "../../utils/handleDetected";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { useInviteGuest } from "../../api/exercise/InviteGuest";

export const InviteGuest = () => {
  //정보
  const [localName, setLocalName] = useState(name ?? "");
  const [selected, isSelected] = useState<"male" | "female" | null>(null);

  const levelOptions = LEVEL_KEY.slice(1);
  const queryClient = useQueryClient();
  const axios = api;

  const handleInputDetected = handleInput(17, v => {
    setLocalName(v);
  });
  const { setValue, watch } = useForm({
    defaultValues: {
      levelOptions: "",
    },
  });

  const levelValue = watch("levelOptions") || "";

  const isFormValid =
    localName.length > 0 &&
    selected !== null &&
    (levelValue === "disabled" || levelOptions.includes(levelValue));

  //---------------------------------------모임 초대하기
  const apiGender = selected === "male" ? "남성" : "여성";

  const ReauestLevelValue = levelValue === "disabled" ? "급수없음" : levelValue;
  const exerciseParams = useParams();
  const exerciseId = Number(exerciseParams.exerciseId);
  console.log(exerciseId);

  const handleInviteForm = useMutation({
    mutationFn: () => {
      const body = {
        guestName: localName,
        gender: apiGender,
        level: ReauestLevelValue,
      };
      return axios.post(`/api/exercises/${exerciseId}/guests`, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["inviteGuest", exerciseId],
      });
      setLocalName("");
      isSelected(null);
      setValue("levelOptions", "");
    },
    onError: err => {
      console.log(err);
    },
  });

  const { data, isLoading, isError } = useInviteGuest(exerciseId);
  //게스트 초대 취소하기--------------
  const handleDelete = useMutation({
    mutationFn: (guestId: number) => {
      return axios.delete(`/api/exercises/${exerciseId}/guests/${guestId}`);
    },
    onSuccess: () => {
      console.log("삭제 성공");
      queryClient.invalidateQueries({
        queryKey: ["inviteGuest", exerciseId],
      });
    },
    onError: err => {
      console.log(err);
    },
  });

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  if (isError) {
    return <p className="body-rg-500">오류 발생</p>;
  }

  const noneData = data?.list.length === 0;
  console.log(data);

  const { toKor } = userLevelMapper();

  const InviteGuestList = data?.list.map(
    (item: ResponseInviteGuest, idx: number) => {
      const apilevel = toKor(item.level);
      const responseLevelValue =
        apilevel === "disabled" ? "급수 없음" : apilevel;
      const watiingNum =
        idx <= 9
          ? `No.${(idx + 1).toString().padStart(2, "0")}`
          : `대기 ${item.participantNumber}`; // guestName 없으면 빈 문자열
      return (
        <Member
          key={item.guestId}
          status="waiting"
          {...item}
          guestName={item.inviterName}
          gender={item.gender.toUpperCase() as "MALE" | "FEMALE"}
          number={watiingNum}
          level={responseLevelValue}
          showDeleteButton={true}
          useDeleteModal={false}
          isGuest={true}
          onDelete={() => handleDelete.mutate(item.guestId)}
        />
      );
    },
  );

  return (
    <>
      <div className="flex flex-col -mb-8 " style={{ minHeight: "90dvh" }}>
        <PageHeader title="게스트 초대하기" />
        <div className="flex flex-col gap-15 flex-1">
          <section className="text-left flex flex-col  gap-3 w-full pt-10">
            {/* 첫번째 */}
            <InputField
              labelName="이름"
              value={localName}
              InputLength={localName.length}
              onChange={handleInputDetected}
            />

            {/* 두번째 */}
            <div className="text-left flex flex-col gap-2 pb-5">
              <div className="flex px-1 gap-[2px] items-center">
                <p className="header-h5">성별</p>
                <img src={Circle_Red} alt="icon-cicle" />
              </div>
              <div className="flex gap-[13px]">
                <TextBox
                  children="남성"
                  isSelected={selected === "male"}
                  onClick={() =>
                    isSelected(selected === "male" ? null : "male")
                  }
                  className="w-19"
                />
                <TextBox
                  children="여성"
                  isSelected={selected === "female"}
                  onClick={() =>
                    isSelected(selected === "female" ? null : "female")
                  }
                  className="w-19"
                />
              </div>
            </div>
            {/* 세번째 */}
            <DropCheckBox
              title="전국 급수"
              options={levelOptions}
              checkLabel="급수 없음"
              value={levelValue}
              checked={levelValue === "disabled"}
              onChange={val =>
                setValue("levelOptions", val ?? "", { shouldValidate: true })
              }
            />
          </section>

          {/* 대기열 */}
          <section>
            {noneData ? (
              <div>게스트를 초대해주세요!</div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label className="text-left header-h5">초대된 인원</label>
                    <p className="header-h5">{data?.totalCount}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Female className="w-4 h-4" />
                    <p className="body-rg-500">{data?.femaleCount}</p>
                    <Male className="w-4 h-4" />
                    <p className="body-rg-500">{data?.maleCount}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center flex-col">
              {InviteGuestList}
            </div>
          </section>
        </div>
        {/* 버튼 */}
        <div
          className="flex items-center justify-center mt-20 mb-3"
          onClick={() => handleInviteForm.mutate()}
        >
          <Btn_Static
            label="초대하기"
            kind="GR400"
            size="L"
            initialStatus={!isFormValid ? "disabled" : "default"}
          />
        </div>
      </div>
    </>
  );
};
