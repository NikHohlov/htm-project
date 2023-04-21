import { ArrowDownGradient } from "@/assets/icons/ArrowDownGradient";
import { ArrowDown } from "@/assets/icons/ArrowDown";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { RefObject } from "react";
import styles from "./ArrowScroll.module.scss";

interface ArrowScrollProps {
    scrollTo: RefObject<HTMLDivElement>;
    gradient?: boolean;
}

export const ArrowScroll = ({ scrollTo, gradient }: ArrowScrollProps) => {
    const { scrollToSmoothly } = useSmoothScroll();

    const scrollDown = () => {
        if (!scrollTo.current) return;
        scrollToSmoothly(scrollTo.current?.offsetHeight, 100);
    };

    return (
        <motion.div
            onClick={scrollDown}
            className={styles.arrow}
            animate={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        >
            {gradient
                ? <ArrowDownGradient />
                : <ArrowDown />
            }
        </motion.div>
    );
};
