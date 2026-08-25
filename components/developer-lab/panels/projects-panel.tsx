import Image from "next/image"
import { AppWindow, ArrowUpRight, ExternalLink, FolderKanban, Globe2, MonitorSmartphone } from "lucide-react"

import { PORTFOLIO_PROJECTS } from "../portfolio-data"

const PROJECT_ICONS = [AppWindow, MonitorSmartphone, Globe2] as const

export function ProjectsPanel() {
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-[#1e90ff]">
            <FolderKanban className="h-3.5 w-3.5" aria-hidden="true" />
            Project index
          </div>
          <h3 className="mt-1.5 text-xl font-bold tracking-[-.04em]">Productos dentro del Lab.</h3>
        </div>
        <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[.12em] text-white/45">
          {PORTFOLIO_PROJECTS.length} registros
        </span>
      </div>

      <div className="lab-panel-stagger mt-4 grid gap-2 sm:grid-cols-2">
        {PORTFOLIO_PROJECTS.map((project, index) => {
          const ProjectIcon = PROJECT_ICONS[index] ?? AppWindow
          const featured = index === 0
          const card = (
            <>
              <div className={`relative overflow-hidden ${featured ? "min-h-[116px] sm:min-h-[184px]" : "min-h-[116px]"}`}>
                {project.image ? (
                  <Image src={project.image} alt={`Vista previa de ${project.title}`} fill className="object-cover opacity-75 transition duration-500 group-hover:scale-[1.035] group-hover:opacity-95" />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(30,144,255,.16),transparent_36%),linear-gradient(145deg,#0b111b,#070a10)]" />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(5,8,13,.94)_100%)]" />
                <div className="lab-project-scan pointer-events-none absolute inset-0" />
                <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-white/12 bg-[#070a10]/82 text-[#5caeff] backdrop-blur-md">
                  <ProjectIcon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="absolute right-3 top-3 font-mono text-[8px] text-white/38">0{index + 1}</span>
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="font-mono text-[8px] uppercase tracking-[.15em] text-[#ff5757]">{project.category}</p>
                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h4 className="text-base font-semibold tracking-[-.03em]">{project.title}</h4>
                    {project.href ? <ArrowUpRight className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" /> : null}
                  </div>
                </div>
              </div>
              <div className="border-t border-white/[0.07] px-3 py-2.5">
                <p className="line-clamp-2 text-[10px] leading-4 text-white/52">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.stack.slice(0, featured ? 4 : 3).map((item) => (
                    <span key={item} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-1.5 py-1 text-[8px] text-white/48">{item}</span>
                  ))}
                </div>
              </div>
            </>
          )

          const classes = `lab-module-card group overflow-hidden rounded-xl ${featured ? "sm:row-span-2" : ""}`
          return project.href ? (
            <a key={project.id} href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.action}: ${project.title}`} className={classes}>{card}</a>
          ) : (
            <article key={project.id} className={classes}>{card}</article>
          )
        })}
      </div>

      <div className="mt-3 flex items-center gap-2 text-[9px] leading-4 text-white/42">
        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#1e90ff]" aria-hidden="true" />
        Los casos completos se activarán conforme estén disponibles.
      </div>
    </div>
  )
}
