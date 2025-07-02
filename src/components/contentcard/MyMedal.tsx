import RightAngle from "../../assets/icons/RightAngle.svg?react";
import { useState } from "react";

export const MyMedal = () => {
  const [isPressing, setIsPressing] = useState(false);

  return (
    <div
      onMouseDown={() => setIsPressing(true)}
      onMouseUp={() => setIsPressing(false)}
      onMouseLeave={() => setIsPressing(false)}
      onTouchStart={() => setIsPressing(true)}
      onTouchEnd={() => setIsPressing(false)}
      className={`p-[8px] w-[343px] h-[76px] rounded-[12px] 
        ${isPressing ? "bg-[#F4F5F6]" : "bg-white"} 
        flex items-center gap-3 transition-colors duration-150`}
    >
      {/* 이미지? */}
      <div className="relative">
       <div className="w-[60px] h-[60px] bg-[#E4E7EA]"/>
      </div>

      {/* 글/정보 영역 */}
      <div className="w-[223px] h-[52px] flex flex-col items-start">
      <div className="w-[223px] h-[52px] flex flex-col gap-[4px]">
        <div className="flex items-center gap-1 header-h4">
          <span className="truncate overflow-hidden whitespace-nowrap">
            라이더 찐 배린이대회 / 여복 D조 ... 이거 확인
          </span>
        </div>
        <div className="flex items-center gap-1 body-rg-500">
          <span>2000. 01. 01</span>
        </div>
      </div>
    </div>


      <RightAngle className="w-[20px] h-[20px]" />
    </div>
  );
};
