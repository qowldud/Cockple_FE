import { useState } from "react";
import Female from "../../../assets/icons/female.svg?react";
import Male from "../../../assets/icons/male.svg?react";
import Vector from "../../../assets/icons/Vector.svg?react";
import RD500_S_Icon from "../Btn_Static/Icon_Btn/RD500_S_Icon";

interface GroupMProps {
  id: number;
  groupName: string;
  groupImage: string;
  location: string;
  femaleLevel: string;
  maleLevel: string;
  nextActivitDate: string;
  upcomingCount: number;
  like?: boolean;
  isMine: boolean;
  onToggleFavorite?: (id: number) => void;
}

export const Group_M = ({
  id,
  groupName,
  groupImage,
  location,
  femaleLevel,
  maleLevel,
  nextActivitDate,
  upcomingCount,
  like = false,
  // isMine,
  onToggleFavorite,
}: GroupMProps) => {
  const [isPressing, setIsPressing] = useState(false);
  const [favorite, setFavorite] = useState(like);

  const handleToggleFavorite = () => {
    const newFavorite = !favorite;
    setFavorite(newFavorite);
    onToggleFavorite?.(id);
  };

  return (
    <div
      onMouseDown={() => setIsPressing(true)}
      onMouseUp={() => setIsPressing(false)}
      onMouseLeave={() => setIsPressing(false)}
      onTouchStart={() => setIsPressing(true)}
      onTouchEnd={() => setIsPressing(false)}
      className={`p-[0.5rem] w-[21.4375rem] h-[6.5rem] rounded-[0.75rem] 
        ${isPressing ? "bg-[#F4F5F6]" : "bg-white"} 
        flex items-center gap-[0.75rem] transition-colors duration-150`}
    >
      {/* 이미지 영역 */}
      <div className="relative">
        <img
          src={groupImage}
          alt={groupName}
          className="w-[5.5rem] h-[5.5rem] rounded-[0.5rem] object-cover"
        />
        <div className="w-[1.625rem] h-[1.625rem] absolute bottom-[0.25rem] right-[0.25rem]">
          <RD500_S_Icon isActive={favorite} onClick={handleToggleFavorite} />
        </div>
      </div>

      {/* 정보 영역 */}
      <div className="w-[14.1875rem] h-[5.5rem] flex flex-col gap-[0.5rem] items-start text-black overflow-hidden">
        <p className="text-left body-rg-500 truncate w-full" title={groupName}>
          {groupName}
        </p>

        <div className="body-sm-400 flex flex-col gap-[0.375rem] w-full">
          {/* 위치 */}
          <div className="flex items-center gap-[0.25rem] w-full overflow-hidden">
            <Vector className="w-[0.875rem] h-[0.875rem] shrink-0" />
            <span className="text-left truncate w-full" title={location}>
              {location}
            </span>
          </div>

          {/* 레벨 */}
          <div className="flex gap-[0.625rem] w-full">
            <div className="flex items-center gap-[0.25rem] max-w-[6rem] overflow-hidden">
              <Female className="w-[0.875rem] h-[0.875rem] shrink-0" />
              <span className="text-left truncate" title={femaleLevel}>
                {femaleLevel}
              </span>
            </div>
            <div className="flex items-center gap-[0.25rem] max-w-[6rem] overflow-hidden">
              <Male className="w-[0.875rem] h-[0.875rem] shrink-0" />
              <span className="text-left  truncate" title={maleLevel}>
                {maleLevel}
              </span>
            </div>
          </div>

          {/* 다음 일정 */}
          <p
            className="truncate w-full text-left"
            title={`${nextActivitDate} 운동 • 운동 ${upcomingCount}개 잔여 예정`}
          >
            {nextActivitDate} 운동 • 운동 {upcomingCount}개 잔여 예정
          </p>
        </div>
      </div>
    </div>
  );
};
