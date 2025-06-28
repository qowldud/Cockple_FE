import Heart from "../../assets/icons/Heart.svg?react";
import Female from "../../assets/icons/female.svg?react";
import Male from "../../assets/icons/male.svg?react";
import Vector from "../../assets/icons/Vector.svg?react";
import Kitty from "../../assets/images/kitty.png";

export const Group_M = () => {
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
      <div className="w-[227px] h-[88px] flex flex-col gap-[8px] items-start text-sm text-black">
        <p className="r500">민턴클로버</p>

        <div className="s400 flex flex-col gap-[6px]">
          <div className="flex items-center gap-1">
            <Vector className="w-[14px] h-[14px]" />
            <span>경기도/성남시</span>
          </div>

          <div className="flex gap-[10px]">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <Female className="w-[14px] h-[14px]" />
              <span>전국 초심~준자강</span>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <Male className="w-[14px] h-[14px]" />
              <span>전국 준자강 이상</span>
            </div>
          </div>

          <p className="flex">05.01 오전 운동 • 운동 5개 진행 예정</p>
        </div>        
      </div>
    </div>
  );
};
