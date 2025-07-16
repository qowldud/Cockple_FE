import DayNum from "./DayNum";

type OneDay = {
  day: string;
  date: number | string;
  color?: "black" | "red" | "blue" | "Nblack" | "Nred" | "Nblue";
  hasDot?: boolean;
  disabled?: boolean;
};

type DayWeeklyProps = {
  dates: OneDay[];
  selectedDate?: number | string;
  onClick?: (date: number | string) => void;
};
export const DateWeekly = ({
  dates,
  selectedDate,
  onClick,
}: DayWeeklyProps) => {
  return (
    <div className="flex gap-1 justify-center">
      {dates.map(({ day, date, color, hasDot, disabled }) => (
        <DayNum
          key={date}
          day={day}
          date={date}
          color={color}
          hasDot={hasDot}
          disabled={disabled}
          status={selectedDate === date ? "clicked" : "default"}
          onClick={() => onClick?.(date)}
        />
      ))}
    </div>
  );
};
