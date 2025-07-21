import { PageHeader } from "../../components/common/system/header/PageHeader";
import { useForm } from "react-hook-form";
import TextBox from "../../components/common/Text_Box/TextBox";
import { useRef, useState } from "react";
import DateAndTimePicker, {
  type DateAndTimePickerHandle,
} from "../../components/common/Date_Time/DateAndPicker";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../../components/common/ProgressBar";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import InputField from "../../components/common/Search_Filed/InputField";

export const OnboardingInfoPage = () => {
  const navigate = useNavigate();
  const {
    // data,
    // register,
    // handleSubmit,
    setValue,
    watch,
    // getValues,
    // formState: { errors },
  } = useForm();

  const [selected, isSelected] = useState<"boy" | "girl" | null>(null);

  const [selectedDate, setSelectedDate] = useState("");
  const pickerRef = useRef<DateAndTimePickerHandle>(null);

  const handleCloseOverlay = () => {
    if (pickerRef.current) {
      const date = pickerRef.current.getDueString(); // 선택된 값
      setSelectedDate(date); //  input에 넣기
      setValue("birthday", date, { shouldValidate: true }); //set Value를 통해 useForm에 전달
    }
    setOpenModal(false); // 닫기
  };

  const handleInputDetected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.length <= 17) {
      setValue("name", input, { shouldValidate: true });
    }
  };

  const [openModal, setOpenModal] = useState(false);

  const nameValue = watch("name") || "";
  const birthdayValue = watch("birthday") || "";
  const isFormValid =
    nameValue.length > 0 && selected !== null && birthdayValue.length > 0;

  return (
    <>
      <div className="flex flex-col -mb-8">
        <PageHeader title="회원 정보 입력" />
        <ProgressBar width={!isFormValid ? "4" : "24"} />

        <section className="text-left flex flex-col  gap-3 w-full ">
          <p className="header-h4 pt-8 pb-5">기본 정보를 입력해주세요</p>
          {/* 첫번째 */}
          <InputField
            labelName="이름"
            // {...register("name", {
            //   maxLength: {
            //     value: 2,
            //     message: "",
            //   },
            // })}
            value={nameValue}
            InputLength={nameValue.length}
            onChange={handleInputDetected}
          />

          {/* 두번째 */}
          <div className="text-left flex flex-col gap-2 pb-5">
            <div className="flex px-1 gap-[2px] items-center">
              <p className="header-h5">성별</p>
              <img src="/src/assets/icons/cicle_s_red.svg" alt="icon-cicle" />
            </div>
            <div className="flex gap-[13px]">
              <TextBox
                children="남성"
                isSelected={selected === "boy"}
                onClick={() => isSelected(selected === "boy" ? null : "boy")}
                className="w-19"
              />
              <TextBox
                children="여성"
                isSelected={selected === "girl"}
                onClick={() => isSelected(selected === "girl" ? null : "girl")}
                className="w-19"
              />
            </div>
          </div>
          {/* 세번째 */}

          <InputField
            labelName="생년월일"
            onClick={() => setOpenModal(true)}
            readOnly
            value={selectedDate}
          />

          {openModal && (
            <div
              id="date-picker-overlay"
              className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"
              onClick={e => {
                const target = e.target as HTMLElement;
                if (target.id === "date-picker-overlay") {
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
        </section>

        {/* 버튼 */}
        <div
          className="flex items-center justify-center pt-21 mt-[3px] shrink-0 "
          onClick={() => navigate("/onboarding/level")}
        >
          <Btn_Static
            label="다음"
            kind="GR400"
            size="L"
            initialStatus={!isFormValid ? "disabled" : "default"}
          />
        </div>
      </div>
    </>
  );
};
