import { PageHeader } from "../../components/common/system/header/PageHeader";
import { useForm } from "react-hook-form";
import TextBox from "../../components/common/Text_Box/TextBox";
import { useRef, useState } from "react";
import DateAndTimePicker from "../../components/common/Date_Time/DateAndPicker";
import { useNavigate } from "react-router-dom";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";
import { ProgressBar } from "../../components/common/ProgressBar";

export const OnboardingInfoPage = () => {
  const {
    data,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [selected, isSelected] = useState<"boy" | "girl" | null>(null);

  const [selectedDate, setSelectedDate] = useState("");
  const pickerRef = useRef(null);

  const handleCloseOverlay = () => {
    if (pickerRef.current) {
      const date = pickerRef.current.getDueString(); // 선택된 값
      setSelectedDate(date); //  input에 넣기
      setValue("birthday", date, { shouldValidate: true }); //set Value를 통해 useForm에 전달
    }
    setOpenModal(false); // 닫기
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <PageHeader title="회원 정보 입력" />
        <ProgressBar width="4" />

        <div className="text-left flex flex-col  gap-8 w-full flex-1">
          <p className="header-h4 pt-8">기본 정보를 입력해주세요</p>

          {/* 첫번째 */}
          <div className="text-left flex flex-col gap-2">
            <div className="flex px-1 gap-[2px] items-center">
              <p className="header-h5">이름</p>
              <img src="/src/assets/icons/cicle_s_red.svg" alt="icon-cicle" />
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-xl border-gy-200 border py-[0.625rem] px-3 focus:outline-none focus:border-active "
                {...register("name", {
                  required: "이름은 필수 입력입니다",
                  maxLength: {
                    value: 17,
                    message: "최대 17글자만 가능합니다",
                  },
                })}
              />
              <p className="absolute right-2 top-3 body-rg-500 text-gy-400">
                ( 0 / 17 )
              </p>
            </div>
          </div>
          {/* 두번째 */}
          <div className="text-left flex flex-col gap-2">
            <div className="flex px-1 gap-[2px] items-center">
              <p className="header-h5">성별</p>
              <img src="/src/assets/icons/cicle_s_red.svg" alt="icon-cicle" />
            </div>
            <div className="flex gap-[13px]">
              <TextBox
                children="남성"
                isSelected={selected === "boy"}
                onClick={() => isSelected(selected === "boy" ? null : "boy")}
              />
              <TextBox
                children="여성"
                isSelected={selected === "girl"}
                onClick={() => isSelected(selected === "girl" ? null : "girl")}
              />
            </div>
          </div>
          {/* 세번째 */}
          <div className="text-left flex flex-col gap-2">
            <div className="flex px-1 gap-[2px] items-center">
              <p className="header-h5">생년월일</p>
              <img src="/src/assets/icons/cicle_s_red.svg" alt="icon-cicle" />
            </div>

            <input
              type="text"
              className="w-full rounded-xl border-gy-200 border py-[0.625rem] px-3 focus:outline-none focus:border-active "
              onClick={() => setOpenModal(true)}
              value={selectedDate}
            />

            {openModal && (
              <div
                id="date-picker-overlay"
                className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"
                onClick={e => {
                  if (e.target.id === "date-picker-overlay") {
                    handleCloseOverlay();
                  }
                }}
              >
                <div
                  onClick={e => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
                >
                  <DateAndTimePicker ref={pickerRef} />
                  {/* <DateAndTimePicker ref={pickerRef} showTime={true} /> */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 버튼 */}
        <div
          className="flex items-center justify-center"
          onClick={() => navigate("/onboarding/level")}
        >
          <Grad_GR400_L label="다음" />
        </div>
      </div>
    </>
  );
};
