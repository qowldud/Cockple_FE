import Btn_Static from "../../components/common/Btn_Static/Btn_Static";

export const OnboardingPage = () => {
  return (
    <>
      <div className=" justify-center w-full min-h-screen flex flex-col">
        <div className="flex items-center flex-col gap-25">
          <div className="flex flex-col gap-2  items-stretch text-left w-full">
            <p className="header-h4 pt-20">환영합니다!</p>
            <div className="body-md-500">
              <p>카카오계정으로 가입되었어요</p>
              <p>회원 정보를 입력하고 콕플을 즐겨볼까요?</p>
            </div>
          </div>
          <div>
            <img
              src="/src/assets/images/profile_Image.png"
              alt="프로필 이미지"
              className="size-25 mb-5"
            />
            <p className="header-h4 mb-20">닉네임</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Btn_Static kind="GR400" size="L" label="sfds" />
        </div>
      </div>
    </>
  );
};
