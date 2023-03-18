import type { MouseEventHandler } from "react";

export type IconProps = {
  gradient?: boolean;
  width?: string | number;
  height?: string | number;
  fill?: string;
  fillPath?: string;
  viewBox?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

export enum Theme  {
  Light = "light",
  Dark = "dark"
}