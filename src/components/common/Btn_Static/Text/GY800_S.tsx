import React, { useState } from "react";

type BtnStatus = "default" | "pressing" | "clicked" | "disabled";

interface GY800MProps {
  initialStatus?: BtnStatus;
  label?: string;
}

const GY800_S = ({ initialStatus = "default", label = "Btn" }: GY800MProps) => {
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

  return (
    <button
      className={`
        flex justify-center items-center w-[10.3125rem] px-4 py-2 border-hard gap-2
        ${statusStyle[status]}
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}
      `}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span className="body-rg-500">{label}</span>
    </button>
  );
};

export default GY800_S;
