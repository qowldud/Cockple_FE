import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../components/common/system/header/PageHeader";
import SearchField from "../../components/common/Search_Filed/SearchField";

export const OnboardingAddressSearchPage = () => {
  const {
    data,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <PageHeader title="주소 검색" />
        <div className="mt-2">
          <SearchField register={register("location")} />
        </div>
      </div>
    </>
  );
};
