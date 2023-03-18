import { Theme } from "@/lib/types";
import { ReactEventHandler } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
    title: string;
    theme: Theme;
    onClick?: (event: ReactEventHandler) => void;
}

export default function Button({ title, theme }: ButtonProps) {
    return (
        <button className={`${styles.button} ${theme === Theme.Dark ? styles.dark : ""}`}>
            <p>
                {title}
            </p>
        </button>
    );
}
