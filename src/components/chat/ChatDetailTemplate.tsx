// 그룹 채팅창과 개인 채팅창에 사용되는 공통 컴포넌트(템플릿)

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChattingComponent from "../common/chat/ChattingComponent";
import FileSendModal from "./FileSendModal";
import ImagePreviewModal from "./ImagePreviewModal";
import ChatBtn from "../common/DynamicBtn/ChatBtn";

import type { Chatting } from "../../types/chat";

import ProfileImg from "../../assets/images/Profile_Image.png";
import BottomChatInput from "../common/chat/BottomChatInput";
import { PageHeader } from "../common/system/header/PageHeader";

interface ChatDetailTemplateProps {
  chatId: string;
  chatName: string;
  chatType: "group" | "personal";
  chatData: Record<string, Chatting[]>;
  onBack: () => void;
  showHomeButton?: boolean;
}

export const ChatDetailTemplate = ({
  chatId,
  chatName,
  chatType,
  chatData,
  onBack,
  showHomeButton = false,
}: ChatDetailTemplateProps) => {
  const [chattings, setChattings] = useState<Chatting[]>([]);
  const [input, setInput] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [pendingImage, setPendingImage] = useState<string | null>(null);
  const [pendingFileName, setPendingFileName] = useState<string>("");
  const [pendingFileSize, setPendingFileSize] = useState<string>("");

  const chatEndRef = useRef<HTMLDivElement>(null);

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
      const newChat: Chatting = {
        id: chattings.length + 1,
        nickname: "나",
        profile: ProfileImg,
        chatting: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: true,
        unreadCount: 0,
      };

      setChattings(prev => [...prev, newChat]);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    setPendingImage(fileUrl);
    setPendingFileName(file.name);
    setPendingFileSize((file.size / 1024).toFixed(0) + "KB");

    e.target.value = "";
  };

  const handleSendPendingImage = () => {
    if (!pendingImage) return;

    const newChat: Chatting = {
      id: chattings.length + 1,
      nickname: "나",
      profile: ProfileImg,
      chatting: "",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMe: true,
      unreadCount: 0,
      imageUrls: [pendingImage],
    };

    setChattings(prev => [...prev, newChat]);
    setPendingImage(null);
  };

  return (
    <div
      className="relative flex flex-col min-h-[100dvh] -mb-8"
      style={{
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      {/* 헤더 */}
      <div className="px-2">
        <PageHeader title={chatName} onBackClick={onBack} />
      </div>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden bg-gr-200">
        {showHomeButton && (
          <div className="fixed top-[4.25rem] left-1/2 -translate-x-1/2 z-10 mt-2">
            <ChatBtn
              imgSrc={ProfileImg}
              onClick={() => console.log("모임 홈으로 이동")}
            >
              모임 홈으로
            </ChatBtn>
          </div>
        )}

        <div className="flex flex-col gap-5 shrink-0 p-4">
          {chattings.map(chat => (
            <ChattingComponent
              key={chat.id}
              {...chat}
              onImageClick={setPreviewImage}
            />
          ))}
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
      <BottomChatInput
        input={input}
        isComposing={isComposing}
        onInputChange={setInput}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={e => {
          setIsComposing(false);
          setInput(e.currentTarget.value);
        }}
        onSendMessage={handleSendMessage}
        onImageUpload={handleImageUpload}
        fileInputRef={fileInputRef}
      />

      {pendingImage && (
        <FileSendModal
          imageUrl={pendingImage}
          fileName={pendingFileName}
          fileSize={pendingFileSize}
          onCancel={() => setPendingImage(null)}
          onSend={handleSendPendingImage}
        />
      )}
    </div>
  );
};
