import React, { useState } from "react";

type BtnStatus = "default" | "pressing" | "clicked" | "disabled";

interface RD500MProps {
  initialStatus?: BtnStatus;
  label?: string;
}

const RD500_S = ({ initialStatus = "default", label = "Btn" }: RD500MProps) => {
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
    "flex justify-center items-center w-[10.3125rem] px-4 py-2 border-hard gap-2";

  const statusStyle = {
    disabled: "bg-white border border-gy-400 text-gy-400 cursor-not-allowed",
    default: "bg-white border border-rd-500 text-rd-500",
    pressing: "bg-rd-500 text-white",
    clicked: "bg-white border border-rd-500 text-rd-500",
  };

  return (
    <button
      className={`
        ${baseStyle}
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

export default RD500_S;
