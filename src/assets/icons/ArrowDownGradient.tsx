/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "./Icon";

export const ArrowDownGradient = ({ fill = "none", width="47", height="16", viewBox="0 0 47 16", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M4 4L24.3864 13L43 4" stroke="url(#paint0_linear_616_649)" strokeWidth="5" strokeLinecap="square"/>
        <defs>
            <linearGradient id="paint0_linear_616_649" x1="23.5" y1="4" x2="23.5" y2="13" gradientUnits="userSpaceOnUse">
                <stop stopColor="#615AF4"/>
                <stop offset="1" stopColor="#34C3FB"/>
            </linearGradient>
        </defs>
    </Icon>
);