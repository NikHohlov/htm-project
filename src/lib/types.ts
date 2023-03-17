import type { MouseEventHandler } from "react";

export type IconProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  fillPath?: string;
  viewBox?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};