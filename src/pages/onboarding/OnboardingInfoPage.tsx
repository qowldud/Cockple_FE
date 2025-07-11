import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { useForm } from "react-hook-form";
import TextBox from "../../components/common/Text_Box/TextBox";
import { useState } from "react";
export const OnboardingInfoPage = () => {
  const {
    data,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selected, isSelected] = useState<"boy" | "girl" | null>(null);

  return (
    <>
      <div>
        <PageHeader title="회원 정보 입력" />
        <div className="text-left flex flex-col  gap-8 w-full">
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
              {...register("name", {
                required: "이름은 필수 입력입니다",
                maxLength: {
                  value: 17,
                  message: "최대 17글자만 가능합니다",
                },
              })}
            />
          </div>
          <div className="flex items-center justify-center">
            <Btn_Static
              label="다음"
              size="L"
              kind="GR400"
              initialStatus="disabled"
            />
          </div>
        </div>
      </div>
    </>
  );
};
