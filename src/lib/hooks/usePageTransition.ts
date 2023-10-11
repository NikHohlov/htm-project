import { useState } from "react";
import { singletonHook } from "react-singleton-hook";
import { useIsMobile } from "./useIsMobile";

type Variant = {
  hidden: { opacity: number; x?: number; y?: number };
  enter: { opacity: number; x?: number; y?: number };
  exit: { opacity: number; x?: number; y?: number };
};

export default function usePageTransitionL() {
  const [variants, setVariants] = useState<Variant>({
    hidden: { opacity: 1, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 1, x: 0, y: 0 },
  });

  const isMobile = useIsMobile();

  const width = window.screen.width;

  const height = window.screen.height;

  const paths = ["/", "/services", "/partners", "/cases", "/contacts"];

  const nestedPaths = ["/services/[service]", "/cases/[case]"];

  const mobileAnimation = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transitionHandler = (current: string, next: string) => {
    if (nestedPaths.includes(next) && isMobile) {
      setVariants({
        hidden: { opacity: 0, x: width, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -width, y: 0 },
      });
      return;
    }
    paths.indexOf(current) < paths.indexOf(next)
      ? setVariants(
          isMobile
            ? mobileAnimation
            : {
                hidden: { opacity: 0, x: width, y: 0 },
                enter: { opacity: 1, x: 0, y: 0 },
                exit: { opacity: 0, x: -width, y: 0 },
              }
        )
      : setVariants(
          isMobile
            ? mobileAnimation
            : {
                hidden: { opacity: 0, x: -width, y: 0 },
                enter: { opacity: 1, x: 0, y: 0 },
                exit: { opacity: 0, x: width, y: 0 },
              }
        );
  };

  return { variants, transitionHandler };
}

export const usePageTransition = singletonHook(
  {
    variants: {
      hidden: { opacity: 0, x: 1600, y: 0 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: -1600, y: 0 },
    },
    transitionHandler: () => undefined,
  },
  usePageTransitionL
);
