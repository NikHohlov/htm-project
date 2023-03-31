import { Theme } from "@/lib/types";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";

export default function useTheme() {
    const router = useRouter();

    const lightTheme = ["/", "/partners", "/cases/[case]"];
    const [theme, setTheme] = useState<Theme>(lightTheme.includes(router.pathname) ? Theme.Light : Theme.Dark);

    useEffect(() => {
        if (theme === Theme.Light) {
            setTimeout(() => lightTheme.includes(router.pathname) ? setTheme(Theme.Light) : setTheme(Theme.Dark), 1180);
        } else {
            lightTheme.includes(router.pathname) ? setTheme(Theme.Light) : setTheme(Theme.Dark);
        }
    }, [router.pathname]);

    return { theme, path: router.pathname, lightTheme };
}
