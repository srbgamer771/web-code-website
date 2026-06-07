import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                &lt;/&gt;
              </div>
              <span className="font-bold text-white text-lg">
                Web Code
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Servicios
            </Link>
            <Link href="#proceso" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Proceso
            </Link>
            <Link href="#proyectos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Proyectos
            </Link>
            <Link href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contacto
            </Link>
          </nav>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Web Code. Todos los derechos reservados.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-primary/60 font-mono text-xs">
            {"</"} Conectando ideas, creando futuro {">"}
          </p>
        </div>
      </div>
    </footer>
  )
}
