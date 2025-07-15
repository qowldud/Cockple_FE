import { MainHeader } from "../../components/common/system/header/MainHeader";
import { MyPage_Text } from "../../components/common/contentcard/MyPage_Text";
import { Profile } from "../../components/MyPage/Profile";
import { MyPage as MyPageContentcard } from "../../components/common/contentcard/MyPage";

import White_L_Thin from "../../components/common/Btn_Static/Text/White_L_Thin";
import White_L from "../../components/common/Btn_Static/Text/White_L";
import { useNavigate } from "react-router-dom"; 

interface MyPageProps {
  name: string;
  gender: "female" | "male";
  level: string;
  birth: string;
  profileImage: File;

  myMedalTotal?: number;
  goldCount?: number;
  silverCount?: number;
  bronzeCount?: number;
  disabled?: boolean;
}

export const MyPage = ({
  name,
  gender,
  level,
  birth,
  profileImage,

  myMedalTotal = 0,
  goldCount = 0,
  silverCount = 0,
  bronzeCount = 0,
  disabled = false,
}: MyPageProps) => {
  
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col pt-[8rem] overflow-auto">
      <div className="flex flex-col gap-[1.25rem]">
        <MainHeader hasNotification={true} />
        <Profile
          name={name}
          gender={gender}
          level={level}
          birth={birth}
          profileImage={profileImage}
        />
      </div>

      <div className="mt-4">
        <White_L_Thin 
          label="정보 수정하기"
          initialStatus="clicked" 
          onClick={() => navigate("/myPage/edit")}/>

      </div>

      <div className="my-8 flex flex-col gap-4">
        <MyPage_Text textLabel="내 모임" numberValue={0} />
        <MyPage_Text textLabel="내 운동" numberValue={0} />
        <MyPageContentcard
          myMedalTotal={myMedalTotal}
          goldCount={goldCount}
          silverCount={silverCount}
          bronzeCount={bronzeCount}
          disabled={disabled}
        />
      </div>

      <div className="gap-[0.25rem]">
        <White_L initialStatus="Clicked" label="공지사항" onClick={() => alert("공지사항 클릭")} />
        <White_L initialStatus="Clicked" label="이용약관" onClick={() => alert("이용약관 클릭")} />
        <White_L initialStatus="Clicked" label=" 설정" onClick={() => alert("설정 클릭")} />
      </div>
    </div>
  );
};

