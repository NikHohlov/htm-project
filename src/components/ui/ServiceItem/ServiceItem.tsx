import { ReactElement } from "react";

import { Target } from "@/assets/icons/Target";

import styles from "./ServiceItem.module.scss";
import { useRouter } from "next/router";

interface ServiceItemProps {
    title: string;
    icon: ReactElement;
    name: string;
}

export default function ServiceItem({ title, icon, name }: ServiceItemProps) {
    const router = useRouter();

    const goToService = () => router.push(`/services/${name}`);

    return (
        <div className={styles.box} onClick={goToService}>
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
