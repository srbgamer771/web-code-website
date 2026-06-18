"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Send, MessageCircle } from "lucide-react"
import { useState } from "react"
import { SpiderWeb, SpiderWebCorner } from "@/components/spider-web"
import { WaveMascot } from "@/components/wave-mascot"
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Por favor, completa todos los campos.")
      setSubmitStatus("error")
      return
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Por favor, ingresa un email válido.")
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.status === 200) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
      setErrorMessage("Algo salió mal. Escríbenos a webcodeofficial1@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="relative py-24 px-4 bg-card/50 overflow-hidden">
      {/* Decorative webs */}
      <SpiderWebCorner className="absolute bottom-0 left-0 w-64 h-64 text-primary/15 pointer-events-none rotate-90" />
      <SpiderWeb className="absolute -left-20 top-1/3 w-[300px] h-[300px] text-accent/10 pointer-events-none" />
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">CONTACTO</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Hablemos</h3>
              <p className="text-muted-foreground">
                Estamos aquí para ayudarte a transformar tu visión en realidad digital. Contáctanos y comencemos a trabajar juntos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">webcodeofficial1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="text-foreground">Mérida, Yucatán — Trabajo remoto, disponibilidad global</p>
                </div>
              </div>

              <a
                href="https://wa.me/529994539777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">999 453 9777</p>
                </div>
              </a>
            </div>

            {/* Wave with speech bubble */}
            <div className="relative mt-8">
              <div className="bg-[#21262D] border border-red-500/30 rounded-lg p-3 mb-4 max-w-[200px]">
                <p className="text-white text-sm">
                  ¿En qué puedo ayudarte?
                </p>
              </div>
              <WaveMascot
                variant="soporte"
                size={120}
                className="drop-shadow-[0_12px_22px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Code decoration */}
            <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm">
              <pre className="text-muted-foreground">
                <code>
{`// Tu próximo proyecto
`}<span className="text-primary">await</span>{` webCode.crearSolucion({
  cliente: `}<span className="text-accent">{'"Tú"'}</span>{`,
  éxito: `}<span className="text-foreground">true</span>{`
});`}
                </code>
              </pre>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                ¡Mensaje enviado! Te contactamos pronto.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {errorMessage}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
