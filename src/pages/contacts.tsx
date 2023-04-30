import thankyou from "@/assets/pictures/thankyou.png";

import { useContext, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import SocialMediaList from "@/components/widgets/SocialMediaList/SocialMediaList";

import FeedbackForm from "@/components/widgets/FeedbackForm/FeedbackForm";
import { usePageTransition } from "@/lib/hooks/usePageTransition";
import Head from "next/head";
import { StylesContext } from "./_app";

export default function Contacts() {
    const [submitted, setSubmitted] = useState(false);

    const { contacts: styles } = useContext(StylesContext);

    const { variants } = usePageTransition();

    return (
        <>
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

                <AnimatePresence
                    initial={false}
                    mode="wait"
                >
                    {submitted
                        ?
                        (
                            <motion.div
                                className={styles.container}
                                key="thankYou"
                                animate={{ y: -200, opacity: 0 }}
                                initial={{ y: -200, opacity: 0 }}
                                whileInView={{ y: 200, opacity: 1 }}
                                transition={{ delay: 0.5, type: "tween", ease: "easeIn" }}
                            >

                                <Image className={styles.image} src={thankyou} alt="thankyou"/>

                                <div className={styles.thankYouText}>
                                    <p>СПАСИБО</p>
                                    <p>
                                        Наши специалисты свяжутся<br/>
                                        с Вами в ближайшее время!
                                    </p>

                                    <SocialMediaList />

                                </div>

                            </motion.div>
                        )
                        :
                        (
                            <motion.div
                                className={styles.containerLeft}
                                key="text"
                                exit={{ opacity: 0, y: 300 }}
                                transition={{ type: "linear", duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className={styles.leftSection}>

                                    <p className={styles.text}>ПОПАДЕМ В ТВОЮ АУДИТОРИЮ</p>

                                    <SocialMediaList />
                                </div>

                                <FeedbackForm setSubmitted={setSubmitted}/>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.div>
        </>
    );
}
