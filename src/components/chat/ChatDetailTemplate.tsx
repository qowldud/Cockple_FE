// 그룹 채팅창과 개인 채팅창에 사용되는 공통 컴포넌트(템플릿)

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChattingComponent from "../common/chat/ChattingComponent";
import Clear_M from "../common/Btn_Static/Icon_Btn/Clear_M";
import FileSendModal from "./FileSendModal";
import ImagePreviewModal from "./ImagePreviewModal";
import ChatBtn from "../common/DynamicBtn/ChatBtn";

import type { Chatting } from "../../types/chat";

import ProfileImg from "../../assets/images/Profile_Image.png";
import ArrowLeft from "../../assets/icons/arrow_left.svg";
import Camera from "../../assets/icons/camera.svg";
import Imogi from "../../assets/icons/emoji_smile.svg";
import Chat from "../../assets/icons/chat.svg";

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
      className="relative flex flex-col h-screen"
      style={{
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      {/* 헤더 */}
      <div className="h-[3.5rem] flex items-center px-4 gap-3 shrink-0 bg-white">
        <Clear_M
          iconMap={{
            disabled: ArrowLeft,
            default: ArrowLeft,
            pressing: ArrowLeft,
            clicked: ArrowLeft,
          }}
          onClick={onBack}
        />
        <div className="header-h4">{chatName}</div>
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
      <div className="flex px-4 pt-2 pb-8 items-center justify-center gap-2 bg-white shadow-ds50">
        <Clear_M
          iconMap={{
            disabled: Camera,
            default: Camera,
            pressing: Camera,
            clicked: Camera,
          }}
          onClick={() => fileInputRef.current?.click()}
        />
        <input
          type="file"
          accept="image/*"
          hidden
          ref={fileInputRef}
          onChange={handleImageUpload}
        />

        <div className="flex h-14 py-[0.625rem] px-3 flex-end items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={e => {
              setIsComposing(false);
              setInput(e.currentTarget.value);
            }}
            className="outline-0"
          />
          <Clear_M
            iconMap={{
              disabled: Imogi,
              default: Imogi,
              pressing: Imogi,
              clicked: Imogi,
            }}
            onClick={() => {}}
          />
        </div>

        <Clear_M
          iconMap={{
            disabled: Chat,
            default: Chat,
            pressing: Chat,
            clicked: Chat,
          }}
          onClick={handleSendMessage}
        />
      </div>

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
