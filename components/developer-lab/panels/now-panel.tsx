import { Activity, Construction, FlaskConical, GraduationCap, SquareTerminal, Telescope } from "lucide-react"

import { PORTFOLIO_NOW } from "../portfolio-data"

const NOW_ICONS = { building: Construction, experimenting: FlaskConical, learning: GraduationCap, next: Telescope } as const

export function NowPanel() {
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-[#ff5757]">
            <SquareTerminal className="h-3.5 w-3.5" aria-hidden="true" />
            Live workspace
          </div>
          <h3 className="mt-1.5 text-xl font-bold tracking-[-.04em]">El presente del laboratorio.</h3>
          <p className="mt-1.5 text-[11px] leading-4 text-white/52">Una consola preparada para mostrar trabajo actual sin inventar avances.</p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-[#ff2a2a]/25 bg-[#ff2a2a]/5 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-[#ff6161]">
          <span className="lab-live-dot h-1.5 w-1.5 rounded-full bg-[#ff2a2a]" /> Standby
        </span>
      </div>

      <div className="lab-panel-stagger mt-4 grid gap-2 sm:grid-cols-2">
        {PORTFOLIO_NOW.map((item, index) => {
          const Icon = NOW_ICONS[item.id]
          return (
            <article key={item.id} className="lab-module-card group rounded-xl p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#ff2a2a]/25 bg-[#ff2a2a]/5 text-[#ff5757]">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="font-mono text-[8px] text-white/28">0{index + 1}</span>
              </div>
              <h4 className="mt-2.5 text-[11px] font-semibold text-white/82">{item.label}</h4>
              <div className="mt-2 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.12em] text-white/34">
                <Activity className="h-3 w-3 text-[#1e90ff]" aria-hidden="true" />
                Esperando señal
                <span className="lab-terminal-cursor inline-block h-3 w-1 bg-[#1e90ff]/70" />
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
