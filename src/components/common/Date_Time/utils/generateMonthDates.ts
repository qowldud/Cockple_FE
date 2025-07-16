import { subDays, addDays, eachDayOfInterval, format, isToday } from "date-fns";
import { ko } from "date-fns/locale";

function generateInfiniteDates(baseDate: Date, range = 90) {
  const start = subDays(baseDate, range);
  const end = addDays(baseDate, range);

  const allDates = eachDayOfInterval({ start, end });

  return allDates.map(d => ({
    dateObj: d,
    day: format(d, "E", { locale: ko }), // '월', '화', ...
    date: format(d, "d"), // '1', '2', ...
    full: format(d, "yyyy-MM-dd"),
    isToday: isToday(d),
  }));
}

export default generateInfiniteDates;
