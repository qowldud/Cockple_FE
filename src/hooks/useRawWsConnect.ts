import { useEffect, useRef, useState } from "react";
import {
  connectRawWs,
  sendChatWS,
  type IncomingMessage,
} from "../api/chat/rawWs";

//🌟
const getToken = () => localStorage.getItem("accessToken") || "";

export const useRawWsConnect = (opts: {
  memberId: number;
  origin?: string;
}) => {
  const [lastMessage, setLastMessage] = useState<IncomingMessage | null>(null);
  const mounted = useRef(false);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    mounted.current = true;

    //🌟토큰이 없으면 연결 시도 안 함
    const token = getToken();
    if (!token) {
      setOpen(false);
      return () => {
        mounted.current = false;
      };
    }

    connectRawWs(
      { memberId: opts.memberId, origin: opts.origin },
      {
        onOpen: () => mounted.current && setOpen(true),
        onClose: () => mounted.current && setOpen(false),
        //onMessage: msg => mounted.current && setLastMessage(msg),
        onMessage: msg => {
          if (!mounted.current) return;
          setLastMessage(msg);
          // 해제 ACK 로깅
          if (
            (msg.type === "UNSUBSCRIBE" || msg.type === "SUBSCRIBE") &&
            "message" in msg &&
            "chatRoomId" in msg
          ) {
            console.log(
              `[WS] ${msg.type} ACK #${msg.chatRoomId}: ${msg.message}`,
            );
          }
        },
        onError: () => mounted.current && setOpen(false),
      },
    );

    return () => {
      mounted.current = false;
    };
  }, [opts.memberId, opts.origin]);

  return {
    isOpen,
    lastMessage,
    sendText: (chatRoomId: number, content: string) =>
      sendChatWS(chatRoomId, { kind: "text", content }),
    sendImage: (chatRoomId: number, imgKeys: string[]) =>
      sendChatWS(chatRoomId, { kind: "image", imgKeys }),
  };
};
