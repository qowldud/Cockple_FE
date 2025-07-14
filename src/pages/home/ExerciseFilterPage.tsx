import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { Accordion } from "../../components/home/Accordion";
import { MultiSelectButtonGroup } from "../../components/home/MultiSelectButtonGroup";
import {
  isFilterDirty,
  useExerciseFilterStore,
} from "../../store/useExerciseFilterStore";
import { useNavigate } from "react-router-dom";
import { CautionModal } from "./CautionModal";

export const ExerciseFilterPage = () => {
  const { region, level, style, time, setFilter } = useExerciseFilterStore();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    const filterState = { region, level, style, time };
    if (isFilterDirty(filterState)) {
      setShowModal(true);
    } else {
      navigate(-1);
    }
  };
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <PageHeader title="필터" onBackClick={handleBack} />

        <div className="flex flex-col gap-vertical-section-s">
          <Accordion title="지역">
            <></>
          </Accordion>
          <Accordion title="전국 급수">
            <MultiSelectButtonGroup
              options={[
                "전체",
                "왕초심",
                "초심",
                "D조",
                "C조",
                "B조",
                "A조",
                "준자강",
                "자강",
              ]}
              selected={level}
              onChange={newVal => setFilter("level", newVal)}
            />
          </Accordion>
          <Accordion title="운동 스타일">
            <MultiSelectButtonGroup
              options={["전체", "여복", "남복", "혼복"]}
              selected={style}
              singleSelect={true}
              onChange={newVal => setFilter("style", newVal)}
            />
          </Accordion>
          <Accordion title="활동 시간">
            <MultiSelectButtonGroup
              options={["상시", "오전", "오후"]}
              selected={time}
              singleSelect={true}
              onChange={newVal => setFilter("time", newVal)}
            />
          </Accordion>
        </div>
      </div>

      <div className="flex gap-2"></div>

      {showModal && <CautionModal onClose={() => setShowModal(false)} />}
    </div>
  );
};
