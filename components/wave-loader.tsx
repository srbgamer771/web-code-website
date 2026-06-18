"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

const DEFAULT_DURATION_MS = 2400
const DEFAULT_EXIT_DURATION_MS = 500
const DEFAULT_WAVE_SRC = "/assets/wave/wave-programando.png"
const DEFAULT_STORAGE_KEY = "wave-loader-seen"

const LOADER_PHRASES = [
  "Tejiendo experiencias digitales...",
  "Conectando ideas creativas...",
  "Preparando tu futuro web...",
]

const CODE_LINES = ["const idea = conectar();", "Wave.deploy(futuro);", "webCode.create();"]
const NETWORK_NODES = [
  "left-[14%] top-[28%]",
  "left-[23%] top-[68%]",
  "left-[38%] top-[18%]",
  "right-[16%] top-[30%]",
  "right-[26%] top-[70%]",
  "right-[38%] top-[18%]",
]

export type WaveLoaderProps = {
  durationMs?: number
  exitDurationMs?: number
  waveSrc?: string
  storageKey?: string
}

export default function WaveLoader({
  durationMs = DEFAULT_DURATION_MS,
  exitDurationMs = DEFAULT_EXIT_DURATION_MS,
  waveSrc = DEFAULT_WAVE_SRC,
  storageKey = DEFAULT_STORAGE_KEY,
}: WaveLoaderProps) {
  const [showLoader, setShowLoader] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  const progressIntervalMs = useMemo(
    () => Math.max(40, Math.floor(durationMs / 80)),
    [durationMs],
  )

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem(storageKey)

    if (hasSeenLoader) {
      return
    }

    // sessionStorage is only available after mount; this keeps the server render stable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowLoader(true)

    const startedAt = Date.now()
    const phraseInterval = window.setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % LOADER_PHRASES.length)
    }, 700)

    const progressInterval = window.setInterval(() => {
      const elapsed = Date.now() - startedAt
      setProgress(Math.min(100, Math.round((elapsed / durationMs) * 100)))
    }, progressIntervalMs)

    const finishTimer = window.setTimeout(() => {
      setProgress(100)
      setIsExiting(true)
      window.clearInterval(progressInterval)
      window.clearInterval(phraseInterval)
    }, durationMs)

    const removeTimer = window.setTimeout(() => {
      sessionStorage.setItem(storageKey, "true")
      setShowLoader(false)
    }, durationMs + exitDurationMs)

    return () => {
      window.clearInterval(progressInterval)
      window.clearInterval(phraseInterval)
      window.clearTimeout(finishTimer)
      window.clearTimeout(removeTimer)
    }
  }, [durationMs, exitDurationMs, progressIntervalMs, storageKey])

  if (!showLoader) {
    return null
  }

  const ambientMotion = prefersReducedMotion
    ? {}
    : {
        scale: [1, 1.03, 1],
        opacity: [0.65, 1, 0.65],
      }

  return (
    <AnimatePresence>
      <motion.div
        role="status"
        aria-label="Cargando experiencia Web Code"
        aria-live="polite"
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#080B12] px-5 text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: exitDurationMs / 1000, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(37,99,235,0.26),transparent_34%),radial-gradient(circle_at_50%_72%,rgba(220,38,38,0.18),transparent_30%),linear-gradient(135deg,#080B12_0%,#0D1117_52%,#111827_100%)]" />
        <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(37,99,235,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.11)_1px,transparent_1px)] [background-size:42px_42px]" />

        <motion.div
          className="absolute h-[min(76vw,520px)] w-[min(76vw,520px)] rounded-full border border-blue-500/20"
          animate={ambientMotion}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-[min(58vw,390px)] w-[min(58vw,390px)] rounded-full border border-red-500/15"
          animate={ambientMotion}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />

        {NETWORK_NODES.map((position, index) => (
          <motion.span
            key={position}
            className={`absolute ${position} h-2 w-2 rounded-full bg-blue-400/70 shadow-[0_0_18px_rgba(96,165,250,0.75)]`}
            animate={prefersReducedMotion ? {} : { opacity: [0.35, 1, 0.35] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: index * 0.16,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative z-10 flex w-full max-w-[520px] flex-col items-center text-center">
          <div className="mb-7 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-blue-100/80 shadow-[0_0_28px_rgba(37,99,235,0.18)]">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.9)]" />
            Wave online
          </div>

          <motion.div
            className="relative mb-6 grid h-44 w-44 place-items-center rounded-full border border-blue-400/25 bg-[#0D1117]/80 shadow-[0_0_60px_rgba(37,99,235,0.35)] backdrop-blur-md sm:h-52 sm:w-52"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -8, 0],
                    rotate: [0, -1.5, 1.5, 0],
                  }
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute inset-4 rounded-full border border-red-500/20" />
            <span className="absolute -inset-3 rounded-full border border-dashed border-blue-300/20" />
            <Image
              src={waveSrc}
              alt="Wave, mascota de WebCode"
              width={180}
              height={180}
              priority
              className="relative z-10 h-36 w-36 object-contain drop-shadow-[0_18px_42px_rgba(0,0,0,0.45)] sm:h-44 sm:w-44"
            />
          </motion.div>

          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-red-300/80">
            Conectando ideas, creando futuro.
          </p>
          <h1 className="text-4xl font-bold tracking-wide text-white sm:text-5xl">
            Web Code
          </h1>

          <motion.p
            key={currentPhrase}
            className="mt-4 min-h-7 text-base text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.28 }}
          >
            {LOADER_PHRASES[currentPhrase]}
          </motion.p>

          <div className="mt-7 w-full max-w-sm">
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
              <span>Inicializando</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-red-500 via-blue-400 to-blue-500 shadow-[0_0_18px_rgba(96,165,250,0.65)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-8 grid w-full max-w-md grid-cols-1 gap-2 font-mono text-[11px] text-blue-100/45 sm:grid-cols-3">
            {CODE_LINES.map((line) => (
              <span
                key={line}
                className="rounded-md border border-white/5 bg-white/[0.03] px-3 py-2"
              >
                {line}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
