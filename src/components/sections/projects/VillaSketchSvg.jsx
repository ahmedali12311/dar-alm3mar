import { motion } from "framer-motion";

const f = (delay = 0, dur = 0.7) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: dur, ease: "easeOut" },
});

export default function VillaSketchSvg() {
  const ink = "#1E2530";
  const sw = { thin: 0.8, mid: 1.4, bold: 2.2 };

  return (
    <svg viewBox="0 0 900 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" fill="none">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B8D4EE" />
          <stop offset="100%" stopColor="#E8F2FA" />
        </linearGradient>
        <linearGradient id="pool" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#5BC0E8" />
          <stop offset="50%" stopColor="#2E90CC" />
          <stop offset="100%" stopColor="#1A68A8" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#A8D8F4" stopOpacity="0.88" />
          <stop offset="40%" stopColor="#6AB0E4" stopOpacity="0.82" />
          <stop offset="100%" stopColor="#3E88C4" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="glassSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A90CC" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2A68A8" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4924E" />
          <stop offset="100%" stopColor="#A8701E" />
        </linearGradient>
        <linearGradient id="woodSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B87830" />
          <stop offset="100%" stopColor="#8A5818" />
        </linearGradient>
        <linearGradient id="conc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4D0CA" />
          <stop offset="100%" stopColor="#BCBAB4" />
        </linearGradient>
        <linearGradient id="concSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B0AEA8" />
          <stop offset="100%" stopColor="#969490" />
        </linearGradient>
        <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7EB84A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#A8CC78" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="glassRefl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.38" />
          <stop offset="35%" stopColor="white" stopOpacity="0.06" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="poolRefl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.28" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="blur4" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* ─── SKY ─── */}
      <motion.rect x="0" y="0" width="900" height="500" fill="url(#sky)" {...f(0, 0.5)} />
      <motion.ellipse cx="180" cy="75" rx="170" ry="45" fill="white" opacity="0.35" filter="url(#blur4)" {...f(0.1)} />
      <motion.ellipse cx="650" cy="55" rx="140" ry="38" fill="white" opacity="0.3" filter="url(#blur4)" {...f(0.15)} />
      <motion.ellipse cx="430" cy="95" rx="110" ry="30" fill="white" opacity="0.22" filter="url(#blur4)" {...f(0.2)} />
      {/* birds */}
      <motion.path d="M140,48 Q145,43 150,48" stroke={ink} strokeWidth="1" {...f(0.8)} />
      <motion.path d="M154,45 Q159,40 164,45" stroke={ink} strokeWidth="1" {...f(0.85)} />
      <motion.path d="M700,38 Q705,33 710,38" stroke={ink} strokeWidth="1" {...f(0.9)} />

      {/* ─── GROUND ─── */}
      <motion.polygon points="0,408 900,408 900,500 0,500" fill="url(#grass)" {...f(0.1)} />
      {/* paving path to door */}
      <motion.polygon points="340,408 560,408 540,500 320,500" fill="#D8D0C4" opacity="0.55" {...f(0.6)} />

      {/* ════ LEFT LOWER WING ════ */}
      {/* front face — glass dominant */}
      <motion.polygon points="95,285 305,272 305,408 95,408" fill="url(#glass)" {...f(0.3)} />
      {/* left side face — glass */}
      <motion.polygon points="80,272 95,285 95,408 78,395" fill="url(#glassSide)" {...f(0.3)} />
      {/* roof slab underside */}
      <motion.polygon points="78,258 318,244 305,272 95,285" fill="url(#concSide)" opacity="0.7" {...f(0.3)} />
      {/* roof top surface */}
      <motion.polygon points="78,252 318,238 318,244 78,258" fill="url(#conc)" {...f(0.3)} />
      {/* wood overhang band */}
      <motion.polygon points="78,252 318,238 318,244 78,258" fill="url(#wood)" opacity="0.75" {...f(0.35)} />
      {/* glass reflection on left wing */}
      <motion.polygon points="95,290 145,288 145,408 95,408" fill="url(#glassRefl)" {...f(0.5)} />
      {/* mullion lines */}
      <motion.line x1="175" y1="278" x2="175" y2="408" stroke={ink} strokeWidth={sw.thin} opacity="0.5" {...f(0.5)} />
      <motion.line x1="240" y1="274" x2="240" y2="408" stroke={ink} strokeWidth={sw.thin} opacity="0.5" {...f(0.5)} />

      {/* ════ CENTER MAIN BLOCK ════ */}
      {/* concrete back wall (visible above wood band) */}
      <motion.polygon points="305,92 560,100 560,148 305,140" fill="url(#conc)" {...f(0.25)} />
      {/* wood horizontal band (1st floor sill area) */}
      <motion.polygon points="305,140 560,148 560,175 305,165" fill="url(#wood)" {...f(0.3)} />
      {/* glass 1st floor */}
      <motion.polygon points="305,165 560,175 560,272 305,262" fill="url(#glass)" {...f(0.3)} />
      {/* wood band (2nd floor sill) */}
      <motion.polygon points="305,262 560,272 560,295 305,283" fill="url(#wood)" {...f(0.3)} />
      {/* glass 2nd floor / ground floor */}
      <motion.polygon points="305,283 560,295 560,408 305,408" fill="url(#glass)" {...f(0.3)} />
      {/* glass reflection center */}
      <motion.polygon points="305,92 358,93 358,408 305,408" fill="url(#glassRefl)" {...f(0.55)} />
      {/* center right side face — concrete */}
      <motion.polygon points="560,100 645,112 645,408 560,408" fill="url(#concSide)" {...f(0.3)} />
      {/* center right glass panels */}
      <motion.polygon points="560,148 645,160 645,260 560,250" fill="url(#glassSide)" opacity="0.7" {...f(0.35)} />
      <motion.polygon points="560,295 645,308 645,408 560,408" fill="url(#glassSide)" opacity="0.6" {...f(0.35)} />
      {/* center roof */}
      <motion.polygon points="292,78 572,88 658,100 378,90" fill="url(#conc)" {...f(0.25)} />
      {/* roof top band wood */}
      <motion.polygon points="292,72 572,82 572,88 292,78" fill="url(#wood)" {...f(0.28)} />
      {/* center roof right side */}
      <motion.polygon points="572,82 658,94 658,100 572,88" fill="url(#woodSide)" {...f(0.28)} />
      {/* mullions center */}
      <motion.line x1="390" y1="92" x2="390" y2="408" stroke={ink} strokeWidth={sw.thin} opacity="0.45" {...f(0.5)} />
      <motion.line x1="435" y1="94" x2="435" y2="408" stroke={ink} strokeWidth={sw.thin} opacity="0.45" {...f(0.5)} />
      <motion.line x1="478" y1="96" x2="478" y2="408" stroke={ink} strokeWidth={sw.thin} opacity="0.45" {...f(0.5)} />
      <motion.line x1="521" y1="98" x2="521" y2="408" stroke={ink} strokeWidth={sw.thin} opacity="0.45" {...f(0.5)} />

      {/* ════ RIGHT FLOATING UPPER BLOCK ════ */}
      {/* front face glass */}
      <motion.polygon points="560,100 810,116 810,262 560,250" fill="url(#glass)" {...f(0.35)} />
      {/* glass reflection */}
      <motion.polygon points="560,105 610,106 610,255 560,250" fill="url(#glassRefl)" {...f(0.55)} />
      {/* right side glass */}
      <motion.polygon points="810,116 875,128 875,272 810,262" fill="url(#glassSide)" {...f(0.35)} />
      {/* roof top of right block */}
      <motion.polygon points="548,87 822,103 888,115 626,99" fill="url(#conc)" {...f(0.28)} />
      {/* roof wood band */}
      <motion.polygon points="548,82 822,98 822,103 548,87" fill="url(#wood)" {...f(0.3)} />
      <motion.polygon points="822,98 888,110 888,115 822,103" fill="url(#woodSide)" {...f(0.3)} />
      {/* underside of floating block (visible soffit) */}
      <motion.polygon points="560,250 810,262 875,272 645,260" fill="#B8A898" opacity="0.6" {...f(0.4)} />
      {/* wood soffit strip */}
      <motion.polygon points="560,250 810,262 810,268 560,256" fill="url(#wood)" opacity="0.6" {...f(0.42)} />
      {/* mullions right block */}
      <motion.line x1="640" y1="102" x2="640" y2="260" stroke={ink} strokeWidth={sw.thin} opacity="0.42" {...f(0.55)} />
      <motion.line x1="700" y1="106" x2="700" y2="261" stroke={ink} strokeWidth={sw.thin} opacity="0.42" {...f(0.55)} />
      <motion.line x1="756" y1="110" x2="756" y2="261" stroke={ink} strokeWidth={sw.thin} opacity="0.42" {...f(0.55)} />
      {/* right block railing (terrace below?) */}
      <motion.line x1="560" y1="268" x2="810" y2="280" stroke={ink} strokeWidth={sw.thin} opacity="0.35" {...f(0.6)} />

      {/* ─── FRONT DOOR AREA ─── */}
      <motion.polygon points="380,340 480,344 480,408 380,408" fill="#E4DDD4" opacity="0.9" {...f(0.5)} />
      <motion.line x1="430" y1="340" x2="430" y2="408" stroke={ink} strokeWidth={sw.mid} opacity="0.6" {...f(0.6)} />
      <motion.polygon points="370,336 490,340 490,346 370,342" fill="url(#wood)" opacity="0.7" {...f(0.5)} />
      <circle cx="422" cy="378" r="4" fill="#C4834A" {...f(0.65)} />
      <circle cx="438" cy="378" r="4" fill="#C4834A" {...f(0.65)} />

      {/* ─── BALCONY RAILING (left wing) ─── */}
      <motion.line x1="78" y1="258" x2="318" y2="244" stroke={ink} strokeWidth={sw.mid} opacity="0.5" {...f(0.55)} />
      {[105, 135, 165, 195, 225, 255, 285].map((x, i) => (
        <motion.line key={x} x1={x} y1={258 - (x - 78) * 0.06} x2={x} y2={268 - (x - 78) * 0.06}
          stroke={ink} strokeWidth={sw.thin} opacity="0.4" {...f(0.6 + i * 0.02)} />
      ))}

      {/* ════ SWIMMING POOL ════ */}
      <motion.polygon points="100,428 550,420 530,495 80,504" fill="url(#pool)" {...f(0.55)} />
      {/* pool edge / rim */}
      <motion.polygon points="100,428 550,420 553,425 103,433" fill="#C8D8E4" opacity="0.7" {...f(0.6)} />
      {/* pool reflections */}
      <motion.polygon points="100,428 280,425 260,495 80,504" fill="url(#poolRefl)" {...f(0.7)} />
      {/* water ripple lines */}
      <motion.line x1="130" y1="445" x2="280" y2="442" stroke="white" strokeWidth="1" opacity="0.5" {...f(0.75)} />
      <motion.line x1="170" y1="458" x2="350" y2="454" stroke="white" strokeWidth="0.8" opacity="0.4" {...f(0.78)} />
      <motion.line x1="200" y1="472" x2="410" y2="467" stroke="white" strokeWidth="0.8" opacity="0.35" {...f(0.8)} />
      <motion.line x1="300" y1="440" x2="490" y2="435" stroke="white" strokeWidth="0.7" opacity="0.3" {...f(0.82)} />
      {/* pool ladder */}
      <motion.line x1="118" y1="425" x2="112" y2="500" stroke={ink} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" {...f(0.7)} />
      <motion.line x1="136" y1="424" x2="130" y2="499" stroke={ink} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" {...f(0.7)} />
      {[432, 444, 456, 468, 480].map((y, i) => (
        <motion.line key={y} x1={118 - (y - 425) * 0.09} y1={y} x2={136 - (y - 425) * 0.09} y2={y}
          stroke={ink} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" {...f(0.75 + i * 0.02)} />
      ))}

      {/* ─── GARDEN BEDS / GROUND PLANTING ─── */}
      <motion.ellipse cx="75" cy="408" rx="55" ry="12" fill="#7EB848" opacity="0.45" filter="url(#blur2)" {...f(0.7)} />
      <motion.ellipse cx="560" cy="412" rx="30" ry="8" fill="#6AA838" opacity="0.4" filter="url(#blur2)" {...f(0.75)} />

      {/* ════ TREES & VEGETATION ════ */}
      {/* LEFT PALM TREE */}
      <motion.line x1="55" y1="408" x2="65" y2="248" stroke="#7A5828" strokeWidth="5" strokeLinecap="round" {...f(0.65)} />
      <motion.path d="M65,248 Q40,228 28,205 M65,248 Q50,220 55,198 M65,248 Q80,228 98,218 M65,248 Q72,220 90,228 M65,248 Q35,238 18,248"
        stroke="#5A8E28" strokeWidth="4" strokeLinecap="round" fill="none" {...f(0.68)} />
      {/* palm leaves fill */}
      <motion.path d="M65,248 Q40,228 28,205" stroke="#7AB83E" strokeWidth="6" strokeLinecap="round" opacity="0.6" {...f(0.7)} />
      <motion.path d="M65,248 Q50,220 55,198" stroke="#7AB83E" strokeWidth="5" strokeLinecap="round" opacity="0.55" {...f(0.72)} />
      <motion.path d="M65,248 Q82,228 98,218" stroke="#6AAA38" strokeWidth="5" strokeLinecap="round" opacity="0.55" {...f(0.74)} />

      {/* LEFT SHRUBS */}
      <motion.ellipse cx="90" cy="398" rx="28" ry="18" fill="#6AA838" opacity="0.6" {...f(0.7)} />
      <motion.ellipse cx="118" cy="395" rx="20" ry="14" fill="#7ABE48" opacity="0.55" {...f(0.72)} />
      <motion.ellipse cx="60" cy="402" rx="22" ry="12" fill="#5A9828" opacity="0.5" {...f(0.73)} />

      {/* RIGHT PALM TREE */}
      <motion.line x1="860" y1="408" x2="850" y2="235" stroke="#7A5828" strokeWidth="5" strokeLinecap="round" {...f(0.65)} />
      <motion.path d="M850,235 Q828,215 818,194 M850,235 Q838,210 845,190 M850,235 Q868,215 882,206 M850,235 Q870,222 888,228 M850,235 Q826,228 810,238"
        stroke="#5A8E28" strokeWidth="4" strokeLinecap="round" fill="none" {...f(0.68)} />
      <motion.path d="M850,235 Q828,215 818,194" stroke="#7AB83E" strokeWidth="6" strokeLinecap="round" opacity="0.6" {...f(0.7)} />
      <motion.path d="M850,235 Q868,215 882,206" stroke="#6AAA38" strokeWidth="5" strokeLinecap="round" opacity="0.55" {...f(0.72)} />

      {/* RIGHT SHRUBS */}
      <motion.ellipse cx="875" cy="400" rx="26" ry="16" fill="#6AA838" opacity="0.6" {...f(0.7)} />
      <motion.ellipse cx="848" cy="402" rx="18" ry="12" fill="#7ABE48" opacity="0.5" {...f(0.72)} />

      {/* TROPICAL PLANTS near center-right */}
      <motion.ellipse cx="620" cy="400" rx="20" ry="13" fill="#5A9828" opacity="0.5" {...f(0.75)} />
      <motion.ellipse cx="645" cy="396" rx="16" ry="11" fill="#78B840" opacity="0.48" {...f(0.77)} />

      {/* ════ MAIN INK OUTLINES ════ */}
      {/* Left wing outline */}
      <motion.polygon points="95,285 305,272 305,408 95,408"
        stroke={ink} strokeWidth={sw.bold} fill="none" strokeLinejoin="round" {...f(0.35)} />
      <motion.polygon points="78,252 318,238 305,272 95,285 78,258"
        stroke={ink} strokeWidth={sw.mid} fill="none" strokeLinejoin="round" {...f(0.37)} />
      <motion.line x1="78" y1="252" x2="78" y2="408" stroke={ink} strokeWidth={sw.mid} {...f(0.37)} />

      {/* Center block outline */}
      <motion.polygon points="305,92 560,100 560,408 305,408"
        stroke={ink} strokeWidth={sw.bold} fill="none" strokeLinejoin="round" {...f(0.3)} />
      <motion.polygon points="560,100 645,112 645,408 560,408"
        stroke={ink} strokeWidth={sw.mid} fill="none" strokeLinejoin="round" {...f(0.32)} />
      <motion.polygon points="292,72 572,82 658,94 378,84"
        stroke={ink} strokeWidth={sw.mid} fill="none" strokeLinejoin="round" {...f(0.32)} />

      {/* Wood band lines center */}
      <motion.line x1="305" y1="140" x2="560" y2="148" stroke={ink} strokeWidth={sw.mid} {...f(0.4)} />
      <motion.line x1="305" y1="165" x2="560" y2="175" stroke={ink} strokeWidth={sw.thin} opacity="0.6" {...f(0.42)} />
      <motion.line x1="305" y1="262" x2="560" y2="272" stroke={ink} strokeWidth={sw.mid} {...f(0.44)} />
      <motion.line x1="305" y1="283" x2="560" y2="295" stroke={ink} strokeWidth={sw.thin} opacity="0.6" {...f(0.46)} />
      {/* Wood band lines on side */}
      <motion.line x1="560" y1="148" x2="645" y2="160" stroke={ink} strokeWidth={sw.mid} {...f(0.4)} />
      <motion.line x1="560" y1="262" x2="645" y2="274" stroke={ink} strokeWidth={sw.mid} {...f(0.44)} />

      {/* Right block outline */}
      <motion.polygon points="560,100 810,116 810,262 560,250"
        stroke={ink} strokeWidth={sw.bold} fill="none" strokeLinejoin="round" {...f(0.35)} />
      <motion.polygon points="810,116 875,128 875,272 810,262"
        stroke={ink} strokeWidth={sw.mid} fill="none" strokeLinejoin="round" {...f(0.37)} />
      <motion.polygon points="548,82 822,98 888,110 626,94"
        stroke={ink} strokeWidth={sw.mid} fill="none" strokeLinejoin="round" {...f(0.33)} />
      {/* Soffit / underside line */}
      <motion.line x1="560" y1="250" x2="810" y2="262" stroke={ink} strokeWidth={sw.bold} {...f(0.42)} />
      <motion.line x1="810" y1="262" x2="875" y2="272" stroke={ink} strokeWidth={sw.mid} {...f(0.44)} />

      {/* Ground line */}
      <motion.line x1="60" y1="408" x2="900" y2="408" stroke={ink} strokeWidth={sw.bold} {...f(0.2)} />

      {/* Pool outline */}
      <motion.polygon points="100,428 550,420 530,495 80,504"
        stroke={ink} strokeWidth={sw.mid} fill="none" strokeLinejoin="round" {...f(0.6)} />

      {/* ─── SKETCH HATCHING SHADOWS ─── */}
      {/* Shadow under left wing roof overhang */}
      {[0, 1, 2, 3, 4].map(i => (
        <motion.line key={i}
          x1={95 + i * 8} y1={288 + i * 0.5}
          x2={95 + i * 8} y2={293 + i * 0.5}
          stroke={ink} strokeWidth="0.5" opacity="0.2" {...f(0.7)} />
      ))}
      {/* Hatching on right side of center block */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <motion.line key={i}
          x1={560 + i * 14} y1={112 + i * 2}
          x2={560 + i * 14} y2={408}
          stroke={ink} strokeWidth="0.4" opacity="0.12" {...f(0.7)} />
      ))}

      {/* ─── ARCHITECTURAL LABEL ─── */}
      <motion.text x="450" y="28" textAnchor="middle" fill="#0284c7" fontSize="11"
        fontFamily="monospace" letterSpacing="4" opacity="0.65"
        initial={{ opacity: 0 }} animate={{ opacity: 0.65 }} transition={{ delay: 1.2, duration: 0.8 }}>
        القمة — فيلا سكنية فاخرة
      </motion.text>
      <motion.text x="878" y="492" textAnchor="end" fill="#0284c7" fontSize="7.5"
        fontFamily="monospace" opacity="0.5"
        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.4, duration: 0.8 }}>
        PERSPECTIVE VIEW · LUXURY RESIDENTIAL
      </motion.text>
    </svg>
  );
}
