import { useEffect, useRef, useState } from "react";

export default function useDeferredMount({
  rootMargin = "320px 0px",
  idleTimeout = 1800,
} = {}) {
  const ref = useRef(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (shouldMount || typeof window === "undefined") {
      return undefined;
    }

    let cancelled = false;
    let observer;
    let idleId;
    let timeoutId;

    const finish = () => {
      if (!cancelled) {
        setShouldMount(true);
      }
    };

    const node = ref.current;

    if (node && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            observer.disconnect();
            finish();
          }
        },
        { rootMargin }
      );

      observer.observe(node);
    }

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(finish, { timeout: idleTimeout });
    } else {
      timeoutId = window.setTimeout(finish, idleTimeout);
    }

    return () => {
      cancelled = true;
      observer?.disconnect();

      if (idleId) {
        window.cancelIdleCallback?.(idleId);
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [idleTimeout, rootMargin, shouldMount]);

  return [ref, shouldMount];
}
