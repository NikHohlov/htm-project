export const opacityFromZeroToOne = {
    initial: { opacity: 0 },
    animate: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" }
};

export const listDelaySlideIn = (inViewOnce: boolean, index: number) => (
    {
        initial: { y: -50, opacity: 0 },
        transition: { delay: index / 8, type: "tween", duration: 0.8 },
        animate: inViewOnce ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 },
        viewport: { once: true }
    }
);

export const slideInItem = (direction: "toRight" | "toLeft", delay = 1) => {
    const x = direction === "toLeft" ? 200 : -200;

    return (
        {
            initial: { x, opacity: 0 },
            animate: { x, opacity: 0 },
            whileInView: { x: 0, opacity: 1 },
            transition: { delay, type: "tween", ease: "easeIn" },
            viewport: { once: true }
        }
    );
};