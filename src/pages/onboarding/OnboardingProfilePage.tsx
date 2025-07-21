import { useEffect, useRef, useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import ProfileImg from "../../components/common/Etc/ProfileImg";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../../components/common/ProgressBar";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import IntroText from "./components/IntroText";

export const OnboardingProfilePage = () => {
  const [setProfile, setIsProfile] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const fileInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleClick = () => {
    if (setProfile) {
      navigate("/onboarding/confirm");
    } else {
      setIsProfile(true);
    }
  };

  useEffect(() => {
    // console.log("렌더링 시점, preview 값:", preview);
  }, [preview]);
  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl); // 미리보기 업뎃뎃
      // fileInput.current = file;
    }
  };

  return (
    <div className="w-full flex flex-col -mb-8">
      <PageHeader title="회원 정보 입력" />
      <ProgressBar width={setProfile ? "96" : "76"} />

      <section className=" flex flex-col gap-[6.25rem] text-left pb-34 mb-[3px] ">
        <div>
          <IntroText
            title="프로필을 등록해주세요."
            text1="내 모습을 보여주면,"
            text2="모임에서 더 빠르게 친해질 수 있어요!"
            isBar={true}
          />
        </div>
        <label
          htmlFor={setProfile ? "image-upload" : ""}
          className={`w-fit  mx-auto ${setProfile ? "cursor-pointer" : ""}`}
        >
          <ProfileImg
            size="XL"
            edit={setProfile}
            src={
              preview
                ? preview
                : setProfile
                  ? "/src/assets/images/profile_Image.png"
                  : "/src/assets/images/base_profile_img.png"
            }
          />
        </label>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          id="image-upload"
          className="hidden"
          // {...register("api보고 결정")}
          onChange={imageChange}
          aria-label="프로필 이미지 업로드"
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
