import { Theme } from "@/lib/types";

import { useRouter } from "next/router";

import { services } from "@/data/services";

import { Target } from "@/assets/icons/Target";

import Button from "@/components/ui/Button/Button";

import { motion } from "framer-motion";

import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { useContext, useEffect, useState } from "react";
import { StylesContext } from "../_app";
import Head from "next/head";

export default function Service() {
    const router = useRouter();
    const { service: styles } = useContext(StylesContext);
    const [service, setService] = useState<typeof services[0]>();
    const [isServiceLoaded, setIsServiceLoaded] = useState(false);

    const { variants } = usePageTransition();

    const redirect = (path: string) => () => router.push(`/${path}`);

    useEffect(() => {
        if (!isServiceLoaded) {
            setService(services.find((item) => item.name === router.query.service));
            if (router.query.service) setIsServiceLoaded(true);
        }
    }, [router.query.service]);

    return (
        <>
            <Head>
                <title>HTM: {service?.title}</title>
            </Head>

            <motion.div
                variants={{ ...variants, exit: { opacity: 1, x: -1600, y: 0 } }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit="exit"
                transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
            >

                <motion.div
                    className={styles.firstSection}
                >

                    <motion.div
                        className={styles.leftSection}
                        initial={{ opacity: 0 }}
                        whileInView={{  opacity: 1 }}
                        transition={{ type: "tween", duration: 0.3 }}
                        animate={{ opacity: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.iconBackground}>
                            <Target gradient width={229} height={229}/>
                            <div className={styles.serviceIcon}>
                                {service?.icon({ width: 109, height: 109, gradient: true })}
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        className={styles.descriptionSection}
                        initial={{ opacity: 0 }}
                        whileInView={{  opacity: 1 }}
                        transition={{ type: "tween", duration: 0.3 }}
                        animate={{ opacity: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className={styles.title}>{service?.title}</p>

                        <p className={styles.description}>
                            {service?.description}
                        </p>

                        <div className={styles.buttons}>
                            {service?.points &&
                            <>
                                <Button onClick={redirect("contacts")} theme={Theme.Dark} title="Заказать"/>
                                <Button onClick={redirect("cases")} theme={Theme.Dark} title="К кейсам"/>
                            </>
                            }
                        </div>
                    </motion.div>
                </motion.div>

                {service?.points && (
                    <motion.div
                        className={styles.secondSection}
                    >
                        <p className={styles.secondTitle}>В услугу входит</p>

                        <div className={styles.pointsContainer}>
                            {service?.points.map((item) => (
                                <div key={item} className={styles.point}>
                                    <div className={styles.circle}/>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>

        </>
    );
}