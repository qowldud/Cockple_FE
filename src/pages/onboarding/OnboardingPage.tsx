import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";

export const OnboardingPage = () => {
  return (
    <>
      <div className="flex items-center flex-col  justify-center w-full h-screen">
        <div className="text-left w-full">
          <p className="header-h4">환영합니다!</p>
          <div className="body-md-500 mb-25">
            <p>카카오계정으로 가입되었어요</p>
            <p>회원 정보를 입력하고 콕플을 즐겨볼까요?</p>
          </div>
        </div>
        <img
          src="/src/assets/images/profile_Image.png"
          alt="프로필 이미지"
          className="size-25 mb-5"
        />
        <p className="header-h4 mb-40">닉네임</p>

        <Grad_GR400_L />
      </div>
    </>
  );
};
