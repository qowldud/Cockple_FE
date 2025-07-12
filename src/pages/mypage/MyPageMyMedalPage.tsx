import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import { MyMedal } from "../../components/common/contentcard/MyMedal";
import { MyPage_Medal2 } from "../../components/common/contentcard/MyPage_Medal2";

interface MyMedalProps {
  name: string;
  gender: string;
  group: string;
  birth: string;
  imageSrc: string;

  totalMedalsCount?: number;
  goldMedals?: number;
  silverMedals?: number;
  bronzeMedals?: number;
  disabled?: boolean;
}

export const MyPageMyMedalPage = ({
  name,
  gender,
  group,
  birth,
  imageSrc,

  totalMedalsCount = 0,
  goldMedals = 0,
  silverMedals = 0,
  bronzeMedals = 0,
  disabled = false,
}: MyMedalProps) => {
  const [selectedTab, setSelectedTab] = useState<"전체" | "미입상 기록">("전체");

  // 예시용 리스트 데이터
  const dummyList = [
    { name: "배드민턴 대회", isAwarded: true },
    { name: "탁구 친선전", isAwarded: false },
    { name: "농구 리그", isAwarded: true },
  ];

  const filteredList = dummyList.filter((item) => {
    if (selectedTab === "전체") return true;
    if (selectedTab === "미입상 기록") return !item.isAwarded;
    return true;
  });

  return (
    <>
      <PageHeader title="내 메달" />
      <MyPage_Medal2
        totalMedalsCount={totalMedalsCount}
        goldMedals={goldMedals}
        silverMedals={silverMedals}
        bronzeMedals={bronzeMedals}
        disabled={disabled}
      />

      <div className="flex gap-1 mb-2">
        {["전체", "미입상 기록"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab as "전체" | "미입상 기록")}
            className="flex flex-col items-center w-[6rem]"
          >
            <span className="header-h5">{tab}</span>
            <div
              className={`h-[2px] w-full mt-1 transition-all duration-150 ${
                selectedTab === tab ? "bg-[#1ABB65]" : "bg-transparent"
              }`}
            />
          </button>
        ))}
      </div>

      {/* 필터링된 메달 또는 경기 기록을 나타내는 리스트 (예시) */}
      {/* <div className="flex flex-col gap-2 mb-4">
        {filteredList.map((item, index) => (
          <div key={index} className="px-4 py-2 border rounded-lg text-sm">
            {item.name}{" "}
            <span className="text-gray-500">
              {item.isAwarded ? "(입상)" : "(미입상)"}
            </span>
          </div>
        ))}
      </div> */}

      {/* 실제 메달 카드 (추가 props 필요시 수정) */}
      <MyMedal />

      <Btn_Static kind="GR600" textColor="text-white" bgColor="bg-[#0B9A4E]" size="L_Thin" label="대화 기록 추가하기" />
    </>
  );
};
