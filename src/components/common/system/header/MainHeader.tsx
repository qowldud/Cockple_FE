import LogoIcon from "@/assets/icons/Logo.svg";
import Alert from "@/assets/icons/alert.svg";
import AlertNoti from "@/assets/icons/alert_noti.svg";
import clsx from "clsx";

interface MainHeaderProps {
  hasNotification?: boolean;
  background?: "white" | "clear";
}

export const MainHeader = ({
  hasNotification,
  background = "white",
}: MainHeaderProps) => {
  const alertIcon = hasNotification ? AlertNoti : Alert;

  return (
    <div
      className={clsx(
        "fixed z-10 top-0 flex w-full max-w-[444px] justify-between items-center px-4 h-14 transition-all duration-500",
        background === "white" ? "bg-white" : "bg-transparent",
      )}
    >
      <img src={LogoIcon} className="w-15" alt="Cockple Logo" />

      <div className="flex gap-3">
        <div></div>
        <button type="button" className="p-1">
          <img
            src={alertIcon}
            className="w-6 cursor-pointer"
            alt="alert icon"
          />
        </button>
      </div>
    </div>
  );
};
