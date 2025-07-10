import { PageHeader } from "../../components/common/system/header/PageHeader";
import CheckCircled from "../../assets/icons/check_circled.svg?react";
import CheckCircledFilled from "../../assets/icons/check_circled_filled.svg?react";
import { Sort } from "../../components/MyPage/Sort";
import { Group_M } from "../../components/common/contentcard/Group_M";
import { useState } from "react";

interface GroupMProps {
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
              <label className="header-h5">내가 만든 모임</label>
            </div>
            <div className="flex items-center gap-2">
                <Sort/>
            </div>
          </div>
        </div>

        {/* Group_M 갯수 나중에 서버와 함께 */}
        <div className="flex flex-col gap-4">
          {Array.isArray(groups) && groups.length > 0 ? (
            groups.map((group, idx) => (
              <div key={idx}>
                <Group_M {...group} />
                <div className="border border-[#E4E7EA] mx-1 mt-2" />
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm text-center">표시할 모임이 없습니다.</p>
          )}
        </div>

      </div>
    </>
  );
};
