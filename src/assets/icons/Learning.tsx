/* eslint max-len: ["off"] */
import type { IconProps } from "@/lib/types";
import { Gradient } from "./gradient";

import { Icon } from "./Icon";

export const AppleMusic = ({ fill = "none", width="20", height="25", viewBox="0 0 20 25", className, gradient }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M37.6739 22.729L34.7306 19.7235V9.41453L36.6521 8.70715C36.8675 8.62796 37.0538 8.48287 37.1855 8.29166C37.3172 8.10045 37.3879 7.87243 37.3881 7.63866C37.3883 7.4049 37.3178 7.17677 37.1864 6.98537C37.055 6.79397 36.8689 6.64862 36.6536 6.56911L19.0728 0.0679164C18.8279 -0.0226388 18.5596 -0.0226388 18.3147 0.0679164L0.733937 6.56911C0.519558 6.64845 0.334209 6.7931 0.202949 6.98349C0.071689 7.17388 0.000849435 7.40084 7.5911e-06 7.63367C-0.000834253 7.86651 0.0683622 8.09399 0.198242 8.28537C0.328121 8.47674 0.512419 8.62278 0.726219 8.70374L7.21451 11.1579V18.6489C7.21451 18.8814 7.28427 19.1083 7.41451 19.299C7.48612 19.4039 8.1645 20.3498 9.90136 21.2425C12.0956 22.3703 14.9735 22.9422 18.4551 22.9422C21.9342 22.9422 24.8267 22.3715 27.0522 21.2459C28.8062 20.3587 29.5071 19.4227 29.5814 19.3189C29.7203 19.1244 29.7952 18.8898 29.7952 18.6491V11.2313L32.5043 10.234V19.7235L29.5609 22.729C29.3521 22.9421 29.2349 23.2312 29.2349 23.5327C29.2349 23.8341 29.3521 24.1232 29.5609 24.3363L32.5043 27.3417V29.8633C32.5043 30.4911 33.0027 31 33.6175 31C34.2322 31 34.7306 30.4911 34.7306 29.8633V27.3417L37.674 24.3363C38.1087 23.8926 38.1087 23.1728 37.6739 22.729ZM18.6938 2.34554L32.999 7.63544L18.4604 12.9875L4.3494 7.64991L18.6938 2.34554ZM27.5687 18.1959C23.7632 21.6924 12.4549 21.2915 9.44087 18.2073V12.0001L18.0684 15.2635C18.2053 15.2856 18.3346 15.4062 18.8326 15.267L27.5688 12.051L27.5687 18.1959ZM33.6174 25.2635L31.9222 23.5327L33.6174 21.8017L35.3125 23.5327L33.6174 25.2635Z"
            fill={gradient ? "url(#gradient)" : "white"}/>
        <defs>
            <Gradient />
        </defs>
    </Icon>
);
