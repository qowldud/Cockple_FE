import { useNavigate } from "react-router-dom";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";
import { PageHeader } from "../../components/common/system/header/PageHeader";

export const OnboardingConfirmStartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col">
      <PageHeader title="가입 완료" />
      <section className="flex items-center flex-col  grow gap-15">
        <div className="flex flex-col gap-2  items-stretch text-left w-full">
          <p className="header-h4 pt-9">입상 기록이 나를 더 잘 보여줄거에요!</p>
          <div className="body-md-500">
            <p>마이페이지에서 대회 경력을 등록해보세요.</p>
          </div>
        </div>
        {/* 끊고 */}
        <div className="flex gap-8 flex-col items-center">
          <div className="flex shadow-ds200 rounded-lg bg-white py-1 px-4 gap-1 items-center justify-center body-rg-500">
            <p>지금까지</p>
            <p className="text-gr-700">??</p>
            <p>개의 메달을 모았어요</p>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-3 py-2 flex-col">
              <img
                src="/src/assets/images/kitty.png"
                alt=""
                className="size-15"
              />
              <p>금메달</p>
            </div>
            <div className="flex gap-3 py-2 flex-col">
              <img
                src="/src/assets/images/kitty.png"
                alt=""
                className="size-15"
              />
              <p>은메달</p>
            </div>
            <div className="flex gap-3 py-2 flex-col">
              <img
                src="/src/assets/images/kitty.png"
                alt=""
                className="size-15"
              />
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
        <Grad_GR400_L label="시작하기" />
      </div>
    </div>
  );
};
