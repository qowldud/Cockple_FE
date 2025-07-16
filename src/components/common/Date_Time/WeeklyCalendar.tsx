import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useMemo, useRef } from "react";
import DayNum from "./DayNum";
import generateInfiniteDates from "./utils/generateMonthDates"; // 이 함수는 flat 배열을 반환해야 함

export default function WeeklyCalendar({
  selectedDate,
  onClick,
  exerciseDays = [],
}: {
  selectedDate?: number | string;
  onClick?: (date: number | string) => void;
  exerciseDays?: number[]; // 요일 기반 (1~7)
}) {
  const today = new Date();
  const range = 90;

  // 전체 날짜 생성 (flat 배열)
  const flatDates = useMemo(() => generateInfiniteDates(today, range), []);

  // === 핵심: 7일 단위로 쪼개기 ===
  const weeklyChunks = useMemo(() => {
    const result = [];
    for (let i = 0; i < flatDates.length; i += 7) {
      result.push(flatDates.slice(i, i + 7));
    }
    return result;
  }, [flatDates]);

  // 오늘 날짜가 몇 번째 주인지 계산
  const todayIndex = useMemo(() => {
    return Math.floor(range / 7); // 가운데 주로 설정
  }, [range]);

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(todayIndex, 0); // 초기 위치: 오늘 포함된 주
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
                hasDot={exerciseDays.includes(d.dateObj.getDay())} // 0:일~6:토
                color={d.day === "일" ? "red" : "black"}
                status={selectedDate === d.date ? "clicked" : "default"}
                onClick={() => onClick?.(d.date)}
                className="w-[calc((100%-24px)/7)]"
              />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
