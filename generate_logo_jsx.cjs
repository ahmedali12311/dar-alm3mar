const fs = require('fs');

const svgContent = fs.readFileSync('public/images/logo.svg', 'utf8');
const dMatch = svgContent.match(/d="([^"]+)"/);

if (dMatch) {
  const d = dMatch[1];
  const jsxCode = `import { motion } from "framer-motion";

export default function LogoSvg({ drawLine }) {
  return (
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="100%" 
      height="100%" 
      viewBox="0 0 960 960" 
      className="drop-shadow-lg"
    >
      <motion.path
        d="${d}"
        stroke="#915025"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, fill: "rgba(145, 80, 37, 0)" }}
        animate={{ pathLength: 1, fill: "rgba(145, 80, 37, 1)" }}
        transition={{ 
          pathLength: { duration: 3.5, ease: "easeInOut" },
          fill: { delay: 3.0, duration: 1.5, ease: "easeOut" }
        }}
      />
    </motion.svg>
  );
}
`;

  fs.writeFileSync('src/components/sections/gallery/LogoSvg.jsx', jsxCode);
  console.log("LogoSvg.jsx created successfully!");
} else {
  console.log("Failed to find path 'd' attribute.");
}
