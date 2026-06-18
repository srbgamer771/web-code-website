import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WaveMascot } from "@/components/wave-mascot"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-24">
      <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <WaveMascot
          variant="error404"
          size="hero"
          className="mb-8 drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        />
        <p className="mb-4 font-mono text-sm tracking-widest text-primary">ERROR 404</p>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-6xl">
          Esta ruta se perdió en la web
        </h1>
        <p className="mb-8 max-w-xl text-lg text-muted-foreground">
          Wave no encontró la página que buscabas, pero podemos llevarte de vuelta al sitio principal.
        </p>
        <Link href="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Volver a WebCode
          </Button>
        </Link>
      </section>
    </main>
  )
}
