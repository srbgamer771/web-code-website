import { Flag, LockKeyhole, Route, ShieldCheck } from "lucide-react"

const TIMELINE_NODES = ["Origen", "Aprendizaje", "Productos", "Siguiente nodo"] as const

export function JourneyPanel() {
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-[#1e90ff]">
            <Route className="h-3.5 w-3.5" aria-hidden="true" />
            Journey protocol
          </div>
          <h3 className="mt-1.5 text-xl font-bold tracking-[-.04em]">La historia se contará con hechos.</h3>
          <p className="mt-1.5 max-w-xl text-[11px] leading-4 text-white/52">El recorrido está preparado para recibir hitos reales, sin publicar fechas ni logros inventados.</p>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#1e90ff]/28 bg-[#1e90ff]/6 text-[#5aafff]">
          <ShieldCheck className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
        </span>
      </div>

      <div className="lab-panel-stagger relative mt-6 grid grid-cols-4 gap-2">
        <div className="absolute left-[12%] right-[12%] top-4 h-px bg-[linear-gradient(90deg,rgba(30,144,255,.15),rgba(30,144,255,.7),rgba(255,42,42,.55))]" />
        {TIMELINE_NODES.map((label, index) => (
          <div key={label} className="relative text-center">
            <span className={`relative z-10 mx-auto grid h-8 w-8 place-items-center rounded-full border bg-[#080c13] ${index === TIMELINE_NODES.length - 1 ? "border-[#ff2a2a]/48 text-[#ff5a5a]" : "border-[#1e90ff]/38 text-[#58adff]"}`}>
              {index === TIMELINE_NODES.length - 1 ? <Flag className="h-3.5 w-3.5" aria-hidden="true" /> : <LockKeyhole className="h-3 w-3" aria-hidden="true" />}
            </span>
            <p className="mt-2 text-[10px] font-semibold text-white/72">{label}</p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-[.12em] text-white/32">Por validar</p>
          </div>
        ))}
      </div>

      <div className="lab-module-card mt-5 flex items-center justify-between gap-4 rounded-xl px-3.5 py-3">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/[0.09] text-white/50"><LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" /></span>
          <div>
            <p className="text-[10px] font-semibold text-white/74">Timeline protegida</p>
            <p className="mt-0.5 text-[9px] text-white/40">Pendiente de validar eventos reales con Santiago.</p>
          </div>
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[.12em] text-[#1e90ff]">Locked</span>
      </div>
    </div>
  )
}
