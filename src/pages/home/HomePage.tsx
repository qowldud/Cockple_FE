import HorizontalCalendar from "../../components/common/Date_Time/HorizontotalCalender";
import DayNum from "../../components/common/Date_Time/DayNum";

export const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center header-h4">
        Home Page 입니다.
      </div>
      <div className="bg-red-50">
        <HorizontalCalendar>
          <div className="scroll-container">
            <DayNum />
          </div>
        </HorizontalCalendar>
      </div>
    </>
  );
};
