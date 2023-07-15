import { Theme } from "@/lib/types";

import Button from "@/components/ui/Button/Button";

import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

import { motion } from "framer-motion";

import { caseItems } from "@/data/caseItem";

import { cases } from "@/data/cases/cases";

import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../_app";
import Head from "next/head";
import Link from "next/link";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { useRouter } from "next/router";

export default function Case() {
  const { casestyle: styles } = useContext(StylesContext);
  const router = useRouter();

  const [currentCase, setCurrentCase] = useState<(typeof cases)[0]>();
  const [isCaseLoaded, setIsCaseLoaded] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (!isCaseLoaded) {
      setCurrentCase(cases.find((item) => item.id === router.query.case) as typeof cases[0]);
      if (router.query.case) setIsCaseLoaded(true);
    }
  }, [router.query.case]);

  const { variants } = usePageTransition();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollToSmoothly } = useSmoothScroll();

  const onImageChange = (index: number) =>
    setTextIndex((prev) => (index >= (currentCase?.text?.length ?? 0) ? prev : index));

  useEffect(() => {
    setTimeout(() => {
      if (!ref.current) return;
      scrollToSmoothly(ref.current.getBoundingClientRect().top, 0);
    }, 1100);
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "linear", duration: 0.5, ease: "easeInOut" }}
      >
        <div className={styles.leftSection}>
          <Carousel
            onChange={onImageChange}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            className={styles.carousel}
          >
            {currentCase?.images.map((image) => (
              <div key={image.src}>
                <Image className={styles.image} src={image} alt="image" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className={styles.descriptionSection}>
          <div className={styles.descriptionContainer}>
            <p className={styles.serviceText}>{currentCase?.service}</p>

            <p className={styles.title}>{currentCase?.name}</p>

            <p className={styles.secondaryText}>{currentCase?.description}</p>
          </div>

          <p className={styles.description}>
            {currentCase?.text[textIndex].map((item) =>
              item === "" ? <br></br> : <p>{item}</p>
            )}
          </p>

          <div className={styles.buttons}>
            <Link href="/cases" scroll={false}>
              <Button theme={Theme.Light} title="К кейсам" />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
