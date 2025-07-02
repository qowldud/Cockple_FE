import { useState } from "react";

import Heart_GY from "../../assets/icons/heart_GY.svg?react";
import Calendar from "../../assets/icons/calendar.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import Female from "../../assets/icons/female.svg?react";
import Male from "../../assets/icons/male.svg?react";
import People from "../../assets/icons/people.svg?react";
import Vector from "../../assets/icons/Vector.svg?react";
import RightAngle from "../../assets/icons/RightAngle.svg?react";

interface ContentCardLProps {
  isUserJoined: boolean;
  isGuestAllowedByOwner: boolean;
}

export const ContentCardL = ({
  isUserJoined,
  isGuestAllowedByOwner,
}: ContentCardLProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isStartPressing, setIsStartPressing] = useState(false);
  const [isGuestPressing, setIsGuestPressing] = useState(false);

  const showGuestButton = isUserJoined && isGuestAllowedByOwner;
  const showOnlyStartButton = !isUserJoined && isGuestAllowedByOwner;

  const containerPressed = isStartPressing || isGuestPressing;

  return (
    <div
      className={`w-[343px] h-[214px] rounded-[16px] p-3 space-y-3 transition-colors duration-150
        ${containerPressed ? "bg-[#F4F5F6]" : "bg-white"} shadow`}
    >
      {/* 상단 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="body-md-500">하이콕콕</p>
          <Heart_GY className="w-[26px] h-[26px]" />
        </div>
        <RightAngle className="w-4 h-4" />
      </div>

      {/* 정보 */}
      <div className="flex flex-col gap-[6px] text-black body-sm-400">
        <div className="flex items-center gap-1">
          <Calendar className="w-[14px] h-[14px]" />
          <span>2000.05.01 (월)</span>
        </div>
        <div className="flex items-center gap-1">
          <Vector className="w-[14px] h-[14px]" />
          <span>산성 실내 배드민턴장</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-[14px] h-[14px]" />
          <span>08:00 am ~ 10:00 am</span>
        </div>
        <div className="w-[319px] flex gap-[13px]">
          <div className="flex items-center gap-1">
            <Female className="w-[14px] h-[14px]" />
            <span>전국 초심 ~ 준자강</span>
          </div>
          <div className="flex items-center gap-1">
            <Male className="w-[14px] h-[14px]" />
            <span>전국 준자강 이상</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <People className="w-[14px] h-[14px]" />
          <span>0 / 0</span>
        </div>
      </div>

      {/* 버튼 */}
      <div className={`flex ${showGuestButton ? "gap-[13px]" : ""} w-[319px]`}>
        <button
          onClick={() => setIsStarted(prev => !prev)}
          onMouseDown={() => setIsStartPressing(true)}
          onMouseUp={() => setIsStartPressing(false)}
          onMouseLeave={() => setIsStartPressing(false)}
          onTouchStart={() => setIsStartPressing(true)}
          onTouchEnd={() => setIsStartPressing(false)}
          className={`h-[36px] rounded body-rg-500 
            bg-[#F4F5F6] transition-colors duration-150
            ${showGuestButton ? "w-[153px]" : "w-[319px]"}
            ${isStarted ? "text-red-500" : "text-[#0B9A4E]"}`}
        >
          {isStarted ? "운동 취소하기" : "운동 시작하기"}
        </button>

        {showGuestButton && (
          <button
            onMouseDown={() => setIsGuestPressing(true)}
            onMouseUp={() => setIsGuestPressing(false)}
            onMouseLeave={() => setIsGuestPressing(false)}
            onTouchStart={() => setIsGuestPressing(true)}
            onTouchEnd={() => setIsGuestPressing(false)}
            className="w-[153px] h-[36px] rounded bg-[#F4F5F6] body-rg-500 text-black transition-colors duration-150"
          >
            게스트 초대하기
          </button>
        )}
      </div>
    </div>
  );
};
