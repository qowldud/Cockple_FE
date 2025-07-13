import React, { useState, useEffect, useRef } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";
import { ImageBox } from "../../components/MyPage/ImageBox";
import { MyMedalAddSelect } from "../../components/MyPage/MyMedalAddSelect";
import White_L_Thin from "../../components/common/Btn_Static/Text/White_L_Thin";

import Camera from "../../assets/icons/camera.svg?react";
import VectorRed from "../../assets/icons/Vector_red.svg?react";
import CheckCircled from "../../assets/icons/check_circled.svg?react";
import CheckCircledFilled from "../../assets/icons/check_circled_filled.svg?react";
import Kitty from "../../assets/images/Image Carousel.png";
import Dismiss_Gy800 from "../../assets/icons/dismiss_gy800.svg?react";
import Dismiss from "../../assets/icons/dismiss.svg?react";
import Plus from "../../assets/icons/add.svg?react";

import White_L_Thin_Add from "../../components/MyPage/White_L_Thin_Add";

export const MyPageMedalAddPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string>(""); // 급수 선택 상태
  const [tournamentName, setTournamentName] = useState(""); // 대화명 상태
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [videoLinks, setVideoLinks] = useState<string[]>([""]); // 최소 1개 영상

  const isSaveEnabled = tournamentName.trim() !== "" && selectedGrade !== "" && selectedForm !== null;

  const images = [
    "url1.jpg",
    "url2.jpg",
    "url3.jpg",
  ];
  const handlePhotoClick = () => {
    if (photos.length < 3) {
      setPhotos([...photos, ""]); // 이미지 업로드 로직 연결 예정
    }
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

  const formOptions = ["혼복", "여복", "남복", "단식"];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col gap-8">
      <PageHeader title="대화 기록 추가하기" />
      <div ref={containerRef} className="flex gap-2 overflow-x-auto no-scrollbar">
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
              src={Kitty}
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


      {/* 대회명 입력 */}
      <div>
        <label className="flex items-center text-left header-h5 mb-1">
          대화명
          <VectorRed className="ml-1 w-2 h-2" />
        </label>
        <textarea
          id="tournamentName"
          className="auto-resizing-css w-full border rounded-xl p-2  body-md-500 border-[#E4E7EA] focus:outline-none resize-none min-h-[3rem]"
         value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
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
        <input
          id="date"
          className="w-full border rounded-xl p-2 pr-14 body-md-500 border-[#E4E7EA] focus:outline-none appearance-none"
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
        <MyMedalAddSelect  onSelect={(grade: string) => setSelectedGrade(grade)}
          selected={selectedGrade}/>
      </div>

      {/* 대회 기록 */}
      <div>
        <div className="flex justify-between items-start">
          <label className="flex items-center text-left header-h5 mb-1">대회 기록</label>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsChecked(!isChecked)}>
              {isChecked ? <CheckCircledFilled className="w-4 h-4" /> : <CheckCircled className="w-4 h-4" />}
            </button>
            <label className="body-rg-500">비공개</label>
          </div>
        </div>
        <textarea
          id="record"
          className="auto-resizing-css w-full border rounded-xl p-2  body-md-500 border-[#E4E7EA] focus:outline-none resize-none min-h-[3rem]"
        />
      </div>

{/*  버튼 오류 발생 */}
      {/* 영상 링크 */}
      <div>
        <div className="flex justify-between items-start">
          <label className="flex items-center text-left header-h5 mb-1">영상 링크</label>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsChecked(!isChecked)}>
              {isChecked ? <CheckCircledFilled className="w-4 h-4" /> : <CheckCircled className="w-4 h-4" />}
            </button>
            <label className="body-rg-500">비공개</label>
          </div>
        </div>

        {/* 링크 입력 리스트 */}
      <div className="flex flex-col gap-2">
        {videoLinks.map((link, idx) => (
          <div key={idx} className="relative">
            <input
              type="url"
              value={link}
              onChange={(e) => {
                const updated = [...videoLinks];
                updated[idx] = e.target.value;
                setVideoLinks(updated);
              }}
              className="w-full border rounded-xl p-2 pr-10 body-md-500 border-[#E4E7EA] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                if (videoLinks.length === 1) {
                  // 1개일 때는 삭제 대신 내용만 비움
                  const updated = [...videoLinks];
                  updated[0] = "";
                  setVideoLinks(updated);
                } else {
                  // 2개 이상일 때는 해당 인풋 제거
                  const updated = [...videoLinks];
                  updated.splice(idx, 1);
                  setVideoLinks(updated);
                }
              }}
              className="absolute top-2 right-2 w-5 h-5 p-1"
            >
              <Dismiss className="w-full h-full" />
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
        {/* <Grad_GR400_L label="저장하기" disabled={!isSaveEnabled} /> */}
    </div>
  );
};
