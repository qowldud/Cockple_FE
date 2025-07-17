import { useState, useEffect,useRef, useCallback  } from "react";
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

interface LocationType {
  id: number;
  location?: string;
  isMainAddr: string;
  streetAddr: string;
}

interface MyPageEditProps {
  profileUrl?: File; 
  name?: string;
  gender?: "female" | "male";
  birth?: string;
  rank?: string;
  hasNoRank?: boolean;
  locations?: LocationType[]; 
}

export const MyPageEditPage = ({
  profileUrl: initialProfileFileProp,
  name: initialNameProp,
  gender,
  birth: initialBirthProp,
  rank: initialRankProp,
  hasNoRank: initialHasNoRankProp,
  locations: initialLocationsProp = [], 
  location, 
  isMainAddr,   
  streetAddr,
}: MyPageEditProps) => {
  const navigate = useNavigate();
  const [name, setName] = useState(initialNameProp ?? "");
  //급수없음 버튼
  const [selectedRank, setSelectedRank] = useState(initialRankProp ?? "");
  const [hasNoRank, setHasNoRank] = useState(initialHasNoRankProp ?? false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
      initialBirthProp ? new Date(initialBirthProp) : null
  );
  //Location
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [selectedId, setSelectedId] = useState<number>(1);
  const [editMode, setEditMode] = useState(false);
  // 사진
  const [profileImage, setProfileImage] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const initialDataRef = useRef({
    name: initialNameProp ?? "",
    rank: initialRankProp ?? "",
    hasNoRank: initialHasNoRankProp ?? false,
    birth: initialBirthProp ?? "", 
    profileImage: undefined as string | undefined, 
    locations: initialLocationsProp,
  });

    useEffect(() => {
    let initialProfileImageUrl: string | undefined = undefined;

    if (initialProfileFileProp instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        initialProfileImageUrl = reader.result as string;
        setProfileImage(initialProfileImageUrl); 
        initialDataRef.current.profileImage = initialProfileImageUrl;
      };
      reader.readAsDataURL(initialProfileFileProp);
    } else {
      setProfileImage(undefined);
      initialDataRef.current.profileImage = undefined;
    }

  }, [initialProfileFileProp]); 

  const isDataChanged = useCallback(() => {
    const initialData = initialDataRef.current;

    // 이름 비교
    if (name !== initialData.name) return true;

    // 급수 비교
    if (hasNoRank !== initialData.hasNoRank) return true; // 급수 없음 상태 변경
    if (!hasNoRank && selectedRank !== initialData.rank) return true; // 급수 선택값 변경 (급수 없음이 아닐 때만)

    // 생년월일 비교
    const currentBirthStr = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
    if (currentBirthStr !== initialData.birth) return true;
    if (profileImage !== initialData.profileImage) return true;
    // 위치 정보 비교
    const currentLocationsIds = locations.map(loc => loc.id).sort().join(',');
    const initialLocationsIds = initialData.locations.map(loc => loc.id).sort().join(',');
    if (currentLocationsIds !== initialLocationsIds) return true;

    return false;
  }, [name, selectedRank, hasNoRank, selectedDate, profileImage, locations]);

   //수정 완료 버튼 클릭 처리
  const onCompleteClick = () => {
    if (name.trim() === "") {
      alert("이름은 반드시 입력해야 합니다.");
      return;
    }

    if (!isDataChanged()) {
      // 변경사항 없을 때 → 바로 마이페이지 이동
      navigate("/myPage");
      return;
    }
    console.log("수정된 정보를 서버에 저장합니다.");

    navigate("/myPage"); 
  };

  const onBackClick = () => {
    if (isDataChanged()) {
      // 변경사항이 있을 경우 사용자에게 경고 (confirm 창)
      const confirmDiscard = window.confirm(
        "변경사항이 있습니다. 저장하지 않고 돌아가시겠습니까?"
      );
      if (confirmDiscard) {
        navigate("/myPage"); 
      }
    } else {
      navigate("/myPage");
    }
  };

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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  // Location 기능 부분
  const handleDelete = (id: number) => {
    setLocations((prev) => prev.filter((loc) => loc.id !== id));
  };

  const toggleEditMode = () => {
    if (editMode) {
      // 저장 로직
      console.log("변경된 위치 저장됨:", locations);
      // 필요시 서버 저장 API 호출
    }
    setEditMode((prev) => !prev);
  };
  if (locations.length > 5) {
    alert("위치 정보는 최대 5개까지 저장 가능합니다. 수정 버튼을 통해 등록된 위치를 삭제해주세요");
    return;
  }

  // 프로필 사진 클릭하면 파일 선택창 열기
  const onProfileClick = () => {
    fileInputRef.current?.click();
  };
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string); // base64 문자열로 저장
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <>
    <PageHeader
      title="정보 수정하기"
      onBackClick={onBackClick} 
    />

    <div className="flex flex-col">

      {/* 프로필 사진 */}
      <div className="flex justify-center mb-8 relative">
        <img
          src={profileImage || "프로필"} 
          alt="profile"
          className="w-24 h-24 rounded-full object-cover"
          onClick={onProfileClick}

        />
        <div className="absolute bottom-0 right-[calc(50%-40px)] bg-white shadow-ds100 rounded-full p-1">
          <Camer_gy_400 className="w-4 h-4" />
        </div>
          {/* 숨겨진 파일 인풋 */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={onFileChange}
        />
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
          wrapperClassName="w-full"
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
        <div className="flex items-center">
          <button
            className="rounded-lg bg-[#F4F5F6] body-rg-500 px-4 py-2"
            onClick={toggleEditMode}
          >
            {editMode ? "저장" : "수정"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-start">
        {locations
          .sort((a, b) => (a.id === selectedId ? -1 : b.id === selectedId ? 1 : 0))
          .map((loc, index) => (
            <div className="relative" key={loc.id}>
              <Location
                isMainAddr={loc.isMainAddr}
                streetAddr={loc.streetAddr}
                initialClicked={loc.id === selectedId}
                // disabled={false}
                disabled={editMode && index === 0}
                editMode={editMode}
                onClick={(clicked) => {
                  if (!editMode) setSelectedId(loc.id);
                }}
                onDelete={() => handleDelete(loc.id)}
              />
            </div>
          ))}
      </div>
    </div>
    <div className="mt-8">

      <Btn_Static
        kind="GR400"
        size="L"
        label="수정 완료"
        shadow="shadow-ds100"
        onClick={onCompleteClick} 
      />

    </div>
  </div>
  </>
  );
};
