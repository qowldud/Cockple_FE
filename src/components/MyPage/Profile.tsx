import Female from "../../assets/icons/female.svg?react";
import Male from "../../assets/icons/male.svg?react";

interface ProfileProps {
  name: string;
  gender: "female" | "male";
  group: string;
  birth?: string;
  imageSrc: string; 
}

export const Profile = ({
  name,
  gender,
  group,
  birth,
  imageSrc,
}: ProfileProps) => {
  return (
    <div className="w-[21.44rem] h-[4.75rem] bg-white rounded-[1rem] px-4 py-2 flex items-center gap-[0.8125rem]">
      <img
        src={imageSrc}
        alt="프로필 이미지"
        className="w-[4.75rem] h-[4.75rem] rounded-full"
      />

      <div className="flex flex-col justify-center gap-[0.25rem]">
        <div className="flex items-center gap-1">
          <p className="header-h5 text-black">{name}</p>
          {gender === "female" ? (
            <Female className="w-[1rem] h-[1rem]" />
          ) : (
            <Male className="w-[1rem] h-[1rem]" />
          )}
        </div>
        <div className="flex items-center gap-[0.25rem] body-sm-500">
          <p className="whitespace-nowrap">{group}</p>
          {birth && (
            <>
              <span className="text-[#D6DAE0]">|</span>
              <p className="truncate overflow-hidden whitespace-nowrap max-w-[5rem]">
                {birth}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
