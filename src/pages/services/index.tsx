import Layout from "@/components/layout";

import Image from "next/image";

import ourServices from "@/assets/pictures/servicesPage/ourServices.png";

import { Theme } from "@/lib/types";

import styles from "@/styles/Services.module.scss";

export default function index() {
    return (
        <Layout theme={Theme.Dark}>
            <div className={styles.firstSection}>
                <div className={styles.secondText}>
                    <p>HIT THE MARKET</p>
                    <p className={styles.secondaryText}>независимое<br/> SOCIAL & digital агентство</p>
                </div>

                <Image className={styles.image} fill src={ourServices} alt="image" quality={100}/>
            </div>
        </Layout>
    );
}
