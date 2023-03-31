import Button from "@/components/ui/Button/Button";

import thankyou from "@/assets/pictures/thankyou.png";

import { Theme } from "@/lib/types";

import { useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import SocialMediaList from "@/components/widgets/SocialMediaList/SocialMediaList";

import styles from "@/styles/pages/Contacts.module.scss";
import { usePageTransition } from "@/lib/hooks/usePageTransition";


export default function Contacts() {
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState<{ name: string; phone: string}>({
        name: "",
        phone: ""
    });

    const { variants } = usePageTransition();

    const handleSubmit = () => {
        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        setSubmitted(true);
    };


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setData(prev => ({ ...prev, [event.target.name]: event.target.value }));

    return (
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
                            animate={{ y: -500, opacity: 0 }}
                            initial={{ y: -500, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
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
                            exit={{ opacity: 0, y: 500 }}
                            transition={{ type: "linear", duration: 0.5, ease: "easeInOut" }}
                        >
                            <div className={styles.leftSection}>

                                <p className={styles.text}>ПОПАДЕМ В ТВОЮ АУДИТОРИЮ</p>

                                <SocialMediaList />
                            </div>

                            <div className={styles.feedbackForm}>

                                <p className={styles.title}>Оставьте свою заявку</p>

                                <div className={styles.inputField}>
                                    <p className={styles.inputName}>ИМЯ</p>
                                    <input name="name" onChange={onChange} className={styles.input} placeholder="ИВАН ИВАНОВ"/>
                                </div>

                                <div className={styles.inputField}>
                                    <p className={styles.inputName}>ТЕЛЕФОН</p>
                                    <input name="phone" onChange={onChange} className={styles.input} placeholder="+7"/>
                                </div>


                                <Button onClick={handleSubmit} title="ОТПРАВИТЬ" theme={Theme.Dark}/>

                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </motion.div>
    );
}
