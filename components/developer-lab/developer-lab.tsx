"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CircleDot, Lightbulb, MessageCircle } from "lucide-react"

import { DeveloperLabStage } from "./developer-lab-stage"
import { LabCompactNavigation } from "./lab-navigation"
import { LabMonitor } from "./lab-monitor"
import type { LabState } from "./lab-types"
import { LabWeb } from "./lab-web"
import { WaveCompanion } from "./wave-companion"
import { LabAudioControl } from "./lab-audio-control"
import { useLabAudio } from "./use-lab-audio"

export function DeveloperLab() {
  const [activeState, setActiveState] = useState<LabState>("initial")
  const [mobileAmbientLight, setMobileAmbientLight] = useState(true)
  const labAudio = useLabAudio()
  const mobileMonitorRef = useRef<HTMLDivElement>(null)

  function handleNavigate(state: LabState) {
    setActiveState(state)

    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1279px)").matches) {
      window.requestAnimationFrame(() => {
        mobileMonitorRef.current?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start",
        })
      })
    }
  }

  return (
    <main
      id="contenido"
      tabIndex={-1}
      data-lab-state={activeState}
      className="min-h-screen overflow-hidden bg-[#06080d] text-white"
    >
      <DeveloperLabStage
        activeState={activeState}
        onNavigate={handleNavigate}
        audioPlaying={labAudio.playing}
        audioVolume={labAudio.volume}
        onToggleAudio={labAudio.toggle}
        onAudioVolumeChange={labAudio.setVolume}
      />

      <div className="relative flex min-h-screen xl:hidden">
        <Image
          src="/assets/developer-lab/developer-lab-room-wave-gear-v3.png"
          alt=""
          fill
          sizes="100vw"
          className={`lab-mobile-room-drift pointer-events-none fixed inset-0 -z-0 h-full object-cover object-[64%_center] transition-[filter,opacity] duration-700 ${
            mobileAmbientLight ? "opacity-40" : "opacity-25 brightness-[.62] saturate-[.72]"
          }`}
        />
        <div className="lab-mobile-ambient pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(180deg,rgba(3,5,10,.3),rgba(3,5,10,.82)_58%,#06080d_92%)]" />

        <div className="relative z-10 min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#080b11]/92 backdrop-blur-xl xl:hidden">
            <div className="flex h-[72px] items-center justify-between px-4 md:px-6">
              <Link href="/" aria-label="Volver al sitio principal de WebCode">
                <Image
                  src="/assets/brand/webcode-logo-oficial-transparente.png"
                  alt="WebCode"
                  width={220}
                  height={65}
                  className="h-auto w-36 md:w-40"
                  priority
                />
              </Link>
              <Link
                href="/#equipo"
                className="flex items-center gap-2 rounded-full border border-white/12 px-3 py-2 text-[11px] font-semibold text-white/58 transition-colors hover:border-white/30 hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Volver al equipo</span>
                <span className="sm:hidden">Equipo</span>
              </Link>
            </div>
            <LabCompactNavigation activeState={activeState} onNavigate={handleNavigate} />
          </header>

          <div className="mx-auto max-w-[1000px] px-4 py-5 md:px-6 md:py-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-[#1e90ff]">
                  <CircleDot className="h-3.5 w-3.5" aria-hidden="true" />
                  Santiago&apos;s
                </div>
                <h1 className="mt-3 max-w-[10ch] text-4xl font-bold leading-[.9] tracking-[-.06em] sm:text-5xl md:text-6xl">
                  DEVELOPER <span className="text-[#ff2a2a]">LAB</span>
                </h1>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[.14em] text-white/45 md:text-xs">
                  Developer / Product Builder
                </p>
              </div>
              <div className="lab-mobile-focus w-fit rounded-full border border-[#1e90ff]/35 bg-[#070b13]/88 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[.18em] text-white/65 shadow-[0_0_24px_rgba(30,144,255,.12)]">
                <span className="text-[#1e90ff]">Focus</span>
                <span className="mx-2 text-white/25">·</span>
                Build
                <span className="mx-2 text-white/25">·</span>
                <span className="text-[#ff3d3d]">Impact</span>
              </div>
            </div>

            <section className="lab-mobile-stage relative mt-6 h-[300px] overflow-hidden rounded-[28px] border border-white/10 bg-[#050811] shadow-[0_28px_80px_rgba(0,0,0,.5)] sm:h-[360px]">
              <Image
                src="/assets/developer-lab/developer-lab-room-wave-gear-v3.png"
                alt="Escritorio del Developer Lab con la edición especial de Wave"
                fill
                sizes="(max-width: 1279px) 100vw, 0px"
                className={`object-cover object-[67%_center] transition-[filter,opacity,transform] duration-700 ${
                  mobileAmbientLight ? "opacity-90" : "opacity-62 brightness-[.62] saturate-[.72]"
                }`}
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,13,.72),transparent_58%),linear-gradient(180deg,transparent_45%,rgba(3,5,10,.88))]" />
              <div className="absolute left-4 top-4 rounded-full border border-[#1e90ff]/35 bg-[#050811]/88 px-3 py-2 font-mono text-[8px] uppercase tracking-[.18em] text-white/65 backdrop-blur-md">
                <span className="text-[#4aa5ff]">Focus</span> · Build · <span className="text-[#ff4545]">Impact</span>
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-2">
                <LabAudioControl
                  compact
                  playing={labAudio.playing}
                  volume={labAudio.volume}
                  onToggle={labAudio.toggle}
                  onVolumeChange={labAudio.setVolume}
                />
                <button
                  type="button"
                  onClick={() => setMobileAmbientLight((current) => !current)}
                  aria-pressed={mobileAmbientLight}
                  aria-label={mobileAmbientLight ? "Atenuar iluminación del laboratorio" : "Encender iluminación del laboratorio"}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/14 bg-[#050811]/88 text-white/70 backdrop-blur-md"
                >
                  <Lightbulb className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                </button>
              </div>
              <div className="absolute -bottom-2 left-2 sm:left-[8%]">
                <WaveCompanion activeState={activeState} immersive />
              </div>
              <div className="absolute bottom-4 right-4 max-w-[145px] text-right">
                <p className="font-mono text-[8px] uppercase tracking-[.18em] text-[#1e90ff]">Wave / Online</p>
                <p className="mt-1 text-[10px] leading-4 text-white/48">El Lab responde a cada nodo.</p>
              </div>
            </section>

            <div className="relative mt-5 grid items-start gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,.65fr)]">
              <div ref={mobileMonitorRef} className="scroll-mt-32">
                <LabMonitor activeState={activeState} onNavigate={handleNavigate} />
              </div>
              <LabWeb activeState={activeState} onNavigate={handleNavigate} mobile />
            </div>

            <button
              type="button"
              onClick={() => handleNavigate("contact")}
              className="mt-5 flex w-full items-center gap-3 rounded-2xl border border-[#ff2a2a]/30 bg-[#080b12]/90 p-3 text-left shadow-[0_16px_40px_rgba(0,0,0,.32)]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#ff2a2a]/35 text-[#ff4a4a]">
                <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-white">¿Construimos algo juntos?</span>
                <span className="mt-1 block text-[10px] text-white/42">Abre el canal de contacto del Lab.</span>
              </span>
            </button>

            <footer className="mt-5 flex flex-col gap-2 border-t border-white/[0.08] pt-4 font-mono text-[9px] uppercase tracking-[.14em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
              <span>WebCode / Developer Lab / Fase 3</span>
              <span>Estados visuales · Sistema conectado</span>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}
