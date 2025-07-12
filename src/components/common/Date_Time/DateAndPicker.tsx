import { useState } from "react";
import PropTypes from "prop-types";
import Picker from "./Picker";

DateAndTimePicker.propTypes = {
  onDueChange: PropTypes.func.isRequired,
};

export default function DateAndTimePicker({ onDueChange }) {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("01");
  const [selectedDay, setSelectedDay] = useState("01");
  //   const [selectedHour, setSelectedHour] = useState("12");
  //   const [selectedMinute, setSelectedMinute] = useState("00");
  const [confirmedDue, setConfirmedDue] = useState("");

  const handleConfirm = () => {
    const dueString = `${selectedYear}년 ${selectedMonth}월 ${selectedDay}일`;
    setConfirmedDue(dueString); // 선택된 일시로 업데이트
    // New.jsx 로 전달
    onDueChange(`${selectedYear}.${selectedMonth}.${selectedDay}`);
  };
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 75 }, (_, i) =>
    (currentYear - i).toString(),
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );
  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );

  return (
    <>
      <div className=" flex w-80 bg-white  mx-auto border border-gray-300 shadow-ds400 rounded-3xl relative ">
        <div className="w-1/3 z-2">
          <Picker
            options={years}
            selectedValue={selectedYear}
            onChange={setSelectedYear}
          />
        </div>
        <div className="w-1/3 z-2">
          <Picker
            options={months}
            selectedValue={selectedMonth}
            onChange={setSelectedMonth}
          />
        </div>
        <div className="flex w-1/3 z-2">
          <Picker
            options={days}
            selectedValue={selectedDay}
            onChange={setSelectedDay}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-75 bg-gy-100 z-0 px-[0.625rem] absolute top-1/2  left-1/2 translate-x-[-50%] translate-y-[-50%] h-10 rounded-lg"></div>
        </div>
      </div>

      {confirmedDue && (
        <div className="font-pretendard font-bold text-xl text-center">
          {confirmedDue}
        </div>
      )}

      <button
        type="button"
        onClick={handleConfirm}
        className="p-2 bg-gray-200 font-pretendard text-card-price text-lg text-gray-800 rounded-lg"
      >
        결정
      </button>
    </>
  );
}
