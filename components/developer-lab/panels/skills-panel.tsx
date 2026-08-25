import { Award, Braces, CalendarDays, Database, Network, PanelsTopLeft, ShieldCheck, Smartphone } from "lucide-react"

import { PORTFOLIO_CERTIFICATIONS, PORTFOLIO_SKILL_GROUPS } from "../portfolio-data"

const GROUP_ICONS = { product: PanelsTopLeft, frontend: Braces, mobile: Smartphone, platform: Database } as const

export function SkillsPanel() {
  const featuredCertifications = PORTFOLIO_CERTIFICATIONS.filter((certification) => certification.featured)

  return (
    <div className="p-4 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-[#1e90ff]">
            <Network className="h-3.5 w-3.5" aria-hidden="true" /> Capability matrix
          </div>
          <h3 className="mt-1.5 text-xl font-bold tracking-[-.04em]">Herramientas que trabajan conectadas.</h3>
          <p className="mt-1.5 text-[11px] leading-4 text-white/52">Capacidades confirmadas por el perfil y los productos de WebCode.</p>
        </div>
        <span className="rounded-full border border-[#1e90ff]/24 bg-[#1e90ff]/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-[#5aafff]">4 nodos</span>
      </div>

      <div className="lab-skill-matrix lab-panel-stagger relative mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {PORTFOLIO_SKILL_GROUPS.map((group) => {
          const Icon = GROUP_ICONS[group.id]
          return (
            <article key={group.id} className="lab-module-card group relative rounded-xl p-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#1e90ff]/26 bg-[#1e90ff]/6 text-[#5aafff] transition group-hover:border-[#1e90ff]/55 group-hover:bg-[#1e90ff]/11">
                <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h4 className="mt-2.5 text-[11px] font-semibold text-white/82">{group.label}</h4>
              <div className="mt-2 flex flex-wrap gap-1">
                {group.skills.map((skill) => <span key={skill} className="rounded-md border border-white/[0.07] px-1.5 py-1 text-[8px] text-white/45">{skill}</span>)}
              </div>
            </article>
          )
        })}
      </div>

      <section className="mt-3 rounded-xl border border-[#1e90ff]/18 bg-[linear-gradient(145deg,rgba(30,144,255,.07),rgba(255,45,45,.02)_60%,rgba(7,10,16,.94))] p-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#1e90ff]/25 bg-[#1e90ff]/8 text-[#5aafff]"><ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /></span>
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[.15em] text-[#5aafff]">Credenciales verificadas</p>
              <p className="mt-0.5 text-[10px] text-white/58">11 certificaciones · 10 instituciones · 2021—2025</p>
            </div>
          </div>
          <Award className="h-4 w-4 text-[#ff5151]" aria-hidden="true" />
        </div>

        <div className="lab-panel-stagger mt-3 grid gap-1.5 sm:grid-cols-3">
          {featuredCertifications.map((certification) => (
            <article key={certification.id} className="rounded-lg border border-white/[0.07] bg-black/20 p-2.5">
              <p className="text-[8px] font-medium uppercase tracking-[.1em] text-[#ff5757]">{certification.area}</p>
              <h5 className="mt-1 line-clamp-2 text-[10px] font-semibold leading-3.5 text-white/82">{certification.title}</h5>
              <p className="mt-1.5 flex items-center gap-1 text-[8px] text-white/38"><CalendarDays className="h-2.5 w-2.5" aria-hidden="true" />{certification.completed}</p>
            </article>
          ))}
        </div>

        <details className="group mt-2 rounded-lg border border-white/[0.07] bg-black/15">
          <summary className="flex cursor-pointer list-none items-center justify-between px-2.5 py-2 font-mono text-[8px] uppercase tracking-[.13em] text-white/50 hover:text-white/78">
            Ver las 11 certificaciones <span className="text-[#1e90ff] transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="grid gap-px border-t border-white/[0.07] bg-white/[0.05] sm:grid-cols-2">
            {PORTFOLIO_CERTIFICATIONS.map((certification) => (
              <article key={certification.id} className="bg-[#080c12] px-2.5 py-2">
                <h5 className="text-[9px] font-medium leading-3.5 text-white/76">{certification.title}</h5>
                <p className="mt-0.5 text-[8px] text-white/38">{certification.issuer} · {certification.completed}</p>
              </article>
            ))}
          </div>
        </details>
      </section>
    </div>
  )
}
