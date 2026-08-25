import type { LabDestination } from "./lab-data"
import type { LabState } from "./lab-types"

type LabNodeProps = {
  destination: LabDestination
  activeState: LabState
  onNavigate: (state: LabState) => void
  position: string
  compact?: boolean
  stage?: boolean
  mobile?: boolean
}

export function LabNode({
  destination,
  activeState,
  onNavigate,
  position,
  compact = false,
  stage = false,
  mobile = false,
}: LabNodeProps) {
  const active = activeState === destination.id
  const Icon = destination.icon

  return (
    <button
      type="button"
      onClick={() => onNavigate(destination.id)}
      aria-label={`Abrir ${destination.label}`}
      aria-pressed={active}
      data-active={active ? "true" : "false"}
      className={`absolute z-10 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-[#080c13]/95 text-center transition-[border-color,color,box-shadow,background-color] duration-300 ${position} ${
        stage
          ? compact ? "h-[58px] w-[58px]" : "h-[72px] w-[72px]"
          : mobile
            ? compact ? "h-[52px] w-[52px]" : "h-[60px] w-[60px] sm:h-[70px] sm:w-[70px]"
            : compact ? "h-[76px] w-[76px]" : "h-[90px] w-[90px]"
      } ${
        active
          ? "lab-node-active border-[#ff2a2a] bg-[#13090d]/95 text-white shadow-[0_0_28px_rgba(255,42,42,.34),inset_0_0_20px_rgba(255,42,42,.1)]"
          : "border-[#1e90ff]/55 text-white/64 shadow-[0_0_22px_rgba(30,144,255,.08)] hover:border-[#1e90ff] hover:text-white"
      }`}
    >
      <span className="grid place-items-center gap-1">
        <span className={`font-mono text-[7px] tracking-[.18em] ${active ? "text-[#ff6060]" : "text-white/24"}`}>
          {destination.code}
        </span>
        <Icon
          className={`${stage || mobile ? "h-4 w-4" : compact ? "h-4 w-4" : "h-5 w-5"} ${active ? "text-[#ff4747]" : "text-[#5faeff]"}`}
          strokeWidth={1.6}
          aria-hidden="true"
        />
        <span className={`${stage || mobile ? "text-[8px]" : "text-[9px]"} font-semibold uppercase tracking-[.08em]`}>
          {destination.shortLabel}
        </span>
      </span>
    </button>
  )
}
