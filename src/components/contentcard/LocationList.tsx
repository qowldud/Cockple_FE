import { useState } from "react";
import ArrowRight from "../../assets/icons/Arrow_right.svg?react";

export const LocationList = () => {
  const [isPressing, setIsPressing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handlePressStart = () => {
    setIsPressing(true);
  };

  const handlePressEnd = () => {
    setIsPressing(false);
  };

  const handleClick = () => {
    setIsClicked(prev => !prev); 
  };

  const baseClasses = "w-[343px] h-[108px] p-3 rounded-[12px] flex flex-col gap-[8px] cursor-pointer transition-colors duration-150";
  const borderClass = (isPressing || isClicked) ? "border border-[#1ABB65]" : "border border-transparent";
  const bgClass = isPressing ? "bg-[#F4F5F6]" : "bg-white";

  return (
    <div
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onClick={handleClick}   
      className={`${baseClasses} ${borderClass} ${bgClass}`}
    >
      <div className="flex flex-col items-start">
        <p className="body-md-500">Main Address</p>
        <p className="body-rg-500">Sub Address</p>
      </div>

      <div className="flex justify-end w-full">
        <div className="w-[107px] h-[28px] flex items-center gap-[10px]">
          <p className="body-rg-400 text-black">지도에서 보기</p>
          <ArrowRight className="w-[16px] h-[16px]" />
        </div>
      </div>
    </div>
  );
};
