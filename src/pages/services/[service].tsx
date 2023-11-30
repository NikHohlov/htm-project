import { Theme } from "@/lib/types";

import { useRouter } from "next/router";

import { services } from "@/data/services";

import { Target } from "@/assets/icons/Target";

import Button from "@/components/ui/Button/Button";

import { motion } from "framer-motion";

import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../_app";
import { opacityFromZeroToOne } from "@/lib/animaitons/animations";
import { LogoMiniLoader } from "@/assets/icons/LogoMiniLoader";
import { ArrowScroll } from "@/components/ui/ArrowScroll/ArrowScroll";

export default function Service() {
  const router = useRouter();
  const { service: styles } = useContext(StylesContext);
  const [service, setService] = useState<(typeof services)[0]>();
  const [isServiceLoaded, setIsServiceLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      router.push({
        query: { to: router.query.service },
      });
    });
  }, []);

  useEffect(() => {
    if (!isServiceLoaded) {
      setService(services.find((item) => item.name === router.query.service));
      if (router.query.service) setIsServiceLoaded(true);
    }
  }, [router.query.service]);

  const ref = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const { scrollToSmoothly } = useSmoothScroll();

  useEffect(() => {
    setTimeout(() => {
      if (!ref.current) return;
      scrollToSmoothly(ref.current.getBoundingClientRect().top, 50);
    }, 0);
  }, []);

  return (
    <>
      <Head>
        <title>HTM: {service?.title}</title>
      </Head>

      {!isServiceLoaded ? (
        <div className={styles.loaderWrapper}>
          <LogoMiniLoader white />
        </div>
      ) : (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "linear", duration: 0.5, ease: "easeInOut" }}
        >
          <section className={styles.firstSection}>
            <motion.div
              className={styles.leftSection}
              {...opacityFromZeroToOne}
              transition={{ type: "tween", duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconBackground}>
                <Target gradient width={229} height={229} />
                <div className={styles.serviceIcon}>
                  {service?.icon({ width: 109, height: 109, gradient: true })}
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.descriptionSection}
              {...opacityFromZeroToOne}
              transition={{ type: "tween", duration: 0.3 }}
              viewport={{ once: true }}
            >
              <p className={styles.title}>{service?.title}</p>

              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: service?.description ?? "" }}
              />

              <div className={styles.buttons}>
                {service?.points && (
                  <>
                    <Link
                      href={{
                        pathname: "/contacts",
                        query: { keyword: service?.title },
                      }}
                      scroll={false}
                    >
                      <Button theme={Theme.Dark} title="Заказать" />
                    </Link>

                    <Link
                      href="/cases"
                      scroll={false}
                      className={styles.extraButton}
                    >
                      <Button theme={Theme.Dark} title="К кейсам" />
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
            {service?.points && (
              <ArrowScroll extraOffset={30} scrollTo={secondRef} />
            )}
          </section>

          {service?.points && (
            <motion.div
              ref={secondRef}
              className={styles.secondSection}
              exit={{ opacity: 0 }}
            >
              <p className={styles.secondTitle}>В услугу входит</p>

              <div className={styles.pointsContainer}>
                {service?.points.map((item) => (
                  <div key={item} className={styles.point}>
                    <div className={styles.circle} />
                    {item}
                  </div>
                ))}
              </div>
              <div className={styles.caseButton}>
                <Link href="/cases">
                  <Button theme={Theme.Light} title="К кейсам" />
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
}
