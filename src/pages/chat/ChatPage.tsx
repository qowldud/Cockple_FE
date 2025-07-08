// pages/Chats/ChatMainPage.tsx
import { useState } from "react";
import GroupChat from "./GroupChat";
import PersonalChat from "./PersonalChat";
import TabBtn from "../../components/common/DynamicBtn/TabBtn";
import Search from "../../assets/icons/search.svg";

export const ChatPage = () => {
  const [activeTab, setActiveTab] = useState<"group" | "personal">("group");

  return (
    <>
      {/* 네비게이션 탭 */}
      {/* 이부분은 나중에 수정 */}
      <div className="flex mb-4 text-black items-center gap-x-[0.75rem] px-[1rem] border-b-2 border-gray-100">
        <TabBtn
          children="모임채팅"
          onClick={() => setActiveTab("group")}
          disabled={false}
        />
        <TabBtn
          children="개인채팅"
          onClick={() => setActiveTab("personal")}
          disabled={false}
        />
      </div>

      <section className="flex flex-col w-[23.4375rem] justify-center items-center px-4 gap-y-[1.25rem]">
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
      </section>
    </>
  );
};
