import { useLocation } from "react-router-dom";
import { useState } from "react";

import TabSelector from "../../components/common/TabSelector";
import Sort from "../../components/common/Sort";
import LikedList from "../../components/like/LikedList";

import { groupDummy } from "../../components/like/groupDummy";
import { exerciseDummy } from "../../components/like/exerciseDummy";
import BottomSheetSort from "../../components/like/BottomSheetSort";

const sortOptionsByTab = {
  group: ["최신순", "오래된 순", "운동 많은 순"],
  exercise: ["최신순", "오래된 순"],
};

export const LikedPage = () => {
  const location = useLocation();
  const initialTab = location.state?.tab === "exercise" ? "exercise" : "group";

  const [activeTab, setActiveTab] = useState<"group" | "exercise">(initialTab);
  const [selectedSort, setSelectedSort] = useState("최신순");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = sortOptionsByTab[activeTab];

  const [groupCards, setGroupCards] = useState(groupDummy);
  const [exerciseCards, setExerciseCards] = useState(exerciseDummy);

  const handleSortClick = () => setIsSortOpen(prev => !prev);
  const handleSelectSort = (option: string) => {
    setSelectedSort(option);
    setIsSortOpen(false);
  };

  const handleToggleFavorite = (id: number) => {
    console.log("하트 토글", id);
    // setGroupCards(prev =>
    //   prev.map(card =>
    //     card.id === id ? { ...card, isFavorite: !card.isFavorite } : card,
    //   ),
    // );
    if (activeTab === "group") {
      setGroupCards(prev =>
        prev.map(card =>
          card.id === id ? { ...card, isFavorite: !card.isFavorite } : card,
        ),
      );
    } else {
      setExerciseCards(prev =>
        prev.map(card =>
          card.id === id ? { ...card, isFavorite: !card.isFavorite } : card,
        ),
      );
    }
  };

  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      {/* 탭 선택 */}
      <TabSelector
        selected={activeTab}
        onChange={value => setActiveTab(value as "group" | "exercise")}
        options={[
          { label: "모임", value: "group" },
          { label: "운동", value: "exercise" },
        ]}
      />

      <section className="flex flex-col gap-3">
        {/* 정렬 버튼 */}
        <div className="flex justify-end">
          <Sort
            label={selectedSort}
            isOpen={isSortOpen}
            onClick={handleSortClick}
          />
        </div>

        {/* 카드 목록 */}
        <div>
          <LikedList
            activeTab={activeTab}
            groupCards={groupCards}
            exerciseCards={exerciseDummy}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
      </section>

      {/* BottomSheet Sort */}
      {isSortOpen && (
        <div className="fixed inset-0 bg-black-60 z-40">
          <div
            className="absolute inset-0"
            onClick={() => setIsSortOpen(false)}
          />
          {/* 이 부분은 나중에 지영님이 PR 올리시면 머지 후 수정 */}
          {/* <BottomSheetSort
            options={sortOptions}
            selected={selectedSort}
            onSelect={handleSelectSort}
          /> */}
        </div>
      )}
    </div>
  );
};
