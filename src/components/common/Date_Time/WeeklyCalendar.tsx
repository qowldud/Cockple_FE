import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useMemo, useRef } from "react";
import DayNum from "./DayNum";
import { generateInfiniteDates } from "./utils/generateMonthDates";

interface WeeklyCalendarProps {
  selectedDate?: number | string;
  onClick?: (date: number | string) => void;
  exerciseDays?: string[]; //날짜 문자열 기반
  shadow?: boolean;
}
export default function WeeklyCalendar({
  selectedDate,
  onClick,
  exerciseDays = [],
  shadow = false,
}: WeeklyCalendarProps) {
  const today = new Date();
  const range = 90;

  const weeklyChunks = useMemo(() => generateInfiniteDates(today, range), []);
  const todayIndex = useMemo(() => {
    return weeklyChunks.findIndex(week => week.some(d => d.isToday));
  }, [weeklyChunks]);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && todayIndex >= 0) {
      swiperRef.current.slideTo(todayIndex, 0);
    }
  }, [todayIndex]);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={4}
      slidesPerView={1}
      centeredSlides={false}
      className="w-full max-w-[444px]"
      onSwiper={swiper => (swiperRef.current = swiper)}
    >
      {weeklyChunks.map((week, weekIdx) => (
        <SwiperSlide key={weekIdx}>
          <div className="flex gap-1 justify-between">
            {week.map((d, idx) => (
              <DayNum
                key={idx}
                day={d.day}
                date={d.date}
                hasDot={exerciseDays.includes(d.full)}
                color={
                  d.dayNumber === 0
                    ? shadow
                      ? "Nred"
                      : "red"
                    : shadow
                      ? "Nblack"
                      : "black"
                } // 일요일
                status={selectedDate === d.date ? "clicked" : "default"}
                onClick={() => onClick?.(d.full)}
                className="w-[calc((100%-24px)/7)]"
              />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
