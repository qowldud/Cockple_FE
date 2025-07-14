import { useNavigate } from "react-router-dom";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";
import TagBtn from "../../components/common/DynamicBtn/TagBtn";

export const OnboardingConfirmPage = () => {
  const navigate = useNavigate();
  const tagMap = [
    "브랜드 스폰",
    "가입비 무료",
    "친목",
    "운영진이 게임을 짜드려요",
  ];
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section className="flex items-center flex-col gap-10 grow">
        <div className="flex flex-col gap-2  items-stretch text-left w-full">
          <p className="header-h4 pt-22">가입이 완료되었어요!</p>
          <div className="body-md-500">
            <p>키워드를 선택하고</p>
            <p>더 많은 모임과 연결되어 볼까요?</p>
          </div>
        </div>
        <div>
          <img
            src="/src/assets/images/kitty.png"
            alt="프로필 이미지"
            className="size-45 mb-5"
          />
        </div>
        <div className="flex flex-wrap gap-[0.625rem] items-center justify-center">
          {tagMap.map(item => {
            return <TagBtn children={item} disabled />;
          })}
        </div>
      </section>
      <div
        className="flex items-center justify-center header-h4 "
        onClick={() => navigate("start")}
      >
        <Grad_GR400_L label="다음" />
      </div>
    </div>
  );
};
