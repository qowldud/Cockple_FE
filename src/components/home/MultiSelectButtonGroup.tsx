import clsx from "clsx";

interface MultiSelectButtonGroupProps {
  options: string[];
  selected: string[];
  onChange: (select: string[]) => void;
}

export const MultiSelectButtonGroup = ({
  options,
  selected,
  onChange,
}: MultiSelectButtonGroupProps) => {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };
  return (
    <div className="flex flex-wrap gap-3">
      {options.map(option => (
        <button
          key={option}
          onClick={() => toggleOption(option)}
          className={clsx(
            "w-18.5 h-9.5 border-hard border-1 bg-white body-rg-500",
            selected.includes(option)
              ? "border-gr-600 shadow-ds200-gr"
              : "border-gy-100 shadow-ds100",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
