import CheckIcon from "@/assets/icons/check.svg";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

interface SortBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selected: string;
  onSelect: (option: string) => void;
}

const options = ["최신순", "참여 인원 많은 순"];

export const SortBottomSheet = ({
  isOpen,
  onClose,
  selected,
  onSelect,
}: SortBottomSheetProps) => {
  useLockBodyScroll(isOpen);

  if (!isOpen) return;
  return (
    <div
      className="fixed bottom-0 bg-black/20 -mx-4 w-full h-full"
      onClick={onClose}
    >
      <div
        className="fixed bottom-0 w-full max-w-[444px] px-4 pt-4 pb-8 bg-white rounded-t-3xl"
        onClick={e => e.stopPropagation()}
      >
        {options.map(option => (
          <div
            key={option}
            className="flex gap-2 w-full justify-between p-3"
            onClick={() => {
              onSelect(option);
              onClose();
            }}
          >
            {option}
            {selected === option && <img src={CheckIcon} alt="check icon" />}
          </div>
        ))}
      </div>
    </div>
  );
};
