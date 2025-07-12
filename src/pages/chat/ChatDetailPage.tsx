import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ChattingComponent from "./ChattingComponent";
import ProfileImg from "../../assets/images/Profile_Image.png";
import Clear_M from "../../components/common/Btn_Static/Icon_Btn/Clear_M";
import ArrowLeft from "../../assets/icons/arrow_left.svg";
import Camera from "../../assets/icons/camera.svg";
import Imogi from "../../assets/icons/emoji_smile.svg";
import Chat from "../../assets/icons/chat.svg";

//Chatting 인터페이스 정의
interface Chatting {
  id: number;
  nickname: string;
  profile: string;
  chatting: string;
  time: string;
  isMe: boolean;
  unreadCount: number;
}

export const ChatDetailPage = () => {
  const { chatId } = useParams(); // 채팅방 ID
  const [input, setInput] = useState("");
  const [isComposing, setIsComposing] = useState<boolean>(false);
  const navigate = useNavigate();

  //chattings 상태 변수와 setChattings 함수 정의
  const [chattings, setChattings] = useState<Chatting[]>([
    {
      id: 1,
      nickname: "양준석(팀장)",
      profile: ProfileImg,
      chatting: `안녕하세요 프론트엔드 팀원 여러분,
                  다음 주 수요일에 예정된 정기 회의 관련 공지드립니다.

                  이번 회의에서는 각 부서별로 발표가 있을 예정입니다. 주요
                  내용은 아래와 같습니다:

                  1. 운영팀: 최근 배달 효율성 개선 프로젝트 진행 상황 보고
                  2. 마케팅팀: 신규 프로모션 캠페인 계획 및 기대 효과 발표
                  3. 기술팀: 앱 업데이트 및 새로운 기능 소개
                  4. 고객지원팀: 고객 만족도 조사 결과 및 개선 방안 발표

                  우리 프론트엔드 팀에서는 새로운 사용자 인터페이스 개선 사항과
                  현재 진행 중인 프로젝트의 진척도를 공유할 예정입니다. 각
                  팀원은 본인의 작업 부분에 대해 간단한 업데이트를 준비해
                  주세요.`,
      time: "17:06",
      isMe: false,
      unreadCount: 8,
    },
    {
      id: 2,
      nickname: "아무개",
      profile: ProfileImg,
      chatting: `신규 개발 중인 개인정보 수정 탭의 사이드 탭의 UI 개발 을 맡고
                  있는 해당 팀원 분들은 저에게 진척 사항 공유 부탁드립니다~ 발표
                  자료에 포함시킬 예정입니다.`,
      time: "17:07",
      isMe: true,
      unreadCount: 8,
    },
    {
      id: 3,
      nickname: "김민수",
      profile: ProfileImg,
      chatting: `저랑 이지현 팀원이 개발 중에 있습니다! 진척 상황 노션에
                  정리하여 곧 공유드리겠습니다!`,
      time: "17:08",
      isMe: false,
      unreadCount: 8,
    },
    {
      id: 4,
      nickname: "아무게",
      profile: ProfileImg,
      chatting: `신규 개발 중인 개인정보 수정 탭의 사이드 탭의 UI 개발 을 맡고
                  있는 해당 팀원 분들은 저에게 진척 사항 공유 부탁드립니다~ 발표
                  자료에 포함시킬 예정입니다.`,
      time: "17:09",
      isMe: true,
      unreadCount: 8,
    },
  ]);

  //chatEndRef ref 변수 정의
  const chatEndRef = useRef<HTMLDivElement>(null);

  //chattings 상태가 변경될 때마다 chatEndRef를 이용해 스크롤을 끝으로 이동
  useEffect(() => {
    //chatEndRef.current 는 useRef 훅을 통해 참조된 현재 <div> 요소를 가리킴.
    //scrollIntoView 메서드는 해당 요소를 스크롤하여 사용자 뷰포트 내에 도이도록 한다.
    //{ behavior: "smooth" } 옵션을 사용하여 스크롤이 부드럽게 진행되도록 설정한다.
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chattings]);

  //메세지 전송 핸들러
  const handleSendMessage = () => {
    if (input.trim()) {
      const newId =
        chattings.length > 0 ? chattings[chattings.length - 1].id + 1 : 1;
      const newChat: Chatting = {
        id: newId,
        nickname: "나",
        profile: ProfileImg,
        chatting: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: true,
        unreadCount: 5, // 더미 데이터니까 고정 값으로
      };
      setChattings(prev => [...prev, newChat]);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  //입력 구성 시작 핸들러
  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  //입력 구성 끝 핸들러
  const handleCompositionEnd = (
    e: React.CompositionEvent<HTMLTextAreaElement>,
  ) => {
    setIsComposing(false);
    setInput(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col h-screen">
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
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden bg-gr-200">
        <div className="flex flex-col gap-5 shrink-0 p-4">
          {chattings.map(
            ({ id, nickname, chatting, time, isMe, unreadCount }) => (
              <ChattingComponent
                key={id}
                nickname={nickname}
                chatting={chatting}
                time={time}
                isMe={isMe}
                unreadCount={unreadCount}
              />
            ),
          )}
          <div className="h-5" ref={chatEndRef}></div>
        </div>
      </div>

      {/* 입력창 */}
      <div className="flex px-4 pt-2 pb-8 items-center justify-center gap-2 bg-white shadow-ds50">
        <Clear_M
          iconMap={{
            disabled: Camera,
            default: Camera,
            pressing: Camera,
            clicked: Camera,
          }}
          onClick={() => console.log("clicked")}
        />
        <div className="flex h-14 py-[0.625rem] px-3 flex-end items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            className="outline-0"
          />

          <Clear_M
            iconMap={{
              disabled: Imogi,
              default: Imogi,
              pressing: Imogi,
              clicked: Imogi,
            }}
            onClick={() => console.log("clicked")}
          />
        </div>
        {/* <button onClick={handleSendMessage}>입력</button> */}
        <Clear_M
          iconMap={{
            disabled: Chat,
            default: Chat,
            pressing: Chat,
            clicked: Chat,
          }}
          onClick={() => console.log("clicked")}
        />
      </div>
    </div>
  );
};
