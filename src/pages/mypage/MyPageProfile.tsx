import { MainHeader } from "../../components/common/system/header/MainHeader";
import { MyPage_Text } from "../../components/common/contentcard/MyPage_Text";
import { Profile } from "../../components/MyPage/Profile";
import { MyPage as MyPageContentcard } from "../../components/common/contentcard/MyPage";
import Grad_GR400_L from "../../components/common/Btn_Static/Text/Grad_GR400_L";

interface MyPageProps {
  name: string;
  gender: string;
  group: string;
  birth: string;
  imageSrc: string;

  totalMedalsCount?: number;
  goldMedals?: number;
  silverMedals?: number;
  bronzeMedals?: number;
  disabled?: boolean;
}
export const MyPageProfile = ({
  name,
  gender,
  group,
  birth,
  imageSrc,

  totalMedalsCount = 0,
  goldMedals = 0,
  silverMedals = 0,
  bronzeMedals = 0,
  disabled = false,
}: MyPageProps) => {
  return (
    <div className="flex flex-col pb-26 overflow-auto">
      <div className="gap-[1.25rem]">
        <MainHeader hasNotification={true} />
        <Profile
          name={name}
          gender={gender}
          group={group}
          birth={birth}
          imageSrc={imageSrc}
        />
      </div>

      <div className="my-8 flex flex-col gap-4">
        <MyPage_Text textLabel="모임" numberValue={0} />
        <MyPageContentcard
          totalMedalsCount={totalMedalsCount}
          goldMedals={goldMedals}
          silverMedals={silverMedals}
          bronzeMedals={bronzeMedals}
          disabled={disabled}
          isProfile 

        />
      </div>

     <Grad_GR400_L label="개인 채팅 보내기"/>
    </div>
  );
};

