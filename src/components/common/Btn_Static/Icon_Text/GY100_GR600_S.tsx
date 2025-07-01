// components/Btn_Static/Text/RD500_M.tsx
import React, { useState } from "react";
import PenGR600 from "../../../../assets/icons/pen-gr-600.svg";
import PenGY400 from "../../../../assets/icons/pen-gy-400.svg";

type BtnStatus = "disabled" | "default" | "pressing" | "clicked";

interface GY100GR600SProps {
  initialStatus?: BtnStatus;
  label?: string;
}

const GY100_GR600_S = ({
  initialStatus = "default",
  label = "Btn",
}: GY100GR600SProps) => {
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

  const baseStyle =
    "flex w-[10.3125rem] px-4 py-2 justify-center items-center gap-2 border-hard";

  const statusStyle = {
    disabled: "bg-gy-100 text-gy-400 cursor-not-allowed",
    default: "bg-gy-100 text-gr-600",
    pressing: "bg-gy-200 text-gr-600",
    clicked: "bg-gy-100 text-gr-600",
  };

  const getIcon = () => {
    switch (status) {
      case "disabled":
        return PenGY400;
      default:
        return PenGR600;
    }
  };

  return (
    <button
      className={`${baseStyle} ${statusStyle[status]} ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
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

export default GY100_GR600_S;
