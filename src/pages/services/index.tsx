import Layout from "@/components/layout";

import Image from "next/image";

import ourServices from "@/assets/pictures/servicesPage/ourServices.png";

import { Theme } from "@/lib/types";

import styles from "@/styles/pages/Services.module.scss";

export default function index() {
    return (
        <Layout theme={Theme.Dark}>
            <div className={styles.firstSection}>
                <div className={styles.textContainer}>
                    <p className={styles.primaryText}>НАШИ</p>
                    <p className={styles.primaryText}>УСЛУГИ</p>

                </div>

                <Image className={styles.image} fill src={ourServices} alt="image" quality={100}/>
            </div>
        </Layout>
    );
}
