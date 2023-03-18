import Image from "next/image";
import Link from "next/link";

import logoWhite from "@/assets/pictures/logo-white.png";

import logo from "@/assets/pictures/logo.png";

import { Theme } from "@/lib/types";

import styles from "./Navbar.module.scss";

interface NavbarProps {
    theme: Theme
}

export default function Navbar({ theme }: NavbarProps) {
    return (
        <div className={styles.navbar}>
            <Image alt="image" src={theme === Theme.Light ? logo : logoWhite} width={130} height={91}/>

            <div className={`${styles.links} ${theme === Theme.Dark ? styles.dark : ""}`}>
                <Link href="/">О НАС</Link>
                <Link href="/services">УСЛУГИ</Link>
                <Link href="/partners">ПАРТНЕРЫ</Link>
                <Link href="/cases">КЕЙСЫ</Link>
            </div>
            <Link className={`${styles.button} ${theme === Theme.Dark ? styles.dark : ""}`} href="/contacts">КОНТАКТЫ</Link>
        </div>
    );
}
