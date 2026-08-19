import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight, Braces, Layers3, Mail, MessageCircle, Palette, Sparkles, Target } from "lucide-react"

const profiles = {
  "santiago-rios": {
    name: "Santiago Ríos",
    role: "Developer / Product Builder",
    image: "/assets/brand/santiago-portrait-original.png",
    color: "#1e90ff",
    intro: "Convierte problemas complejos en productos digitales claros, rápidos y preparados para evolucionar.",
    bio: "Le importa tanto la lógica que sostiene una experiencia como la sensación que deja en quien la usa. Conecta estrategia de producto, diseño de interacción y desarrollo para construir soluciones útiles de principio a fin.",
    skills: ["Producto digital", "Desarrollo web", "Flutter", "Arquitectura frontend", "Firebase", "UX/UI"],
    areas: [
      { title: "Producto", text: "Define alcance, prioridades y decisiones centradas en el valor real del producto.", icon: Target },
      { title: "Desarrollo", text: "Construye interfaces sólidas, rápidas y escalables para web y aplicaciones.", icon: Braces },
      { title: "Experiencia", text: "Une lógica, interacción y detalle visual para que cada flujo se sienta natural.", icon: Layers3 },
    ],
  },
  "diego-escobar": {
    name: "Diego Escobar",
    role: "Creative / Brand Direction",
    image: "/assets/brand/diego-portrait-original.png",
    color: "#ff2a2a",
    intro: "Da dirección, carácter y una voz propia a marcas que necesitan conectar y ser recordadas.",
    bio: "Une estrategia, narrativa y sensibilidad visual para que cada punto de contacto comunique con intención. Su trabajo busca que una marca no solo se vea bien, sino que tenga una idea clara detrás.",
    skills: ["Branding", "Dirección creativa", "Identidad visual", "Contenido", "UX/UI", "Estrategia"],
    areas: [
      { title: "Estrategia de marca", text: "Convierte objetivos y personalidad en una dirección creativa coherente.", icon: Target },
      { title: "Identidad visual", text: "Construye sistemas visuales reconocibles, flexibles y con carácter propio.", icon: Palette },
      { title: "Comunicación", text: "Alinea narrativa, contenido y experiencia para que la marca conecte de verdad.", icon: Sparkles },
    ],
  },
} as const

export function generateStaticParams() {
  return Object.keys(profiles).map(slug => ({ slug }))
}

export default async function TeamProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const profile = profiles[slug as keyof typeof profiles]
  if (!profile) notFound()

  return <main id="contenido" tabIndex={-1} className="min-h-screen overflow-hidden bg-[#090b10] text-white">
    <header className="border-b border-white/[0.08] bg-[#090b10]/90 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 md:px-10"><Link href="/" aria-label="Regresar al inicio"><Image src="/assets/brand/webcode-logo-oficial-transparente.png" alt="WebCode" width={210} height={62} className="h-auto w-40 md:w-48" priority /></Link><Link href="/#equipo" className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/70 transition hover:border-white/35 hover:text-white"><ArrowLeft className="h-4 w-4" />Volver al equipo</Link></div></header>

    <section className="relative isolate"><div className="pointer-events-none absolute inset-0 -z-10" style={{ background: `radial-gradient(circle at 72% 32%, ${profile.color}22, transparent 32%)` }} /><div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-16 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:py-24"><div><p className="font-mono text-[10px] uppercase tracking-[.2em]" style={{ color: profile.color }}>WebCode / Perfil</p><h1 className="mt-5 text-5xl font-bold leading-[.92] tracking-[-.065em] md:text-7xl">{profile.name}</h1><p className="mt-5 font-mono text-xs uppercase tracking-[.13em] text-white/60">{profile.role}</p><p className="mt-8 max-w-xl text-xl leading-8 text-white/70">{profile.intro}</p><div className="mt-8 flex flex-wrap gap-2">{profile.skills.map(skill => <span key={skill} className="rounded-full border border-white/12 bg-white/[0.035] px-3 py-1.5 text-xs text-white/68">{skill}</span>)}</div></div><div className="relative overflow-hidden rounded-3xl border bg-[#0d1119]" style={{ borderColor: `${profile.color}55` }}><Image src={profile.image} alt={profile.name} width={1122} height={1440} className="h-[520px] w-full object-cover object-top" priority /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090b10] to-transparent" /></div></div></section>

    <section className="border-y border-white/[0.08] bg-[#0b0e15]"><div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 md:px-10 lg:grid-cols-[.65fr_1.35fr]"><div><p className="font-mono text-[10px] uppercase tracking-[.2em]" style={{ color: profile.color }}>Sobre su trabajo</p><h2 className="mt-5 text-4xl font-bold tracking-[-.055em]">Ideas con intención.<br />Ejecución con detalle.</h2><p className="mt-6 max-w-md text-sm leading-7 text-white/70">{profile.bio}</p></div><div className="grid gap-4 md:grid-cols-3">{profile.areas.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-2xl border border-white/[0.09] bg-[#0d1119] p-5"><span className="grid h-11 w-11 place-items-center rounded-xl border" style={{ color: profile.color, borderColor: `${profile.color}55`, background: `${profile.color}12` }}><Icon className="h-5 w-5" strokeWidth={1.6} /></span><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/68">{text}</p></article>)}</div></div></section>

    <section className="mx-auto max-w-[1320px] px-5 py-20 md:px-10"><div className="flex flex-col justify-between gap-8 rounded-3xl border border-white/15 bg-white/[0.025] p-8 md:flex-row md:items-center md:p-12"><div><p className="font-mono text-[10px] uppercase tracking-[.2em]" style={{ color: profile.color }}>Construyamos algo juntos</p><h2 className="mt-4 text-3xl font-bold tracking-[-.045em]">¿Tienes un proyecto en mente?</h2></div><div className="flex flex-wrap gap-3"><a href="mailto:WebCodeOfficial1@gmail.com" className="flex items-center gap-2 rounded-xl bg-[#ff2a2a] px-5 py-3.5 text-sm font-bold transition hover:bg-[#ff4545]"><Mail className="h-4 w-4" />Enviar correo <ArrowRight className="h-4 w-4" /></a><a href="https://wa.me/529992782716" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-bold transition hover:border-[#1e90ff]/60"><MessageCircle className="h-4 w-4" />WhatsApp <ArrowUpRight className="h-4 w-4" /></a></div></div></section>
  </main>
}
