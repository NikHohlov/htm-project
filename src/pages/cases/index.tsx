import Image from "next/image";

import cases from "@/assets/pictures/casesPage/cases.png";

import { cases as allCases } from "@/data/cases/cases";

import { caseItems } from "@/data/caseItem";

import { motion, useInView } from "framer-motion";

import CaseItem from "@/components/ui/CaseItem/CaseItem";

import { useRouter } from "next/router";

import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../_app";
import Head from "next/head";
import { ArrowScroll } from "@/components/ui/ArrowScroll/ArrowScroll";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import {
  listDelaySlideIn,
  opacityFromZeroToOne,
} from "@/lib/animaitons/animations";
import { LogoMiniLoader } from "@/assets/icons/LogoMiniLoader";

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

  const refCases = useRef(null);
  const isInViewCases = useInView(refCases);

  useEffect(() => {
    if (isInViewCases) setInViewOnce(true);
  }, [isInViewCases]);

  useEffect(() => {
    setTimeout(() => {
      if (!ref.current) return;
      scrollToSmoothly(ref.current.getBoundingClientRect().top, 0);
    }, 1300);
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
        exit="exit"
        transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
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
            quality={100}
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
        </motion.div>

        <ArrowScroll scrollTo={ref} />
      </motion.div>

      <motion.div
        ref={secondSectionRef}
        className={styles.secondSection}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
      >
        <div ref={refCases} className={styles.casesContainer}>
          {allCases.map(({ id, name, description, service }, index) => (
            <motion.div key={id} {...listDelaySlideIn(inViewOnce, index)}>
              <CaseItem
                id={id}
                key={id}
                logo={`/static/images/${id}/logo.png`}
                name={name}
                service={service}
                description={description}
                onClick={onClick("/cases/[case]")}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
