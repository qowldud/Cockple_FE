import { UseFormRegisterReturn } from "react-hook-form";
import SearchFieldBtn from "./SearchFieldBtn";

interface SearchFieldProps {
  register: UseFormRegisterReturn;
  onClick: () => void;
}
export default function SearchField({ register, onClick }: SearchFieldProps) {
  return (
    <>
      <div className="relative ">
        <input
          type="text"
          className="w-full rounded-xl border-gy-200 border py-[0.625rem] px-3 focus:outline-none  "
          placeholder="건물명,도로명으로 검색"
          {...register}
        />
        <button
          className="cursor-pointer absolute right-2 top-3"
          onClick={onClick}
        >
          <img src="/src/assets/icons/search.svg" alt="" className="size-6" />
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <SearchFieldBtn />
      </div>
    </>
  );
}
