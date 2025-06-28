import Heart from "../../assets/icons/Heart.svg?react";
import Calendar from "../../assets/icons/calendar.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import Vector from "../../assets/icons/Vector.svg?react";
import Kitty from "../../assets/images/kitty.png";

export const Exercise_M = () => {
  return (
    <div className="p-[8px] w-[343px] h-[104px] rounded-[16px] bg-white shadow flex items-center gap-3">
      {/* 몸짱키티 */}
      <div className="relative">
        <img
          src={Kitty}
          alt="고양이"
          className="w-[88px] h-[88px] rounded-[8px] object-cover"
        />
        <Heart className="w-[26px] h-[26px] absolute bottom-1 right-1" />
      </div>

      {/* 글/정보 영역 */}
      <div className="w-[227px] h-[88px] flex flex-col gap-[8px] items-start s400 text-black">
        <p className="r500">하이콕콕</p>

        <div className="w-[227px] h-[60px] flex flex-col gap-[6px]">
            <div className="flex items-center gap-1">
                <Calendar className="w-[14px] h-[14px]" />
                <span>2000.05.01 (월)</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock className="w-[14px] h-[14px]" />
                <span>08:00 am ~ 10:00 am</span>
            </div>
            <div className="flex items-center gap-1">
                <Vector className="w-[14px] h-[14px]" />
                <span>산성 실내 배드민턴장</span>
            </div>
        </div>


      </div>
    </div>
  );
};
