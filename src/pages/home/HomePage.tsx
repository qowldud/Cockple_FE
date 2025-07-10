import { useState } from "react";
import { MainHeader } from "../../components/common/system/header/MainHeader";
import { WorkoutDayEntry } from "../../components/home/WorkoutDayEntry";
import Clear_XS from "../../components/common/Btn_Static/Icon_Btn/Clear_XS";
import ArrowRight from "@/assets/icons/arrow_right.svg";
import { Exercise_S } from "../../components/common/contentcard/Exercise_S";
import { Footer } from "../../components/common/system/Footer";
import { Exercise_M } from "../../components/common/contentcard/Exercise_M";

export type DailyExerciseItem = {
  id: number;
  title: string;
  location: string;
  time: string;
  imgSrc: string;
};

// Mock data
const data = [
  {
    id: 1,
    title: "민턴콕콕",
    location: "산성 실내 배드민턴장",
    time: "08:00 am ~ 10:00 am",
    imgSrc:
      "https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU=",
  },
  {
    id: 2,
    title: "민턴콕콕",
    location: "산성 실내 배드민턴장",
    time: "08:00 am ~ 10:00 am",
    imgSrc:
      "https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU=",
  },
];

export const HomePage = () => {
  const [exerciseData, setExerciseData] = useState<DailyExerciseItem[] | null>(
    data,
  );
  return (
    <div className="flex flex-col justify-center items-center gap-vertical-section">
      <MainHeader background="clear" />
      {/* 배경색 적용 */}
      <div
        className="w-full min-h-94 flex flex-col gap-vertical-section"
        style={{
          background: "var(--color-gradient-home-header)",
          width: "calc(100% + 2rem)",
        }}
      >
        <div className="flex flex-col gap-4 mt-19 px-4">
          {/* 문구 */}
          <div className="flex flex-col items-start pb-5">
            <div className="body-lg-700">
              {exerciseData ? (
                <div>
                  오늘의 운동은<span className="text-gr-600 mx-1">2</span>개!
                </div>
              ) : (
                <div>오늘은 쉬는 날!</div>
              )}
            </div>
            <div className="body-md-700">
              {exerciseData ? (
                <div>화이팅 넘치는 하루가 될 거에요!</div>
              ) : (
                <div>내일 더 힘차게 달려봐요!</div>
              )}
            </div>
          </div>

          {/* 달력 */}
          <div className="w-full h-17"></div>

          {/* 해당 날짜 운동 */}
          <WorkoutDayEntry exerciseData={exerciseData ?? null} />
        </div>
      </div>

      {/* 내 모임 운동 */}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between header-h4">
          내 모임 운동{" "}
          <Clear_XS
            iconMap={{
              disabled: ArrowRight,
              default: ArrowRight,
              pressing: ArrowRight,
              clicked: ArrowRight,
            }}
          />
        </div>

        <div className="flex overflow-x-scroll gap-1">
          <Exercise_S
            title={"민턴클로버"}
            date={"04.04(월)"}
            time={"04:00am"}
            location="산성 실내 배드민턴장"
            imageSrc="https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU="
          />
          <Exercise_S
            title={"민턴클로버"}
            date={"04.04(월)"}
            time={"04:00am"}
            location="산성 실내 배드민턴장"
            imageSrc="https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU="
          />
          <Exercise_S
            title={"민턴클로버"}
            date={"04.04(월)"}
            time={"04:00am"}
            location="산성 실내 배드민턴장"
            imageSrc="https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU="
          />
        </div>
      </div>

      {/* 운동 추천 */}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between header-h4">
          운동 추천{" "}
          <Clear_XS
            iconMap={{
              disabled: ArrowRight,
              default: ArrowRight,
              pressing: ArrowRight,
              clicked: ArrowRight,
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Exercise_M
            title={"민턴클로버"}
            date={"04.04(월)"}
            time={"04:00am"}
            location="산성 실내 배드민턴장"
            imageSrc="https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU="
          />
          <Exercise_M
            title={"민턴클로버"}
            date={"04.04(월)"}
            time={"04:00am"}
            location="산성 실내 배드민턴장"
            imageSrc="https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU="
          />
          <Exercise_M
            title={"민턴클로버"}
            date={"04.04(월)"}
            time={"04:00am"}
            location="산성 실내 배드민턴장"
            imageSrc="https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU="
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
