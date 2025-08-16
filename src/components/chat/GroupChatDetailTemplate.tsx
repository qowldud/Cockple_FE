// 그룹 채팅창 템플릿: ChatDetailTemplate와 동일한 구조/흐름으로 정리

import React, { useEffect, useMemo, useRef, useState } from "react";
//import { useNavigate } from "react-router-dom";

import ChattingComponent from "../common/chat/ChattingComponent";
import ImagePreviewModal from "./ImagePreviewModal";
//import ChatBtn from "../common/DynamicBtn/ChatBtn";
//import ProfileImg from "../../assets/images/Profile_Image.png";
import BottomChatInput from "../common/chat/BottomChatInput";
//import { PageHeader } from "../common/system/header/PageHeader";
import ChatDateSeparator from "./ChatDataSeperator";
//import { formatTime } from "../../utils/formatDate";

// 데이터 훅
import { useChatInfinite } from "../../hooks/useChatInfinite";
//import { useMockChatInfinite } from "../../hooks/useMockChatInfinite";
import { useChatRead } from "../../hooks/useChatRead";

// WS 연결(원시 WebSocket 전용 훅)
import { useRawWsConnect } from "../../hooks/useRawWsConnect";
import { subscribeRoom, unsubscribeRoom } from "../../api/chat/rawWs";
import type { ChatMessageResponse } from "../../types/chat";
import { formatDateWithDay, formatEnLowerAmPm } from "../../utils/time";
import { uploadImage } from "../../api/image/imageUpload";

const CenterBox: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex-1 flex items-center justify-center py-8 text-gy-700">
    {children}
  </div>
);

interface GroupChatDetailTemplateProps {
  roomId: number; // 채팅방 ID
  //chatName: string; // 상단 타이틀
  //onBack: () => void; // 뒤로가기
  //showHomeButton?: boolean; // 상단 고정 버튼 표시 여부
}

export const GroupChatDetailTemplate: React.FC<
  GroupChatDetailTemplateProps
  // > = ({ chatId, chatName, onBack, partyId, showHomeButton = false }) => {
  // > = ({ roomId, chatName, onBack }) => {
> = ({ roomId }) => {
  //const navigate = useNavigate();

  // 실제 로그인 사용자 정보로 대체
  const currentUserId = Number(localStorage.getItem("memberId") || 1);
  const currentUserName = localStorage.getItem("memberName") || "나";

  const {
    messages, // 정렬된 평탄화(오름차순)
    initLoading,
    initError,
    //isEmpty,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    refetchInitial,
  } = useChatInfinite(roomId);

  // ===== 읽음 처리: 진입/스크롤 하단 도달 시 =====
  const { markReadNow } = useChatRead({
    roomId: roomId,
    messages,
    mode: "mock", // TODO: 백엔드 REST/WS 경로 확정 시 "rest" 또는 wsSendFn 적용
  });

  // 방 입장/퇴장: 단일 구독 유지
  useEffect(() => {
    subscribeRoom(roomId);
    return () => {
      // 방 퇴장: 해제 (리스트 화면에서 다시 여러 방 구독함)
      unsubscribeRoom(roomId);
    };
  }, [roomId]);

  // ===== 로컬 상태 ====
  const [input, setInput] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  //🌟낙관적/실시간 메시지 보관
  const [liveMsgs, setLiveMsgs] = useState<ChatMessageResponse[]>([]);

  //  ==== Refs ====
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const topSentinelRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null!);

  // 초기 로드시 맨 아래로 이동
  useEffect(() => {
    if (!initLoading && messages.length) {
      bottomRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [initLoading, messages.length]);

  // 상단 센티넬 → 과거 로드
  useEffect(() => {
    const root = scrollAreaRef.current;
    const target = topSentinelRef.current;
    if (!root || !target || !hasNextPage) return;

    const io = new IntersectionObserver(
      entries => {
        const first = entries[0];
        if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
          const prevHeight = root.scrollHeight;
          fetchNextPage().then(() => {
            requestAnimationFrame(() => {
              const newHeight = root.scrollHeight;
              const delta = newHeight - prevHeight;
              root.scrollTop = root.scrollTop + delta; // 점프 방지
            });
          });
        }
      },
      { root, threshold: 0.1 },
    );

    io.observe(target);
    return () => io.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // 하단 근처 도달 시 읽음 처리
  useEffect(() => {
    const root = scrollAreaRef.current;
    if (!root) return;

    const onScroll = () => {
      const nearBottom =
        root.scrollHeight - root.scrollTop - root.clientHeight < 60;
      if (nearBottom) markReadNow();
    };

    root.addEventListener("scroll", onScroll);
    return () => root.removeEventListener("scroll", onScroll);
  }, [markReadNow]);

  //===== WS 연결 및 전송 =====
  //🌟
  const { sendText, sendImage, lastMessage } = useRawWsConnect({
    memberId: currentUserId,
    origin: "https://cockple.store",
  });

  const rendered = useMemo(() => {
    // messages가 오름차순이므로 live는 뒤에 붙인다.
    // 정렬이 필요하면 여기에서 정렬.
    return [...messages, ...liveMsgs];
  }, [messages, liveMsgs]);

  // 메시지 전송 (WS publish 경로 확정 전까지는 입력 리셋 + 스크롤만)
  const handleSendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const tempId = -Date.now(); // 임시 음수 id
    const optimistic: ChatMessageResponse = {
      messageId: tempId,
      senderId: currentUserId,
      senderName: currentUserName,
      senderProfileImage: "",
      content: text,
      messageType: "TEXT",
      imgUrls: [],
      timestamp: new Date().toISOString(),
      isMyMessage: true,
    };

    // 1) 즉시 화면 반영
    setLiveMsgs(prev => [...prev, optimistic]);

    // 2) 서버로 SEND
    const ok = sendText(roomId, text); // 또는 sendChatWS(chatId, text);
    // 실패 시 사용자 안내
    if (!ok) {
      console.warn("WS 미연결로 전송 실패");
      // TODO: 토스트/스낵바 등 사용자 피드백
      // 전송 실패 시 롤백(선택)
      setLiveMsgs(prev => prev.filter(m => m.messageId !== tempId));
      return;
    }

    // 3) 입력 초기화 + 스크롤
    setInput("");
    requestAnimationFrame(() =>
      bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
    );
    console.log(
      "handleSendMessage: ",
      liveMsgs.map(m => m.timestamp),
    );
    console.log("메시지 전송:", text);
  };

  // 이미지 업로드(미연결: 로컬 프리뷰만)
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // const file = e.target.files?.[0];
    // if (!file) return;

    // const fileUrl = URL.createObjectURL(file);
    // setPreviewImage(fileUrl);
    // e.target.value = "";
    const file = e.target.files?.[0];
    e.currentTarget.value = ""; // 같은 파일 재선택 가능
    if (!file) return;

    // 간단 용량 가드
    const MAX_MB = 10;
    if (file.size > MAX_MB * 1024 * 1024) {
      console.warn("파일이 너무 큽니다");
      return;
    }

    // // 1) 낙관적 미리보기
    // const previewUrl = URL.createObjectURL(file);
    const tempId = -Date.now();
    // 2) S3 업로드
    try {
      const { imgKey, imgUrl } = await uploadImage("CHAT", file);

      // 3) WS로 IMAGE 메시지 전송 (imgKey 사용)
      const ok = sendImage(roomId, [imgKey]);
      if (!ok) throw new Error("WS SEND 실패");

      const optimistic: ChatMessageResponse = {
        messageId: tempId,
        senderId: currentUserId,
        senderName: currentUserName,
        senderProfileImage: "",
        content: "",
        messageType: "IMAGE",
        imgUrls: [imgUrl],
        timestamp: new Date().toISOString(),
        isMyMessage: true,
      };
      setLiveMsgs(prev => [...prev, optimistic]);
      requestAnimationFrame(() =>
        bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
      );
    } catch (err) {
      console.error(err);
      setLiveMsgs(prev => prev.filter(m => m.messageId !== tempId)); // 롤백
    } finally {
      //setUploading(false);
    }
  };

  useEffect(() => {
    if (!lastMessage || lastMessage.type !== "SEND") return;
    if (lastMessage.chatRoomId !== roomId) return;

    const incoming: ChatMessageResponse = {
      messageId: lastMessage.messageId ?? Date.now(),
      senderId: lastMessage.senderId ?? 0,
      senderName: lastMessage.senderName ?? "",
      senderProfileImage: lastMessage.senderProfileImage ?? "",
      content: lastMessage.content ?? "",
      messageType: "TEXT",
      imgUrls: [],
      //🌟
      //timestamp: lastMessage.createdAt ?? new Date().toISOString(),
      timestamp: lastMessage.timestamp ?? "",
      isMyMessage: (lastMessage.senderId ?? 0) === currentUserId,
    };

    // 내 임시와 동일하면 교체(에코가 올 경우)
    setLiveMsgs(prev => {
      const idx = prev.findIndex(
        m =>
          m.messageId < 0 &&
          m.isMyMessage &&
          m.content === incoming.content &&
          Math.abs(+new Date(m.timestamp) - +new Date(incoming.timestamp)) <
            5000,
      );
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = incoming;
        return copy;
      }
      // 상대 메시지면 추가
      return [...prev, incoming];
    });

    requestAnimationFrame(() =>
      bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
    );
  }, [lastMessage, roomId, currentUserId]);

  if (initError) return <div className="p-6">메시지 불러오기 실패</div>;

  return (
    <div className="relative flex flex-col min-h-[87dvh] -mb-8 -mt-4 -mx-4">
      {/* 헤더 */}
      {/* <PageHeader title={chatName} onBackClick={onBack} /> */}

      {/* 스크롤 영역 */}
      <div
        ref={scrollAreaRef}
        className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden bg-gr-200"
      >
        {/* 상태 UI */}
        {initLoading && <CenterBox>불러오는 중…</CenterBox>}
        {initError && (
          <CenterBox>
            <div className="flex flex-col items-center gap-3">
              <div>메시지 불러오기 실패</div>
              <button
                className="px-3 py-1 rounded-lg border border-gy-300"
                onClick={() => refetchInitial()}
              >
                다시 시도
              </button>
            </div>
          </CenterBox>
        )}
        {/* {isEmpty && <CenterBox>아직 메시지가 없습니다</CenterBox>} */}

        {/* 메시지 리스트 */}
        {!initLoading &&
          !initError &&
          (rendered.length === 0 ? (
            <CenterBox>아직 메시지가 없습니다</CenterBox>
          ) : (
            <div className="flex flex-col gap-5 shrink-0 p-4">
              {/* 위쪽 센티넬: 과거 불러오기 트리거 */}
              <div ref={topSentinelRef} />

              {rendered.map((chat, idx) => {
                const prev = idx > 0 ? rendered[idx - 1] : undefined;
                //🌟
                // const onlyDate = (s: string) =>
                //   new Date(s).toISOString().split("T")[0];
                //const onlyDate = (s: string) => s;
                // const showDate =
                //   !prev || onlyDate(chat.timestamp) !== onlyDate(prev.timestamp);
                const showDate =
                  !prev ||
                  formatDateWithDay(chat.timestamp) !==
                    formatDateWithDay(prev.timestamp);
                return (
                  <React.Fragment key={chat.messageId}>
                    {showDate && (
                      <ChatDateSeparator
                        date={formatDateWithDay(chat.timestamp)}
                      />
                    )}
                    <ChattingComponent
                      message={chat}
                      isMe={chat.senderId === currentUserId}
                      onImageClick={setPreviewImage}
                      time={formatEnLowerAmPm(chat.timestamp)}
                    />
                  </React.Fragment>
                );
              })}

              {isFetchingNextPage && (
                <div className="text-center text-gy-600 text-sm">
                  이전 메시지 불러오는 중…
                </div>
              )}

              {/* 하단 앵커 */}
              <div className="h-5" ref={bottomRef} />
            </div>
          ))}

        {previewImage && (
          <ImagePreviewModal
            imageUrl={previewImage}
            onClose={() => setPreviewImage(null)}
          />
        )}
      </div>
      {/* 입력창 */}
      <div className="sticky bottom-0">
        <BottomChatInput
          input={input}
          isComposing={isComposing}
          onInputChange={setInput}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={e => {
            setIsComposing(false);
            setInput(e.currentTarget.value);
          }}
          onSendMessage={handleSendMessage}
          onImageUpload={handleImageUpload}
          fileInputRef={fileInputRef}
        />
      </div>
    </div>
  );
};
