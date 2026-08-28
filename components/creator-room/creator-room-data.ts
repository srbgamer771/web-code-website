import {
  Aperture,
  BriefcaseBusiness,
  Code2,
  Contact,
  FolderOpen,
  GraduationCap,
  House,
  Palette,
  ServerCog,
  UserRound,
} from "lucide-react"

export type CreatorState =
  | "initial"
  | "projects"
  | "skills"
  | "education"
  | "experience"
  | "creative"
  | "process"
  | "about"
  | "contact"

export const creatorNavigation = [
  { id: "initial" as const, label: "Inicio", shortLabel: "Inicio", icon: House },
  { id: "projects" as const, label: "Proyectos", shortLabel: "Proyectos", icon: FolderOpen },
  { id: "skills" as const, label: "Habilidades", shortLabel: "Skills", icon: Code2 },
  { id: "education" as const, label: "Formación", shortLabel: "Formación", icon: GraduationCap },
  { id: "experience" as const, label: "Experiencia", shortLabel: "Experiencia", icon: BriefcaseBusiness },
  { id: "creative" as const, label: "Perfil creativo", shortLabel: "Creativo", icon: Palette },
  { id: "process" as const, label: "Proceso de trabajo", shortLabel: "Proceso", icon: Aperture },
  { id: "about" as const, label: "Sobre mí", shortLabel: "Perfil", icon: UserRound },
  { id: "contact" as const, label: "Contacto", shortLabel: "Contacto", icon: Contact },
]

export const creatorStateMeta: Record<CreatorState, { eyebrow: string; title: string; description: string }> = {
  initial: {
    eyebrow: "Digital animation + development",
    title: "De la animación al desarrollo web",
    description: "Ingeniero en Animación Digital especializado en Programación, con experiencia construyendo aplicaciones web con C# y tecnologías .NET.",
  },
  projects: {
    eyebrow: "Selected work",
    title: "WebCode",
    description: "Emprendimiento de programación y diseño web donde convierto requerimientos reales en soluciones digitales funcionales y visualmente cuidadas.",
  },
  skills: {
    eyebrow: "Technical stack",
    title: "Código, datos y web",
    description: "Un stack centrado en C# y .NET, complementado con bases de datos, servicios web y herramientas modernas de frontend.",
  },
  education: {
    eyebrow: "Education log",
    title: "Formación y certificaciones",
    description: "Ingeniería, producción cinematográfica y aprendizaje técnico continuo como base de un perfil híbrido.",
  },
  experience: {
    eyebrow: "Professional profile",
    title: "Dos años resolviendo con código",
    description: "Experiencia en desarrollo de aplicaciones web, análisis de requerimientos y construcción de soluciones con tecnologías Microsoft.",
  },
  creative: {
    eyebrow: "Hybrid mindset",
    title: "Lógica con sensibilidad visual",
    description: "La formación en animación aporta composición, narrativa y atención al detalle; la programación convierte esas ideas en productos funcionales.",
  },
  process: {
    eyebrow: "Work protocol",
    title: "Del requerimiento a la solución",
    description: "Un proceso claro para entender el problema, diseñar la respuesta, desarrollar, probar y mejorar.",
  },
  about: {
    eyebrow: "About Diego",
    title: "Diego Cesar Escobar Martinez",
    description: "Ingeniero en Animación Digital con especialidad en Programación. Autodidacta, responsable, adaptable y orientado a resultados.",
  },
  contact: {
    eyebrow: "Open channel",
    title: "Construyamos algo juntos",
    description: "Disponible para proyectos freelance, colaboraciones y oportunidades de desarrollo web a tiempo completo.",
  },
}

export const creatorServices = [
  { title: "Desarrollo .NET", text: "Aplicaciones web con C#, .NET Core, MVC y Web API.", icon: ServerCog },
  { title: "Frontend web", text: "Interfaces con HTML5, JavaScript, jQuery y fundamentos modernos.", icon: Code2 },
  { title: "Datos y servicios", text: "SQL Server, Web Services e integración de soluciones.", icon: BriefcaseBusiness },
  { title: "Visión creativa", text: "Detalle visual, narrativa y composición desde la animación digital.", icon: Palette },
]

export const creatorSkills = [
  "C#",
  ".NET Core",
  "MVC",
  "Web API",
  "SQL Server",
  "JavaScript",
  "jQuery",
  "HTML5",
  "Python",
]

export const creatorEducation = [
  {
    type: "Licenciatura",
    title: "Ingeniería en Animación Digital",
    detail: "Universidad Anáhuac Mayab · 2019–2025",
    note: "Título profesional expedido y autenticado por la SEP en 2026.",
    href: "https://www.siged.sep.gob.mx/titulos/autenticacion/",
    linkLabel: "Verificar título",
  },
  {
    type: "Diploma Minor",
    title: "Producción Cinematográfica",
    detail: "Universidad Anáhuac Mayab · noviembre 2025",
    note: "Formación complementaria en producción y lenguaje audiovisual.",
  },
  {
    type: "Certificación",
    title: "Master en JavaScript",
    detail: "Udemy · 33 horas · Víctor Robles",
    note: "JavaScript, jQuery, Angular y Node.js.",
    href: "https://ude.my/UC-c2dd4d67-bddf-4ba1-94ae-dd2ad22c1cf7",
    linkLabel: "Ver certificado",
  },
]
