import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SpiderWebBackground } from '@/components/spider-web'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Web Code — Desarrollo Web y Software a Medida',
  description: 'Transformamos tus ideas en soluciones digitales. Páginas web, aplicaciones móviles y software a medida. Mérida, México. Disponibilidad remota global.',
  generator: 'v0.app',
  keywords: ['desarrollo web', 'páginas web', 'software', 'diseño web', 'aplicaciones web', 'aplicaciones móviles', 'Next.js', 'Flutter', 'Mérida', 'Yucatán'],
  icons: {
    icon: [
      {
        url: '/logo.png',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased relative">
        {/* Full page spider web background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <SpiderWebBackground className="w-full h-full text-primary/30" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
