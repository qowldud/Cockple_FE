import { useState } from "react";
import CheckCircled from "../../assets/icons/check_circled.svg?react";
import Check_circled_filled from "../../assets/icons/check_circled_filled.svg?react";

export const Location = () => {
  const [isPressing, setIsPressing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handlePressStart = () => setIsPressing(true);
  const handlePressEnd = () => setIsPressing(false);
  const handleClick = () => setIsClicked(prev => !prev);

  // 상태별 클래스 조합
  const baseClasses = "w-[343px] h-[72px] rounded-[12px] flex items-center justify-between px-4 py-3 cursor-pointer transition-colors duration-150 border";

  let bgClass = "bg-white";
  let borderClass = "border-[#E4E7EA]";
  let textColor = "text-black";
  let icon = <CheckCircled className="w-[24px] h-[24px]" />;

  if (isPressing && isClicked) {
    // 눌리면서 클릭된 상태 (CL_pressing)
    bgClass = "bg-[#F4F5F6]";
    textColor = "text-black";
    icon = <Check_circled_filled className="w-[24px] h-[24px]" />;
  } else if (isPressing) {
    // 눌림 상태 (pressing)
    bgClass = "bg-[#F4F5F6]";
    borderClass = "border-[#E4E7EA]";
    textColor = "text-black";
    icon = <CheckCircled className="w-[24px] h-[24px]" />;
  } else if (isClicked) {
    // 클릭된 상태 (clicked)
    bgClass = "bg-white";
    textColor = "text-black";
    icon = <Check_circled_filled className="w-[24px] h-[24px]" />;
  }


  return (
    <div
      className={`${baseClasses} ${bgClass} ${borderClass}`}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onClick={handleClick}
    >
      <div className={`w-[271px] h-[48px] flex flex-col justify-center items-start ${textColor}`}>
        <p className="body-md-500">Main Address</p>
        <p className="body-rg-500">Sub Address</p>
      </div>
      {icon}
    </div>
  );
};
