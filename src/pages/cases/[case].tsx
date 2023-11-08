import { Theme } from "@/lib/types";

import Button from "@/components/ui/Button/Button";

import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

import { GetStaticProps } from "next";

import { motion } from "framer-motion";

import { cases } from "@/data/cases/cases";

import { getImages } from "@/data/cases/getImages";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { textRender } from "@/lib/utils/textRender";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../_app";
import { LogoMiniLoader } from "@/assets/icons/LogoMiniLoader";

export const getStaticPaths = async () => {
  const paths = cases.map(({ id }) => ({ params: { case: id } }));
  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const images = await getImages(context.params?.case as string);

  return { props: { images } };
};

export default function Case({ images }: { images: string[] }) {
  const { casestyle: styles } = useContext(StylesContext);
  const router = useRouter();
  const isMobile = useIsMobile();

  const [currentCase, setCurrentCase] = useState<(typeof cases)[0]>();
  const [isCaseLoaded, setIsCaseLoaded] = useState(false);

  useEffect(() => {
    if (!isCaseLoaded) {
      window.scrollTo(0, 0);

      setCurrentCase(
        cases.find((item) => item.id === router.query.case) as (typeof cases)[0]
      );
      if (router.query.case) setIsCaseLoaded(true);
    }
  }, [router.query.case]);

  const { variants } = usePageTransition();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollToSmoothly } = useSmoothScroll();

  // useEffect(() => {
  //   // window.scrollTo(0, 0);
  //   setTimeout(() => {
  //     if (!ref.current) return;
  //     // scrollToSmoothly(ref.current.getBoundingClientRect().top, 50);
  //   }, 100);
  // }, []);

  return (
    <>
      <Head>
        <title>HTM: Кейсы</title>
        <meta name="referrer" content="no-referrer"></meta>
      </Head>
      {!isCaseLoaded ? (
        <div className={styles.loaderWrapper}>
          <LogoMiniLoader />
        </div>
      ) : (
        <div>
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
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                className={styles.carousel}
              >
                {images.map((image) => (
                  <div key={image}>
                    <Image
                      className={styles.image}
                      src={`/static/images/${currentCase?.id}/${image}`}
                      alt="image"
                      width={592}
                      height={592}
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className={styles.descriptionSection}>
              <div className={styles.descriptionContainer}>
                <p className={styles.serviceText}>{currentCase?.service}</p>

                <p className={styles.title}>{currentCase?.name}</p>

                <p className={styles.secondaryText}>
                  {currentCase?.description}
                </p>
              </div>

              <p
                className={styles.description}
                dangerouslySetInnerHTML={{
                  __html: currentCase?.text.header ?? "",
                }}
              ></p>
            </div>

            {isMobile && (
              <div className={styles.secondSection}>
                <p
                  className={styles.bottomDescription}
                  dangerouslySetInnerHTML={{
                    __html: currentCase?.text.header ?? "",
                  }}
                ></p>
                <div className={styles.videos}>
                  {currentCase?.videos?.map((video, index) => (
                    <video
                      // preload={index === 0 ? undefined : "none"}
                      key={video}
                      className={styles.video}
                      height={500}
                      width={600}
                      controls
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  ))}
                </div>
                <div className={styles.buttons}>
                  <Link href="/cases">
                    <Button theme={Theme.Light} title="К кейсам" />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
          {!isMobile && (
            <div className={styles.secondSection}>
              <p
                className={styles.bottomDescription}
                dangerouslySetInnerHTML={{
                  __html: currentCase?.text.body ?? "",
                }}
              ></p>
              <div className={styles.videos}>
                {currentCase?.videos?.map((video, index) => (
                  <video
                    // preload={index === 0 ? undefined : "none"}
                    key={video}
                    className={styles.video}
                    height={500}
                    width={600}
                    controls
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                ))}
              </div>
              <div className={styles.buttons}>
                <Link href="/cases">
                  <Button theme={Theme.Light} title="К кейсам" />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
