import { PageHeader } from "../../components/common/system/header/PageHeader";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../../components/common/ProgressBar";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import DropCheckBox from "../../components/common/Drop_Box/DropCheckBox";
import IntroText from "./components/IntroText";
import { useForm } from "react-hook-form";

export const OnboardingLevelPage = () => {
  const level = ["초심", "C조", "D조"];

  const navigate = useNavigate();
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const levelValue = watch("level") || "";
  const isNextEnabled = levelValue === "disabled" || level.includes(levelValue);
  return (
    <div className="w-full flex flex-col">
      <PageHeader title="회원 정보 입력" />
      <ProgressBar width="24" />

      <section className="flex gap-8 text-left flex-col pb-67 ">
        <IntroText
          title="전국 급수를 입력해주세요."
          text1="급수를 입력하면,"
          text2="내 실력에 맞는 모임을 추천받을 수 있어요!"
          isBar={true}
        />

        <DropCheckBox
          title="전국 급수"
          options={level}
          checkLabel="급수 없음"
          value={levelValue}
          onChange={val =>
            setValue("level", val ?? "", { shouldValidate: true })
          }
        />
      </section>
      <div
        className="flex items-center justify-center pt-[1px]"
        onClick={() => navigate("/onboarding/address")}
      >
        <Btn_Static
          label="다음"
          kind="GR400"
          size="L"
          initialStatus={!isNextEnabled ? "disabled" : "default"}
        />
      </div>
    </div>
  );
};
