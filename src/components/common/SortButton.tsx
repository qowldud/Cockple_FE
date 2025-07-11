import ArrowDown from "@/assets/icons/arrow_down.svg";

interface SortButtonProps {
  label: string;
  open?: boolean;
  onClick?: () => void;
}

export const SortButton = ({ label, open, onClick }: SortButtonProps) => {
  return (
    <div
      className="flex items-center gap-2 px-2 py-1 body-rg-500"
      onClick={onClick}
    >
      {label}{" "}
      <span
        className={`${open ? "rotate-180" : ""} transition-transform duration-300`}
      >
        <img src={ArrowDown} alt="arrow" className="w-4" />
      </span>
    </div>
  );
};
