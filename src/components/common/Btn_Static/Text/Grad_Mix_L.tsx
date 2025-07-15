import React from "react";
import DeleteIcon from "../../../../assets/icons/delete-rd-500.svg";
import RefreshIcon from "../../../../assets/icons/refresh.svg";
import ChatQuestionIcon from "../../../../assets/icons/chat_question.svg";
import Btn_Static from "../Btn_Static";
import type { BtnStatus } from "../types";

type GradMixType = "delete" | "refresh" | "chat_question";

interface GradMixLProps {
  type: GradMixType;
  label?: string;
  initialStatus?: BtnStatus;
  onClick?: () => void;
}

const Grad_Mix_L = ({
  type,
  label = "Btn",
  initialStatus = "default",
  onClick,
}: GradMixLProps) => {
  const getLeftButtonStyle = () => {
    switch (type) {
      case "delete":
        return "border border-rd-500 text-error";
      default:
        return "border border-gy-800 text-black";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "delete":
        return DeleteIcon;
      case "refresh":
        return RefreshIcon;
      case "chat_question":
        return ChatQuestionIcon;
    }
  };

  return (
    <div
      className="w-full h-[6rem] pt-[0.5rem] pr-[1rem] pb-[2.25rem] pl-[1rem] gap-[0.5625rem] flex"
      style={{
        background:
          "linear-gradient(180deg, rgba(252, 252, 255, 0) 0%, rgba(252, 252, 255, 0.8) 50%, #FCFCFF 90%)",
      }}
    >
      {/* 왼쪽 버튼 */}
      <button
        className={`flex justify-center w-[5rem] h-[3.25rem] px-[1rem] py-[0.75rem] border-round border-2 bg-white ${getLeftButtonStyle()} cursor-pointer`}
      >
        <img
          src={getIcon()}
          alt={`${type} icon`}
          className="w-6 h-6 aspect-square"
        />
      </button>

      {/* 오른쪽 버튼 */}
      <Btn_Static
        kind="GR400"
        size="M"
        label={label}
        initialStatus={initialStatus}
        onClick={onClick}
      />
    </div>
  );
};

export default Grad_Mix_L;
