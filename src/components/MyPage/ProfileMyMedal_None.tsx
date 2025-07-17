import Logo from "../../assets/icons/Logo_Typo.svg?react";

export const ProfileMyMedal_None = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 w-full h-full">
      <Logo className="w-44 h-44" />
      <p className="header-h5">대회 기록이 없어요!</p>
    </div>
  );
};
