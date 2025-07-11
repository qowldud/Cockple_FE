import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { MyExerciseSort } from "../../components/MyPage/MyExerciseSort";
import { ContentCardL } from "../../components/common/contentcard/ContentCardL";
import { MyGroupNone } from "../../components/MyPage/MyGroupNone";

import type { ContentCardLProps } from "../../components/common/contentcard/ContentCardL";

interface MyPageMyExercisePageProps {
  myActivityCount: ContentCardLProps[];
}

export const MyPageMyExercisePage = ({ myActivityCount }: MyPageMyExercisePageProps) => {
  const [selectedTab, setSelectedTab] = useState<"전체" | "참여 예정" | "참여 완료">("전체");
  // 참여 예정 및 참여 완료 보이는 컴포넌트 분리
  const filteredList = (myActivityCount ?? []).filter((item) => {
    if (selectedTab === "전체") return true;
    if (selectedTab === "참여 예정") return !item.isCompleted;
    if (selectedTab === "참여 완료") return item.isCompleted;
    return true;
  });


  return (
    <>
      <PageHeader title="내 운동" />

      <div className="flex flex-col h-full w-full max-w-[23.4375rem] p-4">

        <div className="flex gap-1 mb-2">
          {["전체", "참여 예정", "참여 완료"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab as typeof selectedTab)}
              className="flex flex-col items-center w-[6rem]"
            >
              <span className="header-h5">{tab}</span>
              <div
                className={`h-[2px] w-full mt-1 transition-all duration-150 ${
                  selectedTab === tab ? "bg-green-600" : "bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex justify-end mb-3">
          <MyExerciseSort />
        </div>

        <div className="flex flex-col gap-4">
        {filteredList.length > 0 ? (
          filteredList.map((group, idx) => (
            <div key={idx}>
              <ContentCardL {...group} />
            </div>
          ))
        ) : (
          <MyGroupNone />
        )}

        </div>
      </div>
    </>
  );
};
