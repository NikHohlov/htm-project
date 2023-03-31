import {  useState } from "react";
import { singletonHook } from "react-singleton-hook";

export default function usePageTransitionL() {
    const [variants, setVariants] = useState({
        hidden: { opacity: 1, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 1, x: 0, y: 0 },
    });

    const width = window.screen.width;

    const height = window.screen.height;

    const paths = ["/", "/services", "/partners", "/cases", "/contacts"];

    const nestedPaths = ["/services/[service]", "/cases/[case]"];

    const transitionHandler = (current: string, next: string) => {
        if (nestedPaths.includes(next)) {
            setVariants({
                hidden: { opacity: 0, x: width, y: 0 },
                enter: { opacity: 1, x: 0, y: 0 },
                exit: { opacity: 0, x: 0, y: -height * 1.9 },
            });
            return;
        }
        paths.indexOf(current) < paths.indexOf(next) ? setVariants({
            hidden: { opacity: 0, x: width, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, x: -width, y: 0 },
        })
            :
            setVariants({
                hidden: { opacity: 0, x: -width, y: 0 },
                enter: { opacity: 1, x: 0, y: 0 },
                exit: { opacity: 0, x: width, y: 0 },
            });
    };


    return { variants, transitionHandler };
}

export const usePageTransition = singletonHook({
    variants: {
        hidden: { opacity: 0, x: 1600, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -1600, y: 0 },
    },
    transitionHandler: () => undefined
}, usePageTransitionL);
