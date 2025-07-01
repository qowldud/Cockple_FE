import React, { useState } from "react";

type BtnStatus = "default" | "pressing" | "clicked" | "disabled";

interface GradGR400LProps {
  initialStatus?: BtnStatus;
}

const Grad_GR400_L = ({ initialStatus = "default" }: GradGR400LProps) => {
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
    bgClass = "bg-gr-600";
  } else if (status === "pressing") {
    bgClass = "bg-gr-700";
  } else if (status === "clicked") {
    bgClass = "bg-gr-600";
  } else if (status === "disabled") {
    bgClass = "bg-gy-400";
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
        justify-center
        items-center
        w-[21.4375rem]
        px-[1rem] py-[0.75rem]
        border-round
        shadow-ds100
        transition duration-100
        ${bgClass}
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        disabled={isDisabled}
      >
        <span className="header-h4 text-white">Btn</span>
      </button>
    </div>
  );
};

export default Grad_GR400_L;
