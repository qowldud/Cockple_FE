// components/Btn_Static/Text/RD500_M.tsx
import React, { useState } from "react";
import Refresh from "../../../../assets/icons/refresh.svg";
import RefreshGY400 from "../../../../assets/icons/refresh-gy-400.svg";
import RefreshWhite from "../../../../assets/icons/refresh-white.svg";

type BtnStatus = "disabled" | "default" | "pressing" | "clicked";

interface GY800MProps {
  initialStatus?: BtnStatus;
  label?: string;
}

const GY800_M = ({ initialStatus = "default", label = "Btn" }: GY800MProps) => {
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
    disabled: "bg-white border border-gy-400 text-gy-400 cursor-not-allowed",
    default: "bg-white border border-gy-800 text-black",
    pressing: "bg-gy-800 text-white",
    clicked: "bg-white border border-gy-800 text-black",
  };

  const getIcon = () => {
    switch (status) {
      case "disabled":
        return RefreshGY400;
      case "pressing":
        return RefreshWhite;
      default:
        return Refresh;
    }
  };

  return (
    <button
      className={`
        flex w-[15.875rem] h-[3.25rem] px-4 py-3 justify-center items-center gap-2 flex-shrink-0 border-round shadow-ds100 body-md-500
         ${statusStyle[status]} ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      disabled={status === "disabled"}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <img
        src={getIcon()}
        alt="삭제"
        className="w-6 h-6 flex-shrink-0 aspect-square"
      />
      <span className="header-h4">{label}</span>
    </button>
  );
};

export default GY800_M;
