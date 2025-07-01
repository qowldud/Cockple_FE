import React, { useState } from "react";

type BtnStatus = "default" | "pressing" | "clicked" | "disabled";

interface White_L_Props {
  initialStatus?: BtnStatus;
  label?: string;
}

const White_L = ({
  initialStatus = "default",
  label = "Btn",
}: White_L_Props) => {
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
    "flex items-center w-[21.4375rem] px-4 py-3 border-round transition duration-100";

  // 상태별 클래스 정의
  let statusStyle = "";
  if (status === "default") {
    statusStyle = "bg-white";
  } else if (status === "pressing") {
    statusStyle = "bg-gy-100";
  } else if (status === "clicked") {
    statusStyle = "bg-white";
  } else if (status === "disabled") {
    statusStyle = "bg-white text-gy-400";
  }

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
        ${statusStyle}
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        disabled={isDisabled}
      >
        <span className="header-h4">{label}</span>
      </button>
    </div>
  );
};

export default White_L;
