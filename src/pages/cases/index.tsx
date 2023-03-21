import Layout from "@/components/layout";

import Image from "next/image";

import cases from "@/assets/pictures/casesPage/cases.png";

import { Theme } from "@/lib/types";

import { caseItems } from "@/data/caseItem";

import styles from "@/styles/pages/Cases.module.scss";

export default function index() {
    return (
        <Layout theme={Theme.Dark}>
            <div className={styles.firstSection}>
                <div className={styles.textContainer}>
                    <p className={styles.primaryText}>НАШИ</p>
                    <p className={styles.primaryText}>КЕЙСЫ</p>

                </div>

                <Image className={styles.image} fill src={cases} alt="image" quality={100}/>
            </div>

            <div className={styles.secondSection}>

                <div className={styles.casesContainer}>
                    {caseItems.map(({ logo, name, description }) =>
                        <div className={styles.logoContainer} key={name}>

                            <Image className={styles.logo} fill src={logo} alt="image" quality={100}/>

                            <div className={styles.descriptionContainer}>
                                <p className={styles.serviceText}>{name}</p>

                                <p className={styles.title}>{name}</p>

                                <p className={styles.secondaryText}>{description}</p>
                            </div>
                        </div>)}
                </div>

            </div>
        </Layout>
    );
}
