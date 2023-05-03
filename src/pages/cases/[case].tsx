import { Theme } from "@/lib/types";

import Button from "@/components/ui/Button/Button";

import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

import { motion } from "framer-motion";

import { caseItems } from "@/data/caseItem";

import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { useContext, useEffect, useRef } from "react";
import { StylesContext } from "../_app";
import Head from "next/head";
import Link from "next/link";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";

export default function Case() {
    const { casestyle: styles } = useContext(StylesContext);

    const { variants } = usePageTransition();

    const ref = useRef<HTMLDivElement>(null);
    const { scrollToSmoothly } = useSmoothScroll();

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
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        className={styles.carousel}>

                        {caseItems.map(({ logo }) => (
                            <div key={logo.src}>
                                <Image className={styles.image} src={logo} alt="image" />
                            </div>
                        ))}
                    </Carousel>

                </div>

                <div className={styles.descriptionSection}>
                    <div className={styles.descriptionContainer}>
                        <p className={styles.serviceText}>Дизайн, продвижение</p>

                        <p className={styles.title}>Desert Rose</p>

                        <p className={styles.secondaryText}>Ресторан</p>
                    </div>

                    <p className={styles.description}>
        Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
        dictum est a, mattis tellus. Sed dignissim,
         metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
  Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis.
 Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                    </p>

                    <div className={styles.buttons}>
                        <Link href="/cases" scroll={false}>
                            <Button theme={Theme.Light} title="К кейсам"/>
                        </Link>
                    </div>
                </div>


            </motion.div>
        </>
    );
}