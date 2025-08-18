import { PageHeader } from "../../../components/common/system/header/PageHeader";
import TextBox from "../../../components/common/Text_Box/TextBox";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../../../components/common/ProgressBar";
import Btn_Static from "../../../components/common/Btn_Static/Btn_Static";
import InputField from "../../../components/common/Search_Filed/InputField";
import { MultiSelectButtonGroup } from "../../../components/common/MultiSelectButtonGroup";
import { useGroupMakingFilterStore } from "../../../store/useGroupMakingFilter";
import { Modal_Caution } from "../../../components/MyPage/Modal_Caution";
import Circle_Red from "@/assets/icons/cicle_s_red.svg?url";
import { useMyProfile } from "../../../api/member/my";
import { LEVEL_KEY } from "../../../constants/options";
import { handleInput } from "../../../utils/handleDetected";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";

export const GroupBasicInfo = () => {
  const navigate = useNavigate();

  //store
  const { femaleLevel, setFilter, maleLevel } = useGroupMakingFilterStore();
  const name = useGroupMakingFilterStore(state => state.name);
  const selected = useGroupMakingFilterStore(state => state.type);
  const [localName, setLocalName] = useState(name ?? "");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleConfirmLeave = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const handleCancelLeave = () => {
    setIsModalOpen(false);
  };

  const onBackClick = () => {
    setIsModalOpen(true);
  };

  const isFormValid =
    localName.length > 0 &&
    selected !== null &&
    ((selected === "female" && femaleLevel.length > 0) ||
      (selected === "mixed" && femaleLevel.length > 0 && maleLevel.length > 0));

  const handleInputDetected = handleInput(20, v => {
    setFilter("name", v);
    setLocalName(v);
  });
  const { data: me, isLoading, isError } = useMyProfile();
  // console.log(me);
  const gender = me?.gender;
  const isMale = gender === "MALE";

  const handleNext = () => {
    if (isLoading || !me) {
      return (
        <div>
          <LoadingSpinner />
        </div>
      );
    }
    if (!isFormValid) return;

    navigate("/group/making/activity");
  };
  if (isError) {
    return <p className="body-rg-500">오류 발생</p>;
  }

  return (
    <>
      <div className="flex flex-col -mb-8 " style={{ minHeight: "91dvh" }}>
        <PageHeader title="모임 만들기" onBackClick={onBackClick} />
        <ProgressBar width={!isFormValid ? "4" : "24"} />
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <Modal_Caution
              onConfirm={handleConfirmLeave}
              onCancel={handleCancelLeave}
            />
          </div>
        )}

        <section className="text-left flex flex-col  gap-3 w-full mb-6 flex-1">
          <p className="header-h4 pt-8 pb-5">모임 기본 정보를 입력해주세요.</p>
          {/* 첫번째 */}
          <InputField
            labelName="모임 이름"
            value={localName}
            InputLength={localName.length}
            onChange={handleInputDetected}
          />

          {/* 두번째 */}
          <div className="text-left flex flex-col gap-2 pb-5">
            <div className="flex px-1 gap-[2px] items-center">
              <p className="header-h5">모임 유형</p>
              <img src={Circle_Red} alt="icon-cicle" />
            </div>
            <div className="flex gap-[13px]">
              <TextBox
                children="여복"
                disabled={isMale}
                isSelected={selected === "female"}
                onClick={() =>
                  setFilter("type", selected === "female" ? "" : "female")
                }
                className="w-19"
              />
              <TextBox
                children="혼복"
                isSelected={selected === "mixed"}
                onClick={() =>
                  setFilter("type", selected === "mixed" ? "" : "mixed")
                }
                className="w-19"
              />
            </div>
          </div>
          {/* 세번째1 */}
          {selected === "female" && (
            <div>
              <div className="flex px-1 gap-[2px] items-center mb-2">
                <p className="header-h5">여자 급수</p>
                <img src={Circle_Red} alt="icon-cicle" />
              </div>
              <MultiSelectButtonGroup
                options={LEVEL_KEY}
                selected={femaleLevel}
                onChange={newVal => setFilter("femaleLevel", newVal)}
              />
            </div>
          )}
          {/* 세번째2 */}
          {selected === "mixed" && (
            <>
              <section className="gap-8 flex flex-col">
                <div>
                  <div className="flex px-1 gap-[2px] items-center shrink-0 mb-2">
                    <p className="header-h5">여자 급수</p>
                    <img src={Circle_Red} alt="icon-cicle" />
                  </div>
                  <MultiSelectButtonGroup
                    options={LEVEL_KEY}
                    selected={femaleLevel}
                    onChange={newVal => setFilter("femaleLevel", newVal)}
                  />
                </div>
                <div>
                  <div className="flex px-1 gap-[2px] items-center mb-2">
                    <p className="header-h5">남자 급수</p>
                    <img src={Circle_Red} alt="icon-cicle" />
                  </div>
                  <MultiSelectButtonGroup
                    options={LEVEL_KEY}
                    selected={maleLevel}
                    onChange={newVal => setFilter("maleLevel", newVal)}
                  />
                </div>
              </section>
            </>
          )}
        </section>

        {/* 버튼 */}
        <div
          className={`flex items-center justify-center mb-5 sm:mb-4.5 mt-20  shrink-0 `}
          onClick={handleNext}
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
