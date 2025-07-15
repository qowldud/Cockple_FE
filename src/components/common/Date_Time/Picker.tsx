import { useEffect, useRef } from "react";

interface PickerProps {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function Picker({
  options,
  selectedValue,
  onChange,
}: PickerProps) {
  const containerRef = useRef(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollTop / 40);
    onChange(options[index] || "00");
  };
  //   const itemHeight = 40;s

  //   const handleScroll = () => {
  //     // const container = containerRef.current;
  //     const container = containerRef.current;

  //     if (!container) return;

  //     // const itemHeight = 40;
  //     const containerHeight = container.clientHeight;
  //     const offset = (containerHeight - itemHeight) / 2;

  //     const scrollIndex = Math.round((container.scrollTop - offset) / itemHeight);
  //     onChange(options[scrollIndex] || "00");
  //   };

  //   useEffect(() => {
  //     const container = containerRef.current;
  //     if (!container) return;

  //     const index = options.findIndex(option => option === selectedValue);
  //     if (index === -1) return;

  //     const containerHeight = container.clientHeight;
  //     const offset = (containerHeight - itemHeight) / 2;

  //     container.scrollTop = index * itemHeight + offset;
  //   }, [selectedValue, options]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="w-full h-52 overflow-y-scroll scrollbar-hide snap-y snap-mandatory rounded-lg text-center overscroll-contain "
    >
      <div className="h-20 flex-shrink-0" />
      {options.map(option => (
        <div
          key={option}
          className={`h-10 flex items-center justify-center snap-center ${
            option === selectedValue ? "text-black " : "text-gray-300"
          }`}
        >
          {option}
        </div>
      ))}
      <div className="h-20 flex-shrink-0" />
    </div>
  );
}
