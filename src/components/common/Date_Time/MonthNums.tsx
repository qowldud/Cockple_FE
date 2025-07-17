import clsx from "clsx";
import { useState } from "react";

type ColorType = "black" | "red";
type StatusType = "default" | "pressing" | "clicked";

type DayNumProps = {
  day?: string; // 요일
  date?: number | string; // 날짜
  color?: ColorType; // 텍스트 색
  status?: StatusType; // 상태
  hasDot?: boolean; // 점
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const statusMap: Record<ColorType, Record<StatusType, string>> & {
  disabled: string;
} = {
  // 쉐도우 없는
  black: {
    default: "bg-white text-black",
    pressing: "bg-gy-100 text-black",
    clicked: "!bg-gr-100 text-black",
  },
  red: {
    default: "bg-white text-rd-500",
    pressing: "bg-gy-100 text-rd-500",
    clicked: "bg-gr-100 text-rd-500",
  },
  disabled: "bg-white-40 text-gy-400",
};
export default function MonthNums({
  date = "00",
  color = "black",
  status = "default",
  hasDot = false,
  disabled = false,
  className,
  onClick,
}: DayNumProps) {
  const [isPressing, setIsPressing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const effectiveStatus: StatusType = isPressing
    ? "pressing"
    : isClicked
      ? "clicked"
      : "default";

  const appliedClass = disabled
    ? statusMap.disabled
    : statusMap[color][effectiveStatus];
  return (
    <div
      className={clsx(
        "flex flex-col items-center rounded-lg  body-rg-500  gap-2 pt-2 pb-[0.625rem] min-w-11  size-11 relative ",
        appliedClass,
        className,
      )}
      onPointerDown={() => setIsPressing(true)}
      onPointerUp={() => {
        setIsPressing(false);
        setIsClicked(prev => !prev);
      }}
      onPointerLeave={() => setIsPressing(false)}
      onClick={onClick}
    >
      <div className="min-w-11 relative min-h-8">
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
