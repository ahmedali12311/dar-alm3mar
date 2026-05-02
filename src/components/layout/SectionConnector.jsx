import { lazy, Suspense, useId } from "react";
import useDeferredMount from "../../hooks/useDeferredMount";

const AnimatedSectionConnector = lazy(() => import("./AnimatedSectionConnector"));
const WAVE_FILL_PATH =
  "M-60,0 L-60,0 C140,56 360,52 560,28 C740,6 930,6 1120,30 C1260,52 1370,48 1500,34 L1500,140 L-60,140 Z";
const WAVE_STROKE_PATH =
  "M-60,0 C140,56 360,52 560,28 C740,6 930,6 1120,30 C1260,52 1370,48 1500,34";

function StaticSectionConnector({
  from = "#F8F7F4",
  to = "#F8F7F4",
  accent = "rgba(138,112,96,0.5)",
  heightClass = "h-20 md:h-28",
}) {
  const gradientId = useId().replace(/:/g, "");

  return (
    <div
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
        <path
          d={WAVE_STROKE_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="10.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.42"
        />
        <path
          d={WAVE_STROKE_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.86"
        />
      </svg>
    </div>
  );
}

export default function SectionConnector(props) {
  const [ref, shouldMount] = useDeferredMount({ rootMargin: "420px 0px", idleTimeout: 1500 });

  return (
    <div ref={ref}>
      {shouldMount ? (
        <Suspense fallback={<StaticSectionConnector {...props} />}>
          <AnimatedSectionConnector {...props} />
        </Suspense>
      ) : (
        <StaticSectionConnector {...props} />
      )}
    </div>
  );
}
