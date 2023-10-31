import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

import { motion } from "framer-motion";

import logoWhite from "@/assets/pictures/logo-white.png";

import logo from "@/assets/pictures/logo.png";

import { Theme } from "@/lib/types";

import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { useContext } from "react";
import { StylesContext } from "@/pages/_app";
import { opacityFromZeroToOne } from "@/lib/animaitons/animations";

interface NavbarProps {
    theme: Theme
}

enum Route {
    About = "/",
    Services = "/services",
    Partners = "/partners",
    Cases = "/cases",
    Contacts = "/contacts"
}

export default function Navbar({ theme }: NavbarProps) {
    const router = useRouter();
    const { transitionHandler } = usePageTransition();

    const { navbar: styles } = useContext(StylesContext);

    const onClick = (next: string) => () => transitionHandler(router.pathname, next);

    const isActiveRoute = (name: Route) => `border ${router.pathname === name ? "" : styles.hidden}`;

    return (
        <div className={styles.navbar}>
            <Link href="/" onClick={onClick("/")}>

                <motion.div
                    className={styles.logo}
                    {...opacityFromZeroToOne}
                >
                    <Image alt="image" src={theme === Theme.Light ? logo : logoWhite} width={130} height={91}/>
                </motion.div>
            </Link>


            <div className={`${styles.links} ${theme === Theme.Dark ? styles.dark : ""}`}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <Link className="about" href="/" onClick={onClick("/")}>
                    О&nbsp; НАС
                        <div className={isActiveRoute(Route.About)}/>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Link className="services" href="/services" onClick={onClick("/services")}>
                    УСЛУГИ
                        <div className={isActiveRoute(Route.Services)}/>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link className="partners" href="/partners" onClick={onClick("/partners")}>
                    ПАРТНЕРЫ
                        <div className={isActiveRoute(Route.Partners)}/>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Link className="cases" href="/cases" onClick={onClick("/cases")}>
                    КЕЙСЫ
                        <div className={isActiveRoute(Route.Cases)}/>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                {...opacityFromZeroToOne}
            >
                <Link
                    onClick={onClick("/contacts")}
                    className={`${styles.button} ${theme === Theme.Dark ? styles.dark : ""} contacts`}
                    href="/contacts"
                >
                    <div>
                    КОНТАКТЫ
                        <div className={isActiveRoute(Route.Contacts)}></div>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}
