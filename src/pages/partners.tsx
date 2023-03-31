import Image from "next/image";

import handshake from "@/assets/pictures/partnersPage/handshake.png";

import { logos } from "@/data/partnerLogos";

import { motion } from "framer-motion";

import { usePageTransition } from "@/lib/hooks/usePageTransition";

import styles from "@/styles/pages/Partners.module.scss";

export default function Partners() {
    const { variants } = usePageTransition();

    return (
        <>
            <motion.div
                className={styles.firstSection}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
            >

                <div className={styles.counter}>
                    <p></p>
                </div>

                <div className={styles.partnersButton}>
                    <p>НАШИ ПАРТНЕРЫ</p>
                </div>

                <div className={styles.secondaryText}>
                    <p>Число компаний, сделавших правильный выбор</p>
                </div>


            </motion.div>

            <motion.div
                className={styles.secondSection}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
            >
                <Image className={styles.logo} fill src={handshake} alt="image" quality={100}/>

                <div className={styles.logosContainer}>
                    {logos.map((logo) => (
                        <div key={logo.src} className={styles.wrapper}>
                            <Image fill className={styles.partnerLogo} key={logo.src} src={logo} alt="image" quality={100}/>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
