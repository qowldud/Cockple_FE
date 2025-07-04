import { useState } from "react";
import Peopel from "../../../assets/icons/people.svg?react";
import Num_Noti from "../../../assets/icons/Num_Noti.svg?react";

interface GroupChatProps {
  imageSrc: string;
  chatName: string;
  memberCount: number;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number; // 읽지 않은 메시지 수
}

export const GroupChat = ({
  imageSrc,
  chatName,
  memberCount,
  lastMessage,
  lastMessageTime,
  unreadCount,
}: GroupChatProps) => {
  const [pressing, setPressing] = useState(false);

  return (
    <div
      className={`w-[21.4375rem] h-[5rem] p-[0.5rem] gap-[0.75rem] rounded-[0.75rem] flex items-center transition-colors ${
        pressing ? "bg-[#F4F5F6]" : "bg-[#FAFAFA]"
      }`}
      onMouseDown={() => setPressing(true)}
      onMouseUp={() => setPressing(false)}
      onMouseLeave={() => setPressing(false)}
      onTouchStart={() => setPressing(true)}
      onTouchEnd={() => setPressing(false)}
    >
      <img
        src={imageSrc}
        alt={chatName} 
        className="w-[4rem] h-[4rem] rounded-[0.5rem]"
      />

      <div className="flex flex-col justify-between w-[11.9375rem] h-[4rem]">
        <div className="flex items-center gap-[0.25rem]">
          <p className="body-md-500">{chatName}</p> 
          <Peopel className="w-[1rem] h-[1rem]" />
          <p className="body-sm-400">{memberCount}</p>
        </div>
        
       <span className="body-rg-400 line-clamp-2 block text-left leading-tight">
        {lastMessage} 
      </span>

      </div>

      <div className="flex flex-col justify-between w-[3rem] h-[4rem] items-center">
        <p className="body-sm-400 text-[#9195A1]">{lastMessageTime}</p>
        <div className="flex items-center justify-center w-full">
          {unreadCount > 0 && <Num_Noti className="w-[1.25rem] h-[1.25rem]" />}
        </div>
      </div>
    </div>
  );
};