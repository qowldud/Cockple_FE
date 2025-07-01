import LogoIcon from "@/assets/icons/Logo.svg";
import Alert from "@/assets/icons/alert.svg";
import AlertNoti from "@/assets/icons/alert_noti.svg";
import clsx from "clsx";

interface MainAppBarProps {
  hasNotification?: boolean;
  background?: "white" | "clear";
}

export const MainAppBar = ({
  hasNotification,
  background = "white",
}: MainAppBarProps) => {
  return (
    <div
      className={clsx(
        "flex justify-between items-center w-full h-14 px-4",
        background === "white" ? "bg-white" : "bg-transparent",
      )}
    >
      <img src={LogoIcon} className="w-15" alt="Logo" />

      <div className="flex gap-3">
        <div></div>
        <div className="p-1">
          <img
            src={hasNotification ? AlertNoti : Alert}
            className="w-6 cursor-pointer"
            alt="noti"
          />
        </div>
      </div>
    </div>
  );
};
