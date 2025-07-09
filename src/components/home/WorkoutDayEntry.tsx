import { useState } from "react";
import { DailyExercise_S } from "../common/contentcard/DailyExercise_S";
import TextIconBtnM from "../common/DynamicBtn/TextIconBtnM";

type DailyExerciseItem = {
  id: number;
  title: string;
  location: string;
  time: string;
  imgSrc: string;
};

// Mock data for demonstration purposes
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

export const WorkoutDayEntry = () => {
  const [exerciseData, setExerciseData] = useState<DailyExerciseItem[] | null>(
    null,
  );

  if (!exerciseData || exerciseData.length === 0) {
    return (
      <div className="w-full h-20 flex items-center justify-center">
        <TextIconBtnM>운동 둘러보기</TextIconBtnM>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {exerciseData.map(item => (
        <DailyExercise_S
          key={item.id}
          title={item.title}
          location={item.location}
          time={item.time}
          imageSrc={item.imgSrc}
        />
      ))}
    </div>
  );
};
