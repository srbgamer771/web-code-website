# Rebranding Wave-First: Plan de Implementación de Identidad Visual

> **Para Web Code:** Este plan detalla los pasos técnicos y visuales para convertir a nuestra mascota, Wave (la araña amigable roja y azul), en la pieza central de nuestra marca, eliminando los clichés de código tradicionales (`</>`) y optimizando el rendimiento general del sitio web.

**Meta:** Sustituir la iconografía antigua de programación (`</>`) por Wave como isotipo oficial, optimizar el loader de la página reduciendo su tiempo de carga de 4.5s a 1.2s mediante una animación sutil ("Hilo Digital"), rediseñar el Hero para que sea un layout asimétrico con Wave como protagonista interactivo, y añadir micro-interacciones empáticas en el formulario de contacto (estados Enviando, Éxito y Error).

**Arquitectura:**
- **Framework:** Next.js (App Router) con TypeScript.
- **Estilos:** Tailwind CSS con variables CSS personalizadas.
- **Animaciones:** Framer Motion (optimizada para hardware bypass).
- **Consistencia:** Unificación del Isotipo de Wave en SVG nativo para garantizar escalabilidad, bajo peso (kb) e interactividad.

---

## 📋 TAREAS DE IMPLEMENTACIÓN PRIORIZADAS

### Tarea 1: Rediseño y Optimización del Loader (`components/loading-animation.tsx`)

**Objetivo:** Reducir la animación de carga a un máximo de 1.2 segundos mediante una animación de Wave descendiendo en un solo hilo, eliminando los glitches, burbujas de cómic y el logo viejo `</>`.

**Archivos:**
- Modificar: `Downloads/web-code-website/components/loading-animation.tsx`

**Código Propuesto:**
```tsx
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingAnimation() {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    // Sincronizar el desvanecimiento con la carga real de la página o un timeout estricto de 1.2s
    const handleLoad = () => {
      setTimeout(() => setShowAnimation(false), 1200)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      // Guard de seguridad por si el evento load tarda de más
      const safetyTimeout = setTimeout(handleLoad, 1500)
      return () => {
        window.removeEventListener("load", handleLoad)
        clearTimeout(safetyTimeout)
      }
    }
  }, [])

  if (!showAnimation) return null

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D1117] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Hilo de Seda Digital de Wave */}
          <motion.div 
            className="absolute top-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent"
            initial={{ height: 0 }}
            animate={{ height: "45vh" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Contenedor de Wave */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0vh", opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: 0.1
            }}
          >
            {/* Wave Mascot */}
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              {/* Aura de energía sutil */}
              <div className="absolute inset-0 rounded-full bg-radial-gradient from-primary/20 via-accent/10 to-transparent blur-xl" />
              <Image
                src="/images/wave-logo.png"
                alt="Wave, la mascota de Web Code"
                width={200}
                height={200}
                className="w-full h-full object-contain relative z-10"
                priority
              />
            </div>

            {/* Texto de Marca Limpio y Sutil */}
            <motion.h1
              className="mt-6 text-2xl md:text-3xl font-bold tracking-widest text-white font-sans"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              WEB CODE
            </motion.h1>
            <motion.p
              className="mt-1 text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              Estudio Creativo de Software
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

**Verificación:**
- Ejecutar el servidor de desarrollo localmente.
- Verificar que el loader se despliega rápidamente, Wave desciende con física de resorte (spring) natural, y desaparece en exactamente ~1.2 segundos sin retrasar el primer renderizado útil.
- Asegurarse de que no haya parpadeos de consola por Framer Motion.

---

### Tarea 2: Unificación de Branding en Header y Footer (`components/header.tsx`, `components/footer.tsx`)

**Objetivo:** Reemplazar el contenedor degradado que renderizaba `</>` por un Isotipo SVG minimalista de la cabeza de Wave. Remover brackets falsos de los slogans del Footer.

**Archivos:**
- Modificar: `Downloads/web-code-website/components/header.tsx`
- Modificar: `Downloads/web-code-website/components/footer.tsx`

**Definición del Isotipo SVG de Wave (`WaveIsotype`):**
```tsx
export function WaveIsotype({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Isotipo de Wave"
    >
      {/* Cuerpo/Cabeza simplificada de Wave */}
      <circle cx="50" cy="50" r="36" fill="url(#waveGrad)" stroke="#1F2937" strokeWidth="2" />
      
      {/* Ojitos Cartoon */}
      <ellipse cx="38" cy="46" rx="9" ry="14" fill="white" />
      <ellipse cx="62" cy="46" rx="9" ry="14" fill="white" />
      
      {/* Pupilas (Mirando al centro de forma simpática) */}
      <circle cx="41" cy="46" r="4.5" fill="#0F172A" />
      <circle cx="59" cy="46" r="4.5" fill="#0F172A" />
      
      {/* Brillo de los ojos */}
      <circle cx="39" cy="42" r="2" fill="white" />
      <circle cx="57" cy="42" r="2" fill="white" />

      {/* Mejillas sonrojadas */}
      <ellipse cx="30" cy="58" rx="4.5" ry="2.5" fill="#EF4444" opacity="0.5" />
      <ellipse cx="70" cy="58" rx="4.5" ry="2.5" fill="#EF4444" opacity="0.5" />

      {/* Sonrisa amigable */}
      <path
        d="M 44 58 Q 50 63 56 58"
        stroke="#0F172A"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Pequeñas antenas/patitas de logo en los bordes de la cabeza */}
      <path d="M 14 50 Q 6 48 2 54" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <path d="M 86 50 Q 94 48 98 54" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />

      {/* Gradiente oficial */}
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#DC2626" /> {/* Rojo Coral Premium */}
          <stop offset="100%" stopColor="#2563EB" /> {/* Azul Eléctrico */}
        </linearGradient>
      </defs>
    </svg>
  )
}
```

**Modificaciones en Footer (`components/footer.tsx`):**
- Cambiar la caja degradada por `<WaveIsotype className="w-9 h-9" />`.
- En la línea 40-42, cambiar la línea con brackets:
  ```tsx
  // Antes:
  // {"</"} Conectando ideas, creando futuro {">"}
  // Después:
  Conectando ideas, creando futuro
  ```

**Verificación:**
- Validar visualmente que el isotipo SVG se dibuje de forma perfecta en pantallas Retina/móviles.
- Confirmar que ya no exista ningún símbolo `<>` en la barra de navegación ni en el footer.

---

### Tarea 3: Rediseño del Hero Section (`components/hero.tsx`)

**Objetivo:** Transformar el Hero Section en un grid asimétrico de dos columnas en escritorio. Incorporar a Wave en el lado derecho flotando interactivamente sobre un mockup de navegador elegante, sustituyendo los brackets antiguos.

**Archivos:**
- Modificar: `Downloads/web-code-website/components/hero.tsx`

**Modificaciones:**
1. Cambiar el texto de brackets `{"<"} CONECTANDO IDEAS, CREANDO FUTURO {"/>"}` por:
   ```tsx
   <span className="text-accent font-mono text-sm md:text-base tracking-widest uppercase mb-4">
     Conectando Ideas · Creando Futuro
   </span>
   ```
2. Reestructurar el layout a un grid:
   ```tsx
   <div className="container mx-auto px-4 relative z-10">
     <div className="grid lg:grid-cols-12 gap-12 items-center text-left">
       {/* Columna Izquierda: Contenido */}
       <div className="lg:col-span-7 space-y-6">
         {/* Título, Subtítulo, Botones */}
       </div>
       
       {/* Columna Derecha: Wave y su Mockup */}
       <div className="lg:col-span-5 relative flex justify-center items-center">
         {/* Ventana de Navegador Mockup con Wave colgado */}
       </div>
     </div>
   </div>
   ```

3. Incorporar micro-animaciones en Framer Motion para Wave:
   - Parpadeo periódico con `animate={{ scaleY: [1, 0.1, 1] }}` de forma aleatoria.
   - Flotación sinusoidal sutil en eje Y.

**Verificación:**
- Asegurarse de que el Hero sea 100% responsivo, colapsando a una sola columna en móviles con la ilustración centrada debajo del texto principal.
- Validar que las transiciones de hover sobre Wave funcionen sin generar saltos en la interfaz.

---

### Tarea 4: Optimización del Fondo de Telaraña (`components/spider-web.tsx`)

**Objetivo:** Reducir la contaminación visual (clutter) de las telarañas. Disminuir la opacidad de los componentes de telaraña de fondo en un 50% y adelgazar sus trazos de `1.5` a `0.8` para que actúen como un fondo extremadamente sutil, permitiendo que Wave resalte.

**Archivos:**
- Modificar: `Downloads/web-code-website/components/spider-web.tsx`

**Modificaciones:**
- Cambiar `strokeWidth="1.5"` a `strokeWidth="0.8"` en radiales y anillos concéntricos.
- Reducir las opacidades iniciales de `opacity="0.6"` a `opacity="0.2"` en los spokes y de `0.3` a `0.1` en los anillos.
- Quitar la rotación infinita acelerada del Hero que puede causar mareo de scroll (motion sickness). Mantener un flotado muy lento (`duration: 20` o más).

**Verificación:**
- Validar que el fondo se sienta limpio, elegante y permita que el texto en blanco y el rojo/azul de Wave resalten perfectamente sin competir por el contraste (cumpliendo estándares de accesibilidad WCAG AA).

---

### Tarea 5: Micro-interacciones Reactivas de Wave en Contacto (`components/contact.tsx`)

**Objetivo:** Crear estados interactivos ilustrados para Wave cuando el formulario esté Enviando, tenga Éxito o falle con Error.

**Archivos:**
- Modificar: `Downloads/web-code-website/components/contact.tsx`

**Flujo Visual de Estados en Formulario:**

1. **Estado: Enviando (Loading)**
   - Wave aparece colgado de su hilo tejiendo un sobre con hilos brillantes.
   - Animación: Rotación sutil de patitas y pulsación del sobre.

2. **Estado: Éxito (Success)**
   - Wave despliega un cartel que dice *"¡Mensaje Recibido! 🕸️"* con ojos felices y un micro-saludo.

3. **Estado: Error (Error)**
   - Wave sostiene un cable de red roto con una expresión apenada.

**Ejemplo de Componente Reactivo de Estado:**
```tsx
function WaveContactStatus({ status }: { status: "sending" | "success" | "error" }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
      {status === "sending" && (
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="relative w-32 h-32"
        >
          <WaveIsotype className="w-full h-full animate-pulse" />
          <motion.div 
            className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            ✉️
          </motion.div>
        </motion.div>
      )}
      {status === "success" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center space-y-2"
        >
          <WaveIsotype className="w-32 h-32" />
          <p className="text-green-400 font-bold text-lg">¡Mensaje tejido con éxito!</p>
          <p className="text-muted-foreground text-sm">Wave ya llevó tu carta a nuestro buzón.</p>
        </motion.div>
      )}
      {status === "error" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center space-y-2"
        >
          <WaveIsotype className="w-32 h-32 opacity-80 filter grayscale" />
          <p className="text-red-400 font-bold text-lg">Se rompió la red...</p>
          <p className="text-muted-foreground text-sm">Wave no pudo mandar el mensaje. ¡Escríbenos por WhatsApp!</p>
        </motion.div>
      )}
    </div>
  )
}
```

**Verificación:**
- Simular un envío exitoso y validar la transición fluida del formulario hacia el estado de éxito.
- Simular un error de API (desconectando el internet o alterando la clave de EmailJS) y verificar la respuesta de error adaptada con Wave.

---

### Tarea 6: Wave Peek-a-boo en el Footer (`components/footer.tsx`)

**Objetivo:** Agregar una micro-interacción elegante al final de la página donde Wave se asome desde el borde de la pantalla de forma simpática, invitando al usuario a conversar vía WhatsApp mediante un tooltip flotante.

**Archivos:**
- Modificar: `Downloads/web-code-website/components/footer.tsx`

**Modificación:**
- En la base del Footer, añadir un contenedor absoluto con `z-20` y posicionamiento flotante en la esquina inferior derecha:
  ```tsx
  <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 group pointer-events-auto">
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card border border-border rounded-lg p-2 text-xs text-white max-w-[200px] shadow-xl pointer-events-none">
      ¿Hablamos de tu idea? ¡Wave no muerde! 🕸️
    </div>
    <a href="https://wa.me/529994539777" target="_blank" rel="noreferrer" className="w-12 h-12 relative">
      <WaveIsotype className="w-full h-full drop-shadow-[0_0_10px_rgba(239,68,68,0.4)] hover:scale-110 transition-transform cursor-pointer" />
    </a>
  </div>
  ```

**Verificación:**
- Desplazarse hasta el fondo de la página.
- Validar que al hacer hover sobre Wave aparezca el tooltip interactivo.
- Probar que el botón abra correctamente el WhatsApp oficial de la agencia en una pestaña nueva.

---

## 🔒 MITIGACIÓN DE RIESGOS Y CONTROL DE CALIDAD

1. **Riesgo de Rendimiento Móvil:** Las animaciones constantes en Framer Motion de múltiples SVGs pueden alentar navegadores móviles.
   - *Mitigación:* Usar la prop `whileInView` para que las animaciones complejas de Wave solo se ejecuten cuando el elemento esté dentro del viewport del usuario.
2. **Contraste de Accesibilidad:** Wave al ser de color rojo y azul oscuro puede perder contraste sobre el fondo oscuro de la página.
   - *Mitigación:* Se añade un aura radial brillante en el fondo detrás de Wave (`radial-gradient` o sombras de filtro `drop-shadow`) para separar la mascota del fondo oscuro y cumplir con los ratios WCAG AA.
3. **Caché del Navegador en Rebranding:** Usuarios recurrentes podrían seguir viendo el logo antiguo.
   - *Mitigación:* Asegurar que los nuevos componentes de SVG nativo reemplacen por completo las imágenes importadas antiguas y que los bundles de Next.js se purguen correctamente al hacer el despliegue en Vercel.
