// //피그마에서 ContentCardL 가로 383 작업할때 375px
// 간격 이상해요 어디를 보고 만들어야 할지....;;
import Heart from "../assets/icons/Heart.svg?react";
import Calendar from "../assets/icons/calendar.svg?react";
import Clock from "../assets/icons/clock.svg?react";
import Female from "../assets/icons/female.svg?react";
import Male from "../assets/icons/male.svg?react";
import People from "../assets/icons/people.svg?react";
import Vector from "../assets/icons/Vector.svg?react";
import RightAngle from "../assets/icons/RightAngle.svg?react";

export const ContentCardL = () => {
  return (
    <div className="m-5 w-[343px] h-[250px] rounded-[16px] bg-white shadow p-4 space-y-3">
        {/* 상단 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-black text-base">하이콕콕</p>
          <Heart className="w-5 h-5" />
        </div>
        <RightAngle className="w-4 h-4" />
      </div>

        {/* 안에 정보 날짜, 위치, 시간, 성별, 인원수 */}
      <div className="space-y-1 text-sm text-black">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>2000.05.01 (월)</span>
        </div>
        <div className="flex items-center gap-2">
          <Vector className="w-4 h-4" />
          <span>산성 실내 배드민턴장</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>08:00 am ~ 10:00 am</span>
        </div>
        <div className="w-[319px] flex gap-[28px]">
            <div className="flex items-center gap-2">
            <Female className="w-4 h-4" />
            <span>전국 초심 ~ 준자강</span>
            </div>
            <div className="flex items-center gap-2">
            <Male className="w-4 h-4" />
            <span>전국 준자강 이상</span>
            </div>
        </div>
       
        <div className="flex items-center gap-2">
          <People className="w-4 h-4" />
          <span>0 / 0</span>
        </div>
      </div>

      {/* 버튼 */}
      <div className="w-[319px] flex gap-[13px]">
        <button className="w-[153px] h-[36px] rounded bg-[#F4F5F6] text-sm  text-red-500">
            운동 취소하기
        </button>
        {/* 운동 신청하기 */}
        {/* <button className="w-[153px] h-[36px] rounded bg-[#F4F5F6] text-sm  text-[#0B9A4E]">
            운동 취소하기
        </button> */}

        <button className="w-[153px] h-[36px] rounded bg-[#F4F5F6] text-sm  text-black">
            게스트 초대하기
        </button>
        </div>

    </div>
  );
};
