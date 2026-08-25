import { Cpu, Gamepad2, Layers3, Lightbulb, LockKeyhole, Palette, Sparkles, Wrench } from "lucide-react"

import { PORTFOLIO_INSPIRATION_CATEGORIES } from "../portfolio-data"

const INSPIRATION_ICONS = [Cpu, Palette, Gamepad2, Layers3, Sparkles, Wrench] as const

export function InspirationsPanel() {
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-[#1e90ff]">
            <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" /> Inspiration vault
          </div>
          <h3 className="mt-1.5 text-xl font-bold tracking-[-.04em]">Fuentes que alimentan el trabajo.</h3>
          <p className="mt-1.5 text-[11px] leading-4 text-white/52">La colección visual está lista; sus referencias se publicarán cuando estén confirmadas.</p>
        </div>
        <span className="rounded-full border border-[#1e90ff]/24 bg-[#1e90ff]/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-[#5aafff]">Private</span>
      </div>

      <div className="lab-panel-stagger mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {PORTFOLIO_INSPIRATION_CATEGORIES.map((category, index) => {
          const Icon = INSPIRATION_ICONS[index] ?? Sparkles
          return (
            <article key={category} className="lab-module-card group rounded-xl p-3">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#1e90ff]/24 bg-[#1e90ff]/5 text-[#5aafff] transition-colors group-hover:border-[#1e90ff]/48 group-hover:bg-[#1e90ff]/10">
                  <Icon className="h-4 w-4" strokeWidth={1.55} aria-hidden="true" />
                </span>
                <LockKeyhole className="h-3 w-3 text-[#ff5151]/60" aria-hidden="true" />
              </div>
              <h4 className="mt-3 text-[11px] font-semibold text-white/76">{category}</h4>
              <p className="mt-1 font-mono text-[8px] uppercase tracking-[.12em] text-white/30">Por revelar</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
