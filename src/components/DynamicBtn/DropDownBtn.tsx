import { useState } from "react";
import type { BaseBtnProps, TextIconStatus } from "../../types/DynamicBtn";

export default function DropDownBtn({
  children,
  disabled = false,
  onClick,
  type,
}: BaseBtnProps) {
  //상태 관리
  const [clicked, setClicked] = useState(false);
  const [isPressing, setIsPressing] = useState(false);

  const getStatus = (): TextIconStatus => {
    if (disabled) return "disabled";
    if (isPressing) return "pressing";
    if (clicked) return "clicked";
    return "default";
  };

  const status: TextIconStatus = getStatus();

  const statusMap: Record<TextIconStatus, { bg?: string; icon: string }> = {
    clicked: {
      icon: "/src/assets/icons/arrow_down.svg",
    },
    pressing: {
      bg: "bg-gy-100",
      icon: "/src/assets/icons/arrow_down.svg",
    },
    default: {
      icon: "/src/assets/icons/arrow_down.svg",
    },
    disabled: {
      icon: "/src/assets/icons/arrow_down.svg",
    },
  };

  const { bg, icon } = statusMap[status];

  return (
    <button
      className={`flex pr-[0.625rem] py-1 pl-4 gap-1 rounded-lg items-center header-h4  ${bg} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      onMouseDown={() => !disabled && setIsPressing(true)}
      onMouseUp={() => {
        if (disabled) return;
        setIsPressing(false);
        setClicked(prev => !prev); // 토글
      }}
      onMouseLeave={() => !disabled && setIsPressing(false)}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
      <img src={icon} alt="" className="pt-[0.125rem] size-4" />
    </button>
  );
}
