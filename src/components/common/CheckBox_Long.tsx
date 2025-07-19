import React, { useState, useEffect, useRef } from "react";
import CheckCircled from "../../assets/icons/check_circled.svg?react";
import CheckCircledFilled from "../../assets/icons/check_circled_filled.svg?react";
import White_L_Thin_Add from "../../components/MyPage/White_L_Thin_Add";
import VectorRed from "../../assets/icons/Vector_red.svg?react";

interface CheckBoxLongProps {
  title?: string;
  maxLength?: number;
}

export const CheckBox_Long = ({
    title,
    maxLength,
//   title = "대회 기록",
//   maxLength = 100,
}: CheckBoxLongProps) => {
  const [recordTexts, setRecordTexts] = useState<string[]>([""]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isRecordFocused, setIsRecordFocused] = useState(false);

  const textAreaRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  const adjustHeight = (idx: number) => {
    const textarea = textAreaRefs.current[idx];
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  useEffect(() => {
    recordTexts.forEach((_, idx) => {
      adjustHeight(idx);
    });
  }, [recordTexts]);

  const onChangeText = (idx: number, value: string) => {
    if (isPrivate) return; 
    const newTexts = [...recordTexts];
    newTexts[idx] = value;
    setRecordTexts(newTexts);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <label
              className={`header-h5 ${isPrivate ? "text-[#9195A1]" : "text-black"}`}
            >
              {title}
            </label>
            <VectorRed className="ml-1 w-2 h-2" />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPrivate((prev) => !prev)}
              type="button"
              className="focus:outline-none"
            >
              {isPrivate ? (
                <CheckCircledFilled className="w-4 h-" />
              ) : (
                <CheckCircled className="w-4 h-4" />
              )}
            </button>
            <label className={`body-rg-500`}>
              비공개
            </label>
          </div>
        </div>
      </div>

      {recordTexts.map((text, idx) => (
        <div key={idx} className="relative mb-4">
          <textarea
            ref={(el) => (textAreaRefs.current[idx] = el)}
            value={text}
            onChange={(e) => onChangeText(idx, e.target.value)}
            onFocus={() => setIsRecordFocused(true)}
            onBlur={() => setIsRecordFocused(false)}
            disabled={isPrivate}
            maxLength={maxLength}
            rows={1}
            style={{ resize: "none", overflow: "hidden" }}
            className={`w-full rounded-xl body-md-500 p-3 leading-snug border
            ${
                isPrivate
                ? "border-[#E4E7EA] cursor-not-allowed"
                : isRecordFocused
                    ? "border-[#87C95E]"
                    : "border-[#E4E7EA] text-black"
            }
            focus:outline-none
            `}
          />
          <div
            className="body-rg-500 absolute bottom-5 right-3 text-[#D6DAE0]">
            ({text.length}/{maxLength})
          </div>
        </div>
      ))}

      {/* 추가하기 버튼 */}
      {!isPrivate && recordTexts[recordTexts.length - 1].trim() !== "" && (
        <div className="mt-1">
          <White_L_Thin_Add
            label="추가하기"
            onClick={() => setRecordTexts([...recordTexts, ""])}
          />
        </div>
      )}
    </div>
  );
};
