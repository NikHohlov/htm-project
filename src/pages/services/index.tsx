import Image from "next/image";

import ourServices from "@/assets/pictures/servicesPage/ourServices.png";

import { Theme } from "@/lib/types";

import { services } from "@/data/services";

import ServiceItem from "@/components/ui/ServiceItem/ServiceItem";

import Button from "@/components/ui/Button/Button";

import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { usePageTransition } from "@/lib/hooks/usePageTransition";
import Link from "next/link";
import { useContext } from "react";
import { StylesContext } from "../_app";
import Head from "next/head";

export default function Services() {
    const router = useRouter();

    const { services: styles } = useContext(StylesContext);

    const { variants, transitionHandler } = usePageTransition();

    const onClick = (next: string) => () => {
        transitionHandler(router.pathname, next);
    };

    return (
        <>
            <Head>
                <title>HTM: Услуги</title>
            </Head>

            <motion.div
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

                <div className={styles.servicesContainer}>
                    {services.map(({ title, icon, name }, index) =>
                        <motion.div
                            key={title}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: (index % 4) / 8, type: "tween", duration: 0.8 }}
                            animate={{ y: -50, opacity: 0 }}
                            viewport={{ once: true }}
                        >
                            <ServiceItem
                                onClick={onClick("/services/[service]")} name={name} key={title} title={title} icon={icon()}
                            />
                        </motion.div>
                    )}
                </div>

                <Link href="/contacts" scroll={false}>
                    <Button title="КОНТАКТЫ" theme={Theme.Light}/>
                </Link>
            </motion.div>
        </>
    );
}
