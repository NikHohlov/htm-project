
/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "./Icon";
import { Gradient } from "./gradient";

export const Events = ({ fill = "none", width="41", height="29", viewBox="0 0 41 29", className, gradient }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M20.5 9.50003V7.00006M19.2666 8.25008H21.7334M29.1334 2V4.50005M29.1334 9.49998V12M29.1334 17V19.5M29.1334 24.5V27M6.93336 16.375L10.6334 18.25L12.4834 22L14.3334 18.25L18.0334 16.375L14.3334 14.5L12.4834 10.7501L10.6334 14.5L6.93336 16.375ZM39 5.74999C36.9563 5.74999 35.3 4.07105 35.3 2H5.7C5.7 4.07105 4.04367 5.74999 2 5.74999V23.2499C4.04367 23.2499 5.7 24.9289 5.7 26.9999H35.3C35.3 24.9289 36.9563 23.2499 39 23.2499V5.74999Z" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"
            stroke={gradient ? "url(#gradient)" : "white"}/>
        <defs>
            <Gradient />
        </defs>
    </Icon>
);