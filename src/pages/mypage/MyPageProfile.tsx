import { MainHeader } from "../../components/common/system/header/MainHeader";
import { MyPage_Text } from "../../components/common/contentcard/MyPage_Text";
import { Profile } from "../../components/MyPage/Profile";
import { MyPage as MyPageContentcard } from "../../components/common/contentcard/MyPage";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";

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
export const MyPageProfile = ({
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
  return (
    <div className="flex flex-col pb-26 overflow-auto">
      <div className="gap-[1.25rem]">
        <MainHeader hasNotification={true} />
        <Profile
          name={name}
          gender={gender}
          level={level}
          birth={birth}
          profileImage={profileImage}
        />
      </div>

      <div className="my-8 flex flex-col gap-4">
        <MyPage_Text textLabel="모임" numberValue={0} />
        <MyPageContentcard
          myMedalTotal={myMedalTotal}
          goldCount={goldCount}
          silverCount={silverCount}
          bronzeCount={bronzeCount}
          disabled={disabled} 
        />
      </div>

     <Grad_GR400_L label="개인 채팅 보내기"/>
    </div>
  );
};

