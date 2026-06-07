import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Loretta",
    category: "Aplicación Móvil",
    description: "Plataforma de gestión para freelancers. Organización de proyectos, tareas y estimación de precios.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "MVVM", "SOLID"],
    color: "#1B4F8A",
    link: null,
  },
  {
    title: "Fiborti Analytics",
    category: "Aplicación Web",
    description: "Plataforma de marketing y analítica empresarial con chatbot de IA integrado.",
    tags: ["Flutter Web", "Firebase", "IA"],
    color: "#1D9E75",
    link: null,
  },
  {
    title: "Thodri Gis — Aceites Medicinales",
    category: "Página Web",
    description: "Sitio web de catálogo y ventas para negocio de aceites y jabones medicinales artesanales.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    color: "#8B6914",
    link: "https://thodriaceites.vercel.app",
  },
]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project preview placeholder */}
              <div
                className="aspect-video flex items-center justify-center relative"
                style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)` }}
              >
                <div className="font-mono text-muted-foreground text-sm">
                  {"<"} Preview {"/>"}
                </div>
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
          ))}
        </div>
      </div>
    </section>
  )
}
