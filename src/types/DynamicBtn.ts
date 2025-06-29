export type IconTextStatus =
  | "clicked"
  | "CLpressing"
  | "pressing"
  | "default"
  | "disabled";

export type TextIconStatus = "clicked" | "pressing" | "default" | "disabled";

export type BaseBtnProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
};
