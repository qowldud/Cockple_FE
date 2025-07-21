import { useEffect, useRef, useState } from "react";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import ArrowDown from "@/assets/icons/arrow_down.svg";
import ArrowUp from "@/assets/icons/arrow_up.svg";
import { ExerciseMapCalendar } from "../../components/home/ExerciseMapCalendar";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

export {};

export const ExerciseMapPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [calendar, setCalendar] = useState(false);

  const ArrowIcon = calendar ? ArrowUp : ArrowDown;

  useEffect(() => {
    const kakao = window.kakao;
    const container = mapRef.current;

    if (!container) return;

    // 지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
      draggable: true,
      scrollwheel: true,
    };

    const map = new kakao.maps.Map(container, options);

    // 현재 위치
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const currentPos = new kakao.maps.LatLng(lat, lng);

        map.setCenter(currentPos);

        const marker = new kakao.maps.Marker({
          position: currentPos,
          image: new kakao.maps.MarkerImage(
            "/src/assets/icons/map_mylocation.svg",
            new kakao.maps.Size(40, 40),
            { offset: new kakao.maps.Point(18, 18) },
          ),
        });

        marker.setMap(map);
      });
    } else {
      console.warn("Geolocation을 사용할 수 없어요.");
    }
  }, []);

  return (
    <div className="flex flex-col h-screen -mx-4 -mb-8">
      <PageHeader title="지도로 운동 찾기" className="px-4" />
      <div className="relative w-full flex-1 bg-gy-400" ref={mapRef}>
        <div className="absolute flex items-center gap-2 top-3 left-1/2 -translate-x-1/2 w-25 h-7 py-1 pl-2 pr-1.5 border-hard bg-white z-10">
          <span className="body-rg-500">05.05 (월)</span>
          <img
            src={ArrowIcon}
            alt="arrow"
            className="size-4"
            onClick={() => setCalendar(true)}
          />
        </div>
      </div>
      {calendar && (
        <div className="z-10">
          <ExerciseMapCalendar onClose={() => setCalendar(false)} />
        </div>
      )}
    </div>
  );
};
