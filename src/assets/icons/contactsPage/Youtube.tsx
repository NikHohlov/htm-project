/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "../Icon";

export const Youtube = ({ fill = "none", width="37", height="25", viewBox="0 0 37 25", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M33.0254 0H3.97461C1.78301 0 0 1.76236 0 3.92857V21.0714C0 23.2376 1.78301 25 3.97461 25H33.0254C35.217 25 37 23.2376 37 21.0714V3.92857C37 1.76236 35.217 0 33.0254 0ZM24.766 13.4584L13.2035 19.1726C13.053 19.247 12.8871 19.2857 12.7188 19.2857C12.5765 19.2857 12.4355 19.258 12.304 19.2042C12.1724 19.1504 12.0529 19.0715 11.9522 18.972C11.8516 18.8725 11.7717 18.7543 11.7172 18.6243C11.6628 18.4943 11.6347 18.355 11.6348 18.2143V6.78571C11.6347 6.60307 11.6819 6.42344 11.7719 6.2639C11.8618 6.10436 11.9916 5.9702 12.1488 5.87417C12.306 5.77814 12.4854 5.72343 12.67 5.71524C12.8546 5.70705 13.0382 5.74564 13.2035 5.82736L24.766 11.5416C24.9461 11.6306 25.0975 11.7674 25.2033 11.9367C25.3092 12.106 25.3652 12.301 25.3652 12.5C25.3652 12.699 25.3092 12.894 25.2033 13.0633C25.0975 13.2326 24.9461 13.3694 24.766 13.4584Z" fill="url(#paint0_linear_255_569)"/>
        <path d="M13.8027 16.4807L21.8574 12.5L13.8027 8.51938V16.4807Z" fill="url(#paint1_linear_255_569)"/>
        <defs>
            <linearGradient id="paint0_linear_255_569" x1="18.5" y1="0" x2="18.5" y2="25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#615AF4"/>
                <stop offset="1" stopColor="#34C3FB"/>
            </linearGradient>
            <linearGradient id="paint1_linear_255_569" x1="18.5" y1="0" x2="18.5" y2="25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#615AF4"/>
                <stop offset="1" stopColor="#34C3FB"/>
            </linearGradient>
        </defs>

    </Icon>
);