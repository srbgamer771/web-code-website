"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Wave Spider Mascot Component
const WaveSpider = () => (
  <motion.svg
    viewBox="0 0 100 100"
    className="w-32 h-32 md:w-48 md:h-48"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
  >
    {/* Spider Body */}
    <motion.ellipse
      cx="50"
      cy="50"
      rx="18"
      ry="22"
      fill="url(#gradient)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    />
    
    {/* Spider Eyes */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <ellipse cx="44" cy="45" rx="4" ry="5" fill="white" />
      <ellipse cx="56" cy="45" rx="4" ry="5" fill="white" />
      <circle cx="45" cy="46" r="2" fill="#0D1117" />
      <circle cx="57" cy="46" r="2" fill="#0D1117" />
    </motion.g>
    
    {/* Spider Smile */}
    <motion.path
      d="M 44 58 Q 50 62 56 58"
      stroke="white"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    />
    
    {/* Spider Legs */}
    {[
      { d: "M 32 35 Q 15 25 5 30", delay: 0.7 },
      { d: "M 35 38 Q 18 38 8 45", delay: 0.75 },
      { d: "M 35 45 Q 20 55 12 65", delay: 0.8 },
      { d: "M 68 35 Q 85 25 95 30", delay: 0.7 },
      { d: "M 65 38 Q 82 38 92 45", delay: 0.75 },
      { d: "M 65 45 Q 80 55 88 65", delay: 0.8 },
    ].map((leg, i) => (
      <motion.path
        key={i}
        d={leg.d}
        stroke="url(#gradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: leg.delay, duration: 0.5 }}
      />
    ))}
    
    {/* Gradient Definition */}
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </motion.svg>
)

// Particle Component
const Particle = ({ x, y, delay, color }: { x: number; y: number; delay: number; color: string }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      backgroundColor: color,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -30, -60],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    }}
  />
)

// Network Line Component
const NetworkLine = ({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) => (
  <motion.line
    x1={`${x1}%`}
    y1={`${y1}%`}
    x2={`${x2}%`}
    y2={`${y2}%`}
    stroke="rgba(59, 130, 246, 0.2)"
    strokeWidth="1"
    initial={{ opacity: 0, pathLength: 0 }}
    animate={{ opacity: 1, pathLength: 1 }}
    transition={{ delay, duration: 1 }}
    className="absolute"
  />
)

// Comic Text Effect
const ComicText = ({ text, delay }: { text: string; delay: number }) => (
  <motion.div
    className="absolute font-black text-4xl md:text-6xl"
    style={{
      color: text === "THWIP" ? "#EF4444" : text === "BUILD" ? "#3B82F6" : "#10B981",
      textShadow: "0 0 20px currentColor",
    }}
    initial={{ 
      opacity: 0, 
      scale: 0, 
      rotate: -20 
    }}
    animate={{ 
      opacity: [0, 1, 1, 0], 
      scale: [0, 1.5, 1.2, 0],
      rotate: [-20, 5, 0, 10]
    }}
    transition={{ 
      delay, 
      duration: 0.8,
      times: [0, 0.2, 0.5, 1]
    }}
  >
    {text}
  </motion.div>
)

export default function LoadingAnimation() {
  const [stage, setStage] = useState(0)
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    // Check if user has seen animation before
    const hasSeenAnimation = localStorage.getItem('hasSeenLoadingAnimation')
    if (hasSeenAnimation) {
      setShowAnimation(false)
      return
    }

    // Animation sequence timeline
    const timeline = setTimeout(() => setStage(1), 500)   // Portal opens
    const stage2 = setTimeout(() => setStage(2), 1200)  // Wave jumps out
    const stage3 = setTimeout(() => setStage(3), 2000)  // Weaving web
    const stage4 = setTimeout(() => setStage(4), 3200)  // Logo forms
    const stage5 = setTimeout(() => setStage(5), 4200)  // Slogan
    const stage6 = setTimeout(() => setStage(6), 5200)  // Final web shot
    const finish = setTimeout(() => {
      setStage(7)
      localStorage.setItem('hasSeenLoadingAnimation', 'true')
      setTimeout(() => setShowAnimation(false), 500)
    }, 6000)

    return () => {
      clearTimeout(timeline)
      clearTimeout(stage2)
      clearTimeout(stage3)
      clearTimeout(stage4)
      clearTimeout(stage5)
      clearTimeout(stage6)
      clearTimeout(finish)
    }
  }, [])

  if (!showAnimation) return null

  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    color: Math.random() > 0.5 ? '#EF4444' : '#3B82F6',
  }))

  // Generate network lines
  const networkLines = [
    { x1: 20, y1: 30, x2: 80, y2: 70, delay: 0.3 },
    { x1: 80, y1: 30, x2: 20, y2: 70, delay: 0.4 },
    { x1: 50, y1: 20, x2: 50, y2: 80, delay: 0.5 },
    { x1: 30, y1: 50, x2: 70, y2: 50, delay: 0.6 },
  ]

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D1117]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Particles */}
          {particles.map((p, i) => (
            <Particle key={i} {...p} />
          ))}

          {/* Network Lines */}
          {networkLines.map((line, i) => (
            <NetworkLine key={i} {...line} />
          ))}

          {/* Glitch Portal */}
          <AnimatePresence>
            {stage >= 1 && stage < 2 && (
              <motion.div
                className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, #EF4444, transparent, #3B82F6, transparent)',
                  boxShadow: '0 0 50px rgba(239, 68, 68, 0.5), 0 0 100px rgba(59, 130, 246, 0.3)',
                }}
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: [0, 1, 1.5], rotate: [0, 180, 360] }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            )}
          </AnimatePresence>

          {/* Wave Spider */}
          <AnimatePresence>
            {stage >= 2 && (
              <motion.div
                className="relative"
                initial={{ y: 100, opacity: 0, scale: 0.5 }}
                animate={{ 
                  y: [100, 0, 0], 
                  opacity: [0, 1, 1], 
                  scale: [0.5, 1, 1],
                  rotate: [0, -10, 10, 0]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.6,
                  rotate: { repeat: 2, duration: 0.2 }
                }}
              >
                <WaveSpider />
                
                {/* Motion blur effect */}
                <motion.div
                  className="absolute inset-0 blur-xl"
                  style={{
                    background: 'linear-gradient(45deg, rgba(239, 68, 68, 0.3), rgba(59, 130, 246, 0.3))',
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Spider Web Formation */}
          <AnimatePresence>
            {stage >= 3 && stage < 5 && (
              <motion.div
                className="absolute"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Web strands */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-48 h-48 border border-red-500/30"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
                
                {/* Data streams in web */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 text-xs font-mono text-blue-400/50"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(60px)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                  >
                    {['{API}', '</>', 'node', 'data'][i]}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Logo Formation */}
          <AnimatePresence>
            {stage >= 4 && stage < 6 && (
              <motion.div
                className="absolute"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="flex flex-col items-center gap-4"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      &lt;/&gt;
                    </div>
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      WEB CODE
                    </motion.h1>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Slogan */}
          <AnimatePresence>
            {stage >= 5 && stage < 7 && (
              <motion.div
                className="absolute bottom-20 left-0 right-0 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="text-2xl md:text-4xl font-bold text-white"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {stage === 5 ? "Conectando ideas..." : "Creando futuro."}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Comic Effects */}
          <ComicText text="THWIP" delay={1.5} />
          <ComicText text="BUILD" delay={3} />
          <ComicText text="DEPLOY" delay={5} />

          {/* Final Web Shot */}
          <AnimatePresence>
            {stage === 6 && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ scale: 0 }}
                animate={{ scale: 3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(239, 68, 68, 0.8) 0%, transparent 70%)',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip Button */}
          <motion.button
            className="absolute bottom-8 right-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition-colors border border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              localStorage.setItem('hasSeenLoadingAnimation', 'true')
              setShowAnimation(false)
            }}
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
