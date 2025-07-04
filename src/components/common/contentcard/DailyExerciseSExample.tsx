import { DailyExercise_S } from "./DailyExercise_S";
import Kitty from "../../../assets/images/kitty.png"; 

export function DailyExerciseSExample() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <DailyExercise_S
        title="민턴콕콕"
        location="산성 실내 배드민턴장"
        time="08:00 am ~ 10:00 am"
        imageSrc={Kitty}
      />
    </div>
  );
}
