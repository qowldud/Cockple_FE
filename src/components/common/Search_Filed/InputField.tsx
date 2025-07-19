import type { FieldValues, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  labelName?: string;
  placeholder?: string;
  errorMsg?: string | undefined;
  className?: string;
  InputLength?: number;
  register?: UseFormRegister<FieldValues>;
}

export default function InputField({
  labelName = "",
  placeholder = "",
  errorMsg = "",
  className = "",
  register,
  InputLength,
  ...props
}: InputFieldProps) {
  return (
    <div className="text-left flex flex-col gap-2 relative  pb-5">
      <div className="flex px-1 gap-[2px] items-center">
        {labelName && <p className="header-h5">{labelName}</p>}
        <img src="/src/assets/icons/cicle_s_red.svg" alt="icon-cicle" />
      </div>
      <div className="relative">
        <input
          type="text"
          className={`w-full rounded-xl  border py-[0.625rem] pl-3 pr-15 body-md-500 focus:outline-none  ${errorMsg ? "!border-rd-500" : "focus:border-active border-gray-200"} ${className}`}
          {...register}
          {...props}
          placeholder={placeholder}
        />
        <p className="absolute right-2 top-3 body-rg-500 text-gy-400">
          ({InputLength} / 17 )
        </p>
      </div>
      {errorMsg && (
        <p className="absolute bottom-0 body-sm-500 ml-2 text-rd-500">
          {errorMsg}
        </p>
      )}
    </div>
  );
}
