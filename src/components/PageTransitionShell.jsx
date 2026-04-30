import { cloneElement, isValidElement, useEffect, useRef, useState } from "react";

const EXIT_MS = 220;
const ENTER_MS = 640;

export default function PageTransitionShell({ children, location, transitionKey }) {
  const [displayLocation, setDisplayLocation] = useState(location);
  const [displayKey, setDisplayKey] = useState(transitionKey);
  const [phase, setPhase] = useState("idle");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pendingLocationRef = useRef(location);
  const pendingKeyRef = useRef(transitionKey);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const sync = () => setPrefersReducedMotion(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    if (firstRenderRef.current) { firstRenderRef.current = false; return; }
    if (transitionKey === displayKey) return;
    pendingLocationRef.current = location;
    pendingKeyRef.current = transitionKey;

    if (prefersReducedMotion) {
      window.scrollTo({ top: 0, behavior: "auto" });
      setDisplayLocation(location);
      setDisplayKey(transitionKey);
      return;
    }
    setPhase("exit");
  }, [displayKey, location, prefersReducedMotion, transitionKey]);

  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      setDisplayLocation(pendingLocationRef.current);
      setDisplayKey(pendingKeyRef.current);
      setPhase("enter");
    }, EXIT_MS);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "enter") return;
    const t = setTimeout(() => setPhase("idle"), ENTER_MS);
    return () => clearTimeout(t);
  }, [phase]);

  const routedChildren =
    isValidElement(children) && typeof children.type !== "string"
      ? cloneElement(children, { location: displayLocation })
      : children;

  return (
    <div className={`page-shell page-shell--${phase}`}>
      <div key={displayKey} className="page-shell__content">
        {routedChildren}
      </div>
      <div className="page-shell__overlay" aria-hidden="true">
        <div className="page-shell__beam" />
      </div>
    </div>
  );
}
