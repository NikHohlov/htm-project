import { useRef } from "react";

import Image from "next/image";

import Layout from "@/components/layout";

import second from "@/assets/pictures/aboutPage/second.png";

import third from "@/assets/pictures/aboutPage/third.png";

import hell from "@/assets/pictures/main.gif";

import { Arrow } from "@/assets/icons/Arrow";

import { isNull } from "@/lib/utils/typeCheckers";

import { Theme } from "@/lib/types";

import styles from "@/styles/pages/About.module.scss";


export default function About() {
    const ref = useRef<HTMLDivElement>(null);

    const scrollDown = () => {
        if (!isNull(ref.current)) ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Layout theme={Theme.Light}>
            <div className={styles.firstSection}>
                <Image className={styles.logo} src={hell} alt="image" quality={100}/>

                <div className={styles.textContainer}>
                    <p>ПОПАДЕМ</p>
                    <p>В ТВОЮ АУДИТОРИЮ</p>
                </div>

                <div onClick={scrollDown} className={styles.arrowCircle}>
                    <Arrow />
                </div>
            </div>

            <div ref={ref} className={styles.secondSection}>
                <div className={styles.secondText}>
                    <p>HIT THE MARKET</p>
                    <p className={styles.secondaryText}>независимое<br/> SOCIAL & digital агентство</p>
                </div>

                <Image className={styles.image} fill src={second} alt="image" quality={100}/>
            </div>

            <div className={styles.thirdSection}>
                <div className={styles.secondText}>
                    <p>HIT THE MARKET</p>
                    <p className={styles.secondaryText}>независимое<br/> SOCIAL & digital агентство</p>
                </div>

                <Image className={styles.image} fill src={third} alt="image" quality={100}/>
            </div>
        </Layout>
    );
}
