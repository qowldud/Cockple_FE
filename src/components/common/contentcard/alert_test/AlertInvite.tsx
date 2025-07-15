import React from "react";
import RD500_XS from "../../Btn_Static/Text/RD500_XS";
import GR600_XS from "../../Btn_Static/Text/GR600_XS";

interface AlertInviteProps {
  groupName: string;
  alertText: string;
  imageSrc: string;
  onAccept?: () => void;
  onReject?: () => void;
}

const Alert_Invite = ({
  groupName,
  alertText,
  imageSrc,
  onAccept,
  onReject,
}: AlertInviteProps) => {
  return (
    <div className="flex w-[21.4375rem] flex-col items-center justify-center gap-3 border-soft bg-white p-2">
      {/* 상단 정보 영역 */}
      <div className="flex w-full items-center gap-3">
        <img
          src={imageSrc}
          alt="Group"
          className="h-10 w-10 border-hard object-cover"
        />
        <div className="flex flex-col gap-3">
          <span className="body-rg-500 text-black">{groupName}</span>
          <span className="line-clamp-2 w-full self-stretch overflow-hidden body-rg-500 text-black">
            {alertText}
          </span>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="flex w-full gap-3">
        {/* <button
          onClick={onReject}
          className="flex-1 rounded-[0.75rem] border border-[#FF3B30] py-2 text-base font-semibold text-[#FF3B30]"
        >
          거절
        </button> */}
        <RD500_XS label="거절" onClick={onReject} />
        {/* <button
          onClick={onAccept}
          className="flex-1 rounded-[0.75rem] bg-[#24A148] py-2 text-base font-semibold text-white"
        >
          승인
        </button> */}
        <GR600_XS label="승인" onClick={onAccept} />
      </div>
    </div>
  );
};

export default Alert_Invite;
