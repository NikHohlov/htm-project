/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";
import { Gradient } from "./gradient";

import { Icon } from "./Icon";

export const MenuClosedGradient = ({
  fill = "none",
  width = "33",
  height = "16",
  viewBox = "0 0 33 16",
  className,
}: IconProps): JSX.Element => (
  <Icon {...{ fill, width, height, viewBox, className }}>
    <path
      d="M31 2L2 2M31 8L2 8M31 14L2 14"
      stroke="url(#gradient)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <defs>
      <Gradient />
    </defs>
  </Icon>
);
