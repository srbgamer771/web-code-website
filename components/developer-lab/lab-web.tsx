import { SpiderWeb } from "@/components/spider-web"

import { LAB_DESTINATION_BY_ID } from "./lab-data"
import { LabNode } from "./lab-node"
import type { LabState } from "./lab-types"

type LabWebProps = {
  activeState: LabState
  onNavigate: (state: LabState) => void
  immersive?: boolean
  mobile?: boolean
}

const NODES = [
  { id: "projects" as const, position: "left-1/2 top-[13%]" },
  { id: "skills" as const, position: "left-[84%] top-[35%]" },
  { id: "contact" as const, position: "left-[78%] top-[78%]" },
  { id: "now" as const, position: "left-1/2 top-[88%]" },
  { id: "inspirations" as const, position: "left-[22%] top-[78%]" },
  { id: "journey" as const, position: "left-[16%] top-[35%]" },
]

const ROUTE_POINTS: Partial<Record<LabState, { x: number; y: number }>> = {
  projects: { x: 50, y: 13 },
  skills: { x: 84, y: 35 },
  contact: { x: 78, y: 78 },
  now: { x: 50, y: 88 },
  inspirations: { x: 22, y: 78 },
  journey: { x: 16, y: 35 },
}

export function LabWeb({ activeState, onNavigate, immersive = false, mobile = false }: LabWebProps) {
  const activeDestination = LAB_DESTINATION_BY_ID[activeState]
  const hasActiveModule = activeState !== "initial"
  const activePoint = ROUTE_POINTS[activeState]

  return (
    <section
      aria-labelledby="lab-map-title"
      data-lab-state={activeState}
      className={
        immersive
          ? "relative h-full overflow-visible bg-transparent"
          : mobile
            ? "relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#090d14]/94 p-4 shadow-[0_28px_70px_rgba(0,0,0,.3)] sm:min-h-[480px] sm:p-5"
            : "relative hidden min-h-[500px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#090d14] p-5 lg:block"
      }
    >
      <div className={immersive ? "sr-only" : "flex items-center justify-between"}>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#1e90ff]">Navegación experimental</p>
          <h2 id="lab-map-title" className="mt-1 text-sm font-semibold text-white/82">
            Espacios conectados
          </h2>
        </div>
        <span className={`rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[.14em] ${
          hasActiveModule
            ? "border-[#ff2a2a]/45 bg-[#ff2a2a]/5 text-[#ff6868]"
            : "border-[#1e90ff]/35 bg-[#1e90ff]/5 text-[#65b2ff]"
        }`}>
          {hasActiveModule ? "Módulo activo" : "Sistema listo"}
        </span>
      </div>

      <div className={immersive ? "absolute inset-0" : mobile ? "absolute inset-x-2 bottom-4 top-16 sm:inset-x-5" : "absolute inset-x-6 bottom-5 top-16"}>
        <SpiderWeb className={`lab-web-base absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1e90ff]/25 ${immersive ? "h-[84%] w-[84%]" : "h-[88%] w-[88%]"}`} />
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible ${immersive ? "h-[84%] w-[84%]" : "h-[88%] w-[88%]"}`}
        >
          {Object.entries(ROUTE_POINTS).map(([id, point]) => point ? (
            <line
              key={id}
              x1="50"
              y1="50"
              x2={point.x}
              y2={point.y}
              vectorEffect="non-scaling-stroke"
              className="lab-web-route-base"
            />
          ) : null)}
          {activePoint ? (
            <g key={activeState}>
              <line
                x1="50"
                y1="50"
                x2={activePoint.x}
                y2={activePoint.y}
                pathLength="100"
                vectorEffect="non-scaling-stroke"
                className="lab-web-route-active"
              />
              <line
                x1="50"
                y1="50"
                x2={activePoint.x}
                y2={activePoint.y}
                pathLength="100"
                vectorEffect="non-scaling-stroke"
                className="lab-web-route-signal"
              />
            </g>
          ) : null}
        </svg>
        {hasActiveModule ? (
          <SpiderWeb className={`lab-web-signal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ff2a2a]/16 ${immersive ? "h-[69%] w-[69%]" : "h-[72%] w-[72%]"}`} />
        ) : null}
        {NODES.map(({ id, position }) => (
          <LabNode
            key={id}
            destination={LAB_DESTINATION_BY_ID[id]}
            activeState={activeState}
            onNavigate={onNavigate}
            position={position}
            stage={immersive}
            mobile={mobile}
          />
        ))}
        <LabNode
          destination={LAB_DESTINATION_BY_ID.initial}
          activeState={activeState}
          onNavigate={onNavigate}
          position="left-1/2 top-1/2"
          compact
          stage={immersive}
          mobile={mobile}
        />

        <div
          aria-live="polite"
          className={`absolute left-1/2 z-20 -translate-x-1/2 rounded-xl border bg-[#080c13]/95 text-center ${immersive ? "bottom-[2%] w-[64%] px-3 py-2" : mobile ? "bottom-0 w-[76%] px-3 py-2" : "bottom-1 w-[82%] px-3 py-2.5"} ${
            hasActiveModule ? "border-[#ff2a2a]/28" : "border-[#1e90ff]/22"
          }`}
        >
          <p className={`font-mono text-[8px] uppercase tracking-[.18em] ${hasActiveModule ? "text-[#ff5a5a]" : "text-[#58adff]"}`}>
            Nodo {activeDestination.code} / {hasActiveModule ? "Active" : "Online"}
          </p>
          <p className="mt-1 text-[10px] text-white/50">{activeDestination.signal}</p>
        </div>
      </div>
    </section>
  )
}
