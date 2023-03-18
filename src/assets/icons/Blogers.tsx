
/* eslint max-len: ["off"] */

import type { IconProps } from "@/lib/types";
import { Gradient } from "./gradient";

import { Icon } from "./Icon";

export const Blogers = ({ fill = "none", width="37", height="37", viewBox="0 0 37 37", className, gradient }: IconProps): JSX.Element => (
    <Icon {...{ fill, width, height, viewBox, className }}>
        <path d="M18.5001 12.8186C15.9817 12.8186 13.9329 14.9664 13.9329 17.6065C13.9329 20.2465 15.9818 22.3942 18.5001 22.3942C21.0184 22.3942 23.0673 20.2464 23.0673 17.6065C23.0673 14.9664 21.0184 12.8186 18.5001 12.8186ZM18.5001 20.1216C17.1771 20.1216 16.1009 18.9932 16.1009 17.6065C16.1009 16.2196 17.1772 15.0913 18.5001 15.0913C19.8231 15.0913 20.8993 16.2197 20.8993 17.6065C20.8993 18.9932 19.823 20.1216 18.5001 20.1216Z"
            fill={gradient ? "url(#gradient)" : "white"}/>
        <path d="M36.947 14.0499C36.8845 13.8482 36.7694 13.6689 36.6148 13.5323C36.4601 13.3956 36.2721 13.307 36.0719 13.2765L24.6016 11.5292L19.4721 0.633429C19.3826 0.443292 19.2441 0.283203 19.0723 0.171263C18.9006 0.0593238 18.7023 0 18.5001 0C18.2978 0 18.0996 0.0593238 17.9278 0.171263C17.756 0.283203 17.6175 0.443292 17.528 0.633429L12.3986 11.5292L0.928151 13.2765C0.727981 13.307 0.539938 13.3956 0.385288 13.5322C0.230639 13.6689 0.115554 13.8482 0.0530495 14.0499C-0.00945469 14.2515 -0.0168843 14.4675 0.0316009 14.6734C0.0800862 14.8792 0.182552 15.0667 0.327409 15.2147L8.62731 23.6959L6.6679 35.6715C6.64122 35.8346 6.64883 36.0019 6.69022 36.1616C6.73161 36.3213 6.80577 36.4696 6.90752 36.5961C7.00928 36.7226 7.13616 36.8243 7.27931 36.8941C7.42246 36.9639 7.57841 37 7.73628 37H29.2638C29.4216 37 29.5776 36.9639 29.7208 36.8941C29.8639 36.8243 29.9908 36.7226 30.0925 36.5961C30.1943 36.4696 30.2685 36.3213 30.3098 36.1616C30.3512 36.0019 30.3588 35.8346 30.3322 35.6715L28.3728 23.6959L36.6727 15.2147C36.8175 15.0667 36.9199 14.8792 36.9684 14.6734C37.0169 14.4675 37.0095 14.2516 36.947 14.0499ZM12.7177 34.7274C13.2278 31.8681 15.6266 29.6972 18.5 29.6972C21.3733 29.6972 23.7721 31.8681 24.2822 34.7274H12.7177ZM26.4514 22.4856C26.3255 22.6142 26.2314 22.7729 26.1771 22.9482C26.1228 23.1234 26.1099 23.3098 26.1396 23.4914L27.978 34.7273H26.4771C25.946 30.6094 22.5714 27.4244 18.5 27.4244C14.4286 27.4244 11.0539 30.6094 10.5228 34.7273H9.02195L10.8604 23.4914C10.8901 23.3098 10.8772 23.1234 10.8229 22.9482C10.7686 22.7729 10.6745 22.6142 10.5486 22.4856L3.41343 15.1945L13.2741 13.6923C13.448 13.6659 13.6132 13.5954 13.7554 13.4872C13.8976 13.3789 14.0125 13.236 14.0903 13.0708L18.5 3.70398L22.9096 13.0708C22.9874 13.236 23.1024 13.3789 23.2445 13.4872C23.3867 13.5954 23.5519 13.6659 23.7258 13.6923L33.5865 15.1945L26.4514 22.4856Z"
            fill={gradient ? "url(#gradient)" : "white"}/>
        <defs>
            <Gradient />
        </defs>
    </Icon>
);