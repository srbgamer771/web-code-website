"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

import { LAB_DESTINATION_BY_ID } from "./lab-data"
import type { LabState } from "./lab-types"

type WaveCompanionProps = {
  activeState: LabState
  immersive?: boolean
}

const WAVE_ASSET_BY_STATE: Record<LabState, string> = {
  initial: "/assets/wave/poses/wave-saludando.png",
  projects: "/assets/wave/poses/wave-revisando-proyecto.png",
  skills: "/assets/wave/poses/wave-conectando-nodos.png",
  journey: "/assets/wave/poses/wave-escalando-hilo.png",
  now: "/assets/wave/wave-programando-transparent.png",
  inspirations: "/assets/wave/poses/wave-transportando-idea.png",
  contact: "/assets/wave/poses/wave-invitando-proyecto.png",
}

const WAVE_MESSAGE_BY_STATE: Record<LabState, string> = {
  initial: "Bienvenido. Este es el espacio donde conectamos ideas y código.",
  projects: "Aquí viven los productos que ya construimos.",
  skills: "Cada herramienta se conecta con una intención.",
  journey: "El camino sigue creciendo con cada proyecto.",
  now: "Siempre hay algo nuevo en construcción.",
  inspirations: "Las buenas ideas también necesitan curiosidad.",
  contact: "¿Construimos el siguiente proyecto juntos?",
}

const WAVE_REACTION_BY_STATE: Record<LabState, { x: number; rotate: number }> = {
  initial: { x: 0, rotate: 0 },
  projects: { x: 5, rotate: -2.2 },
  skills: { x: 8, rotate: 2.4 },
  journey: { x: -5, rotate: -3 },
  now: { x: 4, rotate: 1.5 },
  inspirations: { x: -4, rotate: -2 },
  contact: { x: 7, rotate: 3 },
}

export function WaveCompanion({ activeState, immersive = false }: WaveCompanionProps) {
  const reduceMotion = useReducedMotion()
  const reaction = WAVE_REACTION_BY_STATE[activeState]

  if (immersive) {
    return (
      <aside aria-live="polite" className="relative h-[160px] w-[205px]">
        <p className="sr-only">{WAVE_MESSAGE_BY_STATE[activeState]}</p>
        <motion.div
          key={activeState}
          initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }}
          animate={{
            opacity: 1,
            x: reduceMotion ? 0 : reaction.x,
            y: reduceMotion ? 0 : [0, -6, 0],
            rotate: reduceMotion ? 0 : reaction.rotate,
            scale: reduceMotion ? 1 : [0.97, 1.035, 1],
          }}
          transition={{
            opacity: { duration: reduceMotion ? 0 : 0.2, delay: reduceMotion ? 0 : 0.16 },
            x: { duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] },
            rotate: { duration: reduceMotion ? 0 : 0.34, delay: reduceMotion ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : 0.16, times: [0, 0.55, 1] },
            y: reduceMotion ? { duration: 0 } : { duration: 4.8, delay: 0.6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-0 left-0 h-[150px] w-[190px]"
        >
          <Image
            src={WAVE_ASSET_BY_STATE[activeState]}
            alt={`Wave acompañando la sección ${LAB_DESTINATION_BY_ID[activeState].label}`}
            fill
            sizes="190px"
            className="object-contain object-bottom drop-shadow-[0_16px_20px_rgba(0,0,0,.55)]"
            priority
          />
        </motion.div>
      </aside>
    )
  }

  return (
    <aside className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090d14] p-3 pr-5 lg:max-w-[360px]">
      <div className="webcode-wave-glow pointer-events-none absolute left-5 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-[#1e90ff]/16 blur-2xl" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeState}
          initial={reduceMotion ? false : { opacity: 0, x: -8, scale: 0.92 }}
          animate={{
            opacity: 1,
            x: reduceMotion ? 0 : reaction.x * 0.55,
            y: reduceMotion ? 0 : [0, -3, 0],
            rotate: reduceMotion ? 0 : reaction.rotate * 0.65,
            scale: reduceMotion ? 1 : [0.96, 1.025, 1],
          }}
          exit={reduceMotion ? undefined : { opacity: 0, x: 8, scale: 0.94 }}
          transition={{
            opacity: { duration: reduceMotion ? 0 : 0.18 },
            x: { duration: reduceMotion ? 0 : 0.24 },
            rotate: { duration: reduceMotion ? 0 : 0.28 },
            scale: { duration: reduceMotion ? 0 : 0.36, times: [0, 0.6, 1] },
            y: reduceMotion ? { duration: 0 } : { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative h-20 w-20 shrink-0 md:h-24 md:w-24"
        >
          <Image
            src={WAVE_ASSET_BY_STATE[activeState]}
            alt="Wave acompañando a Santiago en el Developer Lab"
            fill
            sizes="96px"
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        key={`message-${activeState}`}
        initial={reduceMotion ? false : { opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : 0.08 }}
      >
        <p className="font-mono text-[9px] uppercase tracking-[.16em] text-[#1e90ff]">Wave / Companion</p>
        <p className="mt-1.5 text-xs leading-5 text-white/55">
          {WAVE_MESSAGE_BY_STATE[activeState]}
        </p>
      </motion.div>
    </aside>
  )
}
