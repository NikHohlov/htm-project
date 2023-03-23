import Layout from "@/components/layout";

import Image from "next/image";

import cases from "@/assets/pictures/casesPage/cases.png";

import { Theme } from "@/lib/types";

import { caseItems } from "@/data/caseItem";

import styles from "@/styles/pages/Cases.module.scss";
import CaseItem from "@/components/ui/CaseItem/CaseItem";
import { useRouter } from "next/router";

export default function Cases() {
    const router = useRouter();

    const redirect = (path: string) => () => router.push(`/cases/${path}`);

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
                        <CaseItem key={name} logo={logo} name={name} description={description} onClick={redirect(name)}/>)}
                </div>

            </div>
        </Layout>
    );
}
