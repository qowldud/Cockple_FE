import { useState } from "react";
import Arrow_right_GY from "../../assets/icons/arrow_right_GY.svg?react";
import Arrow_right from "../../assets/icons/arrow_right.svg?react";

//disabled prop 추가: disabled prop을 true로 넘겨주면 비활성화 상태
{/* <MyPage disabled={true} /> 
<MyPage disabled={false} />  */}
interface MyPageProps {
  disabled?: boolean; 
}

export const MyPage = ({ disabled = false }: MyPageProps) => {
  const [isPressing, setIsPressing] = useState(false);

  const handlePressStart = () => {
    if (!disabled) { 
      setIsPressing(true);
    }
  };
  const handlePressEnd = () => {
    setIsPressing(false);
  };

  const bgColor = disabled ? "bg-white" : (isPressing ? "bg-[#F4F5F6]" : "bg-white");
  const textColor = disabled ? "text-[#C0C4CD]" : "text-black"; 
  const numberColor = disabled ? "text-[#C0C4CD]" : "text-[#0A7456]";
  const cursorStyle = disabled ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <div className="flex flex-col gap-[16px]">
      <div
        className={`w-[343px] h-[48px] px-[12px] py-[16px] shadow-ds100 rounded-[16px] flex items-center justify-between ${bgColor} ${cursorStyle} transition-colors duration-150`}
        onMouseDown={!disabled ? handlePressStart : undefined}
        onMouseUp={!disabled ? handlePressEnd : undefined}
        onMouseLeave={!disabled ? handlePressEnd : undefined}
        onTouchStart={!disabled ? handlePressStart : undefined}
        onTouchEnd={!disabled ? handlePressEnd : undefined}
      >
        <div className="flex items-center gap-[8px]">
          <p className={`header-h5 ${textColor}`}>Text</p>
          <p className={`header-h5 ${numberColor}`}>0</p>
        </div>
        <Arrow_right className="w-[16px] h-[16px]" />
      </div>

      {/* 내 메달 */}
  
      <div className="w-[343px] h-[216px] px-[16px] py-[12px] shadow-ds100 rounded-[16px] flex flex-col justify-between gap-[16px]">
        <div className="flex items-center justify-between w-full">
          <p className="header-h5">내 메달</p>
          <Arrow_right className="w-[16px] h-[16px]" />
        </div>

      <div className="w-[216px] h-[28px] shadow-ds200-gr rounded-[8px] mx-auto flex items-center justify-center">
        <p className="body-rg-500 text-center">지금까지 0개의 메달을 모았어요</p>
      </div>


        <div className="flex flex-row justify-center gap-[20px]">
          {/* 금메달 */}
          <div className="flex flex-col items-center gap-[8px]">
            <div className="w-[60px] h-[60px] bg-[#E4E7EA]" />

            <div className="flex flex-row items-center justify-center gap-[4px]">
              <p className="body-rg-500 text-center">금메달</p>
              <p className="body-rg-500 text-center">0</p>
            </div>
          </div>

          {/* 은메달 */}
          <div className="flex flex-col items-center gap-[8px]">
            <div className="w-[60px] h-[60px] bg-[#E4E7EA]" />

            <div className="flex flex-row items-center justify-center gap-[4px]">
              <p className="body-rg-500 text-center">은메달</p>
              <p className="body-rg-500 text-center">0</p>
            </div>
          </div>

          {/* 동메달 */}
          <div className="flex flex-col items-center gap-[8px]">
            <div className="w-[60px] h-[60px] bg-[#E4E7EA]" />

              <div className="flex flex-row items-center justify-center gap-[4px]">
                <p className="body-rg-500 text-center">동메달</p>
                <p className="body-rg-500 text-center">0</p>
            </div>
          </div>
      </div>
    </div>
    </div>

  );
};
