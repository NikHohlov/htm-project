export const useSmoothScroll = () => {
    function smoothVerticalScrolling(e: HTMLElement, time: number, where: string) {
        const eTop = e.getBoundingClientRect().top;
        const eAmt = eTop / 100;
        let curTime = 0;
        while (curTime <= time) {
            window.setTimeout(SVS_B, curTime, eAmt, where);
            curTime += time / 100;
        }
    }

    function SVS_B(eAmt: number, where: string) {
        if (where === "center" || where === "")
            window.scrollBy(0, eAmt / 2);
        if (where === "top")
            window.scrollBy(0, eAmt);
    }

    return smoothVerticalScrolling;
};