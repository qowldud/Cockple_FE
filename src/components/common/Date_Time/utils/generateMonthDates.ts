import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";
import { ko } from "date-fns/locale";
function generateMonthDates(date: Date) {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const allDates = eachDayOfInterval({ start, end });

  return allDates.map(d => ({
    dateObj: d,
    day: format(d, "E", { locale: ko }), // '월', '화']
    date: format(d, "d"), // 1~31
    isToday: format(d, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd"),
  }));
}

export default generateMonthDates;
