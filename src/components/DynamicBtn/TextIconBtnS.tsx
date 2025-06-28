import { useState } from "react";
import type { TextIconStatus } from "../../types/DynamicBtn";

interface CheckBoxBtnProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function TextIconBtnS({
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
      icon: "/src/assets/icons/arrow_right.svg",
    },
    pressing: {
      bg: "bg-gy-100 ",
      icon: "/src/assets/icons/arrow_right.svg",
    },
    default: {
      icon: "/src/assets/icons/arrow_right.svg",
    },
    disabled: {
      icon: "/src/assets/icons/arrow_right.svg",
    },
  };

  const { bg, icon } = statusMap[status];

  return (
    <div className="">
      <div
        className={`flex pl-2 py-1 pr-1 gap-1 rounded-lg items-center  body-rg-400 ${bg} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
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
