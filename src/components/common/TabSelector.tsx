// TabBtn을 사용하는 컴포넌트
// 채팅 페이지에서는 "모임채팅" "개인채팅"
// 찜 페이지에서는 "모임" "운동"

import React from "react";
import TabBtn from "./DynamicBtn/TabBtn";

interface TabOption {
  label: string;
  value: string;
}

interface TabSelectorProps<T extends string> {
  options: TabOption[];
  selected: T;
  onChange: (value: T) => void;
}

const TabSelector = <T extends string>({
  options,
  selected,
  onChange,
}: TabSelectorProps<T>) => {
  return (
    <div className="flex mb-4 text-black items-center gap-x-3 border-b-2 border-gray-100">
      {options.map(option => (
        <TabBtn
          key={option.value}
          children={option.label}
          onClick={() => onChange(option.value as T)}
          disabled={false}
          isSelected={selected === option.value}
        />
      ))}
    </div>
  );
};

export default TabSelector;
