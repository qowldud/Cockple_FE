// 내 메달에 대화가 없는 경우 "대화 기록 추가하기" 버튼을 누르면 이동하는 화면입니다.
import Logo from "../../assets/icons/Logo_Typo.svg?react";
import GR400_M from "../../components/common/Btn_Static/Text/GR400_M";

export const MyMedal_None = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center gap-[2rem]">
      {/* 텍스트 */}
      <div className="flex flex-col gap-[0.5rem]">
        <p className="header-h5">대회 기록이 없어요!</p>
        <p className="header-h5">대회 기록을 추가하고 메달을 가져볼까요?</p>
      </div>

      {/* 로고 (임시 이미지) */}
      <Logo className="w-44 h-44" />

      {/* 버튼 */}
      <GR400_M
        kind="GR600"
        size="S"
        bgColor="bg-[#0B9A4E]"
        textColor="text-white"
        label="대회 기록 추가하기"
      />
    </div>
  );
};
