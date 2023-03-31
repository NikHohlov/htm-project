import Image from "next/image";

import cases from "@/assets/pictures/casesPage/cases.png";

import { caseItems } from "@/data/caseItem";

import { motion } from "framer-motion";

import CaseItem from "@/components/ui/CaseItem/CaseItem";

import { useRouter } from "next/router";

import { usePageTransition } from "@/lib/hooks/usePageTransition";

import styles from "@/styles/pages/Cases.module.scss";

export default function Cases() {
    const router = useRouter();

    const { variants, transitionHandler } = usePageTransition();

    const onClick = (next: string) => () => {
        transitionHandler(router.pathname, next);
    };

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
                <motion.div
                    className={styles.textContainer}
                    animate={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                >
                    <p className={styles.primaryText}>НАШИ</p>
                    <p className={styles.primaryText}>КЕЙСЫ</p>

                </motion.div>

                <Image priority className={styles.image} fill src={cases} alt="image" quality={100}/>
            </motion.div>

            <motion.div
                className={styles.secondSection}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
            >

                <div className={styles.casesContainer}>
                    {caseItems.map(({ logo, name, description }) =>
                        <CaseItem key={name} logo={logo} name={name} description={description} onClick={onClick("/cases/[case]")}/>)}
                </div>

            </motion.div>
        </>
    );
}
