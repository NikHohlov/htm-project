import { Theme } from "@/lib/types";

import { useRouter } from "next/router";

import Button from "@/components/ui/Button/Button";

import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

import { motion } from "framer-motion";

import { caseItems } from "@/data/caseItem";

import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { useContext } from "react";
import { StylesContext } from "../_app";
import Head from "next/head";


export default function Case() {
    const router = useRouter();

    const { casestyle } = useContext(StylesContext);

    const styles = casestyle;

    const redirect = (path: string) => () => router.push(`/${path}`);

    const { variants } = usePageTransition();

    return (
        <>
            <Head>
                <title>HTM: Кейсы</title>
            </Head>

            <motion.div
                className={styles.firstSection}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
            >

                <div className={styles.leftSection}>

                    <Carousel
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        className={styles.carousel}>

                        {caseItems.map(({ logo }) => (
                            <div key={logo.src}>
                                <Image src={logo} alt="image" height={592}/>
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
                        <Button onClick={redirect("cases")} theme={Theme.Light} title="К кейсам"/>
                    </div>
                </div>


            </motion.div>
        </>
    );
}