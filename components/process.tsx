import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consulta",
    description: "Conversamos sobre tu proyecto, objetivos y necesidades para entender exactamente lo que buscas.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Planificación",
    description: "Diseñamos la arquitectura y creamos un plan detallado con tiempos y entregables claros.",
  },
  {
    icon: Code,
    step: "03",
    title: "Desarrollo",
    description: "Construimos tu solución con las mejores tecnologías, manteniéndote informado del progreso.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lanzamiento",
    description: "Desplegamos tu proyecto y te brindamos capacitación para que puedas gestionarlo.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">PROCESO</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Cómo trabajamos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un proceso claro y transparente para llevar tu proyecto del concepto a la realidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-border"></div>
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-primary/40 font-mono text-4xl font-bold absolute top-0 right-0 lg:right-auto lg:left-20">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
