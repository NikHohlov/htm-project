import Layout from "@/components/layout";

import Image from "next/image";

import handshake from "@/assets/pictures/partnersPage/handshake.png";

import { logos } from "@/data/partnerLogos";

import styles from "@/styles/pages/Partners.module.scss";

export default function partners() {
    return (
        <Layout>
            <div className={styles.firstSection}>

                <div className={styles.counter}>
                    <p>1</p>
                </div>

                <div className={styles.partnersButton}>
                    <p>НАШИ ПАРТНЕРЫ</p>
                </div>

                <div className={styles.secondaryText}>
                    <p>Число компаний, сделавших правильный выбор</p>
                </div>


            </div>

            <div className={styles.secondSection}>
                <Image className={styles.logo} fill src={handshake} alt="image" quality={100}/>

                <div className={styles.logosContainer}>
                    {logos.map((logo) => (
                        <div key={logo.src} className={styles.wrapper}>
                            <Image fill className={styles.partnerLogo} key={logo.src} src={logo} alt="image" quality={100}/>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
