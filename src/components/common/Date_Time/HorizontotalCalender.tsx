import { useEffect, useRef, useState } from "react";
import DayNum from "./DayNum";
import generateMonthDates from "./utils/generateMonthDates";

export default function HorizontalCalendar() {
  const today = new Date();
  const dates = generateMonthDates(today);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setContainerWidth(scrollRef.current.clientWidth);
    }
  }, []);

  const gap = 4; // px (gap-1)
  const totalGap = gap * 6;
  const cardWidth = (containerWidth - totalGap) / 7;
  useEffect(() => {
    // 오늘 날짜 index=> 스크롤 위치 조정함
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
    <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
      <div className="flex gap-1 ">
        {dates.map((d, idx) => (
          <div
            key={idx}
            className="snap-center shrink-0"
            style={{ width: `${cardWidth}px` }}
          >
            <DayNum
              day={d.day}
              date={d.date}
              color={d.day === "일" ? "red" : "black"}
              hasDot={Math.random() > 0.7}
              status={d.isToday ? "clicked" : "default"}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
