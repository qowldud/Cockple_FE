import React, { useState } from "react";

type BtnStatus = "default" | "pressing" | "clicked" | "disabled";

interface GR400LProps {
  initialStatus?: BtnStatus;
  label?: string;
}

const GR400_L = ({ initialStatus = "default", label = "Btn" }: GR400LProps) => {
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
    <button
      className={`
        flex justify-center items-center w-[21.4375rem] px-4 py-3 border-round shadow-ds100
        ${statusStyle()}
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}
      `}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span className="header-h4 text-white">{label}</span>
    </button>
  );
};

export default GR400_L;
