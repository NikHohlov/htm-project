import { Instagram } from "@/assets/icons/contactsPage/Instagram";
import { Nameless } from "@/assets/icons/contactsPage/Nameless";
import { Telegram } from "@/assets/icons/contactsPage/Telegram";
import { Vk } from "@/assets/icons/contactsPage/Vk";
import { Youtube } from "@/assets/icons/contactsPage/Youtube";
import { links } from "@/data/links";
import { StylesContext } from "@/pages/_app";
import { useContext } from "react";



export default function SocialMediaList() {
    const icons = [
        { icon: <Vk />, href: links.vk },
        { icon: <Telegram />, href: links.telegram },
        { icon: <Youtube />, href: links.youTube },
        { icon: <Nameless />, href: links.zen },
        { icon: <Instagram />, href: links.instagram },
    ];

    const { smm: styles } = useContext(StylesContext);

    return (
        <div className={styles.iconsContainer}>
            {icons.map(({ icon, href }, index) => (
                <a rel="noopener noreferrer" target="_blank" key={index} href={href}>
                    <div className={styles.iconBackground}>
                        {icon}
                    </div>
                </a>
            ))}
        </div>
    );
}
