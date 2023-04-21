import Button from "@/components/ui/Button/Button";

import thankyou from "@/assets/pictures/thankyou.png";

import { Theme } from "@/lib/types";

import { useContext, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import SocialMediaList from "@/components/widgets/SocialMediaList/SocialMediaList";

import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { StylesContext } from "./_app";
import Head from "next/head";
import { services } from "@/data/services";
import { SelectArrow } from "@/assets/icons/SelectArrow";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";

interface Form {
    name: string;
    phone: string;
    comment: string;
    service: string;
}

export default function Contacts() {
    const [submitted, setSubmitted] = useState(false);
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [data, setData] = useState<Form>({
        name: "",
        phone: "",
        comment: "",
        service: ""
    });
    const ref = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const { scrollToSmoothly } = useSmoothScroll();

    useEffect(() => {
        setTimeout(() => {
            if (!formRef.current) return;
            scrollToSmoothly(formRef.current.getBoundingClientRect().top, 0);
        }, 1300);
    }, []);

    const { contacts: styles } = useContext(StylesContext);

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
        window.scrollTo({ behavior: "smooth", top: 0 });
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setData(prev => ({ ...prev, [event.target.name]: event.target.value }));

    const onSelect = (title: string) => () => {
        setData(prev => ({ ...prev, service: title }));
        setIsVisibleDropdown(false);
    };

    const onSelectToggle = () => {
        if (isVisibleDropdown) {
            setAnimate(true);
            setTimeout(() => setIsVisibleDropdown(false), 500);
            return;
        }
        setIsVisibleDropdown(prev => !prev);
        setAnimate(false);
    };

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

                                <div ref={formRef} className={styles.feedbackForm}>

                                    <p className={styles.title}>Оставьте свою заявку</p>

                                    <div className={styles.inputField}>
                                        <p className={styles.inputName}>ИМЯ</p>
                                        <input
                                            name="name"
                                            onChange={onChange}
                                            className={styles.input}
                                            placeholder="ИВАН ИВАНОВ"
                                        />
                                    </div>

                                    <div className={styles.inputField}>
                                        <p className={styles.inputName}>ТЕЛЕФОН</p>
                                        <input
                                            name="phone"
                                            onChange={onChange}
                                            className={styles.input}
                                            placeholder="+7"
                                        />
                                    </div>

                                    <div ref={ref} className={styles.inputField}>
                                        <div
                                            onClick={onSelectToggle}
                                            className={styles.selectWrapper}
                                        >
                                            <div
                                                placeholder="ТИП УСЛУГ"
                                                className={styles.input}
                                            >
                                                {data.service || "ТИП УСЛУГИ" }
                                            </div>
                                            <SelectArrow className={isVisibleDropdown ? styles.open : ""}/>
                                        </div>


                                        <motion.div
                                            className={styles.options}
                                            animate={{ height: isVisibleDropdown ?  500 : 0 }}
                                            initial={{ height: 0 }}
                                            transition={{
                                                type: "tween",
                                                ease: "easeIn"
                                            }}
                                        >
                                            {isVisibleDropdown && [...services, { title: "Прочее" }].map(({ title }, index) =>
                                                <motion.div
                                                    className={styles.option}
                                                    onClick={onSelect(title)}
                                                    key={title}
                                                    animate={animate ? { x: 300, opacity: 0 } : { x: 0, opacity: 1 }}
                                                    initial={{ x: 300, opacity: 0 }}
                                                    transition={{
                                                        delay: index * 0.02,
                                                        type: "tween",
                                                        ease: "easeIn"
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    {title}
                                                </motion.div>
                                            )}

                                        </motion.div>
                                    </div>

                                    <div className={styles.inputField}>
                                        <p className={styles.inputName}>КОММЕНТАРИЙ</p>
                                        <input
                                            name="comment"
                                            onChange={onChange}
                                            className={styles.input}
                                            placeholder="МЕНЯ ИНТЕРЕСУЕТ..."
                                        />
                                    </div>

                                    <Button onClick={handleSubmit} title="ОТПРАВИТЬ" theme={Theme.Dark}/>

                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.div>


        </>
    );
}
