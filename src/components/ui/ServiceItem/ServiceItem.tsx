import { ReactElement } from "react";

import { Target } from "@/assets/icons/Target";

import styles from "./ServiceItem.module.scss";

interface ServiceItemProps {
    title: string;
    icon: ReactElement;
}

export default function ServiceItem({ title, icon }: ServiceItemProps) {
    return (
        <div className={styles.box}>
            <div className={styles.icon}>
                <Target />
                <div className={styles.serviceIcon}>
                    {icon}
                </div>
            </div>

            <p className={styles.title}>
                {title}
            </p>
        </div>
    );
}
