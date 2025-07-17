import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { MultiSelectButtonGroup } from "../../components/home/MultiSelectButtonGroup";
import {
  isFilterDirty,
  useExerciseFilterStore,
} from "../../store/useExerciseFilterStore";
import { useNavigate } from "react-router-dom";
import { CautionModal } from "./CautionModal";
import { CustomSelect } from "./CustomSelect";
import { Toggle } from "../../components/common/Toggle";

const cities = [
  { label: "서울특별시", value: "서울특별시", enabled: true },
  { label: "부산광역시", value: "부산광역시", enabled: false },
  { label: "대구광역시", value: "대구광역시", enabled: false },
  { label: "인천광역시", value: "인천광역시", enabled: false },
  { label: "광주광역시", value: "광주광역시", enabled: false },
  { label: "대전광역시", value: "대전광역시", enabled: false },
  { label: "울산광역시", value: "울산광역시", enabled: false },
  { label: "세종특별자치시", value: "세종특별자치시", enabled: false },
  { label: "경기도", value: "경기도", enabled: false },
  { label: "강원특별자치도", value: "강원특별자치도", enabled: false },
  { label: "충청북도", value: "충청북도", enabled: false },
  { label: "충청남도", value: "충청남도", enabled: false },
  { label: "전라북도", value: "전라북도", enabled: false },
  { label: "전라남도", value: "전라남도", enabled: false },
  { label: "경상북도", value: "경상북도", enabled: false },
  { label: "경상남도", value: "경상남도", enabled: false },
  { label: "제주특별자치도", value: "제주특별자치도", enabled: false },
  { label: "전국구", value: "전국구", enabled: false },
];

const seoulDistricts = [
  "전체",
  "종로구",
  "중구",
  "용산구",
  "성동구",
  "광진구",
  "동대문구",
  "중랑구",
  "성북구",
  "강북구",
  "도봉구",
  "노원구",
  "은평구",
  "서대문구",
  "마포구",
  "양천구",
  "강서구",
  "구로구",
  "금천구",
  "영등포구",
  "동작구",
  "관악구",
  "서초구",
  "강남구",
  "송파구",
  "강동구",
];

export const ExerciseFilterPage = () => {
  const { region, level, style, time, setFilter } = useExerciseFilterStore();
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("전체");
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
          <Toggle title="지역">
            <div className="flex justify-between">
              <CustomSelect
                options={cities}
                value={selectedCity}
                placeholder="시/도 선택"
                onChange={city => {
                  setSelectedCity(city);
                  setSelectedDistrict("전체");
                  setFilter("region", [city, "전체"]);
                }}
              />

              <CustomSelect
                options={seoulDistricts.map(d => ({
                  label: d,
                  value: d,
                  enabled: true,
                }))}
                value={selectedDistrict}
                onChange={gu => {
                  setSelectedDistrict(gu);
                  setFilter("region", [selectedCity, gu]);
                }}
                disabled={!selectedCity}
                placeholder="전체"
              />
            </div>
          </Toggle>
          <Toggle title="전국 급수">
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
          </Toggle>
          <Toggle title="운동 스타일">
            <MultiSelectButtonGroup
              options={["전체", "여복", "남복", "혼복"]}
              selected={style}
              singleSelect={true}
              onChange={newVal => setFilter("style", newVal)}
            />
          </Toggle>
          <Toggle title="활동 시간">
            <MultiSelectButtonGroup
              options={["상시", "오전", "오후"]}
              selected={time}
              singleSelect={true}
              onChange={newVal => setFilter("time", newVal)}
            />
          </Toggle>
        </div>
      </div>

      <div className="flex gap-2"></div>

      {showModal && <CautionModal onClose={() => setShowModal(false)} />}
    </div>
  );
};
