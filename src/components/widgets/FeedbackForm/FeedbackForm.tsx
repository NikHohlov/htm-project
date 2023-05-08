import Button from "@/components/ui/Button/Button";

import { Theme } from "@/lib/types";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { SelectArrow } from "@/assets/icons/SelectArrow";
import { services } from "@/data/services";

import styles from "./FeedbackForm.module.scss";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

interface Form {
    name: string;
    phone: string;
    comment: string;
    service: string;
}

interface FeedbackForm {
    setSubmitted: Dispatch<SetStateAction<boolean>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FeedbackForm({ setSubmitted, setIsOpen }: FeedbackForm) {
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
    const [animate, setAnimate] = useState(true);
    const isMobile = useIsMobile();

    const [data, setData] = useState<Form>({
        name: "",
        phone: "",
        comment: "",
        service: ""
    });
    const ref = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const { scrollToSmoothly } = useSmoothScroll();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);


    useEffect(() => {
        if (isMobile && timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (timeoutRef.current === null) {
            timeoutRef.current = setTimeout(() => {
                if (!formRef.current) return;
                scrollToSmoothly(formRef.current.getBoundingClientRect().top, 0);
            }, 1300);
        }
    }, [isMobile]);

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
        setAnimate(true);
    };

    const onSelectToggle = () => {
        setIsOpen(prev => !prev);
        setAnimate(isVisibleDropdown);
        setTimeout(() => setIsVisibleDropdown(prev => !prev), isVisibleDropdown ? 500 : 50);
    };

    return (
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
                    value={`+7${data.phone.slice(2)}`}
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
                    animate={{ height: isVisibleDropdown ?  500 : 0, opacity: isVisibleDropdown ?  1 : 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{
                        type: "tween",
                        ease: "easeIn"
                    }}
                >
                    {[...services, { title: "Прочее" }].map(({ title }, index) =>
                        <motion.div
                            className={styles.option}
                            onClick={onSelect(title)}
                            key={title}
                            animate={animate ? { x: 300, opacity: 0 } : { x: 0, opacity: 1 }}
                            initial={{ x: 300, opacity: 0 }}
                            transition={{
                                delay: index * 0.02,
                                type: "tween",
                                ease: "easeIn",
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

    );
}
