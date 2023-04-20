/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "./Icon";

export const Plus = ({ fill = "none", width="12", height="3", viewBox="0 0 12 3", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <rect x="12" y="0.5" width="2" height="12" transform="rotate(90 12 0.5)" fill="url(#paint0_linear_240_406)"/>
        <defs>
            <linearGradient id="paint0_linear_240_406" x1="13" y1="0.5" x2="13" y2="12.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.00312487" stop-color="#34C3FB"/>
                <stop offset="1" stop-color="#615AF4"/>
            </linearGradient>
        </defs>
    </Icon>
);
