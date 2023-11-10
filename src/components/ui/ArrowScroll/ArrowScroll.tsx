import { ArrowDownGradient } from "@/assets/icons/ArrowDownGradient";
import { ArrowDown } from "@/assets/icons/ArrowDown";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { RefObject } from "react";
import styles from "./ArrowScroll.module.scss";
import { opacityFromZeroToOne } from "@/lib/animaitons/animations";

interface ArrowScrollProps {
    scrollTo: RefObject<HTMLDivElement>;
    gradient?: boolean;
}

export const ArrowScroll = ({ scrollTo, gradient }: ArrowScrollProps) => {
    const { scrollToSmoothly } = useSmoothScroll();

    const scrollDown = () => {
        if (!scrollTo.current) return;
        scrollToSmoothly(scrollTo.current?.offsetHeight + 15, 100);
    };

    return (
        <motion.div
            onClick={scrollDown}
            className={`${styles.arrow} arrow-scroll`}
            {...opacityFromZeroToOne}
        >
            {gradient
                ? <ArrowDownGradient />
                : <ArrowDown />
            }
        </motion.div>
    );
};
