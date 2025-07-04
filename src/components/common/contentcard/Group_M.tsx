import { useState } from "react";
import Heart_GY from "../../../assets/icons/heart_GY.svg?react";
import Female from "../../../assets/icons/female.svg?react";
import Male from "../../../assets/icons/male.svg?react";
import Vector from "../../../assets/icons/Vector.svg?react";

interface GroupMProps {
  title: string;
  location: string;
  femaleLevel: string; 
  maleLevel: string;   
  summary: string;     
  imageSrc: string;    
  isFavorite?: boolean; 
}

export const Group_M = ({
  title,
  location,
  femaleLevel,
  maleLevel,
  summary,
  imageSrc,
  isFavorite = false, 
}: GroupMProps) => {
  const [isPressing, setIsPressing] = useState(false);

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
          src={imageSrc} 
          alt={title} 
          className="w-[5.5rem] h-[5.5rem] rounded-[0.5rem] object-cover"
        />
        {isFavorite && (
          <Heart_GY className="w-[1.625rem] h-[1.625rem] absolute bottom-[0.25rem] right-[0.25rem]" />
        )}
      </div>

      {/* 글/정보 영역 */}
      <div className="w-[14.1875rem] h-[5.5rem] flex flex-col gap-[0.5rem] items-start text-black">
        <p className="body-rg-500">{title}</p> 

        <div className="body-sm-400 flex flex-col gap-[0.375rem]">
          <div className="flex items-center gap-[0.25rem]">
            <Vector className="w-[0.875rem] h-[0.875rem]" />
            <span>{location}</span> 
          </div>

          <div className="flex gap-[0.625rem]">
            <div className="flex items-center gap-[0.25rem] whitespace-nowrap">
              <Female className="w-[0.875rem] h-[0.875rem]" />
              <span>{femaleLevel}</span> 
            </div>
            <div className="flex items-center gap-[0.25rem] whitespace-nowrap">
              <Male className="w-[0.875rem] h-[0.875rem]" />
              <span>{maleLevel}</span> 
            </div>
          </div>

          <p className="flex">{summary}</p>
        </div>        
      </div>
    </div>
  );
};