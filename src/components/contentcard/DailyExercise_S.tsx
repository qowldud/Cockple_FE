import Clock from "../../assets/icons/clock.svg?react";
import Vector from "../../assets/icons/Vector.svg?react";
import Kitty from "../../assets/images/kitty.png";
import RightAngle from "../../assets/icons/RightAngle.svg?react";

export const DailyExercise_S = () => {
  return (
    <div className="p-[8px] w-[343px] h-[80px] rounded-[16px] bg-white shadow flex items-center gap-3">
      {/* 몸짱키티 */}
      <div className="relative">
        <img
          src={Kitty}
          alt="고양이"
          className="w-[64px] h-[64px] rounded-[8px] object-cover"
        />
      </div>

      {/* 글/정보 영역 */}
      <div className="w-[227px] h-[64px] flex flex-col gap-[8px] items-start s400 text-black">
        <p className="r500">민턴콕콕</p>

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
