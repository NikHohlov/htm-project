export const useSmoothScroll = () => {

    function scrollToSmoothly(pos: number, time: number) {
        const currentPos = window.pageYOffset;
        let start = 0;
        if (time === null) time = 500;
        pos = +pos, time = +time;
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start;
            const progress = currentTime - start;
            if (currentPos < pos) {
                window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
            } else {
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
            }
            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, pos);
            }
        });
    }

    return { scrollToSmoothly };
};