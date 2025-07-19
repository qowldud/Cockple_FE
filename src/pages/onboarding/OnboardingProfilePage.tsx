import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import ProfileImg from "../../components/common/Etc/ProfileImg";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../../components/common/ProgressBar";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import IntroText from "./components/IntroText";

export const OnboardingProfilePage = () => {
  const [setProfile, setIsProfile] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    if (setProfile) {
      navigate("/onboarding/confirm");
    } else {
      setIsProfile(true);
    }
  };
  return (
    <div className="w-full min-h-screen flex flex-col">
      <PageHeader title="회원 정보 입력" />
      <ProgressBar width={setProfile ? "96" : "72"} />

      <section className=" flex flex-col gap-[6.25rem] text-left pb-34 mb-[3px] ">
        <div>
          <IntroText
            title="프로필을 등록해주세요."
            text1="내 모습을 보여주면,"
            text2="모임에서 더 빠르게 친해질 수 있어요!"
            isBar={true}
          />
        </div>
        <ProfileImg
          size="XL"
          edit={setProfile}
          src={
            setProfile
              ? "/src/assets/images/profile_Image.png"
              : "/src/assets/images/base_profile_img.png"
          }
        />
      </section>
      <div
        className="items-center px-3 py-1 flex justify-center mb-2"
        onClick={() => navigate("/onboarding/confirm")}
      >
        <p className="text-gy-700 body-rg-500 border-b w-fit cursor-pointer">
          기본 프로필 사용하기
        </p>
      </div>
      <div className="flex justify-center" onClick={handleClick}>
        <Btn_Static label="다음" kind="GR400" size="L" />
      </div>
    </div>
  );
};
