import { useForm } from "react-hook-form";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import Btn_Static from "../../components/common/Btn_Static/Btn_Static";

export const OnboardingAddressPage = () => {
  const {
    data,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full min-h-screen flex flex-col">
      <PageHeader title="회원 정보 입력" />

      <section className="flex gap-8 text-left flex-col flex-1 pt-15">
        <div className="flex flex-col gap-2">
          <p className="header-h4 text-left">위치 정보를 입력해주세요</p>
          <div className="body-md-500 ">
            <p>위치 정보를 입력하면,</p>
            <p>가까운 거리의 모임을 추천받을 수 있어요!</p>
          </div>
        </div>

        <div className="text-left flex flex-col gap-2">
          <div className="flex px-1 gap-[2px] items-center">
            <p className="header-h5">이름</p>
            <img src="/src/assets/icons/cicle_s_red.svg" alt="icon-cicle" />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-xl border-gy-200 border py-[0.625rem] px-3 focus:outline-none focus:border-active "
              placeholder="건물명,도로명으로 검색"
              {...register("name", {
                required: "이름은 필수 입력입니다",
                maxLength: {
                  value: 17,
                  message: "최대 17글자만 가능합니다",
                },
              })}
            />
            <img
              src="/src/assets/icons/search.svg"
              alt=""
              className="absolute right-2 top-3"
            />
          </div>
        </div>

        {/* <Btn_Static label="현재 위치 불러오기" /> */}
      </section>
    </div>
  );
};
