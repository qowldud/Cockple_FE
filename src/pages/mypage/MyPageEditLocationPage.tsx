import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import Search from "../../assets/icons/search.svg?react";
import LocationIcon from "../../assets/icons/mylocation.svg";
import { LocationList } from "../../components/common/contentcard/LocationList";

export const MyPageEditLocationPage = () => {
  const [location, setLocation] = useState("");

  return (
    <>
      <PageHeader title="주소 검색" />
      <div className="flex flex-col p-4">
        <div className="mb-2">
          <div className="relative">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)} 
              placeholder="건물명, 도로명으로 검색"
              className="w-full border rounded-xl p-2 pr-14 body-md-500 text-[#C0C4CD] border-[#E4E7EA] focus:outline-none"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="w-6 h-6" />
            </span>
          </div>
        </div>

        {/* 위치 버튼 */}
        <Btn_Static
          kind="GY100"
          size="L_Thin"
          label="현재 위치 불러오기"
          iconMap={{
            default: LocationIcon,
            pressing: LocationIcon,
            clicked: LocationIcon,
          }}
          iconSize="w-[1.125rem] h-[1.125rem] "
        />
      </div>
      {/* LocationList */}
      <LocationList/>
    </>
  );
};
