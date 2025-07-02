import React, { useState } from "react";

type BtnStatus = "default" | "pressing" | "clicked" | "disabled";

interface GR600XSProps {
  initialStatus?: BtnStatus;
  label?: string;
}

const GR600_XS = ({
  initialStatus = "default",
  label = "Btn",
}: GR600XSProps) => {
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
        flex justify-center items-center w-[10.3125rem] px-4 py-2 border-hard gap-2
        ${statusStyle()}
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}
      `}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span className="body-sm-500 text-white">{label}</span>
    </button>
  );
};

export default GR600_XS;
