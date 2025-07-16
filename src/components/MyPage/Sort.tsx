//정렬 컴포넌트입니다.
import { useState } from "react";
import ArrowDown from "@/assets/icons/arrow_down.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react"; 

const sortOptions = ["최신순", "오래된 순", "운동 많은 순"];

export const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* 정렬 버튼 영역 */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-1 px-2"
      >
        <p className="body-rg-500 ">{selected}</p>
        <ArrowDown className="w-4 h-4" />
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <ul className=" body-lg-400  absolute z-10 top-full mt-2 right-0 w-40 bg-white rounded-xl py-2">
          {sortOptions.map(option => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="flex justify-between items-center px-4 py-2 body-lg-500 hover:bg-gray-100 cursor-pointer"
            >
              <span>{option}</span>
              {selected === option && <CheckIcon className="w-4 h-4" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
