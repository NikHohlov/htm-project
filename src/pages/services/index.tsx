import Layout from "@/components/layout";

import Image from "next/image";

import ourServices from "@/assets/pictures/servicesPage/ourServices.png";

import { Theme } from "@/lib/types";

import styles from "@/styles/pages/Services.module.scss";
import { services } from "@/data/services";
import ServiceItem from "@/components/ui/ServiceItem/ServiceItem";
import Button from "@/components/ui/Button/Button";

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

            <div className={styles.secondSection}>
                <p className={styles.primaryTextTwo}>ЧТО МЫ МОЖЕМ</p>

                <div className={styles.servicesContainer}>
                    {services.map(({ title, icon }) => <ServiceItem key={title} title={title} icon={icon}/>)}
                </div>

                <Button title="КОНТАКТЫ" theme={Theme.Light}/>
            </div>
        </Layout>
    );
}
