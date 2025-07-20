import clsx from "clsx";
import { type ReactNode } from "react";

interface TextBoxMProps {
  children: ReactNode;
  className?: string;
}

export const TextBoxM = ({ className, children }: TextBoxMProps) => {
  return (
    <div
      className={clsx(
        "p-2 border-hard bg-white shadow-ds100 active:shadow-ds200-gr active:border-1 active:border-gr-600 body-md-500",
        className,
      )}
    >
      {children}
    </div>
  );
};
