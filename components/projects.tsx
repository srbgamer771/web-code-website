import Image from "next/image"
import { ExternalLink } from "lucide-react"

type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  color: string
  link: string | null
  image: string | null
  isDesign?: boolean
}

const developmentProjects: Project[] = [
  {
    title: "Loretta",
    category: "Aplicacion Web",
    description: "Plataforma de gestión para freelancers. Organización de proyectos, tareas y estimación de precios.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "MVVM", "SOLID"],
    color: "#1B4F8A",
    link: null,
    image: "/images/loretta-preview.png",
  },
  {
    title: "Fiborti Analytics",
    category: "Sitio Web",
    description: "Plataforma de marketing y analítica empresarial con chatbot de IA integrado.",
    tags: ["Flutter Web", "Firebase", "IA"],
    color: "#1D9E75",
    link: null,
    image: "/images/fiborti-preview.png",
  },
  {
    title: "Thodri Gis — Aceites Medicinales",
    category: "Página Web",
    description: "Sitio web de catálogo y ventas para negocio de aceites y jabones medicinales artesanales.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    color: "#8B6914",
    link: "https://thodriaceites.vercel.app",
    image: "/images/projects/thodri-preview.png",
  },
]

const brandingProjects: Project[] = [
  {
    title: "Yaneth Rivera Guerra — Odontología Pediátrica",
    category: "Branding / Identidad Visual",
    description: "Diseño de logo e identidad de marca para consultorio de odontología pediátrica, con mascota ilustrada y paleta de colores cálida pensada para niños.",
    tags: ["Branding", "Diseño de Logo", "Identidad Visual"],
    color: "#7DBE7C",
    link: null,
    image: "/images/yaneth-logo-preview.png",
    isDesign: true,
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
      {/* Project preview */}
      <div
        className="aspect-video relative overflow-hidden"
        style={project.isDesign ? { backgroundColor: "#F7FAF6" } : undefined}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className={project.isDesign ? "object-contain p-4" : "object-cover"}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)` }}
          >
            <div className="font-mono text-muted-foreground text-sm">
              {"<"} Preview {"/>"}
            </div>
          </div>
        )}
        {project.link && (
          <div className="absolute top-2 right-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-foreground" />
            </a>
          </div>
        )}
        {project.isDesign && (
          <div className="absolute top-2 left-2">
            <span
              className="px-3 py-1 bg-background/80 backdrop-blur-sm text-sm font-medium rounded-lg border"
              style={{ color: project.color, borderColor: `${project.color}66` }}
            >
              🎨 Diseño
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-primary text-sm font-medium">{project.category}</span>
          {!project.link && (
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-50" />
          )}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">PROYECTOS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nuestro trabajo habla por nosotros
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Algunos ejemplos de proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div>
          <h3 className="text-[13px] text-[#1E88E5] uppercase tracking-[0.22em] text-left mb-5">
            Desarrollo de Software
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {developmentProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-[60px]">
          <h3 className="text-[13px] text-[#1E88E5] uppercase tracking-[0.22em] text-left mb-5">
            Diseño y Branding
          </h3>
          <div className="grid grid-cols-1 max-w-[500px] mx-auto">
            {brandingProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
