/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";
import { Gradient } from "./gradient";

import { Icon } from "./Icon";

export const MenuOpen = ({ fill = "none", width="27", height="27", viewBox="0 0 27 27", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <line x1="2.82843" y1="2" x2="24.0416" y2="23.2132" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
        <line x1="24" y1="2.82843" x2="2.7868" y2="24.0416" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
        <defs>
            <Gradient />
        </defs>
    </Icon>
);
