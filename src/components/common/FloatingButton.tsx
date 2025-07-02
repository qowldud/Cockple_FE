import clsx from "clsx";

interface FloatingButtonProps {
  size: "M" | "L";
  color: "white" | "green";
  icon: string;
  iconSize?: string;
  shadow?: boolean;
  notificationCount?: number;
  onClick?: () => void;
}

export const FloatingButton = ({
  size = "M",
  color = "white",
  shadow = true,
  icon,
  iconSize,
  notificationCount,
  onClick,
}: FloatingButtonProps) => {
  return (
    <div
      className={clsx(
        `flex items-center justify-center cursor-pointer rounded-full relative`,
        size === "M" ? "w-11 h-11" : "w-13 h-13",
        color === "white" ? "bg-white active: bg-gy-100" : "bg-gr-500",
        shadow ? "shadow-ds200" : "",
      )}
      onClick={onClick}
    >
      <img
        src={icon}
        alt="floating icon"
        className={clsx(iconSize ? iconSize : "w-6")}
      />

      {notificationCount !== undefined && (
        <span className="flex justify-center items-center absolute left-8 bottom-10 w-5 h-5 rounded-full bg-rd-500 body-sm-500 text-white">
          {notificationCount}
        </span>
      )}
    </div>
  );
};
