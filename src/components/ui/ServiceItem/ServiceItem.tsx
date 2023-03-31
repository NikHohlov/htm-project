import { ReactElement } from "react";

import { Target } from "@/assets/icons/Target";

import Link from "next/link";

import styles from "./ServiceItem.module.scss";

interface ServiceItemProps {
    title: string;
    icon: ReactElement;
    name: string;
    onClick: () => void;
}

export default function ServiceItem({ title, icon, name, onClick }: ServiceItemProps) {

    return (
        <Link onClick={onClick} scroll={false} href={`/services/${name}`} className={styles.box} >
            <div className={styles.icon}>
                <Target />
                <div className={styles.serviceIcon}>
                    {icon}
                </div>
            </div>

            <p className={styles.title}>
                {title}
            </p>
        </Link>
    );
}
