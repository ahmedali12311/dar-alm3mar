import { memo } from "react";

const palette = {
  plaster: "linear-gradient(162deg, #ffffff 0%, #f3f6f9 48%, #dfe6ed 100%)",
  plasterSoft: "linear-gradient(162deg, #fbfdff 0%, #e8edf3 100%)",
  plasterSide: "linear-gradient(162deg, #e3eaf1 0%, #c4ced9 100%)",
  plasterDeep: "linear-gradient(162deg, #cfd8e1 0%, #aeb9c6 100%)",
  roof: "linear-gradient(180deg, #edf2f6 0%, #d3dae2 100%)",
  roofMembrane: "linear-gradient(180deg, #e6edf3 0%, #c3ccd7 100%)",
  roofStone: "linear-gradient(180deg, #d5dce4 0%, #b2bcc8 100%)",
  slab: "linear-gradient(180deg, #f8fbfd 0%, #dbe3ea 100%)",
  charcoal: "linear-gradient(180deg, #303841 0%, #171c21 100%)",
  charcoalSoft: "linear-gradient(180deg, #48535d 0%, #242b31 100%)",
  glazing: "linear-gradient(180deg, rgba(223,232,239,0.74) 0%, rgba(118,128,135,0.5) 44%, rgba(28,34,39,0.82) 100%)",
  glazingSoft: "linear-gradient(180deg, rgba(231,239,244,0.66) 0%, rgba(132,141,148,0.42) 46%, rgba(36,42,47,0.74) 100%)",
  concrete: "linear-gradient(180deg, #edf2f5 0%, #c7d0d8 100%)",
  asphalt: "linear-gradient(180deg, #434951 0%, #262b31 100%)",
  metal: "linear-gradient(180deg, #9ea7b1 0%, #59616a 100%)",
  wood: "linear-gradient(180deg, #545d66 0%, #252c33 100%)",
  bark: "linear-gradient(180deg, #5d4b3c 0%, #34271e 100%)",
  barkDark: "linear-gradient(180deg, #47382d 0%, #231912 100%)",
  glow: "radial-gradient(circle at 50% 100%, rgba(255,187,118,0.45) 0%, rgba(255,187,118,0.16) 38%, rgba(255,187,118,0) 74%)",
  leafLight: "radial-gradient(circle at 30% 26%, #c8d38a 0%, #718944 44%, #445228 100%)",
  leaf: "radial-gradient(circle at 32% 28%, #acba70 0%, #667d3d 46%, #3f4c25 100%)",
  leafDark: "radial-gradient(circle at 32% 28%, #93a55b 0%, #576b33 48%, #313c1d 100%)",
  soil: "linear-gradient(180deg, #504842 0%, #26231f 100%)",
};

const ModernHouseModel = memo(function ModernHouseModel() {
  return (
    <div className="absolute inset-0 [transform-style:preserve-3d]">
      <ScenePlane
        className="rounded-full opacity-58 blur-[44px]"
        height={178}
        rotateX={90}
        width={430}
        x={18}
        y={216}
        z={20}
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 46%, rgba(0,0,0,0) 76%)",
        }}
      />

      <SceneBox
        depth={404}
        front={palette.slab}
        height={18}
        right={palette.plasterSide}
        top={palette.slab}
        width={660}
        x={8}
        y={202}
        z={6}
      />

      <GroundSurface height={134} width={220} x={-198} y={192} z={118} />
      <GroundSurface height={128} width={274} x={168} y={192} z={118} dark />
      <GroundSurface height={70} width={182} x={8} y={192} z={166} light />
      <GroundSurface height={42} width={102} x={188} y={192} z={-120} dark />

      <SceneBox
        depth={236}
        front={palette.plaster}
        height={256}
        right={palette.plasterSide}
        top={palette.roof}
        width={238}
        x={-122}
        y={192}
        z={-10}
      />
      <SceneBox
        depth={198}
        front={palette.plaster}
        height={148}
        right={palette.plasterSide}
        top={palette.roof}
        width={328}
        x={52}
        y={192}
        z={18}
      />
      <SceneBox
        depth={202}
        front={palette.plaster}
        height={148}
        right={palette.plasterSide}
        top={palette.roof}
        width={334}
        x={70}
        y={44}
        z={10}
      />
      <SceneBox
        depth={118}
        front={palette.plasterSoft}
        height={214}
        right={palette.plasterDeep}
        top={palette.roof}
        width={108}
        x={248}
        y={192}
        z={-42}
      />
      <SceneBox
        depth={126}
        front={palette.plaster}
        height={56}
        right={palette.plasterSide}
        top={palette.roof}
        width={314}
        x={194}
        y={92}
        z={132}
      />
      <SceneBox
        depth={30}
        front={palette.plaster}
        height={40}
        right={palette.plasterSide}
        top={palette.roof}
        width={308}
        x={140}
        y={56}
        z={186}
      />
      <SceneBox
        depth={80}
        front={palette.charcoal}
        height={166}
        right={palette.charcoalSoft}
        top={palette.charcoal}
        width={110}
        x={28}
        y={192}
        z={90}
      />
      <SceneBox
        depth={64}
        front={palette.charcoal}
        height={130}
        right={palette.charcoalSoft}
        top={palette.charcoal}
        width={54}
        x={132}
        y={192}
        z={148}
      />
      <SceneBox
        depth={58}
        front={palette.charcoalSoft}
        height={38}
        right={palette.charcoal}
        top={palette.charcoalSoft}
        width={70}
        x={-138}
        y={-64}
        z={-82}
      />
      <SceneBox
        depth={126}
        front={palette.plaster}
        height={18}
        right={palette.plasterSide}
        top={palette.roof}
        width={250}
        x={162}
        y={86}
        z={124}
      />
      <SceneBox
        depth={150}
        front={palette.plasterSoft}
        height={154}
        right={palette.plasterSide}
        top={palette.roof}
        width={164}
        x={252}
        y={192}
        z={60}
      />

      <RoofSurface width={206} depth={114} x={92} y={-100} z={-4} />
      <RoofSurface light width={176} depth={84} x={188} y={34} z={132} />
      <RoofSkylight width={112} depth={42} x={152} y={-110} z={-4} />

      <AmbientShadow height={58} width={300} x={162} y={116} z={172} />
      <AmbientShadow height={66} width={126} x={250} y={126} z={102} rotateY={90} />
      <AmbientShadow height={148} width={84} x={20} y={112} z={138} />
      <ScenePlane
        className="rounded-[14px] opacity-38 blur-lg"
        height={84}
        rotateX={90}
        width={178}
        x={208}
        y={180}
        z={132}
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 44%, rgba(0,0,0,0) 78%)",
        }}
      />

      <FacadeShade height={148} width={328} x={52} y={118} z={118} />
      <FacadeShade height={148} width={334} x={70} y={-30} z={111} />
      <FacadeShade height={256} rotateY={-90} width={236} x={-241} y={64} z={-10} />
      <FacadeShade height={148} rotateY={90} width={198} x={216} y={118} z={18} />
      <FacadeShade height={148} rotateY={180} width={334} x={70} y={-30} z={-91} />
      <FacadeShade height={214} rotateY={180} width={108} x={248} y={85} z={-101} />

      <ScenePlane
        className="rounded-[14px] opacity-58 blur-xl"
        height={124}
        width={116}
        x={24}
        y={114}
        z={126}
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.04) 54%, rgba(0,0,0,0) 100%)",
        }}
      />
      <ScenePlane
        className="rounded-[12px] opacity-44 blur-md"
        height={42}
        width={302}
        x={146}
        y={36}
        z={154}
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      <GlassPanel columns={6} height={112} width={278} x={74} y={-30} z={110} />
      <GlassPanel columns={4} height={112} rotateY={90} width={170} x={208} y={-30} z={24} />
      <GlassPanel columns={3} height={36} width={134} x={-182} y={118} z={74} />
      <GlassPanel columns={2} glow height={118} width={64} x={78} y={106} z={132} />
      <GlassPanel columns={2} glow height={118} rotateY={90} width={72} x={78} y={106} z={96} />
      <GlassPanel columns={2} glow height={86} rotateY={90} width={70} x={280} y={76} z={84} tint="soft" />
      <GlassPanel columns={2} glow height={82} rotateY={180} width={74} x={180} y={78} z={-116} tint="soft" />

      <ScenePlane
        className="rounded-[12px]"
        height={108}
        width={40}
        x={52}
        y={132}
        z={132}
        style={{
          background: palette.plaster,
          boxShadow:
            "0 14px 24px rgba(15, 23, 42, 0.1), inset 0 0 0 1px rgba(255,255,255,0.16)",
        }}
      />
      <ScenePlane
        className="rounded-full"
        height={20}
        width={4}
        x={60}
        y={138}
        z={133}
        style={{ background: palette.charcoalSoft }}
      />
      <ScenePlane
        className="rounded-[12px]"
        height={84}
        width={44}
        x={198}
        y={124}
        z={-116}
        style={{
          background: palette.glow,
          opacity: 0.86,
          filter: "blur(10px)",
        }}
      />

      <LouverPanel height={136} width={52} x={-2} y={120} z={132} />
      <LouverPanel height={128} rotateY={90} width={34} x={156} y={124} z={146} />
      <LouverPanel height={82} rotateY={180} width={40} x={6} y={84} z={-90} />

      <Step depth={48} width={90} x={46} y={192} z={170} />
      <Step depth={38} width={72} x={48} y={180} z={188} />
      <Step depth={28} width={50} x={48} y={170} z={204} />

      <PergolaRoof height={38} width={108} x={132} y={-110} z={-8} />
      <RailingSection height={42} posts={5} width={148} x={226} y={10} z={182} />
      <RailingSection height={42} posts={4} rotateY={90} width={96} x={296} y={10} z={134} />

      <Planter foliage={palette.leaf} height={66} size={76} x={-286} z={128} tree />
      <Planter foliage={palette.leafDark} height={18} size={28} x={-198} z={166} />
      <Planter foliage={palette.leafDark} height={20} size={32} x={-146} z={152} />
      <Planter foliage={palette.leafDark} height={16} size={24} x={-92} z={146} />
      <Planter foliage={palette.leafDark} height={14} size={22} x={120} z={196} square />
      <Planter foliage={palette.leafDark} height={16} size={22} x={298} z={98} />
    </div>
  );
});

export default ModernHouseModel;

function SceneBox({
  x,
  y,
  z,
  width,
  height,
  depth,
  front,
  right,
  top,
  left = right,
  back = front,
  bottom = top,
}) {
  return (
    <>
      <ScenePlane
        height={height}
        width={width}
        x={x}
        y={y - height / 2}
        z={z + depth / 2}
        style={faceStyle(front)}
      />
      <ScenePlane
        height={height}
        rotateY={180}
        width={width}
        x={x}
        y={y - height / 2}
        z={z - depth / 2}
        style={faceStyle(back)}
      />
      <ScenePlane
        height={height}
        rotateY={90}
        width={depth}
        x={x + width / 2}
        y={y - height / 2}
        z={z}
        style={faceStyle(right)}
      />
      <ScenePlane
        height={height}
        rotateY={-90}
        width={depth}
        x={x - width / 2}
        y={y - height / 2}
        z={z}
        style={faceStyle(left)}
      />
      <ScenePlane
        height={depth}
        rotateX={90}
        width={width}
        x={x}
        y={y - height}
        z={z}
        style={faceStyle(top)}
      />
      <ScenePlane
        height={depth}
        rotateX={-90}
        width={width}
        x={x}
        y={y}
        z={z}
        style={faceStyle(bottom)}
      />
    </>
  );
}

function ScenePlane({
  x,
  y,
  z,
  width,
  height,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  className = "",
  style = {},
  children,
}) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 overflow-hidden [transform-style:preserve-3d] ${className}`}
      style={{
        width,
        height,
        transform: `translate3d(${x - width / 2}px, ${y - height / 2}px, ${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        backfaceVisibility: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function GlassPanel({
  x,
  y,
  z,
  width,
  height,
  rotateY = 0,
  columns = 3,
  tint = "default",
  glow = false,
}) {
  const fill = tint === "soft" ? palette.glazingSoft : palette.glazing;

  return (
    <ScenePlane
      className="rounded-[8px] border border-black/16 shadow-[0_14px_24px_rgba(15,23,42,0.08)]"
      height={height}
      rotateY={rotateY}
      width={width}
      x={x}
      y={y}
      z={z}
      style={{ background: fill }}
    >
      {glow ? (
        <div className="absolute inset-0" style={{ background: palette.glow }} />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.12)_18%,transparent_38%,transparent_62%,rgba(255,255,255,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.03)_22%,transparent_58%,rgba(0,0,0,0.24)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[26%] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[2px] bg-black/20" />
      <div className="absolute inset-y-0 right-0 w-[2px] bg-black/12" />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-white/24" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-black/14" />
      <div className="absolute inset-x-0 top-[58%] h-px bg-white/8" />
      {Array.from({ length: Math.max(columns - 1, 0) }, (_, index) => (
        <span
          key={`${width}-${height}-${index}`}
          className="absolute inset-y-0 w-[2px] bg-black/18"
          style={{ left: `${((index + 1) / columns) * 100}%` }}
        />
      ))}
    </ScenePlane>
  );
}

function GroundSurface({ x, y, z, width, height, dark = false, light = false }) {
  const background = dark
    ? palette.asphalt
    : light
      ? palette.concrete
      : palette.soil;

  const lineColor = dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.08)";

  return (
    <ScenePlane
      className="rounded-[14px]"
      height={height}
      rotateX={90}
      width={width}
      x={x}
      y={y}
      z={z}
      style={{ background, boxShadow: "0 10px 18px rgba(0,0,0,0.05)" }}
    >
      <div
        className="absolute inset-0 opacity-65"
        style={{
          backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
          backgroundSize: dark ? "34px 34px" : "30px 30px",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.12)_0%,transparent_30%,transparent_72%,rgba(255,255,255,0.03)_100%)]" />
      <div className="absolute inset-0 opacity-22 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_8px)]" />
    </ScenePlane>
  );
}

function FacadeShade({ x, y, z, width, height, rotateY = 0 }) {
  return (
    <ScenePlane
      className="rounded-[12px] opacity-50"
      height={height}
      rotateY={rotateY}
      width={width}
      x={x}
      y={y}
      z={z}
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.05) 100%)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-[10%] bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-[12%] bg-black/8" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,41,51,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(16,41,51,0.026) 1px, transparent 1px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 14px)",
          backgroundSize: "100% 34px, 76px 100%, 14px 100%",
        }}
      />
    </ScenePlane>
  );
}

function LouverPanel({ x, y, z, width, height, rotateY = 0 }) {
  return (
    <ScenePlane
      className="rounded-[4px] border border-white/6"
      height={height}
      rotateY={rotateY}
      width={width}
      x={x}
      y={y}
      z={z}
      style={{ background: palette.charcoal }}
    >
      {Array.from({ length: 10 }, (_, index) => (
        <span
          key={`${width}-${height}-louver-${index}`}
          className="absolute left-[12%] right-[12%] h-px bg-white/10"
          style={{ top: `${10 + index * 8}%` }}
        />
      ))}
      <div className="absolute inset-y-0 left-0 w-[20%] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.01))]" />
    </ScenePlane>
  );
}

function Step({ x, y, z, width, depth }) {
  return (
    <SceneBox
      depth={depth}
      front={palette.concrete}
      height={10}
      right={palette.plasterSide}
      top={palette.roof}
      width={width}
      x={x}
      y={y}
      z={z}
    />
  );
}

function RoofSurface({ x, y, z, width, depth, light = false }) {
  return (
    <ScenePlane
      className="rounded-[10px]"
      height={depth}
      rotateX={90}
      width={width}
      x={x}
      y={y}
      z={z}
      style={{
        background: light ? palette.roofStone : palette.roofMembrane,
        boxShadow: "0 10px 18px rgba(0,0,0,0.08)",
      }}
    >
      <div
        className="absolute inset-0 opacity-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(86,84,80,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(86,84,80,0.06) 1px, transparent 1px)",
          backgroundSize: "100% 26px, 40px 100%",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.14)_0%,transparent_34%,transparent_72%,rgba(0,0,0,0.08)_100%)]" />
    </ScenePlane>
  );
}

function RoofSkylight({ x, y, z, width, depth }) {
  return (
    <>
      <ScenePlane
        className="rounded-[8px] border border-black/20"
        height={depth}
        rotateX={90}
        width={width}
        x={x}
        y={y}
        z={z}
        style={{
          background:
            "linear-gradient(135deg, rgba(174,176,178,0.94) 0%, rgba(112,116,120,0.88) 100%)",
          boxShadow: "0 12px 22px rgba(15,23,42,0.14)",
        }}
      >
        {Array.from({ length: 7 }, (_, index) => (
          <span
            key={`roof-slats-${index}`}
            className="absolute inset-y-[14%] w-[8%] rounded-full bg-[linear-gradient(180deg,rgba(52,56,60,0.96),rgba(24,28,32,0.8))]"
            style={{ left: `${8 + index * 12}%` }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,transparent_30%,rgba(0,0,0,0.16)_100%)]" />
      </ScenePlane>
      <ScenePlane
        className="rounded-[8px] opacity-55 blur-lg"
        height={depth + 12}
        rotateX={90}
        width={width + 18}
        x={x + 4}
        y={y + 2}
        z={z - 6}
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.06) 42%, rgba(0,0,0,0) 80%)",
        }}
      />
    </>
  );
}

function PergolaRoof({ x, y, z, width, height }) {
  return (
    <>
      <ScenePlane
        className="rounded-[6px] border border-white/24"
        height={height}
        rotateX={90}
        width={width}
        x={x}
        y={y}
        z={z}
        style={{
          background: "linear-gradient(135deg, rgba(104,110,116,0.96) 0%, rgba(50,56,61,0.88) 100%)",
          boxShadow: "0 10px 24px rgba(15, 23, 42, 0.18)",
        }}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={`pergola-slat-${index}`}
            className="absolute inset-y-[12%] rounded-full bg-[linear-gradient(180deg,rgba(46,52,56,0.96),rgba(22,26,30,0.88))]"
            style={{
              left: `${10 + index * 16}%`,
              width: "8%",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,transparent_26%,rgba(0,0,0,0.16)_100%)]" />
      </ScenePlane>
      <ScenePlane
        className="rounded-[3px]"
        height={height}
        rotateY={90}
        width={4}
        x={x - width / 2 + 16}
        y={y + 20}
        z={z}
        style={{ background: palette.wood }}
      />
      <ScenePlane
        className="rounded-[3px]"
        height={height}
        rotateY={90}
        width={4}
        x={x + width / 2 - 16}
        y={y + 20}
        z={z}
        style={{ background: palette.wood }}
      />
      <ScenePlane
        className="rounded-[12px] opacity-55 blur-md"
        height={26}
        rotateX={90}
        width={width - 18}
        x={x + 4}
        y={y + 18}
        z={z + 2}
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 42%, rgba(0,0,0,0) 78%)",
        }}
      />
    </>
  );
}

function GridLines({ columns, rows }) {
  return (
    <>
      {Array.from({ length: Math.max(columns - 1, 0) }, (_, index) => (
        <span
          key={`col-${index}`}
          className="absolute inset-y-0 w-px bg-white/20"
          style={{ left: `${((index + 1) / columns) * 100}%` }}
        />
      ))}
      {Array.from({ length: Math.max(rows - 1, 0) }, (_, index) => (
        <span
          key={`row-${index}`}
          className="absolute inset-x-0 h-px bg-white/16"
          style={{ top: `${((index + 1) / rows) * 100}%` }}
        />
      ))}
    </>
  );
}

function RailingSection({ x, y, z, width, height, rotateY = 0, posts = 4 }) {
  return (
    <ScenePlane
      className="rounded-[10px] border border-white/36"
      height={height}
      rotateY={rotateY}
      width={width}
      x={x}
      y={y}
      z={z}
      style={{
        background:
          "linear-gradient(180deg, rgba(228,240,245,0.44) 0%, rgba(168,184,193,0.12) 100%)",
        boxShadow: "0 12px 18px rgba(15, 23, 42, 0.04)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-white/60" />
      {Array.from({ length: posts }, (_, index) => (
        <span
          key={`post-${width}-${height}-${index}`}
          className="absolute bottom-0 w-[2px] rounded-full bg-[linear-gradient(180deg,#e8e3da_0%,#aea293_100%)]"
          style={{
            height: "78%",
            left: `${(index / Math.max(posts - 1, 1)) * 100}%`,
          }}
        />
      ))}
    </ScenePlane>
  );
}

function Planter({ x, z, size, height, foliage, tree = false, square = false }) {
  const baseWidth = square ? size * 0.9 : size * 0.52;
  const baseDepth = square ? size * 0.9 : size * 0.36;
  const canopyY = 192 - height - size / 2 + (tree ? -4 : 11);
  const soilY = 192 - size * 0.18 - 3;

  return (
    <>
      <SceneBox
        depth={baseDepth}
        front={palette.charcoalSoft}
        height={size * 0.18}
        right={palette.charcoal}
        top={palette.charcoalSoft}
        width={baseWidth}
        x={x}
        y={192}
        z={z}
      />
      <SceneBox
        depth={6}
        front={palette.wood}
        height={height}
        right={palette.wood}
        top={palette.wood}
        width={tree ? 7 : 5}
        x={x}
        y={192 - size * 0.18}
        z={z}
      />
      <ScenePlane
        className="rounded-[8px]"
        height={Math.max(baseDepth - 8, 10)}
        rotateX={90}
        width={Math.max(baseWidth - 8, 10)}
        x={x}
        y={soilY}
        z={z}
        style={{
          background: palette.soil,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      />
      <ScenePlane
        className="rounded-full opacity-55 blur-md"
        height={size * 0.34}
        rotateX={90}
        width={size * 0.54}
        x={x}
        y={190}
        z={z + 4}
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 48%, rgba(0,0,0,0) 82%)",
        }}
      />
      {tree ? (
        <SceneBox
          depth={7}
          front={palette.barkDark}
          height={height}
          right={palette.bark}
          top={palette.bark}
          width={7}
          x={x}
          y={192 - size * 0.18}
          z={z}
        />
      ) : (
        <SceneBox
          depth={5}
          front={palette.barkDark}
          height={height}
          right={palette.bark}
          top={palette.bark}
          width={5}
          x={x}
          y={192 - size * 0.18}
          z={z}
        />
      )}
      <ScenePlane
        className={`rounded-full ${tree ? "blur-[1px]" : ""}`}
        height={tree ? size * 0.94 : size * 0.78}
        rotateY={12}
        width={tree ? size * 0.94 : size * 0.78}
        x={x}
        y={canopyY}
        z={z}
        style={{ background: foliage, boxShadow: "0 16px 28px rgba(42, 62, 24, 0.18)" }}
      />
      <ScenePlane
        className="rounded-full opacity-88"
        height={tree ? size * 0.74 : size * 0.56}
        rotateY={-16}
        width={tree ? size * 0.74 : size * 0.56}
        x={x - size * 0.22}
        y={canopyY + (tree ? 0 : 3)}
        z={z + size * 0.1}
        style={{ background: tree ? palette.leafLight : palette.leaf }}
      />
      <ScenePlane
        className="rounded-full opacity-82"
        height={tree ? size * 0.66 : size * 0.5}
        rotateY={20}
        width={tree ? size * 0.66 : size * 0.5}
        x={x + size * 0.22}
        y={canopyY - (tree ? 8 : 1)}
        z={z - size * 0.06}
        style={{ background: palette.leafDark }}
      />
      {tree ? (
        <ScenePlane
          className="rounded-full opacity-83"
          height={size * 0.54}
          rotateY={28}
          width={size * 0.54}
          x={x}
          y={canopyY - size * 0.18}
          z={z - size * 0.18}
          style={{ background: palette.leafLight }}
        />
      ) : null}
    </>
  );
}

function faceStyle(background) {
  return {
    backgroundImage: `linear-gradient(140deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 24%, rgba(0,0,0,0.07) 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.028) 0px, rgba(255,255,255,0.028) 2px, transparent 2px, transparent 14px), ${background}`,
    backgroundBlendMode: "soft-light, normal, normal",
    boxShadow:
      "inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 -24px 28px rgba(0,0,0,0.04)",
  };
}

function AmbientShadow({ x, y, z, width, height, rotateY = 0 }) {
  return (
    <ScenePlane
      className="rounded-[16px] opacity-42 blur-xl"
      height={height}
      rotateY={rotateY}
      width={width}
      x={x}
      y={y}
      z={z}
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 42%, rgba(0,0,0,0) 100%)",
      }}
    />
  );
}
