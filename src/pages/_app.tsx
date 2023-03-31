import Navbar from "@/components/widgets/Navbar";

import type { AppProps } from "next/app";

import useTheme from "@/lib/hooks/useTheme";

import { AnimatePresence } from "framer-motion";

// import { useEffect } from "react";

// import { Router } from "next/router";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    const { theme, path } = useTheme();

    // let copies: Node[] = [];

    // useEffect(() => {
    //     Router.events.on("beforeHistoryChange", onLoad);
    //     return () => {
    //         Router.events.off("beforeHistoryChange", onLoad);
    //     };
    // }, []);

    // const onLoad = () => {
    //     const nodes = document.querySelectorAll(
    //         "link[rel=stylesheet], style:not([media=x])"
    //     );
    //     copies = [...nodes].map((el) => el.cloneNode(true));

    //     for (const copy of copies) {
    //         (copy  as HTMLElement).removeAttribute("data-n-p");
    //         (copy  as HTMLElement).removeAttribute("data-n-href");

    //         document.head.appendChild(copy);
    //     }
    // };

    const onExit = () => {
        // for (const copy of copies) {
        //     document.head.removeChild(copy);
        // }
        setTimeout(() => window.scrollTo({ behavior: "smooth", top: 0 }), 1000);
    };

    return (
        <>
            <Navbar theme={theme} />

            <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={onExit}
            >
                <Component {...pageProps} key={path}/>
            </AnimatePresence>
        </>
    );
}
