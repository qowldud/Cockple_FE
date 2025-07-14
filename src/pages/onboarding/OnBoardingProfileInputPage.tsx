import { useState } from "react";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import ProfileImg from "../../components/common/Etc/ProfileImg";
import { useNavigate } from "react-router-dom";

export const OnboardingProfileInputPage = () => {
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
      <section className=" flex flex-col gap-[6.25rem] text-left  flex-1 pt-15">
        <div>
          <div className="flex gap-2 flex-col">
            <p className="header-h4">프로필을 등록해주세요</p>
            <div className="body-md-500">
              <p>내 모습을 보여주면,</p>
              <p>모임에서 더 빠르게 친해질 수 있어요!</p>
            </div>
          </div>
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
        <Grad_GR400_L label={setProfile ? "등록" : "프로필 등록"} />
      </div>
    </div>
  );
};
