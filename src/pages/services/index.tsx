import Image from "next/image";

import ourServices from "@/assets/pictures/servicesPage/ourServices.png";

import { Theme } from "@/lib/types";

import { services } from "@/data/services";

import ServiceItem from "@/components/ui/ServiceItem/ServiceItem";

import Button from "@/components/ui/Button/Button";

import { useRouter } from "next/router";

import { motion, useInView } from "framer-motion";

import { ArrowScroll } from "@/components/ui/ArrowScroll/ArrowScroll";
import { usePageTransition } from "@/lib/hooks/usePageTransition";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../_app";

export default function Services() {
    const router = useRouter();
    const [inViewOnce, setInViewOnce] = useState(false);
    const secondSectionRef = useRef<HTMLDivElement>(null);

    const { services: styles } = useContext(StylesContext);

    const { variants, transitionHandler } = usePageTransition();

    const onClick = (next: string) => () => {
        transitionHandler(router.pathname, next);
    };

    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) setInViewOnce(true);
    },[isInView]);

    return (
        <>
            <Head>
                <title>HTM: Услуги</title>
            </Head>

            <motion.div
                ref={secondSectionRef}
                className={styles.firstSection}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
            >
                <motion.div
                    className={styles.textContainer}
                    animate={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, type: "tween", duration: 0.4, ease: "easeInOut" }}
                >
                    <p className={styles.primaryText}>НАШИ</p>


                    <p className={styles.primaryText}>УСЛУГИ</p>

                </motion.div>

                <Image priority className={styles.image} fill src={ourServices} alt="image" quality={100}/>

                <ArrowScroll scrollTo={secondSectionRef}/>
            </motion.div>


            <motion.div
                className={styles.secondSection}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
            >
                <motion.p className={styles.primaryTextTwo}
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "tween" }}
                    animate={{ x: -300, opacity: 0 }}
                    viewport={{ once: true }}
                >
                    ЧТО МЫ МОЖЕМ
                </motion.p>

                <div ref={ref} className={styles.servicesContainer}>
                    {services.map(({ title, icon, name }, index) =>
                        <motion.div
                            key={title}
                            initial={{ y: -50, opacity: 0 }}
                            transition={{ delay: index / 8, type: "tween", duration: 0.8 }}
                            animate={inViewOnce ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                            viewport={{ once: true }}
                        >
                            <ServiceItem
                                onClick={onClick("/services/[service]")} name={name} key={title} title={title} icon={icon()}
                            />
                        </motion.div>
                    )}
                </div>

                <Link className={styles.contacts} href="/contacts" scroll={false}>
                    <Button title="КОНТАКТЫ" theme={Theme.Light}/>
                </Link>
            </motion.div>
        </>
    );
}
