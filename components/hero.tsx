"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SpiderWeb, SpiderWebCorner } from "@/components/spider-web"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Extra decorative webs layered on top of background */}
      <SpiderWeb className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] text-primary/25 pointer-events-none animate-web-rotate" />
      
      {/* Corner webs for extra depth */}
      <SpiderWebCorner className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 text-accent/40 pointer-events-none animate-web-float" />
      <SpiderWebCorner className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 text-primary/40 pointer-events-none" flip />
      <SpiderWebCorner className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 text-primary/30 pointer-events-none rotate-90" />
      <SpiderWebCorner className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 text-accent/30 pointer-events-none rotate-90" flip />
      
      <div className="container mx-auto text-center relative z-10">
        <p className="text-accent font-mono text-sm md:text-base tracking-widest mb-6">
          {"<"} CONECTANDO IDEAS, CREANDO FUTURO {"/>"}
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
          Transformamos tus ideas<br />
          en{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            soluciones digitales
          </span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance">
          Desarrollamos páginas web y software a medida que impulsan tu negocio hacia el futuro digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contacto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Comenzar Proyecto
              <ArrowRight size={18} />
            </Button>
          </Link>
          <Link href="#proyectos">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Ver Proyectos
            </Button>
          </Link>
        </div>

        {/* Code snippet decoration */}
        <div className="mt-16 max-w-lg mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 text-left font-mono text-sm">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              <div className="w-3 h-3 rounded-full bg-accent/60"></div>
              <div className="w-3 h-3 rounded-full bg-muted-foreground/40"></div>
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
{`const webCode = {
  `}<span className="text-primary">servicios</span>{`: ["Páginas Web", "Apps"],
  `}<span className="text-accent">tecnologías</span>{`: ["React", "Next.js"],
  `}<span className="text-foreground">objetivo</span>{`: "Tu éxito digital"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Wave floating in bottom right corner - desktop only */}
      <motion.div
        className="absolute bottom-8 right-8 hidden md:block z-20"
        animate={{
          translateY: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/wave.png"
          alt="Wave Spider Mascot"
          width={200}
          height={200}
          className="w-[200px] h-[200px] object-contain"
          style={{ filter: "drop-shadow(0 0 20px rgba(229, 57, 53, 0.3))" }}
          priority
        />
      </motion.div>
    </section>
  )
}
