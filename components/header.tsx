"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              &lt;/&gt;
            </div>
            <span className="font-bold text-white text-lg">
              Web Code
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </Link>
          <Link href="#proceso" className="text-muted-foreground hover:text-foreground transition-colors">
            Proceso
          </Link>
          <Link href="#proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
            Proyectos
          </Link>
          <Link href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="#contacto">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Cotizar Proyecto
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4">
          <Link
            href="#servicios"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="#proceso"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Proceso
          </Link>
          <Link
            href="#proyectos"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Proyectos
          </Link>
          <Link
            href="#contacto"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
          <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
              Cotizar Proyecto
            </Button>
          </Link>
        </nav>
      )}
    </header>
  )
}
