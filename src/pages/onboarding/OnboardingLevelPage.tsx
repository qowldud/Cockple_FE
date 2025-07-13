import Btn_Static from "../../components/common/Btn_Static/Btn_Static";
import CheckBoxBtn from "../../components/common/DynamicBtn/CheckBoxBtn";
import { PageHeader } from "../../components/common/system/header/PageHeader";

export const OnboardingLevelPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <PageHeader title="회원 정보 입력" />
      <section className="flex gap-8 text-left flex-col flex-1 pt-15">
        <div className="flex flex-col gap-2">
          <p className="header-h4 text-left">전국 급수를 입력해주세요.</p>
          <div className="body-md-500 ">
            <p>급수를 입력하면,</p>
            <p>내 실력에 맞는 모임을 추천받을 수 있어요!</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-2 flex-col">
            <div className="flex">
              <p className="ml-1">전국 급수 </p>
              <img src="/src/assets/icons/cicle_s_red.svg" alt="" />
            </div>

            <div className="flex items-center gap-3">
              <div className="relative inline-block ">
                <select
                  name="전국 급수"
                  defaultValue=""
                  className="appearance-none border px-3 py-[0.625rem] flex justify-end gap-2 rounded-xl border-gy-200 w-40"
                >
                  <option value="" disabled hidden>
                    전국 급수
                  </option>
                  <option value="초심">초심</option>
                  <option value="D조">D조</option>
                  <option value="C조">C조</option>
                </select>
                <img
                  src="/src/assets/icons/arrow_down.svg"
                  alt="Dropdown arrow"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4"
                />
              </div>
              <CheckBoxBtn children="급수 없음" />
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center mb-3">
        <Btn_Static
          label="다음"
          size="L"
          kind="GR400"
          // initialStatus="disabled"
        />
      </div>
    </div>
  );
};
