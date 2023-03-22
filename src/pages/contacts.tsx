import { Instagram } from "@/assets/icons/contactsPage/Instagram";
import { Nameless } from "@/assets/icons/contactsPage/Nameless";
import { Telegram } from "@/assets/icons/contactsPage/Telegram";
import { Vk } from "@/assets/icons/contactsPage/Vk";
import { Youtube } from "@/assets/icons/contactsPage/Youtube";
import Layout from "@/components/layout";
import Button from "@/components/ui/Button/Button";

import { Theme } from "@/lib/types";

import styles from "@/styles/pages/Contacts.module.scss";


export default function index() {
    const icons = [
        { icon: <Instagram /> },
        { icon: <Youtube /> },
        { icon: <Vk /> },
        { icon: <Telegram /> },
        { icon: <Nameless /> },
    ];

    return (
        <Layout theme={Theme.Dark}>
            <div className={styles.firstSection}>

                <div className={styles.leftSection}>

                    <p className={styles.text}>ПОПАДЕМ В ТВОЮ АУДИТОРИЮ</p>

                    <div className={styles.iconsContainer}>
                        {icons.map(({ icon }, index) => (
                            <div key={index} className={styles.iconBackground}>
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.feedbackForm}>

                    <p className={styles.title}>Оставьте свою заявку</p>

                    <div className={styles.inputField}>
                        <p className={styles.inputName}>ИМЯ</p>
                        <input className={styles.input} placeholder="ИВАН ИВАНОВ"/>
                    </div>

                    <div className={styles.inputField}>
                        <p className={styles.inputName}>ТЕЛЕФОН</p>
                        <input className={styles.input} placeholder="+7"/>
                    </div>


                    <Button title="ОТПРАВИТЬ" theme={Theme.Dark}/>

                </div>


            </div>
        </Layout>
    );
}
