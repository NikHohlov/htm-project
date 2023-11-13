import thankyou from "@/assets/pictures/thankyou.png";

import { useContext, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import SocialMediaList from "@/components/widgets/SocialMediaList/SocialMediaList";

import FeedbackForm from "@/components/widgets/FeedbackForm/FeedbackForm";
import { usePageTransition } from "@/lib/hooks/usePageTransition";
import Head from "next/head";
import { StylesContext } from "./_app";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import Link from "next/link";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const [heightlosed, heightOpen] = isMobile
    ? ["1200px", "1640px"]
    : ["100vh", "180vh"];

  const { contacts: styles } = useContext(StylesContext);

  const { variants } = usePageTransition();

  return (
    <motion.div
      className={styles.pageWrapper}
      animate={{ height: isOpen ? heightOpen : heightlosed }}
    >
      <Head>
        <title>HTM: Контакты</title>
      </Head>

      <motion.div
        className={styles.firstSection}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
      >
        <AnimatePresence initial={false} mode="wait">
          {submitted ? (
            <motion.div
              className={styles.container}
              key="thankYou"
              animate={{ y: -200, opacity: 0 }}
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 200, opacity: 1 }}
              transition={{ delay: 0.5, type: "tween", ease: "easeIn" }}
            >
              <Image className={styles.image} src={thankyou} alt="thankyou" />

              <div className={styles.thankYouText}>
                <p>СПАСИБО</p>
                <p>
                  Наши специалисты свяжутся
                  <br />с Вами в ближайшее время!
                </p>

                <SocialMediaList />
                <Link href="tel:+79919711717" className={styles.numberWrapper}>
                  <p className={styles.number}>
                    +7 991&nbsp; 971&nbsp; 17&nbsp; 17
                  </p>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={styles.containerLeft}
              key="text"
              exit={{ opacity: 0, y: 300 }}
              transition={{
                type: "linear",
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className={styles.leftSection}>
                <p className={styles.text}>ПОПАДЕМ В ТВОЮ АУДИТОРИЮ</p>
                <SocialMediaList />

                <Link href="tel:+79919711717" className={styles.numberWrapper}>
                  <p className={styles.number}>
                    +7&nbsp; 991&nbsp; 971&nbsp; 17&nbsp; 17
                  </p>
                </Link>
              </div>

              <FeedbackForm setIsOpen={setIsOpen} setSubmitted={setSubmitted} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
