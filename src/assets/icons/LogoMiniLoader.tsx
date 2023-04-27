/* eslint max-len: ["off"] */

import { motion } from "framer-motion";

export const LogoMiniLoader = () => (
    <motion.svg
        style={{ position: "absolute", zIndex: 55 }}

        viewBox="0 0 2200 2200"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1
            }}
            strokeWidth={4}
            strokeDasharray="0 1"
            fill="none"
            stroke="#3832a6"
            d="M1729.42,965.467V846.738l-70.56-50.1V1015.96l-45.96,33.01V764.01l-70.56-50.1V1099.47l-45.96,33.01V634.35l279,200.03V933.1ZM1462.07,1157.08l-22.66,16.19-23.3-16.19V561.409L1102.79,786.152V740.191l335.97-241v-0.464l0.33,0.232,0.32-.232V499.2l335.97,241v45.961L1462.07,561.409V1157.08ZM1148.75,868.365h185.79V675.456l45.96-33.014V1131.19l-45.96-32.37V914.327H1148.75v51.14L1102.79,933.1V834.7l45.96-32.367v66.029Z"/>
    </motion.svg>
);