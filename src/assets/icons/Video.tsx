/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";

import { Icon } from "./Icon";

export const Video = ({ fill = "none", width="29", height="19", viewBox="0 0 29 19", className }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M27.0657 2.72594C26.8753 2.75767 26.685 2.85286 26.5263 2.94804L21.5767 5.80362V13.1647L26.5581 16.0203C27.4782 16.5596 28.6204 16.2424 29.1598 15.3222C29.3185 15.0367 29.4136 14.7194 29.4136 14.3704V4.5662C29.4136 3.39224 28.3031 2.44038 27.0657 2.72594Z" fill="url(#paint0_linear_663_699)"/>
        <path d="M16.4037 0.980865H3.17287C1.42779 0.980865 0 2.40866 0 4.15373V14.8463C0 16.5914 1.42779 18.0192 3.17287 18.0192H16.4037C18.1488 18.0192 19.5766 16.5914 19.5766 14.8463V4.15373C19.5766 2.37693 18.1488 0.980865 16.4037 0.980865Z" fill="url(#paint1_linear_663_699)"/>
        <defs>
            <linearGradient id="paint0_linear_663_699" x1="25.4952" y1="2.67484" x2="25.4952" y2="16.2835" gradientUnits="userSpaceOnUse">
                <stop stop-color="#615AF4"/>
                <stop offset="1" stop-color="#34C3FB"/>
            </linearGradient>
            <linearGradient id="paint1_linear_663_699" x1="9.78829" y1="0.980865" x2="9.78829" y2="18.0192" gradientUnits="userSpaceOnUse">
                <stop stop-color="#615AF4"/>
                <stop offset="1" stop-color="#34C3FB"/>
            </linearGradient>
        </defs>
    </Icon>
);
