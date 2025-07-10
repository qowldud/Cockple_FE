import { useState } from "react";
import Search from "../../assets/icons/search.svg?react";
import LocationIcon from "../../assets/icons/mylocation.svg?react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import MapMarker from "../../assets/icons/map_marker.svg?react";

interface MyPageAddressSearchPageProps {
  mainAddress: string;
  subAddress: string;
  inputAddress: string; //주소창 주소
  onChangeInput: (value: string) => void;
}

export const MyPageAddressSearchPage = ({
  mainAddress,
  subAddress,
  inputAddress,
  onChangeInput,
}: MyPageAddressSearchPageProps) => {

  return (
    <div className="flex flex-col h-full w-full max-w-[23.4375rem] relativ">
      <PageHeader title="주소 검색" />

      {/* 주소 검색창 */}
      <div className="flex items-center bg-white rounded-xl shadow-ds200 px-4 py-2 mx-4 mt-4 focus:outline-none">
        <input
          type="text"
          value={inputAddress}
          onChange={(e) => onChangeInput(e.target.value)}
          className="flex-grow header-h5 focus:outline-none"
        />
        <Search className="w-6 h-6" />
      </div>

      {/* 지도 영역 */}
      <div className="relative w-full h-[26.625rem] mt-4">
         {/* <img
          src={MapPlaceholder}
          alt="지도 이미지"
          className="w-full h-full object-cover"
        /> */}
        {/* 중앙 마커 */}
        <MapMarker className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full" />
        <div className="absolute right-4 bottom-2">
          <div className="w-11 h-11 bg-white shadow-ds200 rounded-full p-1 flex items-center justify-center">
            <LocationIcon className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 주소 */}
      <div className="bg-white w-full px-4 pt-5 pb-4 rounded-t-2xl shadow-md mt-auto text-left ">
        <p className="body-md-500 pl-1">{mainAddress}</p>
        <p className="body-rg-500 mt-1 pl-1">{subAddress}</p>

        <div className="mt-5">
          <Btn_Static
            kind="GR600"
            size="L"
            label="이 위치로 위치 등록"
            bgColor="bg-[#0B9A4E]"
            textColor="text-white"
            justify="justify-center"
          />
        </div>
      </div>

    </div>
  );
};
