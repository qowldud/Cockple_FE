import { useState } from "react";
import Profile_Image from "../../assets/images/Profile_Image.png";
import Num_Noti_99 from "../../assets/icons/Num_Noti_99.svg?react";

export const PersonalChat = () => {
  const [pressing, setPressing] = useState(false);

  return (
    <div
      className={`w-[343px] h-[80px] p-[8px] gap-[12px] rounded-[12px] flex items-center transition-colors ${
        pressing ? "bg-[#F4F5F6]" : "bg-[#FAFAFA]"
      }`}
      onMouseDown={() => setPressing(true)}
      onMouseUp={() => setPressing(false)}
      onMouseLeave={() => setPressing(false)}
      onTouchStart={() => setPressing(true)}
      onTouchEnd={() => setPressing(false)}
    >
      <img src={Profile_Image} width={64} height={64} className="rounded-[8px]" />

      <div className="flex flex-col justify-between w-[191px] h-[64px]">
        <div className="flex items-center gap-[4px]">
          <p className="body-md-500">김소피아</p>
        </div>
        
        <span className="body-rg-400 line-clamp-2 block text-left leading-tight">
          오늘 운동 오실래요??오늘 운동 오실래요??오늘 운동 오실래요??오늘 운동 오실래요??
        </span>

      </div>

      <div className="flex flex-col justify-between w-[48px] h-[64px] items-center">
        <p className="body-sm-400 text-[#9195A1]">10:00 am</p>
        <div className="flex items-center justify-center w-full">
          <Num_Noti_99 className="w-[31px] h-[20px]" />
        </div>
      </div>
    </div>
  );
};
