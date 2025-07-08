import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';

// 옵션 타입을 정의
interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[]; // { value: 'D조', label: 'D조' } 형태의 옵션 배열
  selected: Option; // 현재 선택된 옵션 객체
  onChange: (value: Option) => void; // 선택 변경 시 호출될 함수
  disabled?: boolean; // 비활성화 여부
}

export const Select = ({ options, selected, onChange, disabled }: CustomSelectProps) => {
  return (
    <Listbox value={selected} onChange={onChange} disabled={disabled}>
      <div className="relative">
        {/* 선택된 값을 보여주는 버튼 (드롭다운 트리거) */}
        <Listbox.Button
          className={`relative body-md-500 w-full border border-[#E4E7EA] rounded-[12px] py-2 pl-3 pr-10 text-left cursor-default focus:outline-none 
            ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}
        >
          <span className="block truncate">{selected.label}</span>
        </Listbox.Button>

        {/* 옵션 목록 (드롭다운 메뉴) */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className=" text-left absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 body-md-500  focus:outline-none 
              border border-[#E4E7EA]"
          >
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-3 pr-4 
                   ${active ? 'bg-[#E4E7EA] text-black' : 'text-black'}` 
                }
                value={option}
                disabled={disabled}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span
                        className="absolute inset-y-0 left-0 flex items-center pl-3"
                      >
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};