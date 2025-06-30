import { useState } from "react";
import Kitty from "../../assets/images/kitty.png";

//disabled prop으로 전달
export const Group_S = ({ disabled = false }) => {
  //pressing
  const [isPressing, setIsPressing] = useState(false);

  return (
    <div
      onMouseDown={() => setIsPressing(true)}
      onMouseUp={() => setIsPressing(false)}
      onMouseLeave={() => setIsPressing(false)}
      onTouchStart={() => setIsPressing(true)}
      onTouchEnd={() => setIsPressing(false)}
      className={`p-[8px] w-[96px] h-[144px] rounded-[12px] 
        ${isPressing ? "bg-[#F4F5F6]" : "bg-white"} 
        flex flex-col items-center gap-3 transition-colors duration-150`}
    >
      {/* 몸짱키티 */}
      <div>
        <img
          src={Kitty}
          alt="고양이"
          className="w-[80px] h-[80px] rounded-[8px] object-cover"
        />
      </div>

      {/* 글/정보 영역 */}
      <div className="flex flex-col gap-[4px] items-start s400 text-black">
        {disabled ? (
          <>
            <p className="body-rg-500 text-[#C0C4CD]">민턴클로버</p>
            <p className="body-sm-300 text-[#C0C4CD]">경기도 / 성남시</p>
          </>
        ) : (
          <>
            <p className="body-rg-500">민턴클로버</p>
            <p className="body-sm-300">경기도 / 성남시</p>
          </>
        )}
      </div>
    </div>
  );
};
