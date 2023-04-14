import { MenuClosed } from "@/assets/icons/MenuClosed";
import { MenuOpen } from "@/assets/icons/MenuOpen";
import useTheme from "@/lib/hooks/useTheme";
import { Theme } from "@/lib/types";
import { StylesContext } from "@/pages/_app";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import logoWhite from "@/assets/pictures/logo-white.png";
import logo from "@/assets/pictures/logo.png";
import Link from "next/link";
import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const routes = [
    {
        name: "О НАС",
        route: "/"
    },
    {
        name: "УСЛУГИ",
        route: "/services"
    },
    {
        name: "ПАРТНЕРЫ",
        route: "/partners"
    },
    {
        name: "КЕЙСЫ",
        route: "/cases"
    },
    {
        name: "КОНТАКТЫ",
        route: "/contacts"
    },
];

export const MobileMenu = () => {
    const { mobileMenu: styles } = useContext(StylesContext);
    const [isOpen, setIsOpen] = useState(false);
    const [menuTrigger, setMenuTrigger] = useState(false);
    const { theme } = useTheme();
    const { transitionHandler } = usePageTransition();
    const router = useRouter();

    const onToggleMenu = () => setTimeout(() => setIsOpen(prev => !prev), 100);

    const onClick = (next: string) => () => {
        onToggleMenu();
        transitionHandler(router.pathname, next);
    };

    useEffect(() => {
        setTimeout(() => setMenuTrigger(prev => !prev), 300);
    }, [isOpen]);

    return (
        <>
            {menuTrigger && (
                <motion.div
                    className={styles.menu}
                    animate={{ x: 0, opacity: isOpen ? 1 : 0 }}
                    initial={{ x: isOpen ? 300 : 0 }}
                    transition={{ type: "tween", ease: "easeIn" }}
                >
                    <motion.div
                        onClick={onToggleMenu}
                        animate={{ rotate: isOpen? 90 : 0 }}
                        initial={{ rotate: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <MenuOpen />
                    </motion.div>

                    {routes.map(({ name, route }) => (
                        <Link key={name} href={route} onClick={onClick(route)}>
                            {name}
                        </Link>
                    ))}
                </motion.div>
            )}

            <motion.div
                className={styles.menuClosed}
                animate={{ y: 0, opacity: isOpen ? 0 : 1, zIndex: isOpen ? 0 : 5 }}
                initial={{ y: -200, opacity: isOpen ? 1 : 0 }}
                transition={{ type: "tween", ease: "easeIn", delay: isOpen ? 0 : 0.3 }}
            >
                <Image alt="image" src={theme === Theme.Light ? logo : logoWhite} width={130} height={91}/>
                <div
                    onClick={onToggleMenu}
                >
                    <MenuClosed gradient={theme === Theme.Light} />
                </div>
            </motion.div>
        </>
    );
};
