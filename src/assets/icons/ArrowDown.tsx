
/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "./Icon";

export const ArrowDown = ({ fill = "none", width="47", height="16", viewBox="0 0 47 16", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M4 4L24.3864 13L43 4" stroke="white" strokeWidth="5" strokeLinecap="square"/>
    </Icon>
);