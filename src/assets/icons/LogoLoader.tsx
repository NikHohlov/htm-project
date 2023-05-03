/* eslint max-len: ["off"] */

import { motion } from "framer-motion";

export const LogoLoader = (): JSX.Element => (
    <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, zIndex: 0 }}
        transition={{ delay: 1.4, type: "just" }}
        style={{
            position: "absolute",
            background: "linear-gradient(5deg, #34C3FB 1%, var(--bg-top-color) 99%)",
            width: "100%",
            height: "100%",
            zIndex: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <motion.svg
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1, type: "just" }}
            style={{
                position: "absolute",
                zIndex: 55,
                width: "50%",
                height: "50%",
            }}
            viewBox="320 -200 2200 2200"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="left-to-right" x1="0.5" y1="1" x2="0.5" y2="0">
                    <stop offset="0%" stopColor="#FFF">
                        <animate dur="0.3s" attributeName="offset" fill="freeze" from="0" to="1" />
                    </stop>
                    <stop offset="0%" stopColor="transparent">
                        <animate dur="0.3s" attributeName="offset" fill="freeze" from="0" to="1" />
                    </stop>
                </linearGradient>
                <linearGradient id="left-to-right2" x1="0.5" y1="1" x2="0.5" y2="0">
                    <stop offset="0" stopColor="#FFF">
                        <animate dur="0.6s" attributeName="offset" fill="freeze" from="0" to="1" />
                    </stop>
                    <stop offset="0" stopColor="transparent">
                        <animate dur="0.6s" attributeName="offset" fill="freeze" from="0" to="1" />
                    </stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#left-to-right)"
                d="M1729.42,965.467V846.738l-70.56-50.1V1015.96l-45.96,33.01V764.01l-70.56-50.1V1099.47l-45.96,33.01V634.35l279,200.03V933.1Z"
            />
            <path
                fill="url(#left-to-right2)"
                d="M1462.07,1157.08l-22.66,16.19-23.3-16.19V561.409L1102.79,786.152V740.191l335.97-241v-0.464l0.33,0.232,0.32-.232V499.2l335.97,241v45.961L1462.07,561.409V1157.08Z"
            />
            <path
                fill="url(#left-to-right)"
                d="M1148.75,868.365h185.79V675.456l45.96-33.014V1131.19l-45.96-32.37V914.327H1148.75v51.14L1102.79,933.1V834.7l45.96-32.367v66.029Z"/>

        </motion.svg>
    </motion.div>
);
