//내 모임이 없을 경우에 나오는 컴포넌트입니다.
import Logo from "../../assets/icons/Logo_Typo.svg?react";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";

export const MyGroupNone = () => {
  return (
    <div className="w-full h-[352px] flex flex-col items-center justify-center mt-10">
       {/* 임티인데 아직 안 나와서 로고로... */}
      <Logo className="w-44 h-44 mt-[32px]" />
      <div className="flex flex-col items-center ">
        <p className="header-h5">참여중인 모임이 없어요!</p>
      </div>

      

      <div className="mt-[32px]">
        <Btn_Static
          kind="GR600"
          size="S"
          bgColor="bg-[#0B9A4E]"
          textColor="text-white"
          label="모임 둘러보기"
        />
      </div>
    </div>
  );
};
