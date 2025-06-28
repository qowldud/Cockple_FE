import { useState } from "react";
import type { IconTextStatus } from "../../types/DynamicBtn";

interface CheckBoxBtnProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function KeyWordBtn({
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
      bg: "bg-white border-gr-500",
      icon: "/src/assets/icons/dismiss.svg",
    },
    CLpressing: {
      bg: "bg-gy-100 border-gr-500",
      icon: "/src/assets/icons/dismiss.svg",
    },
    pressing: {
      bg: "bg-gy-100 border-gr-500",
      icon: "/src/assets/icons/hash.svg",
    },
    default: {
      bg: "bg-white border-gy-200",
      icon: "/src/assets/icons/hash.svg",
    },
    disabled: {
      bg: "bg-white border-gy-200",
      icon: "/src/assets/icons/hash.svg",
    },
  };

  const { bg, icon } = statusMap[status];

  return (
    <div className="">
      <div
        className={`flex pr-[0.625rem] py-2 pl-3 gap-1 rounded-2xl items-center body-rg-500 shadow-[0px_0px_12px_0px_rgba(18,18,18,0.04)] ${bg} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        onMouseDown={() => !disabled && setIsPressing(true)}
        onMouseUp={() => {
          if (disabled) return;
          setIsPressing(false);
          setClicked(prev => !prev); // 토글
        }}
        onMouseLeave={() => !disabled && setIsPressing(false)}
        onClick={onClick}
      >
        <img src={icon} alt="" className="size-4" />
        {children}
      </div>
    </div>
  );
}
