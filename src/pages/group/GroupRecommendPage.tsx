import { useNavigate } from "react-router-dom";
import CheckBoxBtn from "../../components/common/DynamicBtn/CheckBoxBtn";
import FilterBtn from "../../components/common/DynamicBtn/FilterBtn";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { useState } from "react";
import Sort from "../../components/common/Sort";
import { Exercise_M } from "../../components/common/contentcard/Exercise_M";
import { SortBottomSheet } from "../../components/common/SortBottomSheet";
import { groupExerciseData } from "../../components/home/mock/homeMock";
import {
  isFilterDirty,
  useGroupRecommendFilterState,
} from "../../store/useGroupRecommendFilterStore";

export const GroupRecommendPage = () => {
  const navigate = useNavigate();
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("최신순");
  const [recommend, setRecommend] = useState(false);
  const { region, level, style, day, time, keyword } =
    useGroupRecommendFilterState();
  const filterState = { region, level, style, day, time, keyword };
  const data = groupExerciseData;
  const filterStatus = isFilterDirty(filterState) ? "clicked" : "default";
  return (
    <div className="flex flex-col gap-2">
      <PageHeader title="모임 추천" />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between w-full h-7">
          <CheckBoxBtn
            checked={recommend}
            onClick={() => setRecommend(!recommend)}
          >
            <span>콕플 추천</span>
          </CheckBoxBtn>

          <div className="flex items-center">
            <FilterBtn
              onClick={() => navigate("/group/recommend-filter")}
              forceStatus={filterStatus}
              disabled={recommend}
            >
              <span>필터</span>
            </FilterBtn>
            <div className="h-4 w-px bg-gray-200 mx-1"></div>

            <Sort
              label={sortOption}
              isOpen={isSortOpen}
              onClick={() => setIsSortOpen(!isSortOpen)}
              disabled={recommend}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((item, idx) => (
            <div
              className="flex flex-col pb-3 border-b-[1px] border-gy-200"
              key={item.id}
            >
              <Exercise_M
                id={idx}
                title={item.title}
                date={item.date}
                time={item.time}
                location={item.location}
                imageSrc={item.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>

      <SortBottomSheet
        isOpen={isSortOpen}
        onClose={() => setIsSortOpen(false)}
        selected={sortOption}
        onSelect={option => setSortOption(option)}
        options={["최신순", "운동 많은 순"]}
      />
    </div>
  );
};
