export type IconName =
  | "icon-canvasing"
  | "icon-chat-interview"
  | "icon-collecting-data"
  | "icon-data-entry"
  | "icon-disburse"
  | "icon-distribution-potential-data"
  | "icon-home"
  | "icon-letter"
  | "icon-potential-data"
  | "icon-verify-data";
export interface IconCheckProps {
  size?: number;
}

export interface IconProps {
  name: IconName;
}
