// This enables Hash-based navigations despite typical routes.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // try repeatedly because route/content may be lazy-loaded
    let tries = 0;
    const maxTries = 20;

    const scroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (tries < maxTries) {
        tries += 1;
        requestAnimationFrame(scroll);
      }
    };

    // small async delay ensures DOM is painted
    requestAnimationFrame(scroll);
  }, [pathname, hash]);

  return null;
}

export default ScrollToHashElement;