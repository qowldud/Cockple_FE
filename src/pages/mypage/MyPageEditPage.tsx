import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import LocationIcon from "../../assets/icons/mylocation.svg";
import Camer_gy_400 from "../../assets/icons/camera_gy_400.svg?react";
import VectorRed from "../../assets/icons/Vector_red.svg?react";
import Female from "../../assets/icons/female.svg?react";
import Male from "../../assets/icons/male.svg?react";
import CheckCircled from "../../assets/icons/check_circled.svg?react";
import CheckCircledFilled from "../../assets/icons/check_circled_filled.svg?react";
import Search from "../../assets/icons/search.svg?react";
import { Select } from "../../components/MyPage/Select";
import  { Location } from "../../components/common/contentcard/Location";
 
interface MyPageEditProps {
  profileUrl?: string;
  name?: string;
  gender?: "female" | "male";
  birth?: string;
  rank?: string;
  hasNoRank?: boolean;
  location?: string;
}

export const MyPageEditPage = ({
  profileUrl,
  name: initialName,
  gender,
  birth,
  rank : initialRank,
  hasNoRank: initialHasNoRank,
  location,
}: MyPageEditProps) => {

  const [name, setName] = useState(initialName ?? "");
  //급수없음 버튼
  const [selectedRank, setSelectedRank] = useState("");
  const [hasNoRank, setHasNoRank] = useState(false);
  const navigate = useNavigate();

  // 이름 기능부분
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // 한영
    input = input.replace(/[^ㄱ-ㅎ가-힣a-zA-Z]/g, "");

    // 17글자까지
    if (input.length > 17) {
      input = input.slice(0, 17);
    }

    setName(input);
  };

  // 날짜 기능부분
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    birth ? new Date(birth) : null
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
    <PageHeader title="정보 수정하기" />

    <div className="flex flex-col">

      {/* 프로필 사진 */}
      <div className="flex justify-center mb-8 relative">
        <img
          src={profileUrl}
          alt="profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-[calc(50%-40px)] bg-white shadow-ds100 rounded-full p-1">
          <Camer_gy_400 className="w-4 h-4" />
        </div>
      </div>

      {/* 이름 */}
      <div className="mb-8">
        <label className="flex items-center text-left header-h5 mb-1">
          이름
          <VectorRed className="ml-1 w-2 h-2" />
        </label>
        <div className="relative">
          <input
            type="text"
            value={name}
            maxLength={17}
            onChange={handleNameChange}
            className="w-full border rounded-xl	p-2 pr-14 body-md-500 border-[#E4E7EA] focus:outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C0C4CD] body-rg-500">
            ({name?.length ?? 0} / 17)
          </span>
        </div>
      </div>

      {/* 성별 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-1">
          <label className="text-left header-h5">성별</label>
          <div className="flex items-center header-h5 gap-2">
            {gender === "female" ? (
              <>
                여성 <Female className="w-4 h-4" />
              </>
            ) : (
              <>
                남성 <Male className="w-4 h-4" />
              </>
            )}
          </div>
        </div>
      </div>

      {/* 생년월일 */}
      <div className="mb-8 flex flex-col items-start">
        <label className="flex items-center text-left header-h5 mb-1">
          생년월일
          <VectorRed className="ml-1 w-2 h-2" />
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          className="w-full border rounded-xl p-2 pr-14 body-md-500 border-[#E4E7EA] focus:outline-none"
          // 키보드 입력방지
          onKeyDown={(e) => e.preventDefault()}
          onChangeRaw={(e) => e.preventDefault()}
          onPaste={(e) => e.preventDefault()}
          style={{ margin: 0 }}
        />
      </div>



      {/* 전국 급수 */}
      <div className="mb-8">
        <label className="flex items-center text-left header-h5 mb-1">
          전국 급수
          <VectorRed className="ml-1 w-2 h-2" />
        </label>
        <div className="flex items-center gap-4">
        <Select
          selected={selectedRank}
          onSelect={(grade) => setSelectedRank(grade)}
        />
      {/* 급수 없음 토글 */}
          <button
            type="button"
            onClick={() => setHasNoRank((prev) => !prev)}
            className="flex items-center gap-1"
          >
            {hasNoRank ? (
              <CheckCircledFilled className="w-4 h-4 text-[#FF4D4F]" />
            ) : (
              <CheckCircled className="w-4 h-4 text-gray-400" />
            )}
            급수 없음
          </button>
        </div>
      </div>


      {/* 위치 */}
      <div className="mb-2">
        <label className="flex items-center text-left mb-1 header-h5">
          위치
          <VectorRed className="ml-1 w-2 h-2" />
        </label>
        <div className="relative">
          <input
            type="text"
            value={location}
            placeholder="건물명, 도로명으로 검색"
            className="w-full border rounded-xl	p-2 pr-14 body-md-500  text-[#C0C4CD] border-[#E4E7EA] focus:outline-none"
            onClick={() => navigate("/myPage/edit/location")}
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
        iconSize="w-[1.125rem] h-[1.125rem]"
        onClick={() => navigate("/myPage/edit/location/address")}
      />

      
    {/* 등록된 위치 */}
    <div className="mt-8">
        <div className="flex justify-between items-center mb-1">
          <label className="text-left header-h5">등록된 위치</label>
          <div className="flex items-center ">
            <button className="rounded-lg bg-[#F4F5F6] body-rg-500 px-4 py-2">
              수정
            </button>
          </div>
        </div>
      </div>

      {/* Location_components */}
      <div className="m-3">
        {/* <Location/> */}
        <Location
          mainAddress="부산광역시 해운대구 센텀동로 45"
          subAddress="센텀시티역 2번 출구 300m"
          disabled={false}
          initialClicked={false}
          onClick={(clicked) => console.log("선택됨:", clicked)}
        />
        </div>
    </div>
    </>
  );
};
