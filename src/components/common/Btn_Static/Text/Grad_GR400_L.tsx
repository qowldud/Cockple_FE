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
    bgClass = "bg-gr-600 cursor-pointer";
  } else if (status === "pressing") {
    bgClass = "bg-gr-700";
  } else if (status === "clicked") {
    bgClass = "bg-gr-600";
  } else if (status === "disabled") {
    bgClass = "bg-gy-400 cursor-not-allowed";
  }

  return (
    <button
      className={`flex
        justify-center
        items-center
        w-[21.4375rem]
        px-4 py-3
        rounded-[1rem]
        text-white
        header-h4
        shadow-[0px_0px_4px_rgba(18,18,18,0.12)]
        transition duration-100
        ${bgClass}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={isDisabled}
    >
      Btn
    </button>
  );
};

export default Grad_GR400_L;
