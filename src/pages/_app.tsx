import Navbar from "@/components/widgets/Navbar";

import type { AppProps } from "next/app";

import useTheme from "@/lib/hooks/useTheme";

import { AnimatePresence, motion } from "framer-motion";

import { createContext, useEffect, useState } from "react";

import * as styles from "@/styles/pages";

import arrow from "@/components/ui/ArrowScroll/ArrowScroll.module.scss";
import button from "@/components/ui/Button/Button.module.scss";
import caseItem from "@/components/ui/CaseItem/CaseItem.module.scss";
import serviceItem from "@/components/ui/ServiceItem/ServiceItem.module.scss";
import feedbackForm from "@/components/widgets/FeedbackForm/FeedbackForm.module.scss";
import mobileMenu from "@/components/widgets/MobileMenu/MobileMenu.module.scss";
import navbar from "@/components/widgets/Navbar/Navbar.module.scss";
import parallax from "@/components/widgets/Parallax/parallax.module.scss";
import smm from "@/components/widgets/SocialMediaList/SocialMediaList.module.scss";

import { LogoLoader } from "@/assets/icons/LogoLoader";
import { LogoLoaderGradient } from "@/assets/icons/LogoLoaderGradient";
import { MobileMenu } from "@/components/widgets/MobileMenu/MobileMenu";
import { Theme } from "@/lib/types";
import "@/styles/globals.css";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { opacityFromZeroToOne } from "@/lib/animaitons/animations";

const criticalStyles = {
  ...styles,
  navbar,
  parallax,
  smm,
  button,
  caseItem,
  serviceItem,
  mobileMenu,
  arrow,
  feedbackForm,
};

export const StylesContext = createContext(criticalStyles);

export default function App({ Component, pageProps }: AppProps) {
  const { theme, path } = useTheme();
  const [globalInit, setGlobalInit] = useState(true);

  useEffect(() => {
    history.scrollRestoration = "manual";
    setTimeout(() => {
      setGlobalInit(false);
    }, 1000);
  }, []);

  const Loader = theme === Theme.Dark ? <LogoLoader /> : <LogoLoaderGradient />;

  return (
    <>
      <Head>
        <title>HIT THE MARKET | МАРКЕТИНГОВОЕ АГЕНТСТВО</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="HIT THE MARKET увеличивает продажи. Наша цель - не только предоставить стратегии и инструменты, но и достичь результата вместе с вами."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      {globalInit ? (
        <motion.div {...opacityFromZeroToOne}>{Loader}</motion.div>
      ) : (
        <StylesContext.Provider value={criticalStyles}>
          <Navbar theme={theme} />

          <MobileMenu />

          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={path} />
          </AnimatePresence>
        </StylesContext.Provider>
      )}
    </>
  );
}
