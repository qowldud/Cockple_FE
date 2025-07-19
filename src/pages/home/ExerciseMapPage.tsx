import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import ArrowDown from "@/assets/icons/arrow_down.svg";
import ArrowUp from "@/assets/icons/arrow_up.svg";
import { ExerciseMapCalendar } from "../../components/home/ExerciseMapCalendar";

export const ExerciseMapPage = () => {
  const [calendar, setCalendar] = useState(false);
  const ArrowIcon = calendar ? ArrowUp : ArrowDown;
  return (
    <div className="flex flex-col h-screen -mx-4 -mb-8">
      <PageHeader title="지도로 운동 찾기" className="px-4" />
      <div className="relative w-full flex-1 bg-gy-400">
        <div className="absolute flex items-center gap-2 top-3 left-1/2 -translate-x-1/2 w-25 h-7 py-1 pl-2 pr-1.5 border-hard bg-white">
          <span className="body-rg-500">05.05 (월)</span>
          <img
            src={ArrowIcon}
            alt="arrow"
            className="size-4"
            onClick={() => setCalendar(true)}
          />
        </div>
      </div>
      {calendar && <ExerciseMapCalendar onClose={() => setCalendar(false)} />}
    </div>
  );
};
