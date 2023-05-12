import { Instagram } from "@/assets/icons/contactsPage/Instagram";
import { Nameless } from "@/assets/icons/contactsPage/Nameless";
import { Telegram } from "@/assets/icons/contactsPage/Telegram";
import { Vk } from "@/assets/icons/contactsPage/Vk";
import { Youtube } from "@/assets/icons/contactsPage/Youtube";
import { Chat } from "@/assets/icons/Chat";
import { Video } from "@/assets/icons/Video";
import { links } from "@/data/links";
import { StylesContext } from "@/pages/_app";
import { useContext } from "react";

export default function SocialMediaList({ circle }: {circle?: boolean}) {
    const icons = [
        { icon: <Vk />, href: links.vk },
        { icon: <Telegram />, href: links.telegram },
        { icon: <Youtube />, href: links.youTube },
        { icon: <Nameless />, href: links.zen },
        { icon: <Instagram />, href: links.instagram },
    ];

    const smallIcons = [
        { icon: <Instagram />, href: links.instagram },
        { icon: <Vk />, href: links.vk },
        { icon: <Video />, href: links.vk },
        { icon: <Chat />, href: links.chat },
    ];

    const bigIcons = [
        { icon: <Telegram />, href: links.telegram },
        { icon: <Youtube />, href: links.youTube },
        { icon: <Nameless />, href: links.zen },
    ];

    const { smm: styles } = useContext(StylesContext);

    if (circle) {
        return (
            <div className={styles.container}>
                <div className={styles.bigCircle}>
                    {bigIcons.map(({ icon, href }, index) => (
                        <a rel="noopener noreferrer" target="_blank" key={index} href={href}>
                            <div className={styles.iconBackground + " " + styles[`iconBig${index + 1}`]}>
                                {icon}
                            </div>
                        </a>
                    ))}
                </div>

                <div className={styles.circle}>
                    {smallIcons.map(({ icon, href }, index) => (
                        <a rel="noopener noreferrer" target="_blank" key={index} href={href}>
                            <div className={styles.iconBackground + " " + styles[`icon${index + 1}`]}>
                                {icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        );
    }

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
