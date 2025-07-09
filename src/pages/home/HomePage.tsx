import { MainHeader } from "../../components/common/system/header/MainHeader";
import { WorkoutDayEntry } from "../../components/home/WorkoutDayEntry";

export const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <MainHeader background="clear" />
      <div
        className="w-full h-94 flex flex-col"
        style={{
          background: "var(--color-gradient-home-header)",
          width: "calc(100% + 2rem)",
        }}
      >
        <div className="flex flex-col gap-4 mt-19 px-4">
          {/* 문구 */}
          <div className="flex flex-col items-start pb-5">
            <div className="body-lg-700">
              오늘의 운동은<span className="text-gr-600 mx-1">2</span>개!
            </div>
            <div className="body-md-700">화이팅 넘치는 하루가 될 거에요!</div>
          </div>

          {/* 달력 */}
          <div className="w-full h-17"></div>

          {/* 해당 날짜 운동 */}
          <WorkoutDayEntry />
        </div>
      </div>
    </div>
  );
};
