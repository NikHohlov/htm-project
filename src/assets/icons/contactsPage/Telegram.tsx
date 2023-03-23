/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "../Icon";

export const Telegram = ({ fill = "none", width="33", height="29", viewBox="0 0 33 29", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M0.582878 13.9054L8.18675 16.7699L11.1299 26.3233C11.3182 26.9352 12.0595 27.1613 12.5516 26.7553L16.7901 23.2678C17.0063 23.09 17.2747 22.9893 17.5535 22.9815C17.8323 22.9736 18.1058 23.059 18.3315 23.2244L25.9763 28.8264C26.5027 29.2126 27.2483 28.9214 27.3803 28.2795L32.9806 1.09022C33.1247 0.388975 32.442 -0.196021 31.7805 0.062226L0.573968 12.213C-0.196143 12.5128 -0.189433 13.6133 0.582878 13.9054ZM10.6556 15.245L25.5164 6.00689C25.7835 5.84135 26.0583 6.20585 25.8289 6.42058L13.5644 17.9273C13.1337 18.3317 12.8553 18.8743 12.7765 19.4627L12.3587 22.5876C12.3034 23.0049 11.7227 23.0463 11.6086 22.6425L10.0019 16.9441C9.81783 16.2941 10.086 15.5999 10.6556 15.245Z" fill="url(#paint0_linear_255_558)"/>
        <defs>
            <linearGradient id="paint0_linear_255_558" x1="16.5" y1="0" x2="16.5" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#615AF4"/>
                <stop offset="1" stopColor="#34C3FB"/>
            </linearGradient>
        </defs>
    </Icon>
);