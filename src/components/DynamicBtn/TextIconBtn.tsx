import { useState } from "react";
import type { TextIconStatus } from "../../types/DynamicBtn";

interface CheckBoxBtnProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function TextIconBtn({
  children,
  disabled = false,
  onClick,
}: CheckBoxBtnProps) {
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
    <div className="">
      <div
        className={`flex pr-[0.625rem]  py-2 pl-4 gap-1 rounded-2xl items-center body-sm-500 border-1 border-gr-500 box-shadow: 0px 0px 4px 0px rgba(18, 18, 18, 0.12) text-gr-700 ${bg} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        onMouseDown={() => !disabled && setIsPressing(true)}
        onMouseUp={() => {
          if (disabled) return;
          setIsPressing(false);
          setClicked(prev => !prev); // 토글
        }}
        onMouseLeave={() => !disabled && setIsPressing(false)}
        onClick={onClick}
      >
        {children}
        <img src={icon} alt="" className="size-4" />
      </div>
    </div>
  );
}
