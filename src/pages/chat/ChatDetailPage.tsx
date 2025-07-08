import { useParams, useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/icons/arrow_left.svg";
import Clear_M from "../../components/common/Btn_Static/Icon_Btn/Clear_M";
import ArrowLeftGY400 from "../../assets/icons/arrow_left-gy-400.svg";

export const ChatDetailPage = () => {
  const { chatId } = useParams(); // 채팅방 ID
  const navigate = useNavigate();

  // 더미 메시지 (나중에 API로 대체 가능)
  const dummyMessages = [
    { id: 1, sender: "김세익스피어", content: "안녕하세요!", time: "07:31" },
    {
      id: 2,
      sender: "김세익스피어",
      content: "오늘 운동 오실래요?",
      time: "07:32",
    },
    { id: 3, sender: "나", content: "좋아요!", time: "07:33" },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#E2F3E9]">
      {/* 상단 헤더 */}
      <div className="h-[3.5rem] flex items-center px-4 gap-3 shrink-0 bg-white">
        <Clear_M
          iconMap={{
            disabled: ArrowLeft,
            default: ArrowLeft,
            pressing: ArrowLeft,
            clicked: ArrowLeft,
          }}
          onClick={() => navigate(-1)}
        />
        <div className="header-h4">채팅방 {chatId}</div>
      </div>

      {/* 메시지 영역 */}
      <section className="flex-1 justify-end items-center gap-5 shrink-0 overflow-y-auto p-4 space-y-3">
        {dummyMessages.map(msg => (
          <div key={msg.id}>
            {msg.sender !== "나" && (
              <p className="text-xs text-gray-500 mb-1">{msg.sender}</p>
            )}
            <div
              className={`inline-block px-3 py-2 rounded-xl text-sm ${
                msg.sender === "나"
                  ? "bg-white self-end ml-auto"
                  : "bg-white text-left"
              }`}
            >
              {msg.content}
            </div>
            <p
              className={`text-[0.625rem] mt-1 text-gray-400 ${
                msg.sender === "나" ? "text-right" : "text-left"
              }`}
            >
              {msg.time}
            </p>
          </div>
        ))}
      </section>

      {/* 입력창 */}
      <div className="h-[3.5rem] bg-white flex items-center px-4 gap-2 border-t">
        <button>📷</button>
        <input
          className="flex-1 border rounded-[0.75rem] px-3 py-1"
          placeholder="메시지를 입력하세요"
        />
        <button>😊</button>
        <button>📩</button>
      </div>
    </div>
  );
};
