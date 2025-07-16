import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { Sort } from "../../components/MyPage/Sort";
import { Group_M } from "../../components/common/contentcard/Group_M";
import { MyGroupNone } from "../../components/MyPage/MyGroupNone";

import CheckCircled from "../../assets/icons/check_circled.svg?react";
import CheckCircledFilled from "../../assets/icons/check_circled_filled.svg?react";

interface GroupMProps {
  id: number;
  title: string;
  location: string;
  femaleLevel: string;
  maleLevel: string;
  summary: string;
  imageSrc: string;
  isFavorite?: boolean;
}

interface MyPageMyGroupPageProps {
  groups: GroupMProps[];
}

export const MyPageMyGroupPage = ({ groups }: MyPageMyGroupPageProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const [favoriteGroups, setFavoriteGroups] = useState<GroupMProps[]>(groups || []);

  const handleToggleFavorite = (id: number) => {
    setFavoriteGroups(prev =>
      prev.map(group =>
        group.id === id
          ? { ...group, isFavorite: !group.isFavorite }
          : group,
      ),
    );
  };

  return (
    <>
      <PageHeader title="내 모임" />

      <div className="flex flex-col h-full w-full max-w-[23.4375rem] p-4">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <button onClick={() => setIsChecked(!isChecked)}>
                {isChecked ? (
                  <CheckCircledFilled className="w-4 h-4" />
                ) : (
                  <CheckCircled className="w-4 h-4" />
                )}
              </button>
              <label className="body-rg-500">내가 만든 모임</label>
            </div>
            <div className=" flex items-center gap-2">
              <Sort />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {favoriteGroups.length > 0 ? (
            favoriteGroups.map(group => (
              <div key={group.id}>
                <Group_M
                  {...group}
                  onToggleFavorite={handleToggleFavorite}
                />
                <div className="border border-[#E4E7EA] mx-1 mt-2" />
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
