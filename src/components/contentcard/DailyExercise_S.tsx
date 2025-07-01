import { useState } from "react";
import Clock from "../../assets/icons/clock.svg?react";
import Vector from "../../assets/icons/Vector.svg?react";
import Kitty from "../../assets/images/kitty.png";
import RightAngle from "../../assets/icons/RightAngle.svg?react";

export const DailyExercise_S = () => {
  //pressing
  const [isPressing, setIsPressing] = useState(false);
  return (
    <div
      onMouseDown={() => setIsPressing(true)}
      onMouseUp={() => setIsPressing(false)}
      onMouseLeave={() => setIsPressing(false)}
      onTouchStart={() => setIsPressing(true)}
      onTouchEnd={() => setIsPressing(false)}
      className={`p-[8px] w-[343px] h-[80px] rounded-[12px] 
        ${isPressing ? "bg-[#F4F5F6]" : "bg-white"} 
        shadow-ds50 flex items-center gap-3 transition-colors duration-150`}
    >      {/* 몸짱키티 */}
      <div className="relative">
        <img
          src={Kitty}
          alt="고양이"
          className="w-[64px] h-[64px] rounded-[8px] object-cover"
        />
      </div>

      {/* 글/정보 영역 */}
      <div className="w-[227px] h-[64px] flex flex-col gap-[8px] items-start body-sm-400 text-black">
        <p className="body-rg-500">민턴콕콕</p>

        <div className="w-[227px] h-[60px] flex flex-col gap-[4px]">
            <div className="flex items-center gap-1">
                <Vector className="w-[14px] h-[14px]" />
                <span>산성 실내 배드민턴장</span>
            </div>
              <div className="flex items-center gap-1">
                <Clock className="w-[14px] h-[14px]" />
                <span>08:00 am ~ 10:00 am</span>
            </div>
        </div>
      </div>
      <RightAngle className="w-[16px] h-[16px]" />

    </div>
  );
};
