import { useNavigate } from "react-router-dom";
import ArrowLeft from "@/assets/icons/arrow_left.svg";
import MeetBall from "@/assets/icons/meetball.svg";

interface PageHeaderProps {
  title: string;
  onMoreClick?: () => void;
}

export const PageHeader = ({ title, onMoreClick }: PageHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between gap-3 w-full px-4">
      <button type="button" className="p-1">
        <img
          src={ArrowLeft}
          className="w-6"
          alt="arrow_left"
          onClick={() => navigate(-1)}
        />
      </button>

      <div className="flex justify-start flex-1 header-h4">{title}</div>

      {onMoreClick && (
        <button type="button" className="p-1" onClick={onMoreClick}>
          <img src={MeetBall} className="w-6" alt="meetball icon" />
        </button>
      )}
    </div>
  );
};
