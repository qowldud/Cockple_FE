import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import IntroText from "../../components/onboarding/IntroText";
import KittyImg from "@/assets/images/kitty.png?url";

export const OnboardingConfirmStartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  flex flex-col -mb-8 pt-14">
      <PageHeader title="가입 완료" />
      <section className="flex items-center flex-col  gap-15 pb-24 ">
        <IntroText
          title="입상 기록이 나를 더 잘 보여줄거에요!"
          text1="마이페이지에서 대회 경력을 등록해보세요."
          isBar={true}
          className="pt-9 items-stretch text-left  w-full"
        />
        {/* 끊고 */}
        <div className="flex gap-8 flex-col items-center">
          <div className="flex shadow-ds200 rounded-lg bg-white py-1 px-4 gap-1 items-center justify-center body-rg-500">
            <p>지금까지</p>
            <p className="text-gr-700">??</p>
            <p>개의 메달을 모았어요</p>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-3 py-2 flex-col">
              <img src={KittyImg} alt="" className="size-15" />
              <p>금메달</p>
            </div>
            <div className="flex gap-3 py-2 flex-col">
              <img src={KittyImg} alt="" className="size-15" />
              <p>은메달</p>
            </div>
            <div className="flex gap-3 py-2 flex-col">
              <img src={KittyImg} alt="" className="size-15" />
              <p>동메달</p>
            </div>
          </div>

          <button
            className="flex py-2 px-4 rounded-lg gap-2 items-center justify-center bg-gy-100 cursor-pointer"
            onClick={() => navigate("/mypage/mymedal/add")}
          >
            <img src="/src/assets/icons/add.svg" alt="" />
            대회기록 추가하기
          </button>
        </div>
      </section>
      <div
        className="flex items-center justify-center header-h4 "
        onClick={() => navigate("/")}
      >
        <Btn_Static label="시작하기" kind="GR400" size="L" />
      </div>
    </div>
  );
};
