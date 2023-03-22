import Image, { StaticImageData } from "next/image";

import styles from "./CaseItem.module.scss";

interface CaseItemProps {
    logo: StaticImageData;
    name: string;
    description: string;
}

export default function CaseItem({ logo, name, description }: CaseItemProps) {
    return (
        <div className={styles.logoContainer} key={name}>

            <Image className={styles.logo} fill src={logo} alt="image" quality={100}/>

            <div className={styles.descriptionContainer}>
                <p className={styles.serviceText}>{name}</p>

                <p className={styles.title}>{name}</p>

                <p className={styles.secondaryText}>{description}</p>
            </div>
        </div>
    );
}