"use client"

import { Music2, Pause, Play, Volume2 } from "lucide-react"

type LabAudioControlProps = {
  playing: boolean
  volume: number
  onToggle: () => void
  onVolumeChange: (volume: number) => void
  compact?: boolean
}

export function LabAudioControl({
  playing,
  volume,
  onToggle,
  onVolumeChange,
  compact = false,
}: LabAudioControlProps) {
  if (compact) {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={playing}
        aria-label={playing ? "Pausar música del Developer Lab" : "Reproducir música del Developer Lab"}
        className={`relative grid h-10 w-10 place-items-center rounded-xl border bg-[#050811]/88 backdrop-blur-md transition-colors ${
          playing ? "border-[#1e90ff]/55 text-[#58adff]" : "border-white/14 text-white/70"
        }`}
      >
        {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Music2 className="h-4 w-4" aria-hidden="true" />}
        {playing && <span className="lab-audio-live absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#ff3d3d]" />}
      </button>
    )
  }

  return (
    <div
      className={`flex h-11 items-center rounded-xl border bg-[#070b12]/90 shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur-md transition-colors ${
        playing ? "border-[#1e90ff]/45" : "border-white/12"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={playing}
        aria-label={playing ? "Pausar música del Developer Lab" : "Reproducir música del Developer Lab"}
        className="flex h-full items-center gap-2 px-3 text-white/70 transition-colors hover:text-white"
      >
        {playing ? <Pause className="h-3.5 w-3.5 text-[#4aa5ff]" aria-hidden="true" /> : <Play className="h-3.5 w-3.5" aria-hidden="true" />}
        <span className="font-mono text-[9px] uppercase tracking-[.14em]">Lab Beats</span>
        <span className="flex h-3 items-end gap-[2px]" aria-hidden="true">
          {[0, 1, 2].map((bar) => (
            <span
              key={bar}
              className={`w-[2px] rounded-full bg-[#ff3d3d] ${playing ? "lab-audio-bar" : "h-1 opacity-35"}`}
              style={playing ? { animationDelay: `${bar * 120}ms` } : undefined}
            />
          ))}
        </span>
      </button>

      {playing && (
        <label className="flex items-center gap-2 border-l border-white/10 px-3" aria-label="Volumen de la música">
          <Volume2 className="h-3 w-3 text-white/40" aria-hidden="true" />
          <input
            type="range"
            min="0.05"
            max="0.6"
            step="0.01"
            value={volume}
            onChange={(event) => onVolumeChange(Number(event.target.value))}
            className="lab-volume-slider w-14"
          />
        </label>
      )}
    </div>
  )
}
