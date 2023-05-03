import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.screen.width < 900) setIsMobile(true);
    }, []);

    return isMobile;
};