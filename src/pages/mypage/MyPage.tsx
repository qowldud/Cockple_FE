import { MainHeader } from "../../components/common/system/header/MainHeader";
import { MyPage_Text } from "../../components/common/contentcard/MyPage_Text";
import { Profile } from "../../components/MyPage/Profile";
import { MyPage as MyPageContentcard } from "../../components/common/contentcard/MyPage";

import White_L_Thin from "../../components/common/Btn_Static/Text/White_L_Thin";
import White_L from "../../components/common/Btn_Static/Text/White_L";


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
export const MyPage = ({
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
    <div className="flex flex-col p-4 pb-26 overflow-auto">
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

      <div className="mt-4">
        <White_L_Thin 
          label="정보 수정하기"
          initialStatus="clicked" 
          onClick={() => alert("정보 수정하기 클릭 -> /MyPage/EditInfo 이동")} 
        />

      </div>

      <div className="my-8 flex flex-col gap-4">
        <MyPage_Text textLabel="내 모임" numberValue={0} />
        <MyPage_Text textLabel="내 운동" numberValue={0} />
        <MyPageContentcard
          totalMedalsCount={totalMedalsCount}
          goldMedals={goldMedals}
          silverMedals={silverMedals}
          bronzeMedals={bronzeMedals}
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

