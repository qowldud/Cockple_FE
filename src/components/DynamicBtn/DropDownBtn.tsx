interface RegionSelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function RegionSelect({
  value,
  options,
  onChange,
  disabled = false,
}: RegionSelectProps) {
  const icon = disabled
    ? "/src/assets/icons/arrowDownG.svg"
    : "/src/assets/icons/arrowDown.svg";

  //기본 style제거 후 pressing=> hover로 변경

  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        className={`appearance-none border-none bg-transparent p-0 m-0 focus:outline-none 
          pl-3 py-1 pr-8 rounded-lg header-h4 
            ${disabled ? "text-gy-400 cursor-not-allowed" : "cursor-pointer hover:bg-gy-100"}
        `}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <img
        src={icon}
        alt="dropdown"
        className="pointer-events-none w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2"
      />
    </div>
  );
}
