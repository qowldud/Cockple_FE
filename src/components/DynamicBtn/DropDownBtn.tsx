import type { BaseBtnProps, TextIconStatus } from "../../types/DynamicBtn";
import useDynamicStatus from "../../hooks/useDynamicStatus";

export default function DropDownBtn({
  children,
  disabled = false,
  onClick,
  type,
}: BaseBtnProps) {
  //상태 관리

  const { status, onMouseDown, onMouseLeave, onMouseUp } = useDynamicStatus(
    disabled,
    false,
  );

  const statusMap: Record<TextIconStatus, { bg?: string; icon: string }> = {
    clicked: {
      icon: "/src/assets/icons/arrow_down.svg",
    },
    pressing: {
      bg: "bg-gy-100",
      icon: "/src/assets/icons/arrow_down.svg",
    },
    default: {
      icon: "/src/assets/icons/arrow_down.svg",
    },
    disabled: {
      icon: "/src/assets/icons/arrow_down.svg",
    },
  };
  const { bg, icon } = statusMap[status as TextIconStatus];

  return (
    <button
      className={`inline-flex pr-[0.625rem] py-1 pl-4 gap-1 rounded-lg items-center header-h4  ${bg} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
      <img src={icon} alt="" className="pt-[0.125rem] size-4" />
    </button>
  );
}
