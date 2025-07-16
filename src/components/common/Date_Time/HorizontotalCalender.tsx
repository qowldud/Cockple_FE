import { useEffect, useRef } from "react";
import DayNum from "./DayNum";
import generateMonthDates from "./utils/generateMonthDates";

export default function HorizontalCalendar() {
  const today = new Date();
  const dates = generateMonthDates(today);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 오늘 날짜 index=> 스크롤 위치 조정
    const todayIndex = dates.findIndex(d => d.isToday);
    if (todayIndex >= 0 && scrollRef.current) {
      const target = scrollRef.current.children[todayIndex] as HTMLElement;
      if (target) {
        scrollRef.current.scrollTo({
          left: target.offsetLeft - target.offsetWidth, // 약간 왼쪽 여백
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <div
      className="overflow-x-auto scrollbar-hide"
      ref={scrollRef}
      style={{ maxWidth: `calc(3rem * 7 + 0.5rem * 6 + 2rem)` }}
    >
      <div className="flex gap-2 ">
        {dates.map((d, idx) => (
          <div key={idx} className="snap-center shrink-0">
            <DayNum
              day={d.day}
              date={d.date}
              color={d.day === "일" ? "red" : "black"}
              hasDot={Math.random() > 0.7}
              status={d.isToday ? "clicked" : "default"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
