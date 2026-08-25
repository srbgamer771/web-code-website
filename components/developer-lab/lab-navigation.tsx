import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Radio } from "lucide-react"

import { LAB_DESTINATIONS } from "./lab-data"
import type { LabState } from "./lab-types"

type LabNavigationProps = {
  activeState: LabState
  onNavigate: (state: LabState) => void
}

function NavigationButton({
  activeState,
  destination,
  onNavigate,
  compact = false,
}: {
  activeState: LabState
  destination: (typeof LAB_DESTINATIONS)[number]
  onNavigate: (state: LabState) => void
  compact?: boolean
}) {
  const Icon = destination.icon
  const active = activeState === destination.id

  return (
    <button
      type="button"
      onClick={() => onNavigate(destination.id)}
      aria-label={destination.label}
      aria-current={active ? "page" : undefined}
      className={
        compact
          ? `flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2.5 text-xs font-medium transition-colors ${
              active
                ? "border-[#ff2a2a]/75 bg-[#ff2a2a]/10 text-white"
                : "border-white/10 bg-[#0d1119] text-white/58 hover:border-[#1e90ff]/45 hover:text-white"
            }`
          : `group flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-sm transition-colors ${
              active
                ? "border-[#ff2a2a]/70 bg-[#ff2a2a]/10 text-white shadow-[inset_3px_0_0_#ff2a2a]"
                : "border-transparent text-white/58 hover:border-white/10 hover:bg-white/[0.035] hover:text-white"
            }`
      }
    >
      <Icon
        aria-hidden="true"
        className={`h-4 w-4 ${active ? "text-[#ff4747]" : "text-[#54aaff] group-hover:text-[#1e90ff]"}`}
        strokeWidth={1.7}
      />
      <span>{compact ? destination.shortLabel : destination.label}</span>
      {!compact ? (
        <span className={`ml-auto font-mono text-[8px] tracking-[.16em] ${active ? "text-[#ff6666]" : "text-white/20"}`}>
          {destination.code}
        </span>
      ) : null}
    </button>
  )
}

export function LabSidebar({ activeState, onNavigate }: LabNavigationProps) {
  return (
    <aside className="hidden min-h-screen w-[238px] shrink-0 border-r border-white/[0.08] bg-[#080b11] xl:flex xl:flex-col">
      <div className="border-b border-white/[0.08] px-5 py-6">
        <Link href="/" aria-label="Volver al sitio principal de WebCode">
          <Image
            src="/assets/brand/webcode-logo-oficial-transparente.png"
            alt="WebCode"
            width={220}
            height={65}
            className="h-auto w-[174px]"
            priority
          />
        </Link>
        <p className="mt-4 max-w-[18ch] text-xs leading-5 text-white/42">
          Conectando ideas, creando futuro.
        </p>
      </div>

      <p className="px-5 pb-1 pt-4 font-mono text-[8px] uppercase tracking-[.18em] text-white/28">
        Navegación directa
      </p>
      <nav aria-label="Secciones del Developer Lab" className="flex-1 space-y-1 px-3 pb-3">
        {LAB_DESTINATIONS.map((destination) => (
          <NavigationButton
            key={destination.id}
            destination={destination}
            activeState={activeState}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="border-t border-white/[0.08] p-5">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-[#1e90ff]">
          <Radio className="h-3.5 w-3.5" aria-hidden="true" />
          Wave / Online
        </div>
        <p className="mt-2 text-xs leading-5 text-white/42">Compañero oficial del Lab.</p>
        <Link
          href="/#equipo"
          className="mt-5 flex items-center gap-2 text-xs font-semibold text-white/58 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Volver al equipo
        </Link>
      </div>
    </aside>
  )
}

export function LabCompactNavigation({ activeState, onNavigate }: LabNavigationProps) {
  return (
    <nav
      aria-label="Secciones del Developer Lab"
      className="flex gap-2 overflow-x-auto px-4 pb-3 pt-2 [scrollbar-width:none] md:px-6 xl:hidden [&::-webkit-scrollbar]:hidden"
    >
      {LAB_DESTINATIONS.map((destination) => (
        <NavigationButton
          key={destination.id}
          destination={destination}
          activeState={activeState}
          onNavigate={onNavigate}
          compact
        />
      ))}
    </nav>
  )
}
