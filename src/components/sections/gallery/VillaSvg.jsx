import { motion } from "framer-motion";

/**
 * Animated architectural line-art of a modern luxury villa.
 * Draws itself with a stroke-dasharray animation on mount.
 */
export default function VillaSvg() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.15, duration: 2.2, ease: "easeInOut" },
        opacity: { delay: i * 0.15, duration: 0.3 },
      },
    }),
  };

  const stroke = "#111111";
  const sw = 2.2;

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 320"
      width="100%"
      height="100%"
      fill="none"
      initial="hidden"
      animate="visible"
    >
      {/* ── Ground line ── */}
      <motion.line x1="20" y1="280" x2="500" y2="280"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round"
        custom={0} variants={draw} />

      {/* ══════════════════════════════════════
          LEFT WING  (single-storey, flat roof)
         ══════════════════════════════════════ */}
      {/* Outer wall */}
      <motion.polyline points="20,280 20,195 130,195 130,280"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
        custom={1} variants={draw} />

      {/* Flat-roof overhang */}
      <motion.line x1="10" y1="195" x2="140" y2="195"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round"
        custom={1.3} variants={draw} />

      {/* Large horizontal window */}
      <motion.rect x="35" y="220" width="70" height="35"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
        custom={2} variants={draw} />
      {/* Window centre divider */}
      <motion.line x1="70" y1="220" x2="70" y2="255"
        stroke={stroke} strokeWidth={sw * 0.7} strokeLinecap="round"
        custom={2.2} variants={draw} />

      {/* ══════════════════════════════════════
          CENTRAL BLOCK  (two-storey, taller)
         ══════════════════════════════════════ */}
      {/* Main walls */}
      <motion.polyline points="130,280 130,115 330,115 330,280"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
        custom={1.5} variants={draw} />

      {/* Flat-roof overhang */}
      <motion.line x1="118" y1="115" x2="342" y2="115"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round"
        custom={1.8} variants={draw} />

      {/* Roof parapet detail */}
      <motion.line x1="118" y1="108" x2="342" y2="108"
        stroke={stroke} strokeWidth={sw * 0.6} strokeLinecap="round"
        custom={1.9} variants={draw} />

      {/* GROUND FLOOR ── large glass door */}
      <motion.rect x="185" y="205" width="90" height="75"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
        custom={2.5} variants={draw} />
      <motion.line x1="230" y1="205" x2="230" y2="280"
        stroke={stroke} strokeWidth={sw * 0.7} strokeLinecap="round"
        custom={2.7} variants={draw} />
      {/* Door handle */}
      <motion.line x1="220" y1="245" x2="220" y2="252"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round"
        custom={3} variants={draw} />

      {/* FIRST FLOOR ── three slim windows */}
      {[152, 205, 258].map((x, idx) => (
        <motion.rect key={x} x={x} y={140} width={38} height={48}
          stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
          custom={2.8 + idx * 0.2} variants={draw} />
      ))}

      {/* Floor slab between stories */}
      <motion.line x1="130" y1="200" x2="330" y2="200"
        stroke={stroke} strokeWidth={sw * 0.6} strokeLinecap="round"
        custom={2.4} variants={draw} />

      {/* ══════════════════════════════════════
          RIGHT WING  (single-storey, lower)
         ══════════════════════════════════════ */}
      <motion.polyline points="330,280 330,200 460,200 460,280"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
        custom={1.6} variants={draw} />

      {/* Flat-roof overhang */}
      <motion.line x1="320" y1="200" x2="470" y2="200"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round"
        custom={2} variants={draw} />

      {/* Wide horizontal window */}
      <motion.rect x="350" y="222" width="80" height="35"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
        custom={2.8} variants={draw} />
      <motion.line x1="390" y1="222" x2="390" y2="257"
        stroke={stroke} strokeWidth={sw * 0.7} strokeLinecap="round"
        custom={3} variants={draw} />

      {/* ══════════════════════════════════════
          LANDSCAPE ELEMENTS
         ══════════════════════════════════════ */}

      {/* Left landscaping: low hedge */}
      <motion.path d="M20,280 Q35,265 50,280 Q65,265 80,280"
        stroke={stroke} strokeWidth={sw * 0.8} strokeLinecap="round"
        custom={4} variants={draw} />

      {/* Right landscaping: low hedge */}
      <motion.path d="M430,280 Q445,265 460,280 Q475,265 490,280 Q497,270 500,280"
        stroke={stroke} strokeWidth={sw * 0.8} strokeLinecap="round"
        custom={4.2} variants={draw} />

      {/* Palm / slender tree – right side */}
      <motion.line x1="485" y1="280" x2="485" y2="215"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round"
        custom={3.8} variants={draw} />
      <motion.path d="M485,215 Q470,205 460,215 M485,215 Q475,200 490,192 M485,215 Q498,206 500,218"
        stroke={stroke} strokeWidth={sw * 0.8} strokeLinecap="round"
        custom={4.1} variants={draw} />

      {/* Slim tree – far left */}
      <motion.line x1="18" y1="280" x2="18" y2="225"
        stroke={stroke} strokeWidth={sw} strokeLinecap="round"
        custom={3.6} variants={draw} />
      <motion.path d="M18,225 Q8,212 12,200 M18,225 Q28,212 24,200 M18,225 Q14,215 10,218"
        stroke={stroke} strokeWidth={sw * 0.8} strokeLinecap="round"
        custom={3.9} variants={draw} />

      {/* Pool / water feature: long thin rectangle in front */}
      <motion.rect x="160" y="285" width="200" height="14" rx="7"
        stroke={stroke} strokeWidth={sw * 0.8} strokeLinecap="round" strokeLinejoin="round"
        custom={4.5} variants={draw} />
      {/* Water ripples */}
      <motion.line x1="185" y1="292" x2="220" y2="292"
        stroke={stroke} strokeWidth={sw * 0.5} strokeLinecap="round"
        custom={4.8} variants={draw} />
      <motion.line x1="295" y1="292" x2="330" y2="292"
        stroke={stroke} strokeWidth={sw * 0.5} strokeLinecap="round"
        custom={4.9} variants={draw} />

      {/* Sun / sky element: minimal arc top-right */}
      <motion.path d="M430,40 Q445,20 460,40"
        stroke={stroke} strokeWidth={sw * 0.7} strokeLinecap="round"
        custom={5} variants={draw} />
      <motion.line x1="445" y1="15" x2="445" y2="25"
        stroke={stroke} strokeWidth={sw * 0.7} strokeLinecap="round"
        custom={5.1} variants={draw} />
      <motion.line x1="427" y1="28" x2="434" y2="35"
        stroke={stroke} strokeWidth={sw * 0.7} strokeLinecap="round"
        custom={5.2} variants={draw} />
      <motion.line x1="463" y1="28" x2="456" y2="35"
        stroke={stroke} strokeWidth={sw * 0.7} strokeLinecap="round"
        custom={5.3} variants={draw} />

      {/* Thin cloud streaks top-left */}
      <motion.path d="M55,50 Q80,42 105,50"
        stroke={stroke} strokeWidth={sw * 0.5} strokeLinecap="round"
        custom={5.4} variants={draw} />
      <motion.path d="M70,65 Q90,58 110,65"
        stroke={stroke} strokeWidth={sw * 0.5} strokeLinecap="round"
        custom={5.5} variants={draw} />
    </motion.svg>
  );
}
