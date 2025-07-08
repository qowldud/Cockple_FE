import { useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import Location from "../../assets/icons/mylocation.svg";
import Search from "../../assets/icons/search.svg";


export const MyPageEditLocationPage = () => {

  return (
    <div className="flex flex-col p-4 gap-[1.25rem]">
      <div className="gap-[0.5rem]">
      <PageHeader title="주소 검색"/>
        <div className="mb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="건물명, 도로명으로 검색"
              className="w-full border rounded-lg p-2 pr-10 text-sm border-gray-300 focus:outline-none"
            />
            {/* <Search/> */}
          </div>
        </div>
    

      <Btn_Static
          kind="GY100"
          size="L_Thin"
          label="현재 위치 불러오기"
          iconMap={{
            default: Location,
            pressing: Location,
            clicked: Location,
            // disabled: PenDisabledIcon,
          }}
          iconSize="w-[1.125rem] h-[1.125rem]"
      />
      </div>
    </div>
  );
};
