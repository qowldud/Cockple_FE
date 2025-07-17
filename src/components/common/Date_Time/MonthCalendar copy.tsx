import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
} from "date-fns";
import MonthNums from "./MonthNums";

export default function MonthCalendar2() {
  const current = new Date();
  const weekDays = ["월", "화", "수", "목", "금", "토", "일"];

  const exerciseDates = [
    "2000-05-01",
    "2000-05-04",
    "2000-05-11",
    "2000-05-18",
    "2000-05-25",
  ];

  const allDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(current), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(current), { weekStartsOn: 1 }),
  });

  const weeks = [];
  for (let i = 0; i < allDates.length; i += 7) {
    weeks.push(allDates.slice(i, i + 7));
  }

  return (
    <div className="w-86 px-4 flex-col items-center gap-4">
      {/* 상단 네비게이션 */}
      <div className="flex justify-between items-center w-full">
        <img src="/src/assets/icons/arrow_left.svg" alt="" className="size-4" />
        <p className="body-rg-600">{format(current, "yyyy.MM")}</p>
        <img
          src="/src/assets/icons/arrow_right.svg"
          alt=""
          className="size-4"
        />
      </div>

      {/* 요일 */}
      <div className="flex justify-between mt-4">
        {weekDays.map(day => (
          <div key={day} className="w-11 text-center body-rg-500 text-black">
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 */}
      <div className="flex flex-col gap-1 mt-2">
        {weeks.map((week, wIdx) => (
          <div key={wIdx} className="flex justify-between">
            {week.map((date, dIdx) => {
              const day = format(date, "d");
              const full = format(date, "yyyy-MM-dd");
              const isCurrent = isSameMonth(date, current);
              const isSunday = date.getDay() === 0;
              const hasDot = exerciseDates.includes(full);

              return (
                <MonthNums
                  key={dIdx}
                  day={day}
                  color={isSunday ? "red" : "black"}
                  // dimmed={!isCurrent}
                  hasDot={hasDot}
                  date={day}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
