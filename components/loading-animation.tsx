"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingAnimation() {
  const [stage, setStage] = useState(0)
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    // Animation sequence timeline - 4.5 seconds total
    const stage1 = setTimeout(() => setStage(1), 0)     // Glitch effect starts
    const stage2 = setTimeout(() => setStage(2), 800)  // Wave appears
    const stage3 = setTimeout(() => setStage(3), 1800) // Wave launches web
    const stage4 = setTimeout(() => setStage(4), 2800) // Web forms logo
    const stage5 = setTimeout(() => setStage(5), 3500) // Slogan appears
    const finish = setTimeout(() => {
      setStage(6)
      setTimeout(() => setShowAnimation(false), 500)
    }, 4000)

    return () => {
      clearTimeout(stage1)
      clearTimeout(stage2)
      clearTimeout(stage3)
      clearTimeout(stage4)
      clearTimeout(stage5)
      clearTimeout(finish)
    }
  }, [])

  if (!showAnimation) return null

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D1117]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Glitch Effect Background */}
          <AnimatePresence>
            {stage >= 0 && stage < 2 && (
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-gradient-to-r from-transparent via-red-500/60 via-blue-500/60 to-transparent h-0.5"
                    style={{
                      width: `${100 + Math.random() * 200}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ 
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.3,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wave Spider - Protagonist */}
          <AnimatePresence>
            {stage >= 1 && stage < 6 && (
              <motion.div
                className="relative z-10"
                initial={{ 
                  scale: 0,
                  rotate: -180,
                  opacity: 0,
                  filter: 'blur(10px)'
                }}
                animate={{ 
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                  filter: 'blur(0px)'
                }}
                exit={{ 
                  scale: 1.5,
                  opacity: 0,
                  filter: 'blur(20px)'
                }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                {/* Energy aura - more visible */}
                <motion.div
                  className="absolute -inset-12 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(239, 68, 68, 0.5), rgba(59, 130, 246, 0.5), transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
                
                <Image
                  src="/images/wave-logo.png"
                  alt="Wave Spider Mascot"
                  width={320}
                  height={320}
                  className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Digital Spider Webs launched by Wave */}
          <AnimatePresence>
            {stage >= 2 && stage < 5 && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Web shooting effect */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-red-500"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      x: [0, 150, 200],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      delay: 0.1 + i * 0.05,
                      duration: 0.6,
                      times: [0, 0.3, 1],
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Web forming the logo */}
          <AnimatePresence>
            {stage >= 3 && stage < 6 && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Web strands */}
                <div className="relative w-96 h-40 md:w-[28rem] md:h-48">
                  {/* Horizontal strands forming text */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`h-${i}`}
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                      style={{
                        top: `${15 + i * 15}%`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 0.7 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    />
                  ))}
                  
                  {/* Vertical strands */}
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={`v-${i}`}
                      className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                      style={{
                        left: `${8 + i * 10}%`,
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 0.7 }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                    />
                  ))}
                  
                  {/* Diagonal strands */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`d-${i}`}
                      className="absolute top-1/2 left-1/2 w-[28rem] h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 0.5 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    />
                  ))}
                </div>
                
                {/* Logo emerging from web */}
                <motion.div
                  className="absolute flex items-center gap-4 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.2, opacity: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-2xl"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  >
                    &lt;/&gt;
                  </motion.div>
                  <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent"
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    WEB CODE
                  </motion.h1>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Slogan */}
          <AnimatePresence>
            {stage >= 4 && stage < 6 && (
              <motion.div
                className="absolute bottom-32 left-0 right-0 text-center z-20"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.p
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide"
                  style={{
                    textShadow: '0 0 30px rgba(239, 68, 68, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)',
                  }}
                >
                  Conectando ideas, creando futuro
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Comic text effects - reduced and subtle */}
          <AnimatePresence>
            {stage >= 2 && stage < 4 && (
              <motion.div
                className="absolute top-16 right-8 md:right-16 z-20"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ 
                  scale: [0, 1, 1],
                  rotate: [-20, 0]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, times: [0, 0.4, 1] }}
              >
                <span className="font-black text-lg md:text-2xl text-red-500/80" style={{ textShadow: '1px 1px 0 #000' }}>
                  THWIP!
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {stage >= 3 && stage < 5 && (
              <motion.div
                className="absolute bottom-28 left-8 md:left-16 z-20"
                initial={{ scale: 0, rotate: 15 }}
                animate={{ 
                  scale: [0, 1, 1],
                  rotate: [15, 0]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, times: [0, 0.4, 1] }}
              >
                <span className="font-black text-lg md:text-2xl text-blue-500/80" style={{ textShadow: '1px 1px 0 #000' }}>
                  BUILD
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {stage >= 4 && stage < 6 && (
              <motion.div
                className="absolute top-24 left-8 md:left-16 z-20"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ 
                  scale: [0, 1, 1],
                  rotate: [-15, 0]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, times: [0, 0.4, 1] }}
              >
                <span className="font-black text-lg md:text-2xl text-green-500/80" style={{ textShadow: '1px 1px 0 #000' }}>
                  DEPLOY
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Particle dissolution at the end */}
          <AnimatePresence>
            {stage >= 5 && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      backgroundColor: Math.random() > 0.5 ? '#EF4444' : '#3B82F6',
                    }}
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{
                      scale: [1, 0, 2],
                      opacity: [1, 0.5, 0],
                      x: [0, (Math.random() - 0.5) * 200],
                      y: [0, (Math.random() - 0.5) * 200],
                    }}
                    transition={{
                      delay: i * 0.02,
                      duration: 0.8,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip Button */}
          <motion.button
            className="absolute bottom-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition-colors border border-white/20 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => setShowAnimation(false)}
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
