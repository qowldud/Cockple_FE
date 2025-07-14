import { useState } from "react";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import CheckBoxBtn from "../../components/common/DynamicBtn/CheckBoxBtn";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { useNavigate } from "react-router-dom";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";

export const OnboardingLevelPage = () => {
  const level = ["초심", "C조", "D조"];
  const [open, setOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col">
      <PageHeader title="회원 정보 입력" />
      <section className="flex gap-8 text-left flex-col flex-1 pt-15">
        <div className="flex flex-col gap-2">
          <p className="header-h4 text-left">전국 급수를 입력해주세요.</p>
          <div className="body-md-500 ">
            <p>급수를 입력하면,</p>
            <p>내 실력에 맞는 모임을 추천받을 수 있어요!</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-2 flex-col">
            <div className="flex">
              <p className={`ml-1 ${disabled ? "text-gy-500" : "text-block"}`}>
                전국 급수{" "}
              </p>
              <img src="/src/assets/icons/cicle_s_red.svg" alt="" />
            </div>

            <div className="flex items-center gap-3">
              {/* 여기 */}
              <div className="relative inline-block w-40">
                <button
                  className="border px-3 py-[0.625rem] flex justify-between gap-2 rounded-xl border-gy-200 w-40  h-11  cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <span className={disabled ? "text-gy-500" : "text-black"}>
                    {selectedLevel}
                  </span>
                  <img
                    src="/src/assets/icons/arrow_down.svg"
                    alt="Dropdown arrow"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4 "
                  />
                </button>
                {open && !disabled && (
                  <div className="absolute mt-1">
                    <ul className=" border rounded-xl border-gy-200">
                      {level.map((item, idx) => {
                        return (
                          <li
                            key={idx} //추후 key값 수정 예정
                            onClick={() => {
                              setOpen(false);
                              setSelectedLevel(item);
                            }}
                            className=" cursor-pointer w-40 rounded-xl px-3 py-[0.625rem] "
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              {/* 여기 */}

              <CheckBoxBtn
                children="급수 없음"
                onClick={() => {
                  const newDisabled = !disabled;
                  setDisabled(newDisabled);
                  if (!newDisabled) {
                    setOpen(false);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className="flex items-center justify-center"
        onClick={() => navigate("/onboarding/address")}
      >
        <Grad_GR400_L label="다음" />
      </div>
    </div>
  );
};
