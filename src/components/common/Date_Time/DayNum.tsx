import clsx from "clsx";
import { useState } from "react";

type ColorType = "black" | "red" | "blue";
type StatusType = "default" | "pressing" | "clicked";

type DayNumProps = {
  day?: string; // 요일
  date?: number | string; // 날짜
  color?: ColorType; // 텍스트 색
  status?: StatusType; // 상태
  hasDot?: boolean; // 점
  disabled?: boolean;
  onClick?: () => void;
};

const statusMap = {
  black: {
    default: "shadow-ds50-is50 bg-white-50 text-black",
    pressing: "shadow-ds50 bg-gy-100 text-black",
    clicked: "bg-white shadow-ds50 text-black",
  },
  red: {
    default: "shadow-ds50-is50 bg-white-50 text-rd-500",
    pressing: "shadow-ds50 bg-gy-100 text-rd-500",
    clicked: "bg-white shadow-ds50 text-rd-500",
  },
  blue: {
    default: "shadow-ds50-is50 bg-white-50 text-bl-500",
    pressing: "shadow-ds50 bg-gy-100 text-bl-500",
    clicked: "bg-white shadow-ds50 text-bl-500",
  },
  disabled: "bg-white-40 text-gy-400",
};
export default function DayNum({
  day = "Day",
  date = "00",
  color = "black",
  status = "default",
  hasDot = false,
  disabled = false,
  onClick,
}: DayNumProps) {
  const [isPressing, setIsPressing] = useState(false);

  const effectiveStatus = isPressing ? "pressing" : status;

  const appliedClass = disabled
    ? statusMap.disabled
    : statusMap[color][effectiveStatus];
  return (
    <div
      className={clsx(
        "flex flex-col items-center rounded-lg  body-rg-500  gap-2 pt-2 pb-[0.625rem] w-11  max-h-17 relative ",
        appliedClass,
      )}
      onMouseDown={() => setIsPressing(true)}
      onMouseUp={() => setIsPressing(false)}
      onMouseLeave={() => setIsPressing(false)}
      onClick={onClick}
    >
      <p>{day}</p>
      <div className="">
        <p>{date}</p>
        {hasDot && (
          <img
            src="/src/assets/icons/cicle_s_fill.svg"
            alt=""
            className="size-3 absolute bottom-0.5 left-4"
          />
        )}
      </div>
    </div>
  );
}
