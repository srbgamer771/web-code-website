"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight, FolderKanban, Network, ShieldCheck } from "lucide-react"

import { LAB_DESTINATION_BY_ID } from "./lab-data"
import type { LabState } from "./lab-types"
import { ContactPanel } from "./panels/contact-panel"
import { InspirationsPanel } from "./panels/inspirations-panel"
import { JourneyPanel } from "./panels/journey-panel"
import { NowPanel } from "./panels/now-panel"
import { ProjectsPanel } from "./panels/projects-panel"
import { SkillsPanel } from "./panels/skills-panel"

type LabMonitorProps = {
  activeState: LabState
  onNavigate: (state: LabState) => void
  immersive?: boolean
}

export function LabMonitor({ activeState, onNavigate, immersive = false }: LabMonitorProps) {
  const destination = LAB_DESTINATION_BY_ID[activeState]
  const Icon = destination.icon
  const hasActiveModule = activeState !== "initial"
  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-live="polite"
      aria-labelledby="lab-monitor-title"
      data-lab-state={activeState}
      data-immersive={immersive ? "true" : "false"}
      className={`relative overflow-hidden border bg-[#080c13]/95 shadow-[0_28px_80px_rgba(0,0,0,.34)] ${
        immersive ? "h-full min-h-0 rounded-[14px]" : "min-h-[350px] rounded-[24px] md:min-h-[430px]"
      } ${
        hasActiveModule ? "border-[#ff2a2a]/28" : "border-[#1e90ff]/20"
      }`}
    >
      <motion.div
        key={`monitor-sweep-${activeState}`}
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, x: "-140%" }}
        animate={reduceMotion ? { opacity: 0 } : { opacity: [0, 0.34, 0], x: ["-140%", "340%"] }}
        transition={{ duration: reduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 z-30 w-1/3 skew-x-[-12deg] bg-gradient-to-r from-transparent via-[#1e90ff]/22 to-transparent mix-blend-screen"
      />
      <div className={`h-px w-full ${hasActiveModule ? "bg-[#ff2a2a]/60" : "bg-[#1e90ff]/55"}`} />
      <div className={`flex items-center justify-between border-b border-white/[0.08] ${immersive ? "px-3.5 py-2.5" : "px-5 py-4 md:px-6"}`}>
        <div className="flex items-center gap-3">
          <motion.span
            key={`monitor-icon-${activeState}`}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.72, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={`grid place-items-center rounded-lg border ${immersive ? "h-8 w-8" : "h-9 w-9"} ${
            hasActiveModule
              ? "border-[#ff2a2a]/38 bg-[#ff2a2a]/6 text-[#ff5c5c]"
              : "border-[#1e90ff]/30 bg-[#1e90ff]/5 text-[#57abff]"
          }`}
          >
            <Icon className={immersive ? "h-4 w-4" : "h-4 w-4"} strokeWidth={1.7} aria-hidden="true" />
          </motion.span>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[.18em] text-white/40">
              Monitor principal / {destination.code}
            </p>
            <h2 id="lab-monitor-title" className={`mt-0.5 font-semibold ${immersive ? "text-[13px]" : "text-sm"}`}>
              {destination.label}
            </h2>
          </div>
        </div>
        <span className={`flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.14em] ${
          hasActiveModule ? "text-[#ff5c5c]" : "text-[#58adff]"
        }`}>
          <span className={`h-1.5 w-1.5 rounded-full ${hasActiveModule ? "bg-[#ff2a2a]" : "bg-[#1e90ff]"}`} />
          {hasActiveModule ? "Active" : "Online"}
        </span>
      </div>

      <div className={`flex items-center justify-between gap-4 border-b border-white/[0.06] font-mono text-[9px] uppercase tracking-[.13em] ${immersive ? "px-3.5 py-2" : "px-5 py-2.5 md:px-6"}`}>
        <span className="truncate text-white/38">{destination.description}</span>
        <span className={hasActiveModule ? "text-[#ff5757]" : "text-[#5aaeff]"}>{destination.signal}</span>
      </div>

      <div className={immersive ? "lab-monitor-scroll h-[calc(100%-88px)] overflow-y-auto overscroll-contain [scrollbar-color:#314866_transparent] [scrollbar-width:thin]" : ""}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeState}
            initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.992 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6, scale: 0.995 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={immersive ? "min-h-full" : ""}
          >
      {activeState === "initial" ? (
        <div className={`flex flex-col justify-center ${immersive ? "min-h-full px-5 py-4" : "min-h-[285px] px-6 py-10 md:min-h-[365px] md:px-10"}`}>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.2em] text-[#1e90ff]">
            <span className="lab-live-dot h-1.5 w-1.5 rounded-full bg-[#1e90ff]" />
            Wave / Developer Lab
          </div>
          <h3 className={`max-w-xl font-bold tracking-[-.05em] ${immersive ? "mt-2 text-[1.2rem]" : "mt-5 text-3xl md:text-5xl"}`}>
            Ideas con intención. Código que evoluciona.
          </h3>
          <p className={`max-w-xl text-white/62 ${immersive ? "mt-2 text-[11px] leading-4" : "mt-5 text-sm leading-7 md:text-base"}`}>
            Este espacio conecta producto, experiencia y desarrollo dentro del universo WebCode.
          </p>
          <div className={`lab-panel-stagger grid gap-2 ${immersive ? "mt-3 grid-cols-3" : "mt-6 sm:grid-cols-3"}`}>
            {[
              { label: "Módulos", value: "07", icon: Network },
              { label: "Proyectos", value: "03", icon: FolderKanban },
              { label: "Credenciales", value: "11", icon: ShieldCheck },
            ].map((item) => {
              const StatIcon = item.icon
              return (
                <div key={item.label} className="lab-module-card flex items-center gap-2.5 rounded-xl px-3 py-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-[#1e90ff]/24 bg-[#1e90ff]/6 text-[#5baeff]">
                    <StatIcon className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] font-semibold text-white/85">{item.value}</span>
                    <span className="block text-[9px] text-white/42">{item.label}</span>
                  </span>
                </div>
              )
            })}
          </div>
          <button
            type="button"
            onClick={() => onNavigate("projects")}
            className={`group flex w-fit items-center gap-2 rounded-xl border border-[#1e90ff]/35 bg-[#1e90ff]/5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[#1e90ff]/70 hover:bg-[#1e90ff]/10 ${immersive ? "mt-3 px-3 py-2 text-[10px]" : "mt-8 px-4 py-3 text-sm"}`}
          >
            Explorar el Lab
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
      {activeState === "projects" ? <ProjectsPanel /> : null}
      {activeState === "skills" ? <SkillsPanel /> : null}
      {activeState === "journey" ? <JourneyPanel /> : null}
      {activeState === "now" ? <NowPanel /> : null}
      {activeState === "inspirations" ? <InspirationsPanel /> : null}
      {activeState === "contact" ? <ContactPanel /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
