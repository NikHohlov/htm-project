import React from "react";

import { isUndefined } from "@/lib/utils/typeCheckers";

import type { IconProps } from "@/lib/types";

import styles from "@/assets/icons/styles.module.scss";

type IconPropsWithChildren = IconProps & {
  children: JSX.Element | JSX.Element[];
};

export function Icon({
    fill = "currentColor",
    width = "24",
    height = "24",
    viewBox = "0 0 24 24",
    className,
    children,
    onClick,
}: IconPropsWithChildren) {
    return (
        <svg
            className={`${className ?? ""} ${!isUndefined(onClick) ? styles.pointer : ""}`}
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            {children}
        </svg>
    );
}