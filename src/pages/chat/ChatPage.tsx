// pages/Chats/ChatMainPage.tsx
import { useState } from "react";
import { GroupChat } from "../../components/common/contentcard/GroupChat";
import { PersonalChat } from "../../components/common/contentcard/PersonalChat";
import TabBtn from "../../components/common/DynamicBtn/TabBtn";
import Search from "../../assets/icons/search.svg";
import ChatImg from "../../assets/images/image.png";
import { useLocation, useNavigate } from "react-router-dom";

export const ChatPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"group" | "personal">(
    location.state?.tab === "personal" ? "personal" : "group",
  );

  // 더미 데이터
  const groupChats = [
    {
      id: 1,
      imageSrc: ChatImg,
      chatName: "민턴콕콕",
      memberCount: 10,
      lastMessage:
        "오늘 운동 오실래요???오늘 운동 오실래요???오늘 운동 오실래요??",
      lastMessageTime: "10:00 am",
      unreadCount: 10,
    },

    {
      id: 2,
      imageSrc: ChatImg,
      chatName: "민턴콱콱",
      memberCount: 10,
      lastMessage:
        "오늘 운동 오실래요???오늘 운동 오실래요???오늘 운동 오실래요??",
      lastMessageTime: "10:00 am",
      unreadCount: 10,
    },
  ];

  const personalChats = [
    {
      id: 100,
      imageSrc: ChatImg,
      userName: "김세익스피어",
      lastMessage: "민턴클로버",
      lastMessageTime: "08:00 am",
      unreadCount: 12,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 네비게이션 탭 */}
      {/* 이부분은 나중에 수정 */}
      <div className="flex mb-4 text-black items-center gap-x-[0.75rem] border-b-2 border-gray-100">
        <TabBtn
          children="모임채팅"
          onClick={() => setActiveTab("group")}
          disabled={false}
          isSelected={activeTab === "group"}
        />
        <TabBtn
          children="개인채팅"
          onClick={() => setActiveTab("personal")}
          disabled={false}
          isSelected={activeTab === "personal"}
        />
      </div>

      <section className="flex flex-col w-full max-w-[23.4375rem] justify-center items-center gap-y-[1.25rem]">
        {/* Search */}
        <div className="relative w-full h-[2.75rem] gap-2">
          <input
            type="text"
            placeholder="모임명으로 검색"
            className="w-full h-full pl-[0.625rem] pr-[2.5rem] rounded-[0.75rem] header-h5 placeholder:text-gy-400 border border-gy-400"
          />
          <img
            src={Search}
            alt="search"
            className="absolute right-[0.75rem] top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
          />
        </div>

        {/* Chat List */}
        <div className="flex flex-col gap-[0.625rem] w-full">
          {activeTab === "group" &&
            groupChats.map(chat => (
              <div
                key={chat.id}
                onClick={() =>
                  navigate(`/chat/group/${chat.id}`, {
                    state: { tab: "group", chatName: chat.chatName },
                  })
                }
                className="border-b border-gy-200 pb-1"
              >
                <GroupChat {...chat} />
              </div>
            ))}

          {activeTab === "personal" &&
            personalChats.map(chat => (
              <div
                key={chat.id}
                onClick={() =>
                  navigate(`/chat/personal/${chat.id}`, {
                    state: { tab: "personal", chatName: chat.userName },
                  })
                }
              >
                <PersonalChat {...chat} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
