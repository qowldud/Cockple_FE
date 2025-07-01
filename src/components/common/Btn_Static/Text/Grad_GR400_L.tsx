import React, { useState } from "react";

type BtnStatus = "default" | "pressing" | "clicked" | "disabled";

interface GradGR400LProps {
  initialStatus?: BtnStatus;
  label?: string;
}

const Grad_GR400_L = ({
  initialStatus = "default",
  label = "Btn",
}: GradGR400LProps) => {
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

  const baseStyle =
    "flex justify-center items-center w-[21.4375rem] px-4 py-3 border-round shadow-ds100 transition duration-100";

  // 상태별 클래스 정의
  const statusStyle = () => {
    switch (status) {
      case "disabled":
        return "bg-gy-400";
      case "pressing":
        return "bg-gr-700";
      case "clicked":
      case "default":
      default:
        return "bg-gr-600";
    }
  };

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
        className={`${baseStyle}
        ${statusStyle()}
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        disabled={isDisabled}
      >
        <span className="header-h4 text-white">{label}</span>
      </button>
    </div>
  );
};

export default Grad_GR400_L;
