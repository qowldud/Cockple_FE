import React, { useState, useEffect } from "react";

const ChattingComponent = ({ nickname, chatting, time, isMe }: any) => {
  //chatNick 상태 변수와 setChatNick 함수 정의
  const [chatNick, setChatNick] = useState("");

  //isMe와 nickname에 따라 chatNick을 설정
  useEffect(() => {
    setChatNick(isMe ? "나" : nickname);
  }, [isMe, nickname]);

  //메세지 포맷팅 함수 정의 (개행 문자를 <br/>로 변환)
  const formatMessage = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div>
      {/* 채팅 입력한 사람이 나(본인)인 경우 : 채팅 입력한 사람이 타인인 경우 */}
      {isMe ? (
        <div
          id="me"
          className="flex justify-end items-end gap-2 shrink-0 self-stretch"
        >
          <div className="flex flex-col justify-center items-end">
            <div id="time" className="body-sg-500 text-gy-700">
              <p className="text-xs text-black">{time}</p>
            </div>
          </div>
          <div className="mr-3">
            <div
              id="chatting"
              className="flex max-w-[15rem] px-3 py-2 text-left items-center gap-[0.625rem] bg-white border-round"
            >
              <span className="body-rg-500 text-black">
                {formatMessage(chatting)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div id="you" className="flex items-start gap-3 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <p id="nickname" className="body-rg-500">
              {chatNick}
            </p>
            <div className="flex items-end gap-2 self-stretch">
              <div
                id="chatting"
                className="flex max-w-[15rem] px-3 py-2 items-start text-left gap-[0.625rem] bg-white border-round"
              >
                <span className="body-rg-500">{formatMessage(chatting)}</span>
              </div>
              <div className="flex flex-col justify-center items-start">
                <div id="time" className="body-sg-500 text-gy-700">
                  <p className="text-xs text-black">{time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChattingComponent;
