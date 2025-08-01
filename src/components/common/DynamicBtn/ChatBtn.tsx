import useDynamicStatus from "../../../hooks/useDynamicStatus";
import type { BaseBtnProps, TextIconStatus } from "../../../types/DynamicBtn";
import ArrowRight from "@/assets/icons/arrow_right.svg?url";
import ArrowRight_G from "@/assets/icons/arrow_rightG.svg?url";

export default function ChatBtn({
  children,
  disabled = false,
  onClick,
  type,
  imgSrc,
}: BaseBtnProps) {
  const { status, onMouseDown, onMouseLeave, onMouseUp } = useDynamicStatus(
    disabled,
    false,
  );

  const statusMap: Record<TextIconStatus, { bg?: string; icon: string }> = {
    clicked: {
      bg: "bg-white",
      icon: ArrowRight,
    },
    pressing: {
      bg: "bg-gy-100",
      icon: ArrowRight,
    },
    default: {
      bg: "bg-white",
      icon: ArrowRight,
    },
    disabled: {
      bg: "bg-white text-gy-400",
      icon: ArrowRight_G,
    },
  };

  const { bg, icon } = statusMap[status as TextIconStatus];

  return (
    <button
      className={` body-rg-500  p-1 rounded-xl inline-flex gap-1 items-center cursor-pointer ${bg}`}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onClick={onClick}
      type={type ? type : "button"}
    >
      <div className="flex gap-2 items-center">
        <img
          src={imgSrc} //props로 src받기
          //src="/src/assets/images/image.png" //임시로 하드코딩
          alt="groupProfile"
          className="size-6 aspect-square rounded-lg"
        />
        {children}
      </div>
      <img src={icon} alt="운동 모임 프로필 이미지" className="size-4" />
    </button>
  );
}
