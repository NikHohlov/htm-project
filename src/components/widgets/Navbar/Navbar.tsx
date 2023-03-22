import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";


import logoWhite from "@/assets/pictures/logo-white.png";

import logo from "@/assets/pictures/logo.png";

import { Theme } from "@/lib/types";

import styles from "./Navbar.module.scss";

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

    const isActiveRoute = (name: Route) => `border ${router.pathname === name ? "" : styles.hidden}`;

    return (
        <div className={styles.navbar}>
            <Image alt="image" src={theme === Theme.Light ? logo : logoWhite} width={130} height={91}/>

            <div className={`${styles.links} ${theme === Theme.Dark ? styles.dark : ""}`}>
                <Link className="about" href="/">
                    О НАС
                    <div className={isActiveRoute(Route.About)}/>
                </Link>

                <Link className="services" href="/services">
                    УСЛУГИ
                    <div className={isActiveRoute(Route.Services)}/>
                </Link>

                <Link className="partners" href="/partners">
                    ПАРТНЕРЫ
                    <div className={isActiveRoute(Route.Partners)}/>
                </Link>

                <Link className="cases" href="/cases">
                    КЕЙСЫ
                    <div className={isActiveRoute(Route.Cases)}/>
                </Link>
            </div>

            <Link className={`${styles.button} ${theme === Theme.Dark ? styles.dark : ""} contacts`} href="/contacts">
                <div>
                    КОНТАКТЫ
                    <div className={isActiveRoute(Route.Contacts)}></div>
                </div>
            </Link>
        </div>
    );
}
