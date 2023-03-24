import { Instagram } from "@/assets/icons/contactsPage/Instagram";
import { Nameless } from "@/assets/icons/contactsPage/Nameless";
import { Telegram } from "@/assets/icons/contactsPage/Telegram";
import { Vk } from "@/assets/icons/contactsPage/Vk";
import { Youtube } from "@/assets/icons/contactsPage/Youtube";

import styles from "./SocialMediaList.module.scss";


export default function SocialMediaList() {
    const icons = [
        { icon: <Instagram /> },
        { icon: <Youtube /> },
        { icon: <Vk /> },
        { icon: <Telegram /> },
        { icon: <Nameless /> },
    ];

    return (
        <div className={styles.iconsContainer}>
            {icons.map(({ icon }, index) => (
                <div key={index} className={styles.iconBackground}>
                    {icon}
                </div>
            ))}
        </div>
    );
}
