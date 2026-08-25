"use client"

import Image from "next/image"
import { Lightbulb, MessageCircle } from "lucide-react"
import { useState } from "react"

import { LabSidebar } from "./lab-navigation"
import { LabMonitor } from "./lab-monitor"
import type { LabState } from "./lab-types"
import { LabWeb } from "./lab-web"
import { WaveCompanion } from "./wave-companion"

type DeveloperLabStageProps = {
  activeState: LabState
  onNavigate: (state: LabState) => void
}

export function DeveloperLabStage({ activeState, onNavigate }: DeveloperLabStageProps) {
  const [ambientLight, setAmbientLight] = useState(true)

  return (
    <div className="relative hidden h-[100svh] min-h-[720px] overflow-hidden bg-[#03050a] xl:flex">
      <Image
        src="/assets/developer-lab/developer-lab-room-wave-gear-v3.png"
        alt="Laboratorio tecnológico de Santiago con escritorio, monitor, laptop, libreta, teclado, audífonos y vista nocturna de la ciudad"
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-[filter,opacity] duration-700 ${
          ambientLight ? "opacity-100" : "opacity-70 brightness-[.62] saturate-[.75]"
        }`}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_46%_49%,transparent_16%,rgba(2,4,8,.08)_48%,rgba(2,4,8,.46)_100%),linear-gradient(180deg,rgba(2,4,8,.08),rgba(2,4,8,.2))]" />

      <div className="relative z-20">
        <LabSidebar activeState={activeState} onNavigate={onNavigate} />
      </div>

      <section aria-label="Escenario interactivo del Developer Lab" className="relative z-10 min-w-0 flex-1">
        <div className="absolute left-1/2 top-[3.2%] -translate-x-1/2 rounded-full border border-[#1e90ff]/55 bg-[#050811]/90 px-8 py-3 font-mono text-[10px] uppercase tracking-[.22em] text-white/75 shadow-[0_0_22px_rgba(30,144,255,.24),0_0_38px_rgba(255,42,42,.12)]">
          <span className="text-[#4aa5ff]">Focus</span>
          <span className="mx-3 text-white/25">·</span>
          Build
          <span className="mx-3 text-white/25">·</span>
          <span className="text-[#ff4545]">Impact</span>
        </div>

        <button
          type="button"
          onClick={() => setAmbientLight((current) => !current)}
          aria-pressed={ambientLight}
          className="absolute right-[2.2%] top-[3.2%] grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-[#070b12]/90 text-white/60 shadow-[0_10px_30px_rgba(0,0,0,.35)] transition-colors hover:border-[#1e90ff]/50 hover:text-white"
          aria-label={ambientLight ? "Atenuar iluminación del laboratorio" : "Encender iluminación del laboratorio"}
        >
          <Lightbulb className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
        </button>

        <header className="absolute left-[9.8%] top-[11.5%] max-w-[470px]">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[.16em] text-[#1e90ff]">
            Santiago&apos;s
          </p>
          <h1 className="mt-2 text-[clamp(3.2rem,4.4vw,5.2rem)] font-bold leading-[.86] tracking-[-.065em] text-white">
            DEVELOPER <span className="block text-[#ff2a2a]">LAB</span>
          </h1>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[.16em] text-white/48">
            &gt; build solutions that make an impact.
          </p>
        </header>

        <div className="absolute left-[15.5%] top-[36.5%] z-20 h-[38%] w-[47.5%]">
          <LabMonitor activeState={activeState} onNavigate={onNavigate} immersive />
        </div>

        <div className="absolute right-[1.8%] top-[9.5%] h-[57%] w-[35.5%]">
          <LabWeb activeState={activeState} onNavigate={onNavigate} immersive />
        </div>

        <div className="absolute left-[44.5%] top-[64.5%] z-30">
          <WaveCompanion activeState={activeState} immersive />
        </div>

        <button
          type="button"
          onClick={() => onNavigate("contact")}
          className="absolute bottom-[4.5%] right-[2.2%] flex items-center gap-3 rounded-2xl border border-[#ff2a2a]/35 bg-[#080b12]/92 px-4 py-3 text-left shadow-[0_16px_40px_rgba(0,0,0,.42)] transition-colors hover:border-[#ff2a2a]/75"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#ff2a2a]/35 text-[#ff4a4a]">
            <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs font-semibold text-white">¿Construimos algo juntos?</span>
            <span className="mt-1 block text-[10px] text-white/42">Hablemos de tu próximo proyecto.</span>
          </span>
        </button>
      </section>
    </div>
  )
}
