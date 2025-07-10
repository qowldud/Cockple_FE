import { MainHeader } from "../../components/common/system/header/MainHeader";
import { MyPage_Text } from "../../components/common/contentcard/MyPage_Text";
import { Profile } from "../../components/MyPage/Profile";
import { MyPage as MyPageContentcard } from "../../components/common/contentcard/MyPage";

import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import PenIcon from "../../assets/icons/pen.svg";
import PenDisabledIcon from "../../assets/icons/pen-gy-400.svg";


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
        <Btn_Static
          kind="White"
          size="L_Thin"
          label="정보 수정하기"
          iconMap={{
            default: PenIcon,
            pressing: PenIcon,
            clicked: PenIcon,
            disabled: PenDisabledIcon,
          }}
          iconSize="w-[1.125rem] h-[1.125rem]"
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
        <Btn_Static kind="White" size="L" label="공지사항" justify="flex-start" />
        <Btn_Static kind="White" size="L" label="이용약관" justify="flex-start" />
        <Btn_Static kind="White" size="L" label="설정" justify="flex-start" />
      </div>
    </div>
  );
};

