import Image from "next/image"
import { cn } from "@/lib/utils"

const WAVE_VARIANTS = {
  saludando: "/assets/wave/wave-saludando.png",
  error404: "/assets/wave/wave-error-404.png",
  soporte: "/assets/wave/wave-soporte.png",
  programando: "/assets/wave/wave-programando.png",
  llamada: "/assets/wave/wave-llamada.png",
} as const

const WAVE_ALT_TEXT: Record<WaveMascotVariant, string> = {
  saludando: "Wave saludando, mascota de WebCode",
  error404: "Wave en error 404, mascota de WebCode",
  soporte: "Wave dando soporte, mascota de WebCode",
  programando: "Wave programando, mascota de WebCode",
  llamada: "Wave en llamada, mascota de WebCode",
}

const WAVE_SIZES = {
  xs: { className: "h-8 w-8", pixels: 48 },
  sm: { className: "h-12 w-12", pixels: 72 },
  md: { className: "h-20 w-20", pixels: 120 },
  lg: { className: "h-32 w-32", pixels: 192 },
  xl: { className: "h-44 w-44", pixels: 264 },
  hero: { className: "h-52 w-52 md:h-72 md:w-72", pixels: 432 },
} as const

export type WaveMascotVariant = keyof typeof WAVE_VARIANTS
export type WaveMascotSize = keyof typeof WAVE_SIZES | number

type WaveMascotProps = {
  variant: WaveMascotVariant
  size?: WaveMascotSize
  className?: string
}

export function WaveMascot({ variant, size = "md", className }: WaveMascotProps) {
  const sizeConfig =
    typeof size === "number"
      ? { className: "", pixels: size }
      : WAVE_SIZES[size]

  const numericStyle =
    typeof size === "number"
      ? {
          width: `${size}px`,
          height: `${size}px`,
        }
      : undefined

  return (
    <Image
      src={WAVE_VARIANTS[variant]}
      alt={WAVE_ALT_TEXT[variant]}
      width={sizeConfig.pixels}
      height={sizeConfig.pixels}
      loading="lazy"
      className={cn("shrink-0 object-contain", sizeConfig.className, className)}
      style={numericStyle}
    />
  )
}
