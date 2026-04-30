import { useEffect, useState } from "react";

export default function useCompactViewport(maxWidth = 767) {
  const [isCompactViewport, setIsCompactViewport] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const updateViewport = () => setIsCompactViewport(mediaQuery.matches);

    updateViewport();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateViewport);

      return () => mediaQuery.removeEventListener("change", updateViewport);
    }

    mediaQuery.addListener(updateViewport);

    return () => mediaQuery.removeListener(updateViewport);
  }, [maxWidth]);

  return isCompactViewport;
}
