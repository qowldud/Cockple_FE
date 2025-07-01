// components/Btn_Static/Text/RD500_M.tsx
import React, { useState } from "react";
import DeleteGY400 from "../../../../assets/icons/delete-gy-400.svg";
import DeleteRD500 from "../../../../assets/icons/delete-rd-500.svg";
import DeleteWhite from "../../../../assets/icons/delete-white.svg";

type BtnStatus = "disabled" | "default" | "pressing" | "clicked";

interface RD500MProps {
  initialStatus?: BtnStatus;
  label?: string;
}

const RD500_M = ({ initialStatus = "default", label = "Btn" }: RD500MProps) => {
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
    "flex w-[15.875rem] h-[3.25rem] px-4 py-3 justify-center items-center gap-2 flex-shrink-0 border-round shadow-ds100 body-md-500";

  const statusStyle = {
    disabled: "bg-white border border-gy-400 text-gy-400 cursor-not-allowed",
    default: "bg-white border border-rd-500 text-rd-500",
    pressing: "bg-rd-500 text-white",
    clicked: "bg-white border border-rd-500 text-rd-500",
  };

  const getIcon = () => {
    switch (status) {
      case "disabled":
        return DeleteGY400;
      case "pressing":
        return DeleteWhite;
      default:
        return DeleteRD500;
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
        className="w-6 h-6 flex-shrink-0 aspect-square"
      />
      <span className="header-h4">{label}</span>
    </button>
  );
};

export default RD500_M;
