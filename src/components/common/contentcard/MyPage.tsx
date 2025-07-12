import { MyPage_Text } from "../../../components/common/contentcard/MyPage_Text";
import { MyPage_Medal } from "../../../components/common/contentcard/MyPage_Medal";

// 메달의 여부에 따라 보이는 컴포넌트가 달라서 이 파일에서 처리함
interface MyPageProps {
  totalMedalsCount?: number;
  goldMedals?: number;
  silverMedals?: number;
  bronzeMedals?: number;
  disabled?: boolean;
}

export const MyPage = ({
  totalMedalsCount = 0,
  goldMedals = 0,
  silverMedals = 0,
  bronzeMedals = 0,
  disabled = false,
}: MyPageProps) => {
  // 메달이 없으면 MyPage_Text 
  if (totalMedalsCount === 0) {
    return (
      <MyPage_Text
        textLabel="내 메달"
        numberValue={0}
        disabled={disabled}
      />
    );
  }

  // 메달이 있으면 기존 메달 섹션 보여줌
  return (
    <MyPage_Medal
      totalMedalsCount={totalMedalsCount}
      goldMedals={goldMedals}
      silverMedals={silverMedals}
      bronzeMedals={bronzeMedals}
      disabled={disabled}
    />
  );
};
