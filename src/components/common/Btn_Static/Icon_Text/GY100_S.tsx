// components/Btn_Static/Text/RD500_M.tsx
import React, { useState } from "react";
import Pen from "../../../../assets/icons/pen.svg";
import PenGY400 from "../../../../assets/icons/pen-gy-400.svg";

type BtnStatus = "disabled" | "default" | "pressing" | "clicked";

interface GY100SProps {
  initialStatus?: BtnStatus;
  label?: string;
}

const GY100_S = ({ initialStatus = "default", label = "Btn" }: GY100SProps) => {
  const [status, setStatus] = useState<BtnStatus>(initialStatus);

  const isDisabled = status === "disabled";

  const handleMouseDown = () => {
    if (!isDisabled) setStatus("pressing");
  };

  const handleMouseUp = () => {
    if (!isDisabled && status === "pressing") {
      setStatus("clicked");
      setTimeout(() => {
        setStatus("default");
      }, 200);
    }
  };

  const statusStyle = {
    disabled: "bg-gy-100 text-gy-400 cursor-not-allowed",
    default: "bg-gy-100",
    pressing: "bg-gy-200",
    clicked: "bg-gy-100",
  };

  const getIcon = () => {
    switch (status) {
      case "disabled":
        return PenGY400;
      default:
        return Pen;
    }
  };

  return (
    <button
      className={`
        flex w-[10.3125rem] px-4 py-2 justify-center items-center gap-2 border-hard 
        ${statusStyle[status]} 
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      disabled={status === "disabled"}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <img
        src={getIcon()}
        alt="삭제"
        className="w-5 h-5 flex-shrink-0 aspect-square"
      />
      <span className="body-rg-500">{label}</span>
    </button>
  );
};

export default GY100_S;
