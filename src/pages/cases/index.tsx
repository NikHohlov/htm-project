import Image from "next/image";

import cases from "@/assets/pictures/casesPage/cases.png";

import { cases as allCases } from "@/data/cases/cases";

import { motion, useInView } from "framer-motion";

import CaseItem from "@/components/ui/CaseItem/CaseItem";

import { useRouter } from "next/router";

import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../_app";
import Head from "next/head";
import { ArrowScroll } from "@/components/ui/ArrowScroll/ArrowScroll";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { opacityFromZeroToOne } from "@/lib/animaitons/animations";
import { LogoMiniLoader } from "@/assets/icons/LogoMiniLoader";
import { Theme } from "@/lib/types";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";

export default function Cases() {
  const router = useRouter();
  const [inViewOnce, setInViewOnce] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const { scrollToSmoothly } = useSmoothScroll();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const { cases: styles } = useContext(StylesContext);

  const { variants, transitionHandler } = usePageTransition();

  const onClick = (next: string) => () => {
    transitionHandler(router.pathname, next);
  };

  const ref = useRef<HTMLDivElement>(null);

  const anchorRef = useRef<HTMLDivElement>(null);

  const refCases = useRef(null);
  const isInViewCases = useInView(refCases);

  useEffect(() => {
    if (isInViewCases) setInViewOnce(true);
  }, [isInViewCases]);

  useEffect(() => {
    setTimeout(() => {
      if (!ref.current) return;
      scrollToSmoothly(ref.current.getBoundingClientRect().top, 0);
    }, 100);
  }, []);

  return (
    <>
      <Head>
        <title>HTM: Кейсы</title>
      </Head>

      <motion.div
        ref={ref}
        className={styles.firstSection}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit={router.asPath.includes("to") ? { opacity: 0 } : "exit"}
        transition={{
          type: "linear",
          duration: router.asPath.includes("to") ? 0 : 0.7,
          ease: "easeInOut",
          delay: router.asPath.includes("all") ? 1 : 0,
        }}
      >
        <motion.div className={styles.textContainer} {...opacityFromZeroToOne}>
          <p className={styles.primaryText}>НАШИ</p>
          <p className={styles.primaryText}>КЕЙСЫ</p>
        </motion.div>

        {!isImageLoaded && <LogoMiniLoader white />}

        <motion.div
          className={styles.imageWrapper}
          animate={{ opacity: isImageLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            priority
            className={styles.image}
            fill
            src={cases}
            alt="image"
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
        </motion.div>

        <ArrowScroll scrollTo={ref} />
      </motion.div>
      <div ref={anchorRef} />
      <motion.div
        ref={secondSectionRef}
        className={styles.secondSection}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit={router.asPath.includes("to") ? { opacity: 0 } : "exit"}
        transition={{
          type: "linear",
          duration: router.asPath.includes("to") ? 0 : 0.7,
          ease: "easeIn",
        }}
      >
        <div ref={refCases} className={styles.casesContainer}>
          {allCases.map(
            (
              { id, name, description, service, logo, subtitle, shortName },
              index
            ) => (
              <motion.div
                key={id}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                animate={inViewOnce ? { opacity: 1 } : { opacity: 0 }}
                viewport={{ once: true }}
              >
                <CaseItem
                  id={id}
                  key={id}
                  logo={logo}
                  name={name}
                  service={service}
                  subtitle={subtitle}
                  shortName={shortName}
                  description={description}
                  onClick={onClick("/cases/[case]")}
                />
              </motion.div>
            )
          )}
          <Link className={styles.contacts} href="/contacts#to">
            <Button title="КОНТАКТЫ" theme={Theme.Light} />
          </Link>
        </div>
      </motion.div>
    </>
  );
}
