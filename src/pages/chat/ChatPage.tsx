// 메인 채팅 페이지
import { useMemo, useState } from "react";
import TabBtn from "../../components/common/DynamicBtn/TabBtn";
import ChatImg from "../../assets/images/image.png";
import { useLocation, useNavigate } from "react-router-dom";
import SearchInput from "../../components/chat/SearchInput";
import ChatList from "../../components/chat/ChatList";
import { disassembleHangul } from "../../utils/disassembleHangul";

export const ChatPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"group" | "personal">(
    location.state?.tab === "personal" ? "personal" : "group",
  );

  const [searchTerm, setSearchTerm] = useState("");

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
    {
      id: 3,
      imageSrc: ChatImg,
      chatName: "민턴콱콱!",
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

  // 전체 사용 문자
  const allChatNames = [
    ...groupChats.map(c => c.chatName),
    ...personalChats.map(p => p.userName),
  ];
  const allUsedCharacters = useMemo(() => {
    return new Set(allChatNames.flatMap(name => [...disassembleHangul(name)]));
  }, [allChatNames]);

  // 검색어 유효성
  const isValidSearch = [...disassembleHangul(searchTerm)].every(char =>
    allUsedCharacters.has(char),
  );

  // 자모 기반 검색
  const filteredGroupChats = groupChats.filter(chat =>
    disassembleHangul(chat.chatName).includes(disassembleHangul(searchTerm)),
  );
  const filteredPersonalChats = personalChats.filter(chat =>
    disassembleHangul(chat.userName).includes(disassembleHangul(searchTerm)),
  );

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
        {/* 검색창 */}
        <SearchInput
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {/* 채팅 리스트 또는 결과 없음 */}
        <ChatList
          tab={activeTab}
          groupChats={filteredGroupChats}
          personalChats={filteredPersonalChats}
          isValidSearch={isValidSearch}
          searchTerm={searchTerm}
          navigate={navigate}
        />
      </section>
    </div>
  );
};
