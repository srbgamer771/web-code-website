import { ArrowUpRight, Mail, MapPin, MessageCircle, Radio } from "lucide-react"

import { PORTFOLIO_CONTACT } from "../portfolio-data"

export function ContactPanel() {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-[1fr_.95fr] md:p-5">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-[#ff5757]"><Radio className="h-3.5 w-3.5" aria-hidden="true" /> Contact channel</div>
        <h3 className="mt-2 max-w-md text-2xl font-bold tracking-[-.045em]">¿Construimos algo juntos?</h3>
        <p className="mt-2 max-w-md text-[11px] leading-4 text-white/52">
          Hablemos de una idea, una colaboración o el próximo producto que quieres poner en marcha.
        </p>
        <div className="mt-4 flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[10px] text-white/48">
          <MapPin className="h-3.5 w-3.5 text-[#1e90ff]" aria-hidden="true" />
          {PORTFOLIO_CONTACT.location}
        </div>
        <div className="mt-3 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.12em] text-white/35"><span className="lab-live-dot h-1.5 w-1.5 rounded-full bg-[#1e90ff]" /> Disponible para nuevos proyectos</div>
      </div>

      <div className="lab-panel-stagger grid content-center gap-2">
        <a
          href={`mailto:${PORTFOLIO_CONTACT.email}`}
          className="lab-module-card group rounded-xl border-[#ff2a2a]/28 p-3 transition-all hover:-translate-y-0.5 hover:border-[#ff2a2a]/65"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#ff2a2a]/26 bg-[#ff2a2a]/5"><Mail className="h-3.5 w-3.5 text-[#ff5151]" aria-hidden="true" /></span>
            <ArrowUpRight className="h-4 w-4 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </div>
          <p className="mt-2 font-mono text-[8px] uppercase tracking-[.14em] text-white/38">Correo</p>
          <p className="mt-1 break-all text-[10px] font-semibold text-white/78">{PORTFOLIO_CONTACT.email}</p>
        </a>
        <a
          href={PORTFOLIO_CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="lab-module-card group rounded-xl border-[#1e90ff]/28 p-3 transition-all hover:-translate-y-0.5 hover:border-[#1e90ff]/65"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#1e90ff]/26 bg-[#1e90ff]/5"><MessageCircle className="h-3.5 w-3.5 text-[#59adff]" aria-hidden="true" /></span>
            <ArrowUpRight className="h-4 w-4 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </div>
          <p className="mt-2 font-mono text-[8px] uppercase tracking-[.14em] text-white/38">WhatsApp</p>
          <p className="mt-1 text-[10px] font-semibold text-white/78">{PORTFOLIO_CONTACT.phoneLabel}</p>
        </a>
      </div>
    </div>
  )
}
