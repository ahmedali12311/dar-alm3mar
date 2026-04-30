import { motion } from "framer-motion";

const draw = (delay = 0, dur = 1.1) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { delay, duration: dur, ease: [0.22, 1, 0.36, 1] },
});

const fade = (delay = 0, dur = 0.8) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: dur },
});

const rise = (delay = 0, origin = "center bottom") => ({
  initial: { opacity: 0, scaleY: 0 },
  animate: { opacity: 1, scaleY: 1 },
  transition: { delay, duration: 1.05, ease: [0.22, 1, 0.36, 1] },
  style: { transformOrigin: origin },
});

const slideX = (delay = 0, x = -20) => ({
  initial: { opacity: 0, x },
  animate: { opacity: 1, x: 0 },
  transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
});

export default function LuxuryVillaColorSvg() {
  return (
    <motion.svg
      viewBox="0 0 1000 440"
      className="w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...fade(0, 0.3)}
    >
      <defs>
        {/* Subtle hatch pattern for shadow faces */}
        <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#bbb" strokeWidth="0.6" />
        </pattern>
        {/* Glass diagonal sheen */}
        <pattern id="glass" patternUnits="userSpaceOnUse" width="28" height="28" patternTransform="rotate(38)">
          <line x1="0" y1="0" x2="0" y2="28" stroke="#d0d0d0" strokeWidth="0.5" />
        </pattern>
        {/* Light gray for shadow */}
        <linearGradient id="shadow-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0e0e0" />
          <stop offset="100%" stopColor="#cacaca" />
        </linearGradient>
      </defs>

      {/* ══════════════════════════════════════
          GROUND LINE + TERRAIN
         ══════════════════════════════════════ */}
      <motion.line x1="10" y1="360" x2="990" y2="360"
        stroke="#111" strokeWidth="2.2" strokeLinecap="round" {...draw(0.05, 1.6)} />

      {/* Paving slab in front of entrance */}
      <motion.g {...fade(0.9, 0.6)}>
        <rect x="370" y="355" width="260" height="10" fill="url(#hatch)" stroke="#111" strokeWidth="0.8" opacity="0.5" />
        {[390, 430, 470, 510, 550, 590].map(x => (
          <line key={x} x1={x} y1="355" x2={x} y2="365" stroke="#111" strokeWidth="0.5" opacity="0.3" />
        ))}
      </motion.g>

      {/* ══════════════════════════════════════
          LEFT WING — single storey, elegant
         ══════════════════════════════════════ */}
      <motion.g {...slideX(0.45, -28)}>
        {/* Main wall body */}
        <rect x="60" y="246" width="228" height="114" fill="white" stroke="#111" strokeWidth="1.7" />
        {/* Shadow on right edge */}
        <rect x="278" y="246" width="10" height="114" fill="url(#hatch)" opacity="0.3" />

        {/* Roof slab — flat with overhang */}
        <rect x="44" y="226" width="260" height="22" fill="#e6e6e6" stroke="#111" strokeWidth="1.5" />
        {/* Roof soffit shadow */}
        <rect x="44" y="246" width="260" height="5" fill="url(#hatch)" opacity="0.2" />

        {/* ── Vertical wood-cladding left band ── */}
        <rect x="60" y="246" width="76" height="114" fill="#e6e6e6" stroke="#111" strokeWidth="1.3" />
        {[252, 260, 268, 276, 284, 292, 300, 308, 316, 324, 332, 340, 348].map(y => (
          <line key={y} x1="61" y1={y} x2="135" y2={y} stroke="#111" strokeWidth="0.45" opacity="0.4" />
        ))}

        {/* ── Large glazing panel ── */}
        <rect x="146" y="252" width="106" height="100" fill="url(#glass)" stroke="#111" strokeWidth="1.3" />
        {/* Mullion center */}
        <line x1="199" y1="252" x2="199" y2="352" stroke="#111" strokeWidth="0.9" />
        {/* Horizontal transom */}
        <line x1="146" y1="302" x2="252" y2="302" stroke="#111" strokeWidth="0.7" opacity="0.5" />
        {/* Highlight sheen */}
        <line x1="153" y1="255" x2="188" y2="282" stroke="white" strokeWidth="2" opacity="0.7" />

        {/* ── Narrow accent window right ── */}
        <rect x="264" y="262" width="52" height="72" fill="url(#glass)" stroke="#111" strokeWidth="1.2" />
        <line x1="290" y1="262" x2="290" y2="334" stroke="#111" strokeWidth="0.7" />
        <line x1="268" y1="265" x2="285" y2="277" stroke="white" strokeWidth="1.5" opacity="0.6" />
      </motion.g>

      {/* ══════════════════════════════════════
          MAIN TOWER — two storeys, hero volume
         ══════════════════════════════════════ */}
      <motion.g {...rise(0.2, "500px 360px")}>
        {/* Main body */}
        <rect x="288" y="78" width="424" height="282" fill="white" stroke="#111" strokeWidth="2.2" />

        {/* Roof parapet — thicker cap */}
        <rect x="270" y="54" width="460" height="26" fill="#dcdcdc" stroke="#111" strokeWidth="1.8" />
        {/* Parapet top cap line */}
        <line x1="270" y1="54" x2="730" y2="54" stroke="#111" strokeWidth="0.8" opacity="0.45" />
        {/* Parapet bottom shadow */}
        <rect x="270" y="78" width="460" height="6" fill="url(#hatch)" opacity="0.18" />

        {/* Floor divider — inter-storey slab */}
        <rect x="288" y="222" width="424" height="8" fill="#e0e0e0" stroke="#111" strokeWidth="1" />

        {/* ── UPPER FLOOR — full panoramic glazing ── */}
        <rect x="300" y="88" width="400" height="124" fill="url(#glass)" stroke="#111" strokeWidth="1.6" />
        {/* Vertical mullions */}
        {[375, 450, 525, 600, 675].map(x => (
          <line key={x} x1={x} y1="88" x2={x} y2="212" stroke="#111" strokeWidth="0.9" opacity="0.5" />
        ))}
        {/* Horizontal bar mid */}
        <line x1="300" y1="150" x2="700" y2="150" stroke="#111" strokeWidth="0.8" opacity="0.35" />
        {/* Sheen highlights */}
        <line x1="308" y1="92" x2="360" y2="126" stroke="white" strokeWidth="2.5" opacity="0.7" />
        <line x1="460" y1="92" x2="510" y2="122" stroke="white" strokeWidth="2" opacity="0.55" />
        <line x1="614" y1="92" x2="658" y2="118" stroke="white" strokeWidth="2" opacity="0.5" />

        {/* ── BALCONY RAIL at floor slab ── */}
        <line x1="288" y1="214" x2="712" y2="214" stroke="#111" strokeWidth="2" />
        {/* Rail posts */}
        {Array.from({ length: 36 }, (_, i) => 300 + i * 12).map(x => (
          <line key={x} x1={x} y1="213" x2={x} y2="222" stroke="#111" strokeWidth="0.7" opacity="0.5" />
        ))}

        {/* ── GROUND FLOOR: Grand pivot entrance ── */}
        {/* Entrance recess shadow */}
        <rect x="416" y="234" width="168" height="126" fill="#f0f0f0" stroke="#111" strokeWidth="1.8" />
        {/* Door panels */}
        <line x1="500" y1="234" x2="500" y2="360" stroke="#111" strokeWidth="1.1" />
        {/* Transom window */}
        <rect x="416" y="234" width="168" height="32" fill="url(#glass)" stroke="#111" strokeWidth="1" />
        {[449, 500, 551].map(x => (
          <line key={x} x1={x} y1="234" x2={x} y2="266" stroke="#111" strokeWidth="0.7" opacity="0.5" />
        ))}
        {/* Door panel texture */}
        <rect x="422" y="270" width="70" height="82" rx="1" fill="#e8e8e8" stroke="#111" strokeWidth="0.8" />
        <rect x="508" y="270" width="70" height="82" rx="1" fill="#e8e8e8" stroke="#111" strokeWidth="0.8" />
        {/* Handles */}
        <line x1="472" y1="304" x2="472" y2="322" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        <line x1="528" y1="304" x2="528" y2="322" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        {/* Door sill */}
        <rect x="406" y="357" width="188" height="7" rx="1" fill="#d8d8d8" stroke="#111" strokeWidth="1.2" />

        {/* ── Canopy above entrance ── */}
        <rect x="400" y="218" width="200" height="18" fill="#d8d8d8" stroke="#111" strokeWidth="1.4" />
        {/* Canopy supports */}
        <line x1="426" y1="236" x2="426" y2="234" stroke="#111" strokeWidth="1" />
        <line x1="574" y1="236" x2="574" y2="234" stroke="#111" strokeWidth="1" />

        {/* ── GROUND FLOOR: Left large glazing ── */}
        <rect x="296" y="236" width="110" height="118" fill="url(#glass)" stroke="#111" strokeWidth="1.4" />
        <line x1="351" y1="236" x2="351" y2="354" stroke="#111" strokeWidth="0.9" />
        <line x1="296" y1="295" x2="406" y2="295" stroke="#111" strokeWidth="0.7" opacity="0.4" />
        <line x1="303" y1="240" x2="342" y2="266" stroke="white" strokeWidth="2" opacity="0.65" />

        {/* ── GROUND FLOOR: Right large glazing ── */}
        <rect x="594" y="236" width="110" height="118" fill="url(#glass)" stroke="#111" strokeWidth="1.4" />
        <line x1="649" y1="236" x2="649" y2="354" stroke="#111" strokeWidth="0.9" />
        <line x1="594" y1="295" x2="704" y2="295" stroke="#111" strokeWidth="0.7" opacity="0.4" />
        <line x1="601" y1="240" x2="640" y2="266" stroke="white" strokeWidth="2" opacity="0.65" />
      </motion.g>

      {/* ══════════════════════════════════════
          RIGHT WING — single storey
         ══════════════════════════════════════ */}
      <motion.g {...slideX(0.5, 28)}>
        {/* Wall body */}
        <rect x="712" y="206" width="228" height="154" fill="white" stroke="#111" strokeWidth="1.7" />
        {/* Left shadow edge */}
        <rect x="712" y="206" width="8" height="154" fill="url(#hatch)" opacity="0.2" />

        {/* Roof slab */}
        <rect x="698" y="184" width="258" height="24" fill="#e6e6e6" stroke="#111" strokeWidth="1.5" />
        <rect x="698" y="206" width="258" height="5" fill="url(#hatch)" opacity="0.18" />

        {/* ── Ribbon window upper ── */}
        <rect x="720" y="216" width="148" height="70" fill="url(#glass)" stroke="#111" strokeWidth="1.3" />
        {[769, 819, 869].map(x => (
          <line key={x} x1={x} y1="216" x2={x} y2="286" stroke="#111" strokeWidth="0.8" opacity="0.5" />
        ))}
        <line x1="720" y1="251" x2="868" y2="251" stroke="#111" strokeWidth="0.7" opacity="0.4" />
        <line x1="727" y1="219" x2="758" y2="240" stroke="white" strokeWidth="1.8" opacity="0.6" />

        {/* ── Sliding doors lower ── */}
        <rect x="720" y="296" width="148" height="64" fill="url(#glass)" stroke="#111" strokeWidth="1.3" />
        <line x1="794" y1="296" x2="794" y2="360" stroke="#111" strokeWidth="0.9" />
        <line x1="727" y1="300" x2="758" y2="318" stroke="white" strokeWidth="1.8" opacity="0.55" />

        {/* ── Wood cladding panel right ── */}
        <rect x="876" y="206" width="64" height="154" fill="#e2e2e2" stroke="#111" strokeWidth="1.3" />
        {[212, 221, 230, 239, 248, 257, 266, 275, 284, 293, 302, 311, 320, 329, 338, 347].map(y => (
          <line key={y} x1="877" y1={y} x2="939" y2={y} stroke="#111" strokeWidth="0.45" opacity="0.4" />
        ))}
      </motion.g>

      {/* ══════════════════════════════════════
          INFINITY POOL
         ══════════════════════════════════════ */}
      <motion.g {...fade(1.1, 0.7)}>
        {/* Pool body */}
        <rect x="110" y="368" width="360" height="32" rx="2" fill="#f0f0f0" stroke="#111" strokeWidth="1.5" />
        {/* Coping edge */}
        <rect x="108" y="366" width="364" height="6" fill="#dcdcdc" stroke="#111" strokeWidth="1" />
        {/* Water surface lines */}
        <line x1="130" y1="378" x2="300" y2="378" stroke="#aaa" strokeWidth="0.8" strokeDasharray="18 10" />
        <line x1="180" y1="386" x2="390" y2="386" stroke="#aaa" strokeWidth="0.7" strokeDasharray="14 12" />
        {/* Wave paths */}
        <path d="M128 374 Q148 371 168 374 Q188 371 208 374" stroke="#999" strokeWidth="0.9" fill="none" />
        <path d="M240 380 Q265 377 290 380 Q315 377 340 380" stroke="#999" strokeWidth="0.9" fill="none" />
        <path d="M160 390 Q185 387 210 390 Q235 387 260 390" stroke="#999" strokeWidth="0.8" fill="none" opacity="0.6" />
        {/* Ladder */}
        <line x1="452" y1="366" x2="458" y2="400" stroke="#111" strokeWidth="1.2" opacity="0.5" />
        <line x1="463" y1="366" x2="469" y2="400" stroke="#111" strokeWidth="1.2" opacity="0.5" />
        {[370, 379, 388, 397].map(y => (
          <line key={y} x1="452" y1={y} x2="463" y2={y + 1} stroke="#111" strokeWidth="0.8" opacity="0.45" />
        ))}
      </motion.g>

      {/* ══════════════════════════════════════
          TALL PALMS
         ══════════════════════════════════════ */}
      <motion.g {...fade(1.15, 0.6)}>
        <motion.g
          animate={{ rotate: [-0.5, 1.5, -0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "46px 360px" }}
        >
          {/* Left palm trunk — organic curve */}
          <path d="M46 360 Q50 328 44 298 Q48 266 43 240 Q47 216 44 192 Q46 172 43 154"
            stroke="#111" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          {/* Left fronds */}
          {[
            "M43 154 Q20 134 10 112",
            "M43 154 Q32 128 28 106",
            "M43 154 Q58 134 66 116",
            "M43 154 Q62 144 76 136",
            "M43 154 Q22 156 8 150",
            "M43 154 Q40 136 46 120",
          ].map((d, i) => (
            <motion.path key={i} d={d} stroke="#111" strokeWidth="1.8" strokeLinecap="round" fill="none"
              {...draw(1.2 + i * 0.08, 0.45)} />
          ))}
        </motion.g>

        <motion.g
          animate={{ rotate: [0.5, -1.5, 0.5] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: "954px 360px" }}
        >
          {/* Right palm */}
          <path d="M954 360 Q950 326 956 294 Q952 262 957 236 Q953 210 956 186 Q954 166 957 148"
            stroke="#111" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          {[
            "M957 148 Q978 128 990 106",
            "M957 148 Q968 122 972 100",
            "M957 148 Q942 128 934 110",
            "M957 148 Q938 140 924 132",
            "M957 148 Q976 150 990 144",
            "M957 148 Q960 130 954 114",
          ].map((d, i) => (
            <motion.path key={i} d={d} stroke="#111" strokeWidth="1.8" strokeLinecap="round" fill="none"
              {...draw(1.3 + i * 0.08, 0.45)} />
          ))}
        </motion.g>
      </motion.g>

      {/* ══════════════════════════════════════
          ORNAMENTAL TREES by entrance
         ══════════════════════════════════════ */}
      <motion.g {...fade(1.45, 0.6)}>
        {/* Left tree */}
        <motion.g
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "282px 360px" }}
        >
          <line x1="282" y1="360" x2="280" y2="312" stroke="#111" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="278" cy="298" rx="20" ry="24" stroke="#111" strokeWidth="1.5" fill="white" />
          <ellipse cx="278" cy="293" rx="13" ry="16" stroke="#111" strokeWidth="0.9" fill="#ebebeb" />
          <ellipse cx="272" cy="305" rx="8" ry="7" stroke="#111" strokeWidth="0.7" fill="white" />
        </motion.g>

        {/* Right tree */}
        <motion.g
          animate={{ rotate: [1, -1, 1] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          style={{ transformOrigin: "718px 360px" }}
        >
          <line x1="718" y1="360" x2="720" y2="312" stroke="#111" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="722" cy="298" rx="20" ry="24" stroke="#111" strokeWidth="1.5" fill="white" />
          <ellipse cx="722" cy="293" rx="13" ry="16" stroke="#111" strokeWidth="0.9" fill="#ebebeb" />
          <ellipse cx="728" cy="305" rx="8" ry="7" stroke="#111" strokeWidth="0.7" fill="white" />
        </motion.g>
      </motion.g>

      {/* ══════════════════════════════════════
          HEDGES
         ══════════════════════════════════════ */}
      <motion.g {...fade(1.55, 0.5)}>
        {/* Left hedge row */}
        <motion.g
          animate={{ skewX: [-1, 2, -1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "146px 360px" }}
        >
          <path d="M76,360 Q90,344 104,360 Q118,344 132,360 Q146,344 160,360 Q174,344 188,360 Q202,344 216,360"
            stroke="#111" strokeWidth="1.5" fill="white" />
          <path d="M82,360 Q94,350 106,360 Q118,350 130,360 Q142,350 154,360 Q166,350 178,360"
            stroke="#111" strokeWidth="0.8" fill="none" opacity="0.4" />
        </motion.g>
        {/* Right hedge row */}
        <motion.g
          animate={{ skewX: [1, -2, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: "854px 360px" }}
        >
          <path d="M784,360 Q798,344 812,360 Q826,344 840,360 Q854,344 868,360 Q882,344 896,360 Q910,344 924,360"
            stroke="#111" strokeWidth="1.5" fill="white" />
          <path d="M790,360 Q802,350 814,360 Q826,350 838,360 Q850,350 862,360 Q874,350 886,360"
            stroke="#111" strokeWidth="0.8" fill="none" opacity="0.4" />
        </motion.g>
      </motion.g>

      {/* ══════════════════════════════════════
          GROUND SHADOW
         ══════════════════════════════════════ */}
      <motion.ellipse cx="500" cy="362" rx="440" ry="9" fill="#111" opacity="0.045" {...fade(0.8, 0.6)} />

      {/* ══════════════════════════════════════
          ANNOTATION — DIMENSION LINES (gold)
         ══════════════════════════════════════ */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.55 }} transition={{ delay: 1.8, duration: 0.6 }}>
        {/* Overall width */}
        <line x1="60" y1="415" x2="940" y2="415" stroke="#915025" strokeWidth="0.9" />
        <line x1="60" y1="408" x2="60" y2="422" stroke="#915025" strokeWidth="0.9" />
        <line x1="940" y1="408" x2="940" y2="422" stroke="#915025" strokeWidth="0.9" />
        <text x="500" y="430" textAnchor="middle" fill="#915025" fontSize="9" fontFamily="monospace">24.00 m</text>

        {/* Height markers */}
        <line x1="22" y1="360" x2="22" y2="54" stroke="#915025" strokeWidth="0.8" strokeDasharray="5 3" />
        <line x1="15" y1="360" x2="29" y2="360" stroke="#915025" strokeWidth="0.8" />
        <line x1="15" y1="230" x2="29" y2="230" stroke="#915025" strokeWidth="0.8" />
        <line x1="15" y1="78" x2="29" y2="78" stroke="#915025" strokeWidth="0.8" />
        <line x1="15" y1="54" x2="29" y2="54" stroke="#915025" strokeWidth="0.8" />
        <text x="11" y="363" textAnchor="end" fill="#915025" fontSize="8" fontFamily="monospace">±0.00</text>
        <text x="11" y="233" textAnchor="end" fill="#915025" fontSize="8" fontFamily="monospace">+3.90</text>
        <text x="11" y="81" textAnchor="end" fill="#915025" fontSize="8" fontFamily="monospace">+7.80</text>
        <text x="950" y="432" textAnchor="end" fill="#915025" fontSize="8" fontFamily="monospace">SCALE 1:100</text>
      </motion.g>

      {/* ══════════════════════════════════════
          BIRDS — life detail
         ══════════════════════════════════════ */}
      <motion.g {...fade(2.1, 0.9)} opacity="0.28">
        <motion.path 
          stroke="#111" strokeWidth="1.3" fill="none" 
          animate={{ 
            d: ["M580 36 Q586 31 592 36", "M580 36 Q586 39 592 36", "M580 36 Q586 31 592 36"],
            y: [0, -6, 0],
            x: [0, -12, 0]
          }}
          transition={{ 
            d: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
            default: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
          }}
        />
        <motion.path 
          stroke="#111" strokeWidth="1.3" fill="none" 
          animate={{ 
            d: ["M604 26 Q610 21 616 26", "M604 26 Q610 29 616 26", "M604 26 Q610 21 616 26"],
            y: [0, 5, 0],
            x: [0, -15, 0]
          }}
          transition={{ 
            d: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            default: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        />
        <motion.path 
          stroke="#111" strokeWidth="1.2" fill="none" 
          animate={{ 
            d: ["M628 40 Q633 36 638 40", "M628 40 Q633 43 638 40", "M628 40 Q633 36 638 40"],
            y: [0, -4, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            d: { duration: 1.0, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            default: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
        />
        <motion.path 
          stroke="#111" strokeWidth="1.1" fill="none" 
          animate={{ 
            d: ["M650 30 Q654 27 658 30", "M650 30 Q654 33 658 30", "M650 30 Q654 27 658 30"],
            y: [0, 3, 0],
            x: [0, -8, 0]
          }}
          transition={{ 
            d: { duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
            default: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
          }}
        />
      </motion.g>
    </motion.svg>
  );
}
