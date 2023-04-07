import Navbar from "@/components/widgets/Navbar";

import type { AppProps } from "next/app";

import useTheme from "@/lib/hooks/useTheme";

import { AnimatePresence } from "framer-motion";

import { createContext } from "react";

import * as styles from "@/styles/pages";

import navbar from "@/components/widgets/Navbar/Navbar.module.scss";
import parallax from "@/components/widgets/Parallax/parallax.module.scss";
import smm from "@/components/widgets/SocialMediaList/SocialMediaList.module.scss";
import button from "@/components/ui/Button/Button.module.scss";
import caseItem from "@/components/ui/CaseItem/CaseItem.module.scss";
import serviceItem from "@/components/ui/ServiceItem/ServiceItem.module.scss";

import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from "next/head";

const criticalStyles = { ...styles, navbar, parallax, smm, button, caseItem, serviceItem };

export const StylesContext = createContext(criticalStyles);


export default function App({ Component, pageProps }: AppProps) {
    const { theme, path } = useTheme();

    const onExit = () => {
        setTimeout(() => window.scrollTo({ behavior: "smooth", top: 0 }), 1000);
    };

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="Независимое SOCIAL & digital агентство"
                />
            </Head>
            <StylesContext.Provider value={criticalStyles}>
                <Navbar theme={theme} />

                <AnimatePresence
                    mode="wait"
                    initial={false}
                    onExitComplete={onExit}
                >
                    <Component {...pageProps} key={path}/>
                </AnimatePresence>
            </StylesContext.Provider>
        </>
    );
}
