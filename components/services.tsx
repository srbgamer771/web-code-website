import { Globe, Smartphone, Code2, Palette, Zap, Shield, Video, Megaphone } from "lucide-react"
import { SpiderWeb, SpiderWebCorner } from "@/components/spider-web"

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description: "Sitios web modernos, responsivos y optimizados para SEO que representan tu marca de manera profesional.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Web",
    description: "Aplicaciones web progresivas que funcionan en cualquier dispositivo con experiencias fluidas.",
  },
  {
    icon: Video,
    title: "Animación",
    description: "Animaciones y motion graphics que dan vida a tu marca y capturan la atención de tu audiencia.",
  },
  {
    icon: Megaphone,
    title: "Publicidad Digital",
    description: "Estrategias de marketing digital y campañas publicitarias que impulsan tu visibilidad online.",
  },
  {
    icon: Code2,
    title: "Desarrollo a Medida",
    description: "Soluciones de software personalizadas que se adaptan exactamente a las necesidades de tu negocio.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que mejoran la experiencia de tus usuarios.",
  },
  {
    icon: Zap,
    title: "Optimización",
    description: "Mejoramos el rendimiento y velocidad de tus aplicaciones existentes.",
  },
  {
    icon: Shield,
    title: "Mantenimiento",
    description: "Soporte continuo y actualizaciones para mantener tu sitio seguro y actualizado.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-24 px-4 overflow-hidden">
      {/* Decorative webs - more visible */}
      <SpiderWeb className="absolute -right-32 top-1/4 w-[600px] h-[600px] text-primary/30 pointer-events-none animate-web-pulse" />
      <SpiderWeb className="absolute -left-40 bottom-1/4 w-[500px] h-[500px] text-accent/25 pointer-events-none animate-web-rotate" />
      <SpiderWebCorner className="absolute top-0 right-0 w-64 h-64 text-primary/40 pointer-events-none" flip />
      <SpiderWebCorner className="absolute bottom-0 left-0 w-48 h-48 text-accent/30 pointer-events-none rotate-90" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">SERVICIOS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Todo lo que necesitas para tu presencia digital
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones completas para llevar tu negocio al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Mini web decoration on hover */}
              <div className="absolute -right-8 -top-8 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <SpiderWeb className="w-full h-full text-primary/20" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
