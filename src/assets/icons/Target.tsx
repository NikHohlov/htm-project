/* eslint max-len: ["off"] */
import React from "react";

import type { IconProps } from "@/lib/types";

import { Icon } from "./Icon";

export const Target = ({ fill = "none", width="78", height="78", viewBox="0 0 78 78", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M39.4535 0V10.8837M78 39.4535H67.1163M39.4535 67.1163V78M10.8837 39.4535H0M73.4651 39C73.4651 58.0346 58.0346 73.4651 39 73.4651C19.9654 73.4651 4.53488 58.0346 4.53488 39C4.53488 19.9654 19.9654 4.53488 39 4.53488C58.0346 4.53488 73.4651 19.9654 73.4651 39Z" stroke="white" strokeWidth="3"/>
    </Icon>
);
