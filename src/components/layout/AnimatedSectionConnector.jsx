import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useId, useRef } from "react";
import useCompactViewport from "../../hooks/useCompactViewport";

const WAVE_FILL_PATH =
  "M-60,0 L-60,0 C140,56 360,52 560,28 C740,6 930,6 1120,30 C1260,52 1370,48 1500,34 L1500,140 L-60,140 Z";
const WAVE_STROKE_PATH =
  "M-60,0 C140,56 360,52 560,28 C740,6 930,6 1120,30 C1260,52 1370,48 1500,34";

export { WAVE_FILL_PATH, WAVE_STROKE_PATH };

export default function AnimatedSectionConnector({
  from = "#F8F7F4",
  to = "#F8F7F4",
  accent = "rgba(138,112,96,0.5)",
  heightClass = "h-20 md:h-28",
}) {
  const ref = useRef(null);
  const gradientId = useId().replace(/:/g, "");
  const reduceMotion = useReducedMotion();
  const isCompactViewport = useCompactViewport();
  const disableConnectorMotion = reduceMotion || isCompactViewport;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const focusRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const focus = useSpring(focusRaw, { stiffness: 90, damping: 26, mass: 0.45 });
  const strokeOpacityRaw = useTransform(focus, [0, 1], [0.72, 1]);
  const strokeWidthRaw = useTransform(focus, [0, 1], [3.1, 4.1]);
  const glowOpacityRaw = useTransform(focus, [0, 1], [0.38, 0.62]);

  const strokeOpacity = useSpring(strokeOpacityRaw, { stiffness: 95, damping: 28, mass: 0.35 });
  const strokeWidth = useSpring(strokeWidthRaw, { stiffness: 95, damping: 28, mass: 0.35 });
  const glowOpacity = useSpring(glowOpacityRaw, { stiffness: 95, damping: 28, mass: 0.35 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative -my-px w-full overflow-hidden ${heightClass}`}
      style={{ background: from }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="8%" stopColor={accent} />
            <stop offset="92%" stopColor={accent} />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
        </defs>

        <path d={WAVE_FILL_PATH} fill={to} />
        <motion.path
          d={WAVE_STROKE_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          style={
            disableConnectorMotion
              ? { opacity: 0.42 }
              : {
                  opacity: glowOpacity,
                }
          }
          strokeWidth={10.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d={WAVE_STROKE_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          style={
            disableConnectorMotion
              ? { opacity: 0.86 }
              : {
                  opacity: strokeOpacity,
                  strokeWidth,
                }
          }
          strokeWidth={disableConnectorMotion ? 3.4 : undefined}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
