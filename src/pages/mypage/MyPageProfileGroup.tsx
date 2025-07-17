import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { Sort } from "../../components/MyPage/Sort";
import { Group_M } from "../../components/common/contentcard/Group_M";
import { ProfileMyGroupNone } from "../../components/MyPage/ProfileMyGroupNone";

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

interface MyPageProfileGroup {
  groups: GroupMProps[];
}

export const MyPageProfileGroup = ({ groups }: MyPageProfileGroup) => {
  const [favoriteGroups, setFavoriteGroups] = useState<GroupMProps[]>(groups || []);

  const handleToggleFavorite = (id: number) => {
    setFavoriteGroups(prev =>
      prev.map(group =>
        group.id === id ? { ...group, isFavorite: !group.isFavorite } : group,
      ),
    );
  };

  const hasGroups = favoriteGroups.length > 0;

  return (
    <>
      <PageHeader title="모임" />

      <div className="flex flex-col h-full w-full max-w-[23.4375rem] p-4">
        {hasGroups && (
          <div className="mb-8 flex justify-end">
            <Sort />
          </div>
        )}

        <div className="flex flex-col gap-4">
          {hasGroups ? (
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
            <ProfileMyGroupNone />
          )}
        </div>
      </div>
    </>
  );
};
