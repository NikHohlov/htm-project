/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "../Icon";

export const Nameless = ({ fill = "none", width="30", height="30", viewBox="0 0 30 30", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <g clip-path="url(#clip0_255_561)">
            <path d="M14.9928 0.0109418C14.9928 0.0109418 15.5477 14.1854 6.89238 14.5188L0.0486823 15C0.0486823 15 -0.579333 3.74987 2.67592 1.75104C5.93116 -0.24779 14.9928 0.0109418 14.9928 0.0109418Z" fill="url(#paint0_linear_255_561)"/>
            <path d="M15.0072 0.0108689C15.0072 0.0108689 14.4523 14.1854 23.1076 14.5188L29.9513 15C29.9513 15 30.5793 3.74982 27.3241 1.75098C24.0696 -0.247139 15.0072 0.0108689 15.0072 0.0108689Z" fill="url(#paint1_linear_255_561)"/>
            <path d="M15.0072 29.9891C15.0072 29.9891 14.4523 15.8146 23.1076 15.4812L29.9513 15C29.9513 15 30.5793 26.2501 27.3241 28.249C24.0688 30.2478 15.0072 29.9891 15.0072 29.9891Z" fill="url(#paint2_linear_255_561)"/>
            <path d="M14.9928 29.9891C14.9928 29.9891 15.5477 15.8146 6.89238 15.4812L0.0486823 15C0.0486823 15 -0.579333 26.2502 2.67592 28.249C5.93116 30.2471 14.9928 29.9891 14.9928 29.9891Z" fill="url(#paint3_linear_255_561)"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_255_561" x1="7.50011" y1="7.06663e-05" x2="7.50011" y2="15" gradientUnits="userSpaceOnUse">
                <stop stop-color="#605BF4"/>
                <stop offset="1" stop-color="#34C2FB"/>
            </linearGradient>
            <linearGradient id="paint1_linear_255_561" x1="22.4999" y1="-2.24946e-06" x2="22.4999" y2="15" gradientUnits="userSpaceOnUse">
                <stop stop-color="#605BF4"/>
                <stop offset="1" stop-color="#34C2FB"/>
            </linearGradient>
            <linearGradient id="paint2_linear_255_561" x1="22.4999" y1="29.9999" x2="22.4999" y2="15" gradientUnits="userSpaceOnUse">
                <stop stop-color="#605BF4"/>
                <stop offset="1" stop-color="#34C2FB"/>
            </linearGradient>
            <linearGradient id="paint3_linear_255_561" x1="7.50011" y1="30" x2="7.50011" y2="15" gradientUnits="userSpaceOnUse">
                <stop stop-color="#605BF4"/>
                <stop offset="1" stop-color="#34C2FB"/>
            </linearGradient>
            <clipPath id="clip0_255_561">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>

    </Icon>
);