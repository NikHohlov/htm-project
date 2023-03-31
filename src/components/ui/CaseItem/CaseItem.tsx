import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./CaseItem.module.scss";

interface CaseItemProps {
    logo: StaticImageData;
    name: string;
    description: string;
    onClick: () => void;
}

export default function CaseItem({ logo, name, description, onClick }: CaseItemProps) {
    return (
        <Link scroll={false} href={`/cases/${name}`} onClick={onClick} className={styles.logoContainer} key={name}>

            <Image className={styles.logo} src={logo} alt="image"/>

            <div className={styles.descriptionContainer}>
                <p className={styles.serviceText}>{name}</p>

                <p className={styles.title}>{name}</p>

                <p className={styles.secondaryText}>{description}</p>
            </div>
        </Link>
    );
}