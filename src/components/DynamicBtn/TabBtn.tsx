import { useState } from "react";
import type { BaseBtnProps, TextIconStatus } from "../../types/DynamicBtn";

export default function TabBtn({
  children,
  disabled = false,
  onClick,
  type,
}: BaseBtnProps) {
  //click 했을때 span생김
  //pressing헸을때 bg-gy-100
  //disable 했을때 text-gy-400
  const [clicked, setClicked] = useState(false);
  const [isPressing, setIsPressing] = useState(false);
  const getStatus = (): TextIconStatus => {
    if (disabled) return "disabled";
    if (isPressing) return "pressing";
    if (clicked) return "clicked";
    return "default";
  };
  const status: TextIconStatus = getStatus();

  const statusMap: Record<TextIconStatus, { bg?: string; span?: string }> = {
    clicked: {
      span: "w-full h-[0.125rem] bg-gr-500 ",
    },
    pressing: {
      bg: "bg-gy-100 ",
    },
    default: {
      bg: "py-2 ",
    },
    disabled: {
      bg: "text-gy-400 ",
    },
  };

  const { bg, span } = statusMap[status];

  return (
    <button
      className={`header-h5 inline-flex  flex-col justify-center items-start  rounded-lg relative py-2 gap-1 px-3 ${bg}`}
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
      <span className={`${span} absolute bottom-0 w-full left-0`}></span>
    </button>
  );
}
