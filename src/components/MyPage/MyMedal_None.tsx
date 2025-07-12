//내 메달에 대화가 없는 경우 "대화 기록 추가하기" 버튼을 누르면 이동하는 화면입니다.
import Logo from "../../assets/icons/Logo_Typo.svg?react";
import Btn_Static from "../common/Btn_Static/Btn_Static";

export const MyMedal_None = () => {
  return (
    <div className="w-full h-[352px] flex flex-col items-center justify-center mt-10">
  
      <div className="flex flex-col items-center ">
        <p className="header-h5">대화 기록이 없어요!</p>
        <p className="header-h5">대화 기록을 추가하고 메달을 가져볼까요?</p>
      </div>

      {/* 임티인데 아직 안 나와서 로고로... */}
      <Logo className="w-44 h-44 mt-[32px]" />

      <div className="mt-[32px]">
        <Btn_Static
          kind="GR600"
          size="S"
          bgColor="bg-[#0B9A4E]"
          textColor="text-white"
          label="대회 기록 추가하기"
        />
      </div>
    </div>
  );
};
