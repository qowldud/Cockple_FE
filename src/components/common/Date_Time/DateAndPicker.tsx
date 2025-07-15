import { forwardRef, useImperativeHandle, useState } from "react";
import Picker from "./Picker";

const DateAndTimePicker = forwardRef(function DateAndTimePicker(_, ref) {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("01");
  const [selectedDay, setSelectedDay] = useState("01");
  //   const [selectedHour, setSelectedHour] = useState("12");
  //   const [selectedMinute, setSelectedMinute] = useState("00");
  // const [confirmedDue, setConfirmedDue] = useState("");

  const getDueString = () => {
    return `${selectedYear}.${selectedMonth}.${selectedDay}`;
  };

  // 부모가 ref로 접근할 수 있게 해줌
  useImperativeHandle(ref, () => ({
    getDueString,
  }));

  // const handleConfirm = () => {
  //   const dueString = `${selectedYear}년 ${selectedMonth}월 ${selectedDay}일`;
  //   setConfirmedDue(dueString); // 선택된 일시로 업데이트
  //   onDueChange(`${selectedYear}.${selectedMonth}.${selectedDay}`);
  // };
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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div
            className="bg-gy-100 h-10 rounded-lg"
            style={{ width: "calc(100% - 2rem)" }}
          ></div>
        </div>
        <div className="w-1/3 z-20">
          <Picker
            options={years}
            selectedValue={selectedYear}
            onChange={setSelectedYear}
          />
        </div>
        <div className="w-1/3 z-20">
          <Picker
            options={months}
            selectedValue={selectedMonth}
            onChange={setSelectedMonth}
          />
        </div>
        <div className="flex w-1/3 z-20">
          <Picker
            options={days}
            selectedValue={selectedDay}
            onChange={setSelectedDay}
          />
        </div>
      </div>
    </>
  );
});

export default DateAndTimePicker;
