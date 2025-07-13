import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { useForm } from "react-hook-form";
import TextBox from "../../components/common/Text_Box/TextBox";
import { useState } from "react";

import DateAndTimePicker from "../../components/common/Date_Time/DateAndPicker";
import { useNavigate } from "react-router-dom";

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
  const handleDueChange = date =>
    setValue("selectedDue", date, { shouldValidate: true });

  // 입력값 변경 핸들러
  // const handlePriceChange = e => {
  //   const inputValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자가 아닌 값 제거
  //   setValue("price", inputValue, { shouldValidate: true }); // 숫자로만 이루어진 값을 react-hook-form 값으로 저장
  // };
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <PageHeader title="회원 정보 입력" />
        <div className="text-left flex flex-col  gap-8 w-full flex-1">
          <p className="header-h4 pt-16">기본 정보를 입력해주세요</p>
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
            />

            {openModal && (
              <div
                className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"
                onClick={e => {
                  if (e.target.id === "date-picker-overlay") {
                    setOpenModal(false); // 바깥 누르면 닫기
                  }
                }}
              >
                <div
                  id="date-picker-overlay"
                  className="w-full h-full flex items-center justify-center"
                >
                  <div
                    onClick={e => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
                  >
                    <DateAndTimePicker onDueChange={handleDueChange} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex items-center justify-center mb-3">
          <Btn_Static
            label="다음"
            size="L"
            kind="GR400"
            // initialStatus="disabled"
            onClick={() => navigate("/onboarding/level")}
          />
        </div>
      </div>
    </>
  );
};
