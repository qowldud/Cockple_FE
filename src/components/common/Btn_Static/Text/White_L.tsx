import React, { useState } from "react";

type BtnStatus = "default" | "pressing" | "clicked" | "disabled";

interface White_L_Props {
  initialStatus?: BtnStatus;
}

const White_L = ({ initialStatus = "default" }: White_L_Props) => {
  const [status, setStatus] = useState<BtnStatus>(initialStatus);
  const isDisabled = status === "disabled";

  const handleMouseDown = () => {
    if (!isDisabled) setStatus("pressing");
  };

  const handleMouseUp = () => {
    if (!isDisabled && status === "pressing") {
      setStatus("clicked");
      console.log("clicked");
    }
  };

  // 상태별 클래스 정의
  let bgClass = "";
  if (status === "default") {
    bgClass = "bg-white";
  } else if (status === "pressing") {
    bgClass = "bg-gy-100";
  } else if (status === "clicked") {
    bgClass = "bg-white";
  } else if (status === "disabled") {
    bgClass = "bg-white text-gy-400";
  }

  return (
    <div
      className={`
        w-[23.4375rem] h-[6rem]
        pt-2 pr-4 pb-9 pl-4
        gap-[0.625rem]
        bg-gradient-to-b
        from-[rgba(252,252,255,0)] via-[rgba(252,252,255,0.8)] to-[#FCFCFF]
      `}
    >
      <button
        className={`flex
        items-center
        w-[21.4375rem]
        px-4 py-3
        border-round
        transition duration-100
        ${bgClass}
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        disabled={isDisabled}
      >
        <span className="header-h4">Btn</span>
      </button>
    </div>
  );
};

export default White_L;
