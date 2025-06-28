import Kitty from "../../assets/images/kitty.png";
import Vector from "../../assets/icons/Vector.svg?react";

export const Exercise_S = () => {
  return (
    <div className="p-[8px] w-[128px] h-[164px] rounded-[16px] bg-white flex flex-col items-center gap-3">
      {/* 몸짱키티 */}
      <div>
        <img
          src={Kitty} 
          alt="고양이"
          className="w-[112px] h-[84px] rounded-[8px] object-cover"
        />
      </div>
      {/* 글/정보 영역 */}
      <div className="flex flex-col gap-[4px] items-start s400 text-black">
        <p className="s500">민턴클로버</p>
        <p className="s500">04.04 (월) 04:00 am</p>
        <div className="flex items-center gap-1 w-full">
          <Vector className="w-[14px] h-[14px]" />
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-xs w-[96px]">
            산성 실내 배드민턴장
          </p>
        </div>      
      </div>
    </div>
  );
};
