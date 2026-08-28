"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Languages,
  Lightbulb,
  Mail,
  MessageCircle,
  Pause,
  Play,
  Quote,
  Radio,
} from "lucide-react"

import { LabAudioControl } from "@/components/developer-lab/lab-audio-control"
import { useLabAudio } from "@/components/developer-lab/use-lab-audio"
import {
  creatorEducation,
  creatorNavigation,
  creatorServices,
  creatorSkills,
  creatorStateMeta,
  type CreatorState,
} from "./creator-room-data"

const accentByState: Record<CreatorState, string> = {
  initial: "#ff2a2a",
  projects: "#ff2a2a",
  skills: "#1e90ff",
  education: "#d2a679",
  experience: "#ff2a2a",
  creative: "#a855f7",
  process: "#1e90ff",
  about: "#ff2a2a",
  contact: "#1e90ff",
}

const waveWorkingStates = new Set<CreatorState>(["initial", "projects", "skills", "experience", "process"])

function CreatorSidebar({
  active,
  onNavigate,
  audioPlaying,
  onToggleAudio,
}: {
  active: CreatorState
  onNavigate: (state: CreatorState) => void
  audioPlaying: boolean
  onToggleAudio: () => void
}) {
  return (
    <aside className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#07090d]/94 shadow-[0_24px_70px_rgba(0,0,0,.55)] backdrop-blur-xl">
      <div className="border-b border-white/10 p-3">
        <Link href="/" aria-label="Volver al sitio principal de WebCode">
          <Image src="/assets/brand/webcode-logo-oficial-transparente.png" alt="WebCode" width={220} height={65} className="h-auto w-36" priority />
        </Link>
        <div className="mt-3 flex items-center gap-2.5">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#ff2a2a]/60 bg-[#11151d]">
            <Image src="/assets/brand/diego-portrait-original.png" alt="Diego Escobar" fill sizes="48px" className="object-cover object-top" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[.04em]">Diego Escobar</p>
            <p className="mt-1 text-[8px] uppercase leading-3 tracking-[.07em] text-white/45">Ing. Animación Digital<br />Desarrollador web</p>
          </div>
          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#ff2a2a] shadow-[0_0_10px_#ff2a2a]" />
        </div>
      </div>

      <nav aria-label="Secciones del Creator Room" className="min-h-0 flex-1 space-y-0.5 overflow-y-auto p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {creatorNavigation.map(({ id, label, icon: Icon }) => {
          const selected = active === id
          return (
            <button key={id} type="button" onClick={() => onNavigate(id)} aria-pressed={selected} className={`group flex w-full items-center gap-2.5 rounded-xl border px-3 py-1.5 text-left text-[10px] transition-all ${selected ? "border-[#ff2a2a]/55 bg-[#ff2a2a]/12 text-white shadow-[inset_3px_0_0_#ff2a2a]" : "border-transparent text-white/60 hover:border-white/10 hover:bg-white/[.035] hover:text-white"}`}>
              <Icon className={`h-4 w-4 ${selected ? "text-[#ff3d3d]" : "text-white/48 group-hover:text-[#1e90ff]"}`} strokeWidth={1.6} aria-hidden="true" />
              <span>{label}</span>
            </button>
          )
        })}
      </nav>

      <div className="border-t border-white/10 p-2.5">
        <div className="rounded-xl border border-white/10 bg-white/[.025] p-2.5">
          <Quote className="h-4 w-4 text-[#ff2a2a]" aria-hidden="true" />
          <p className="mt-2 text-[10px] leading-4 text-white/62">Código con lógica.<br /><span className="text-[#ff4545]">Soluciones con intención.</span></p>
        </div>
        <div className="mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-[#090c12]/95 px-2 py-2">
          <div className="min-w-0">
            <p className="font-mono text-[8px] uppercase tracking-[.15em] text-white/68">Focus mode</p>
            <p className="mt-1 text-[8px] text-white/32">lo-fi beats</p>
          </div>
          <button type="button" onClick={onToggleAudio} aria-label={audioPlaying ? "Pausar Focus Mode" : "Reproducir Focus Mode"} aria-pressed={audioPlaying} className="grid h-9 w-9 place-items-center rounded-full border border-white/18 text-white/75 transition hover:border-[#ff2a2a]/60 hover:text-white">
            {audioPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 translate-x-px" />}
          </button>
          <span className="flex items-end gap-[2px]" aria-hidden="true">{[0,1,2,3].map(index => <span key={index} className={`w-[2px] rounded-full bg-[#ff2a2a] ${audioPlaying ? "creator-audio-bar" : "h-1 opacity-30"}`} style={{ animationDelay: `${index * 90}ms` }} />)}</span>
        </div>
      </div>
    </aside>
  )
}

function StatePanel({ state, onNavigate }: { state: CreatorState; onNavigate: (state: CreatorState) => void }) {
  const meta = creatorStateMeta[state]
  const accent = accentByState[state]

  if (state === "contact") {
    return <div className="creator-panel-in h-full p-4"><p className="font-mono text-[8px] uppercase tracking-[.18em]" style={{ color: accent }}>{meta.eyebrow}</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.045em]">{meta.title}</h2><p className="mt-2 max-w-md text-[10px] leading-4 text-white/52">{meta.description}</p><div className="mt-4 grid gap-2 sm:grid-cols-3"><a href="mailto:diego.c.escobarm@gmail.com" className="creator-card flex items-center gap-3 p-3"><Mail className="h-4 w-4 text-[#ff4545]" /><span className="min-w-0"><span className="block text-[8px] uppercase tracking-[.14em] text-white/35">Correo</span><span className="mt-1 block truncate text-[9px]">diego.c.escobarm@gmail.com</span></span></a><a href="https://wa.me/529512383289" target="_blank" rel="noreferrer" className="creator-card flex items-center gap-3 p-3"><MessageCircle className="h-4 w-4 text-[#1e90ff]" /><span><span className="block text-[8px] uppercase tracking-[.14em] text-white/35">WhatsApp</span><span className="mt-1 block text-[9px]">+52 951 238 3289</span></span></a><a href="https://www.linkedin.com/in/diego-césar-escobar-martínez-0a05543a3/" target="_blank" rel="noreferrer" className="creator-card flex items-center gap-3 p-3"><ExternalLink className="h-4 w-4 text-[#d2a679]" /><span><span className="block text-[8px] uppercase tracking-[.14em] text-white/35">LinkedIn</span><span className="mt-1 block text-[9px]">Ver perfil</span></span></a></div></div>
  }

  if (state === "process") {
    return <div className="creator-panel-in h-full p-4"><p className="font-mono text-[8px] uppercase tracking-[.18em] text-[#1e90ff]">{meta.eyebrow}</p><h2 className="mt-2 text-xl font-semibold tracking-[-.04em]">{meta.title}</h2><div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">{["Analizar","Diseñar","Desarrollar","Probar","Mejorar"].map((step,index) => <div key={step} className="creator-card relative p-2.5"><span className="font-mono text-[8px] text-[#1e90ff]">0{index+1}</span><p className="mt-5 text-[9px] font-semibold">{step}</p>{index < 4 && <ChevronRight className="absolute -right-2 top-1/2 z-10 hidden h-3 w-3 text-white/25 sm:block" />}</div>)}</div><p className="mt-3 border-l border-[#1e90ff]/50 pl-3 text-[9px] leading-4 text-white/48">Entender el requerimiento primero permite construir una solución funcional, clara y fácil de mejorar.</p></div>
  }

  if (state === "about") {
    return <div className="creator-panel-in grid h-full grid-cols-1 gap-4 p-4 sm:grid-cols-[120px_1fr]"><div className="relative h-36 overflow-hidden rounded-xl border border-[#ff2a2a]/35 sm:h-auto"><Image src="/assets/brand/diego-portrait-original.png" alt="Diego Escobar" fill sizes="120px" className="object-cover object-top" /></div><div><p className="font-mono text-[8px] uppercase tracking-[.18em] text-[#ff4545]">{meta.eyebrow}</p><h2 className="mt-2 text-lg font-semibold leading-tight">{meta.title}</h2><p className="mt-2 text-[9px] leading-4 text-white/52">{meta.description}</p><div className="mt-3 flex flex-wrap gap-1.5">{["C#",".NET","SQL Server","JavaScript","Animación digital"].map(tag => <span key={tag} className="rounded-full border border-white/10 px-2 py-1 text-[8px] text-white/54">{tag}</span>)}</div><div className="mt-3 flex items-center gap-3 text-[8px] text-white/42"><span>Español · Nativo</span><span className="h-1 w-1 rounded-full bg-[#ff4545]" /><span>Inglés · Intermedio</span></div></div></div>
  }

  if (state === "skills") {
    return <div className="creator-panel-in h-full p-4"><p className="font-mono text-[8px] uppercase tracking-[.18em] text-[#1e90ff]">{meta.eyebrow}</p><div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1.25fr]"><div><h2 className="text-xl font-semibold tracking-[-.04em]">{meta.title}</h2><p className="mt-2 text-[9px] leading-4 text-white/52">{meta.description}</p><div className="mt-3 rounded-xl border border-white/10 bg-white/[.025] p-2.5"><div className="flex items-center gap-2"><Languages className="h-3.5 w-3.5 text-[#d2a679]" /><span className="text-[8px] font-semibold">Idiomas</span></div><div className="mt-2 grid grid-cols-2 gap-3 text-[7px]"><div><div className="flex justify-between"><span>Español</span><span className="text-white/42">Nativo</span></div><div className="mt-1 h-1 rounded-full bg-white/8"><div className="h-full w-full rounded-full bg-[#ff2a2a]" /></div></div><div><div className="flex justify-between"><span>Inglés</span><span className="text-white/42">Intermedio</span></div><div className="mt-1 h-1 rounded-full bg-white/8"><div className="h-full w-3/5 rounded-full bg-[#1e90ff]" /></div></div></div></div></div><div className="grid grid-cols-3 gap-1.5">{creatorSkills.map((skill,index) => <div key={skill} className="creator-card flex min-h-9 items-center gap-2 px-2 py-1.5"><span className={`h-1.5 w-1.5 rounded-full ${index < 5 ? "bg-[#ff2a2a] shadow-[0_0_8px_#ff2a2a]" : "bg-[#1e90ff] shadow-[0_0_8px_#1e90ff]"}`} /><span className="text-[7px] font-medium">{skill}</span></div>)}</div></div></div>
  }

  if (state === "education") {
    return <div className="creator-panel-in h-full p-4"><p className="font-mono text-[8px] uppercase tracking-[.18em] text-[#d2a679]">{meta.eyebrow}</p><h2 className="mt-2 text-xl font-semibold tracking-[-.04em]">{meta.title}</h2><div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">{creatorEducation.map((item,index) => <article key={item.title} className="creator-card flex min-h-32 flex-col p-3"><div className="flex items-center justify-between"><GraduationCap className={`h-4 w-4 ${index === 0 ? "text-[#ff4545]" : index === 1 ? "text-[#d2a679]" : "text-[#1e90ff]"}`} /><span className="font-mono text-[7px] uppercase tracking-[.1em] text-white/28">{item.type}</span></div><h3 className="mt-3 text-[9px] font-semibold leading-3">{item.title}</h3><p className="mt-1 text-[7px] leading-3 text-white/42">{item.detail}</p><p className="mt-2 text-[7px] leading-3 text-white/32">{item.note}</p>{item.href && <a href={item.href} target="_blank" rel="noreferrer" className="mt-auto flex items-center gap-1 pt-2 text-[7px] text-[#1e90ff]">{item.linkLabel}<ExternalLink className="h-2.5 w-2.5" /></a>}</article>)}</div></div>
  }

  if (state === "experience") {
    return <div className="creator-panel-in h-full p-4"><p className="font-mono text-[8px] uppercase tracking-[.18em] text-[#ff4545]">{meta.eyebrow}</p><div className="mt-2 grid h-[calc(100%-20px)] grid-cols-1 gap-4 sm:grid-cols-[.72fr_1.28fr]"><div className="creator-card flex flex-col justify-between p-4"><div><span className="text-5xl font-semibold tracking-[-.08em] text-[#ff3535]">~2</span><p className="mt-1 text-[8px] uppercase tracking-[.16em] text-white/38">años de experiencia</p></div><p className="text-[8px] leading-4 text-white/42">Desarrollo de aplicaciones web con ecosistema Microsoft.</p></div><div><h2 className="text-xl font-semibold tracking-[-.04em]">{meta.title}</h2><p className="mt-2 text-[9px] leading-4 text-white/52">{meta.description}</p><div className="mt-3 space-y-2">{["Análisis de requerimientos y resolución de problemas","Desarrollo con C#, .NET Core, MVC y Web API","Trabajo con MS SQL Server y Web Services","Aprendizaje rápido y adaptación a nuevos entornos"].map(item => <div key={item} className="creator-card flex items-center gap-2 p-2.5"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff2a2a] shadow-[0_0_8px_#ff2a2a]" /><span className="text-[8px] leading-3 text-white/58">{item}</span></div>)}</div></div></div></div>
  }

  if (state === "creative") {
    return <div className="creator-panel-in h-full p-4"><p className="font-mono text-[8px] uppercase tracking-[.18em] text-[#c456ff]">{meta.eyebrow}</p><h2 className="mt-2 text-xl font-semibold tracking-[-.04em]">{meta.title}</h2><p className="mt-2 max-w-lg text-[9px] leading-4 text-white/52">{meta.description}</p><div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">{[{title:"Animación digital",text:"Composición, ritmo y narrativa visual."},{title:"Producción cinematográfica",text:"Lectura de escenas y construcción de intención."},{title:"Desarrollo web",text:"Estructura, funcionalidad y solución de problemas."}].map((item,index) => <article key={item.title} className="creator-card p-3"><span className={`font-mono text-[8px] ${index === 0 ? "text-[#c456ff]" : index === 1 ? "text-[#d2a679]" : "text-[#1e90ff]"}`}>0{index+1}</span><h3 className="mt-4 text-[9px] font-semibold">{item.title}</h3><p className="mt-2 text-[7px] leading-3 text-white/38">{item.text}</p></article>)}</div></div>
  }

  const itemsByState: Partial<Record<CreatorState, string[]>> = {
    initial: ["C# + .NET", "Animación digital", "Disponible"],
    projects: ["Sitios a la medida", "Diseño con intención", "Soluciones funcionales"],
  }
  const items = itemsByState[state]

  return (
    <div className="creator-panel-in flex h-full flex-col p-4">
      <p className="font-mono text-[8px] uppercase tracking-[.18em]" style={{ color: accent }}>
        {meta.eyebrow}
      </p>
      <div className="mt-2 grid min-h-0 flex-[1.1] grid-cols-1 gap-4 sm:grid-cols-[1fr_1.25fr]">
        <div>
          <h2 className="text-xl font-semibold tracking-[-.04em]">{meta.title}</h2>
          <p className="mt-2 text-[9px] leading-4 text-white/52">{meta.description}</p>
          {state === "initial" && (
            <button type="button" onClick={() => onNavigate("projects")} className="mt-3 flex items-center gap-2 rounded-full border border-[#ff2a2a]/70 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[.12em] text-[#ff4a4a]">
              Explorar perfil <ArrowRight className="h-3 w-3" />
            </button>
          )}
          {state === "projects" && (
            <a href="https://web-code-website.vercel.app/" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#ff2a2a]/70 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[.12em] text-[#ff4a4a]">
              Visitar WebCode <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
        <div className="relative min-h-[102px] overflow-hidden rounded-xl border border-[#ff2a2a]/20 bg-[radial-gradient(circle_at_center,rgba(30,144,255,.14),transparent_65%)]">
          <Image src="/assets/brand/webcode-logo-oficial-transparente.png" alt="WebCode" fill sizes="360px" className="object-contain p-5 transition-transform duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a10]/25 to-transparent" />
        </div>
      </div>
      {items && (
        <div className="mt-3 grid min-h-0 flex-1 grid-cols-3 gap-2">
          {items.map((item, index) => (
            <div key={item} className="creator-card group relative h-full overflow-hidden p-2 text-left">
              <span className="font-mono text-[7px] text-white/25">0{index + 1}</span>
              <p className="mt-3 truncate text-[9px] font-semibold group-hover:text-[#ff4545]">{item}</p>
              <span className="mt-1 block text-[7px] uppercase tracking-[.1em] text-white/32">Perfil verificado</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function SecondaryMonitor({ state }: { state: CreatorState }) {
  const meta = creatorStateMeta[state]
  const entries = state === "education"
    ? ["Ing. Animación Digital", "Producción Cinematográfica", "Master en JavaScript"]
    : state === "skills"
      ? ["C# · .NET Core", "SQL Server · Web API", "JavaScript · HTML5"]
      : state === "contact"
        ? ["Disponible para colaborar", "Respuesta en menos de 24 h", "Canal directo abierto"]
        : [meta.title, "Perfil técnico + creativo", "Disponible para oportunidades"]

  return <div className="creator-panel-in h-full overflow-hidden rounded-xl border border-white/10 bg-[#070a10]/95 p-3 shadow-[inset_0_0_30px_rgba(30,144,255,.05)]"><div className="flex items-center justify-between border-b border-white/8 pb-2"><span className="font-mono text-[7px] uppercase tracking-[.14em] text-[#ff4545]">Perfil activo</span><Radio className="h-3 w-3 text-[#ff2a2a]" /></div><div className="mt-3 space-y-2">{entries.map((entry,index) => <div key={entry} className="flex gap-2 text-[7px] leading-3 text-white/48"><span className={index === 1 ? "text-[#1e90ff]" : "text-[#ff4545]"}>●</span><span><strong className="font-medium text-white/68">{index === 0 ? "diego.profile" : index === 1 ? "webcode.log" : "career.status"}</strong><br />{entry}</span></div>)}</div><div className="mt-3 grid grid-cols-2 gap-1.5"><div className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/8 bg-black/30"><Image src="/assets/brand/diego-portrait-original.png" alt="Diego Escobar" fill sizes="100px" className="object-cover object-top" /></div><div className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/8 bg-black/30"><Image src="/assets/brand/webcode-logo-oficial-transparente.png" alt="WebCode" fill sizes="100px" className="object-contain p-2" /></div></div><div className="mt-3 rounded-lg border border-white/8 p-2"><p className="font-mono text-[7px] uppercase tracking-[.12em] text-white/32">Status</p><div className="mt-2 grid grid-cols-3 gap-1">{["Analizar","Crear","Mejorar"].map(step => <span key={step} className="rounded-sm border border-white/10 bg-white/[.025] px-1 py-2 text-center text-[6px] text-white/40">{step}</span>)}</div></div></div>
}

export function CreatorRoom() {
  const [active, setActive] = useState<CreatorState>("initial")
  const [lightsOn, setLightsOn] = useState(true)
  const mobilePanelRef = useRef<HTMLDivElement>(null)
  const audio = useLabAudio()
  const waveWorking = waveWorkingStates.has(active)
  const waveAsset = waveWorking ? "/assets/wave/wave-programando-transparent.png" : "/assets/wave/poses-v4/wave-apuntando-izquierda-v4.png"

  function navigate(state: CreatorState) {
    setActive(state)
    if (window.matchMedia("(max-width: 1279px)").matches) requestAnimationFrame(() => mobilePanelRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }))
  }

  return <main id="contenido" tabIndex={-1} data-creator-state={active} className="min-h-screen overflow-hidden bg-[#050608] text-white">
    <section aria-label="Diego's Creator Room" className="relative hidden h-[100svh] min-h-[720px] overflow-hidden xl:block">
      <Image src="/assets/creator-room/creator-room-background-v2-neon-city.png" alt="Estudio creativo nocturno de Diego con monitores, tableta, lata Neon City, audífonos WebCode y storyboards" fill priority loading="eager" sizes="100vw" className={`object-cover object-center transition-[filter,opacity] duration-700 ${lightsOn ? "opacity-100" : "opacity-65 brightness-[.62] saturate-[.75]"}`} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_45%_34%,transparent_20%,rgba(1,2,5,.12)_58%,rgba(1,2,5,.48)_100%)]" />

      <div className="absolute bottom-[1.2%] left-[.55%] top-[1.2%] z-40 w-[14.8%]"><CreatorSidebar active={active} onNavigate={navigate} audioPlaying={audio.playing} onToggleAudio={audio.toggle} /></div>

      <header className="absolute left-[28%] top-[1.2%] z-30 text-center">
        <p className="creator-signature text-3xl text-[#ff3535]">Diego&apos;s</p>
        <h1 className="mt-[-4px] text-[2.35rem] font-light uppercase tracking-[.18em]">Creator Room</h1>
        <p className="mt-1 text-[10px] uppercase tracking-[.34em] text-[#4f6fff]">Late night session</p>
      </header>

      <div className="absolute right-[2.2%] top-[2.2%] z-40 flex items-center gap-2">
        <button type="button" onClick={() => setLightsOn(current => !current)} aria-pressed={lightsOn} className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-[#07090d]/90 text-white/60 backdrop-blur-md" aria-label={lightsOn ? "Atenuar Creator Room" : "Encender Creator Room"}><LightbulbIcon /></button>
      </div>

      <div className="absolute left-[24.8%] top-[15.5%] z-20 h-[35.5%] w-[32.3%] overflow-hidden rounded-xl border bg-[#07090d]/96 transition-[border-color,box-shadow] duration-500" style={{ borderColor: `${accentByState[active]}38`, boxShadow: `0 0 38px ${accentByState[active]}22, inset 0 0 28px ${accentByState[active]}0b` }}><StatePanel state={active} onNavigate={navigate} /></div>
      <div className="absolute left-[57.7%] top-[8.7%] z-20 h-[41%] w-[13.9%]"><SecondaryMonitor state={active} /></div>

      <div className={`creator-wave absolute left-[18.3%] z-30 transition-[top,width] duration-500 ${waveWorking ? "top-[51.5%] w-[13%]" : "top-[50.8%] w-[11%]"}`}><Image key={waveAsset} src={waveAsset} alt={`Wave reaccionando a ${creatorStateMeta[active].title}`} width={700} height={700} loading="eager" className={`h-auto w-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,.66)] ${waveWorking ? "" : "-scale-x-100"}`} /></div>

      <div className="absolute bottom-[2%] left-[17%] z-30 w-[54.5%] rounded-xl border border-white/10 bg-[#07090d]/92 p-3 backdrop-blur-xl"><p className="font-mono text-[8px] uppercase tracking-[.15em] text-white/46">Lo que hago</p><div className="mt-2 grid grid-cols-4 divide-x divide-white/8">{creatorServices.map(({title,text,icon:Icon}) => <article key={title} className="px-3 first:pl-0 last:pr-0"><Icon className="h-5 w-5 text-[#c456ff]" strokeWidth={1.5} /><h2 className="mt-2 text-[9px] font-semibold uppercase">{title}</h2><p className="mt-1 text-[8px] leading-3 text-white/42">{text}</p></article>)}</div></div>
      <div className="absolute bottom-[2%] right-[.8%] z-30 w-[27%] rounded-xl border border-white/10 bg-[#07090d]/92 p-4 backdrop-blur-xl"><p className="font-mono text-[8px] uppercase tracking-[.15em] text-white/46">Mi filosofía</p><div className="mt-3 flex gap-3"><Quote className="h-5 w-5 shrink-0 text-[#ff2a2a]" /><p className="text-[10px] leading-4 text-white/62">No busco ser el mejor,<br />busco ser mejor que ayer.<span className="mt-2 block text-right italic text-[#ff4545]">— Diego</span></p><div className="relative ml-auto hidden aspect-[4/3] w-28 overflow-hidden rounded-lg 2xl:block"><Image src="/assets/creator-room/beyond-frames-v1.png" alt="Concepto visual de Diego" fill sizes="112px" className="object-cover" /></div></div></div>
    </section>

    <section className="relative min-h-screen xl:hidden">
      <div className="fixed inset-0 -z-10"><Image src="/assets/creator-room/creator-room-background-v2-neon-city.png" alt="" fill sizes="100vw" className={`object-cover object-[62%_center] transition-[filter,opacity] duration-700 ${lightsOn ? "opacity-35" : "opacity-20 brightness-50"}`} /><div className="absolute inset-0 bg-gradient-to-b from-[#050608]/35 via-[#050608]/82 to-[#050608]" /></div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090d]/92 backdrop-blur-xl"><div className="flex h-16 items-center justify-between px-4"><Link href="/"><Image src="/assets/brand/webcode-logo-oficial-transparente.png" alt="WebCode" width={180} height={54} className="h-auto w-32" /></Link><div className="flex items-center gap-2"><LabAudioControl compact playing={audio.playing} volume={audio.volume} onToggle={audio.toggle} onVolumeChange={audio.setVolume} label="Focus mode" contextName="Creator Room" /><Link href="/#equipo" className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 text-white/65" aria-label="Volver al equipo"><ArrowLeft className="h-4 w-4" /></Link></div></div><nav aria-label="Secciones del Creator Room" className="flex gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{creatorNavigation.map(({id,shortLabel,icon:Icon}) => <button key={id} type="button" onClick={() => navigate(id)} aria-pressed={active === id} className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-[10px] ${active === id ? "border-[#ff2a2a]/60 bg-[#ff2a2a]/12 text-white" : "border-white/10 text-white/48"}`}><Icon className="h-3.5 w-3.5" />{shortLabel}</button>)}</nav></header>
      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6"><div className="text-center"><p className="creator-signature text-3xl text-[#ff3535]">Diego&apos;s</p><h1 className="text-4xl font-light uppercase tracking-[.14em]">Creator Room</h1><p className="mt-2 text-[9px] uppercase tracking-[.3em] text-[#637cff]">Late night session</p></div><div className="relative mt-6 h-64 overflow-hidden rounded-3xl border border-white/10"><Image src="/assets/creator-room/creator-room-background-v2-neon-city.png" alt="Creator Room de Diego con lata Neon City y audífonos WebCode" fill loading="eager" sizes="100vw" className="object-cover object-[57%_center]" /><div className="absolute inset-0 bg-gradient-to-t from-[#050608]/90 via-transparent to-[#050608]/20" /><div className={`absolute bottom-3 left-3 ${waveWorking ? "w-36" : "w-28"}`}><Image key={waveAsset} src={waveAsset} alt="Wave en el Creator Room" width={700} height={700} loading="eager" className={`h-auto w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,.7)] ${waveWorking ? "" : "-scale-x-100"}`} /></div><button type="button" onClick={() => setLightsOn(current => !current)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/14 bg-[#07090d]/85" aria-label={lightsOn ? "Atenuar Creator Room" : "Encender Creator Room"}><LightbulbIcon /></button></div><div ref={mobilePanelRef} className="creator-mobile-monitor mt-5 scroll-mt-32 overflow-hidden rounded-2xl border bg-[#07090d]/96 transition-colors duration-500" style={{ borderColor: `${accentByState[active]}42` }}><StatePanel state={active} onNavigate={navigate} /></div><div className="mt-5 grid gap-3 sm:grid-cols-2">{creatorServices.map(({title,text,icon:Icon}) => <article key={title} className="creator-card p-4"><Icon className="h-5 w-5 text-[#c456ff]" /><h2 className="mt-4 text-xs font-semibold uppercase">{title}</h2><p className="mt-2 text-[10px] leading-4 text-white/45">{text}</p></article>)}</div><div className="mt-5 rounded-2xl border border-white/10 bg-[#07090d]/92 p-5"><Quote className="h-5 w-5 text-[#ff2a2a]" /><p className="mt-3 text-sm leading-6 text-white/62">No busco ser el mejor, busco ser mejor que ayer.<span className="mt-2 block text-right italic text-[#ff4545]">— Diego</span></p></div></div>
    </section>
  </main>
}

function LightbulbIcon() {
  return <Lightbulb className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
}
