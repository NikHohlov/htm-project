import { useContext, useRef, useState } from "react";

import Image from "next/image";

import second from "@/assets/pictures/aboutPage/second.png";

import third from "@/assets/pictures/aboutPage/third.png";

import textures from "@/assets/pictures/aboutPage/textures.png";
import texturesMobile from "@/assets/pictures/aboutPage/texturesMobile.png";

import { motion } from "framer-motion";

import { usePageTransition } from "@/lib/hooks/usePageTransition";

import { ArrowScroll } from "@/components/ui/ArrowScroll/ArrowScroll";
import { opacityFromZeroToOne, slideInItem } from "@/lib/animaitons/animations";
import Head from "next/head";
import { StylesContext } from "./_app";
import SocialMediaList from "@/components/widgets/SocialMediaList/SocialMediaList";
import { LogoMiniLoader } from "@/assets/icons/LogoMiniLoader";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const refMobile = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const { about: styles } = useContext(StylesContext);

  const { variants } = usePageTransition();

  const points = [
    "Разработаем индивидуальную рекламную стратегию",
    "Подберем релевантный контент",
    "Эффективно проконтролируем бюджет",
    "Повысим узнаваемость",
  ];

  const FirstSection = () => (
    <motion.section
      ref={ref}
      className={styles.firstSection}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.9, ease: "easeInOut" }}
    >
      {!isImageLoaded && <LogoMiniLoader />}

      <motion.div
        className={styles.logoHolder}
        animate={{ opacity: isImageLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          className={styles.logo}
          src="/static/images/main.gif"
          alt="image"
          priority
          quality={35}
          width={728}
          height={728}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
      </motion.div>

      <div className={styles.arrowContainer}>
        <motion.div {...opacityFromZeroToOne}>
          <motion.div className={styles.textContainer}>
            <p>ПОПАДЕМ В ТВОЮ АУДИТОРИЮ</p>
          </motion.div>
        </motion.div>
      </div>

      <ArrowScroll scrollTo={isMobile ? refMobile : ref} gradient />
    </motion.section>
  );

  return (
    <>
      <Head>
        <title>HIT THE MARKET | МАРКЕТИНГОВОЕ АГЕНСТВО</title>
      </Head>

      {!isMobile && <FirstSection />}

      <motion.section
        ref={refMobile}
        className={styles.secondSection}
        {...opacityFromZeroToOne}
      >
        <SocialMediaList circle />
        <motion.div className={styles.secondText} {...slideInItem("toRight")}>
          <motion.p>HIT THE MARKET</motion.p>
          <motion.p className={styles.secondaryText}>
            независимое
            <br /> SOCIAL <span className={styles.ampersand}>&</span> digital
            агентство
          </motion.p>
        </motion.div>

        <Image
          className={styles.image}
          fill
          src={second}
          alt="image"
          quality={100}
        />
        <motion.div
          className={styles.textures}
          initial={{ rotate: -5 }}
          animate={{ rotate: -5 }}
          whileInView={{ x: 0, rotate: 0 }}
          transition={{ type: "tween", duration: 5 }}
          viewport={{ once: true }}
        >
          <Image
            fill
            src={isMobile ? texturesMobile : textures}
            alt="image"
            quality={100}
          />
        </motion.div>
      </motion.section>

      <section className={styles.thirdSection}>
        <motion.div {...slideInItem("toRight", 0.3)}>
          <Image
            className={styles.qaImage}
            fill
            src={third}
            alt="image"
            quality={100}
          />
        </motion.div>

        <motion.div
          className={styles.description}
          {...slideInItem("toLeft", 0.3)}
        >
          <motion.p className={styles.thirdText} {...slideInItem("toLeft", 0)}>
            HIT THE MARKET УВЕЛИЧИВАЕТ ПРОДАЖИ
          </motion.p>

          <motion.p
            className={`${styles.secondaryText} ${styles.secondaryTextDescription}`}
            {...slideInItem("toLeft", 0)}
          >
            Наша цель - не только предоставить стратегии и инструменты, но и
            достичь результата вместе с вами:
          </motion.p>

          {points.map((point, index) => (
            <motion.div
              className={styles.point}
              key={index}
              {...slideInItem("toLeft", 0.9)}
            >
              <motion.p
                {...slideInItem("toLeft", index / 8)}
                className={styles.digit}
              >
                {index + 1}
              </motion.p>
              <motion.p
                className={styles.secondaryText}
                {...slideInItem("toLeft", index / 12)}
              >
                {point}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {isMobile && <FirstSection />}
    </>
  );
}
