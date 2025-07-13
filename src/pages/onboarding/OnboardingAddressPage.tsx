import { useForm } from "react-hook-form";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import { useNavigate } from "react-router-dom";
import SearchField from "../../components/common/Search_Filed/SearchField";

export const OnboardingAddressPage = () => {
  const {
    // data,
    register,
    // handleSubmit,
    // setValue,
    // formState: { errors },
  } = useForm();
  const navigate = useNavigate();

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

        <SearchField
          register={register("location")}
          label="위치"
          onSearchClick={() => navigate("/onboarding/address/search")}
        />
      </section>
    </div>
  );
};
