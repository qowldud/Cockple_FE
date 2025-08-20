// // 내 메달에 대화가 없는 경우 "대화 기록 추가하기" 버튼을 누르면 이동하는 화면입니다.
import { useNavigate } from "react-router-dom";
import GR400_M from "../common/Btn_Static/Text/GR400_M";
import NoneImg from "../../assets/images/None_Error.png";
export const MyMedal_None = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full grow px-4 py-8">
      <div className="flex flex-col items-center gap-8">
        {/* 텍스트 */}
        <div className="flex flex-col gap-[0.5rem] text-center">
           <p className="header-h5">대회 기록이 없어요!</p>
           <p className="header-h5">대회 기록을 추가하고 메달을 가져볼까요?</p>
        </div>

        {/* 로고 */}
        <img src={NoneImg} className="w-[11.25rem] h-[11.25rem] object-contain" />

        {/* 버튼 */}
        <GR400_M
         label="대회 기록 추가하기"
          onClick={() => navigate("/mypage/mymedal/add")}
        />
      </div>
    </div>
  );
};
