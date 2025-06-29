import { useState } from "react";
import type { BaseBtnProps, TextIconStatus } from "../../types/DynamicBtn";

export default function TextIconBtnM({
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
      icon: "/src/assets/icons/arrow_right_fill.svg",
    },
    pressing: {
      bg: "bg-gr-200 ",
      icon: "/src/assets/icons/arrow_right_fill.svg",
    },
    default: {
      icon: "/src/assets/icons/arrow_right_fill.svg",
    },
    disabled: {
      bg: "border-gy-200",
      icon: "/src/assets/icons/arrow_right.svg",
    },
  };

  const { bg, icon } = statusMap[status];

  return (
    <button
      className={`inline-flex pr-[0.625rem]  py-2 pl-4 gap-1 rounded-2xl items-center body-sm-500 border-1 border-gr-500 shadow-[0px_0px_12px_0px_rgba(18,18,18,0.04)] text-gr-700 ${bg} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
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
      <img src={icon} alt="" className="size-4" />
    </button>
  );
}
