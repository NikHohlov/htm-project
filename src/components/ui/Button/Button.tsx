import { Theme } from "@/lib/types";
import { MouseEventHandler } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
    title: string;
    theme: Theme;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ title, theme, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className={`${styles.button} ${theme === Theme.Dark ? styles.dark : ""}`}>
            <p>
                {title}
            </p>
        </button>
    );
}
