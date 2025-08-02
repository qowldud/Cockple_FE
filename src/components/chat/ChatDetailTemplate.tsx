// 그룹 채팅창과 개인 채팅창에 사용되는 공통 컴포넌트(템플릿)

import React, { useState, useEffect, useRef } from "react";
import ChattingComponent from "../common/chat/ChattingComponent";
import ImagePreviewModal from "./ImagePreviewModal";
import ChatBtn from "../common/DynamicBtn/ChatBtn";
import ProfileImg from "../../assets/images/Profile_Image.png";
import BottomChatInput from "../common/chat/BottomChatInput";
import { PageHeader } from "../common/system/header/PageHeader";
import ChatDateSeparator from "./ChatDataSeperator";
import { formatTime } from "../../utils/formatDate";

import type { ChatMessageResponse } from "../../types/chat";
import { useNavigate } from "react-router-dom";

interface ChatDetailTemplateProps {
  chatId: string;
  chatName: string;
  chatType: "group" | "personal";
  chatData: Record<string, ChatMessageResponse[]>;
  onBack: () => void;
  showHomeButton?: boolean;
  partyId?: number;
}

export const ChatDetailTemplate = ({
  chatId,
  chatName,
  chatData,
  onBack,
  showHomeButton = false,
  partyId,
}: ChatDetailTemplateProps) => {
  const [chattings, setChattings] = useState<ChatMessageResponse[]>([]);
  const [input, setInput] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null!);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const currentUserId = 999;

  const navigate = useNavigate();

  useEffect(() => {
    if (chatId && chatData[chatId]) {
      setChattings(chatData[chatId]);
    }
  }, [chatId, chatData]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chattings]);

  const handleSendMessage = () => {
    if (input.trim()) {
      const now = new Date().toISOString();

      const newMessage: ChatMessageResponse = {
        messageId: Date.now(),
        chatRoomId: Number(chatId),
        senderId: currentUserId,
        senderName: "나",
        senderProfileImage: ProfileImg,
        messageType: "TEXT",
        content: input,
        reactions: [],
        replyTo: null,
        fileInfo: null,
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      };

      setChattings(prev => [...prev, newMessage]);
      setInput("");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    const now = new Date().toISOString();

    const newImageMessage: ChatMessageResponse = {
      messageId: Date.now(),
      chatRoomId: Number(chatId),
      senderId: currentUserId,
      senderName: "나",
      senderProfileImage: ProfileImg,
      messageType: "IMAGE",
      content: "", // content 필드는 사용하지 않지만 빈 문자열로 설정
      reactions: [],
      replyTo: null,
      isDeleted: false,
      fileInfo: {
        fileId: Date.now(),
        fileName: file.name,
        fileSize: file.size,
        fileUrl: fileUrl,
      },
      createdAt: now,
      updatedAt: now,
    };

    setChattings(prev => [...prev, newImageMessage]);

    // 초기화
    e.target.value = "";
  };

  // 채팅창 날짜 표시
  const formatDateLabel = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const weekday = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
    return `${year}.${month}.${day} (${weekday})`;
  };

  return (
    <div className="relative flex flex-col min-h-[100dvh] -mb-8 -mt-14 pt-14 -mx-4">
      {/* 헤더 */}
      <PageHeader title={chatName} onBackClick={onBack} />

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden bg-gr-200">
        {showHomeButton && (
          <div className="fixed top-[4.25rem] left-1/2 -translate-x-1/2 z-10 mt-2">
            <ChatBtn
              imgSrc={ProfileImg}
              onClick={() => {
                navigate(`/group/${partyId}`);
                console.log(`/group/${partyId}로 이동`);
              }}
            >
              모임 홈으로
            </ChatBtn>
          </div>
        )}

        <div className="flex flex-col gap-5 shrink-0 p-4">
          {chattings.map((chat, index) => {
            const currentDate = chat.createdAt;
            const prevDate = index > 0 ? chattings[index - 1].createdAt : null;
            //const showDate = index === 0 || currentDate !== prevDate;
            const getDateOnly = (isoString: string) =>
              new Date(isoString).toISOString().split("T")[0];
            const showDate =
              index === 0 ||
              (prevDate && getDateOnly(currentDate) !== getDateOnly(prevDate));

            return (
              <React.Fragment key={chat.messageId}>
                {showDate && (
                  <ChatDateSeparator date={formatDateLabel(chat.createdAt)} />
                )}
                <ChattingComponent
                  message={chat}
                  isMe={chat.senderId === currentUserId}
                  onImageClick={setPreviewImage}
                  time={formatTime(chat.createdAt)}
                />
              </React.Fragment>
            );
          })}
          <div className="h-5" ref={chatEndRef}></div>
        </div>

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
