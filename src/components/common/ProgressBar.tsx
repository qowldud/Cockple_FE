interface ProgressBarProps {
  progress?: number;
}

export const ProgressBar = ({ progress = 0 }: ProgressBarProps) => {
  return (
    <div className="w-full h-1">
      <div className="h-full bg-gr-500" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
