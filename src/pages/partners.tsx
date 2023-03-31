import Image from "next/image";

import handshake from "@/assets/pictures/partnersPage/handshake.png";

import { logos } from "@/data/partnerLogos";

import { motion } from "framer-motion";

import { usePageTransition } from "@/lib/hooks/usePageTransition";

import styles from "@/styles/pages/Partners.module.scss";
import { ParallaxText } from "@/components/widgets/Parallax/Parallax";

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
            >
                <motion.div
                >
                    <Image className={styles.logo} fill src={handshake} alt="image" quality={100}/>
                </motion.div>

                <motion.div
                    className={styles.parallax}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "tween", ease: "easeIn" }}
                >
                    <ParallaxText baseVelocity={-1}>Buy I side Digital Hypers</ParallaxText>
                    <ParallaxText baseVelocity={1}>Совкомбанк Pink Hairlab</ParallaxText>
                </motion.div>

                <div className={styles.logosContainer}>
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo.src}
                            className={styles.wrapper}
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: (index + 1) / 10, type: "tween", duration: 0.6 }}
                            animate={{ y: -100, opacity: 0 }}
                        >
                            <Image fill className={styles.partnerLogo} key={logo.src} src={logo} alt="image" quality={100}/>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
