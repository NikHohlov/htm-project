/* eslint max-len: ["off"] */
import React from "react";

import type { IconProps } from "@/lib/types";

import { Icon } from "./Icon";

export const SelectArrow = ({ fill = "none", width="20", height="13", viewBox="0 0 20 13", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M20 2.30892L10 12.5L4.45466e-07 2.30892L1.775 0.5L10 8.88217L18.225 0.500001L20 2.30892Z" fill="white"/>
    </Icon>
);