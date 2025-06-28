import { useState } from "react";
import type { IconTextStatus } from "../../types/DynamicBtn";

interface CheckBoxBtnProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function CheckBoxBtn({
  children,
  disabled = false,
  onClick,
}: CheckBoxBtnProps) {
  //상태 관리
  const [clicked, setClicked] = useState(false);
  const [isPressing, setIsPressing] = useState(false);

  const getStatus = (): IconTextStatus => {
    if (disabled) return "disabled";
    if (clicked && isPressing) return "CLpressing";
    if (isPressing) return "pressing";
    if (clicked) return "clicked";
    return "default";
  };

  const status: IconTextStatus = getStatus();

  const statusMap: Record<IconTextStatus, { bg: string; icon: string }> = {
    clicked: {
      bg: "bg-white",
      icon: "/src/assets/icons/check_circled_filled.svg",
    },
    CLpressing: {
      bg: "bg-gy-100",
      icon: "/src/assets/icons/check_circled_filled.svg",
    },
    pressing: {
      bg: "bg-gy-100",
      icon: "/src/assets/icons/check_circled.svg",
    },
    default: {
      bg: "bg-white",
      icon: "/src/assets/icons/check_circled.svg",
    },
    disabled: {
      bg: "bg-white text-gy-400",
      icon: "/src/assets/icons/check_circled.svg",
    },
  };

  const { bg, icon } = statusMap[status];

  return (
    <div className="">
      <div
        className={`flex pr-2 py-1 pl-[0.375rem] gap-2 rounded-lg items-center body-rg-500  ${bg} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        onMouseDown={() => !disabled && setIsPressing(true)}
        onMouseUp={() => {
          if (disabled) return;
          setIsPressing(false);
          setClicked(prev => !prev); // 토글
        }}
        onMouseLeave={() => !disabled && setIsPressing(false)}
        onClick={onClick}
      >
        <img src={icon} alt="" className="pt-[0.125rem]" />
        {children}
      </div>
    </div>
  );
}
