import React, { useState, useEffect, useRef } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";
import { ImageBox } from "../../components/MyPage/ImageBox";
import { Select } from "../../components/MyPage/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Camera from "../../assets/icons/camera.svg?react";
import VectorRed from "../../assets/icons/Vector_red.svg?react";
import CheckCircled from "../../assets/icons/check_circled.svg?react";
import CheckCircledFilled from "../../assets/icons/check_circled_filled.svg?react";
import Kitty from "../../assets/images/Image Carousel.png";
import Dismiss_Gy800 from "../../assets/icons/dismiss_gy800.svg?react";
import Dismiss from "../../assets/icons/dismiss.svg?react";
import { Modal_Caution } from "../../components/MyPage/Modal_Caution";
import { Modal_Caution_Name } from "../../components/MyPage/Modal_ Caution_Name";
import White_L_Thin_Add from "../../components/MyPage/White_L_Thin_Add";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const MyPageMedalAddPage = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string>(""); // 급수 선택 상태
  const [tournamentName, setTournamentName] = useState(""); // 대화명 상태
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [videoLinks, setVideoLinks] = useState<string[]>([""]); // 최소 1개 영상
  const formOptions = ["혼복", "여복", "남복", "단식"];
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [isRecordPrivate, setIsRecordPrivate] = useState(false);
  const [isVideoPrivate, setIsVideoPrivate] = useState(false);
  const [recordText, setRecordText] = useState("");
  const [isRecordFocused, setIsRecordFocused] = useState(false);
  const [focusedVideoIndex, setFocusedVideoIndex] = useState<number | null>(null);
  const isSaveEnabled = tournamentName.trim() !== "" && selectedGrade !== "" && selectedForm !== null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalNameOpen, setIsModalNameOpen] = useState(false);
  const navigate = useNavigate();
  const { medalId } = useParams();
    useEffect(() => {
    console.log("medalId:", medalId); // 확인용
    // 나중에 서버 요청: fetch(`/api/v1/medals/${medalId}`)
  }, [medalId]); 
  
  const images = [
    "url1.jpg",
    "url2.jpg",
    "url3.jpg",
  ];

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

 const handleRemovePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  useEffect(() => {
    if (containerRef.current && photos.length > 0) {
      containerRef.current.scrollTo({ left: containerRef.current.scrollWidth, behavior: "smooth" });
    }
  }, [photos]);


  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoClick = () => {
    if (photos.length < 3 && fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotos((prev) => [...prev, reader.result as string]);
        }
      };
      reader.readAsDataURL(file); // base64 인코딩해서 보여줌
    }
  };

  const allowedPattern = /^[a-zA-Z가-힣\s]*$/;

  const handleRecordChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (allowedPattern.test(value) && value.length <= 100) {
      setRecordText(value);
    }
  };
  const isDataChanged = () => {
    return (
      tournamentName.trim() !== "" ||
      selectedForm !== null ||
      selectedGrade !== "" ||
      recordText.trim() !== "" ||
      videoLinks.some((link) => link.trim() !== "") ||
      photos.length > 0 ||
      selectedIndex !== null ||
      selectedDate !== undefined
    );
  };

  const onBackClick = () => {
    if (tournamentName === "") {
      setIsModalNameOpen(true);
      return;
    }
    if (isDataChanged()) {
      setIsModalOpen(true);
      return;
    }

    navigate("/myPage/mymedal");
  };

  const handleConfirmLeave = () => {
    setIsModalOpen(false);
    navigate("/myPage/mymedal");
  };

  const handleCancelLeave = () => {
    setIsModalOpen(false);
    setIsModalNameOpen(false);
  };

  return (
     <div className="max-w-[23.4375rem] mx-auto bg-white h-screen flex flex-col">
      <div className="flex-shrink-0 sticky top-0 z-20 bg-white "> 
        <PageHeader title="대회 기록 추가하기" onBackClick={onBackClick} />
          {isModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center z-50">
              <Modal_Caution onConfirm={handleConfirmLeave} onCancel={handleCancelLeave} />
            </div>
          )}
          {isModalNameOpen && (
            <div className="fixed inset-0 flex justify-center items-center z-50">
              <Modal_Caution_Name onCancel={handleCancelLeave} />
            </div>
          )}
      </div>
      
      <div className="flex-grow min-h-0 overflow-y-auto">
      <div className="flex flex-col gap-8"> 
        {/* 여기 mt-15 다르게 보임 */}
      <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div ref={containerRef} className="mt-15 flex gap-2 overflow-x-auto no-scrollbar">
        <button
          onClick={handlePhotoClick}
          className="w-24 h-24 flex-shrink-0 border rounded-xl border-[#E4E7EA] flex items-center justify-center body-rg-500 bg-white"
          type="button"
        >
          <div className="flex flex-col text-center justify-center">
            <Camera />
            <label>{`${photos.length} / 3`}</label>
          </div>
        </button>

        {photos.map((src, i) => (
          <div
            key={i}
            className="relative w-24 h-24 flex-shrink-0 border rounded-xl border-[#E4E7EA] overflow-hidden"
          >
            <img
              src={src}
              alt={`uploaded-${i}`}
              className="w-full h-full object-cover rounded-xl"
            />
            <Dismiss_Gy800
              onClick={() => handleRemovePhoto(i)}
              className="absolute top-1 right-1 w-6 h-6 p-1 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>

      {/* 대회명 입력 */}
      {/* <div>
        <label className="flex items-center text-left header-h5 mb-1">
          대화명
          <VectorRed className="ml-1 w-2 h-2" />
        </label>
        <textarea
          id="tournamentName"
          className="auto-resizing-css w-full border rounded-xl p-2  body-md-500 border-[#E4E7EA] focus:outline-none resize-none "
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
          maxLength={60}

        />
      </div> */}
    
    {/* 대회명 입력 */}
      <div>
        <label className="flex items-center text-left header-h5 mb-1">
          대회명
          <VectorRed className="ml-1 w-2 h-2" />
        </label>
        <textarea
          id="Name"
          className="auto-resizing-css w-full border rounded-xl body-md-500 border-[#E4E7EA] focus:outline-none resize-none leading-normal" 
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
          maxLength={60}
        />
      </div>

      

      {/* 수상 */}
      <div>
        <label className="flex items-center text-left header-h5 mb-1">수상</label>
        <div className="flex gap-4">
              {images.map((src, i) => (
                <ImageBox
                  key={i}
                  imageSrc={Kitty}
                  isSelected={selectedIndex === i}
                  onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
                />
              ))}
        </div>
        <p className="body-sm-500 text-left text-[#767B89] mt-1">입상하지 못했다면 선택하지 않아도 됩니다.</p>
      </div>

      {/* 날짜 */}
      <div>
        <label className="flex items-center text-left header-h5 mb-1">날짜</label>
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

      {/* 참여 형태 */}
      <div>
        <label className="flex items-center text-left header-h5 mb-1">
          참여 형태
          <VectorRed className="ml-1 w-2 h-2" />
        </label>
        <div className="flex gap-4">
          {formOptions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSelectedForm(item)}
              className={
                `flex-1 border rounded-lg py-2 text-center body-rg-500 transition-colors duration-150 shadow-ds200-gr  ` +
                (selectedForm === item ? "border-[#0B9A4E]" : "border-[#F4F5F6]")
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* 급수 */}
      <div>
        <label className="flex items-center text-left header-h5 mb-1">
          급수
          <VectorRed className="ml-1 w-2 h-2" />
        </label>
        <Select onSelect={(grade: string) => setSelectedGrade(grade)}
          selected={selectedGrade}/>
      </div>

      {/* 대회 기록 */}
      <div>
        <div className="flex justify-between items-start">
          <label className="flex items-center text-left header-h5 mb-1">대회 기록</label>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsRecordPrivate(!isRecordPrivate)}>
              {isRecordPrivate ? (
                <CheckCircledFilled className="w-4 h-4 text-[#1ABB65]" />
              ) : (
                <CheckCircled className="w-4 h-4" />
              )}
            </button>
            <label className="body-rg-500">비공개</label>
          </div>
        </div>

        <textarea
          id="record"
          value={recordText}
          onFocus={() => setIsRecordFocused(true)}
          onBlur={() => setIsRecordFocused(false)}
          onChange={handleRecordChange}
          className={`auto-resizing-css w-full border rounded-xl body-md-500 resize-none min-h-[3rem] p-2
            ${isRecordFocused ? "border-[#87C95E]" : "border-[#E4E7EA]"}
            focus:outline-none`}
          maxLength={100}
        />
      </div>

      {/* 영상 링크 */}
      <div>
        <div className="flex justify-between items-start">
          <label className="flex items-center text-left header-h5 mb-1">영상 링크</label>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsVideoPrivate(!isVideoPrivate)}>
              {isVideoPrivate ? (
                <CheckCircledFilled className="w-4 h-4" />
              ) : (
                <CheckCircled className="w-4 h-4" />
              )}
            </button>
            <label className="body-rg-500">비공개</label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {videoLinks.map((link, idx) => (
            <div key={idx} className="relative w-full">
              {focusedVideoIndex !== idx && (
                <div
                  className={`
                    absolute inset-0 z-0 pointer-events-none px-3 py-2 
                    text-gray-900 body-md-500 truncate whitespace-nowrap overflow-hidden
                    border rounded-xl  focus:outline-none
                    ${focusedVideoIndex === idx ? "border-[#87C95E]" : "border-[#E4E7EA]"}
                  `}
                >
                  {link}
                </div>
              )}
              <input
                type="url"
                value={link}
                onFocus={() => setFocusedVideoIndex(idx)}
                onBlur={() => setFocusedVideoIndex(null)}
                onChange={(e) => {
                  const updated = [...videoLinks];
                  updated[idx] = e.target.value;
                  setVideoLinks(updated);
                }}
                className={`
                  w-full border rounded-xl pr-10 py-2 px-3 body-md-500 
                  bg-transparent relative z-10 focus:outline-none
                  ${focusedVideoIndex === idx ? "border-[#1ABB65]" : "border-[#E4E7EA]"}
                `}
              />

              <button
                type="button"
                onClick={() => {
                  const updated = [...videoLinks];
                  if (videoLinks.length === 1) {
                    updated[0] = "";
                  } else {
                    updated.splice(idx, 1);
                  }
                  setVideoLinks(updated);
                }}
                className="absolute top-2 right-2 w-5 h-5 p-1 z-20"
              >
                <Dismiss className="w-full h-full mt-1" />
              </button>
            </div>
          ))}
        </div>

        {videoLinks.length > 0 && videoLinks[videoLinks.length - 1].trim() !== "" && (
          <div className="mt-2">
            <White_L_Thin_Add
              label="추가하기"
              onClick={() => setVideoLinks([...videoLinks, ""])}
            />
          </div>
        )}
      </div>

        {/* 저장 버튼  오류 발생 */}
          <Grad_GR400_L
            label="저장하기"
            initialStatus={isSaveEnabled ? "default" : "disabled"}
            onClick={() => {
              if (!isSaveEnabled) return;
              console.log("대회 기록 저장 완료");
            }}
          />
        </div>
      </div>
    </div>
  );
};
