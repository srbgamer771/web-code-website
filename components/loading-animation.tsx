"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingAnimation() {
  const [stage, setStage] = useState(0)
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    // Animation sequence timeline - 3-4 seconds total
    const stage1 = setTimeout(() => setStage(1), 0)     // Portal opens immediately
    const stage2 = setTimeout(() => setStage(2), 600)  // Wave emerges
    const stage3 = setTimeout(() => setStage(3), 1200) // Web forms logo
    const stage4 = setTimeout(() => setStage(4), 2400) // Slogan appears
    const finish = setTimeout(() => {
      setStage(5)
      setTimeout(() => setShowAnimation(false), 600)
    }, 3000)

    return () => {
      clearTimeout(stage1)
      clearTimeout(stage2)
      clearTimeout(stage3)
      clearTimeout(stage4)
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
          transition={{ duration: 0.4 }}
        >
          {/* Glitch Portal */}
          <AnimatePresence>
            {stage >= 0 && stage < 2 && (
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Portal rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border-2"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      borderColor: i % 2 === 0 ? '#EF4444' : '#3B82F6',
                    }}
                    initial={{ scale: 0, rotate: 0, opacity: 0.8 }}
                    animate={{
                      scale: [0, 1.5, 2],
                      rotate: [0, 180, 360],
                      opacity: [0.8, 0.4, 0],
                    }}
                    transition={{
                      delay: i * 0.15,
                      duration: 0.8,
                      times: [0, 0.5, 1],
                    }}
                  />
                ))}
                
                {/* Glitch effect lines */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-gradient-to-r from-transparent via-red-500 to-transparent h-0.5"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${100 + Math.random() * 200}px`,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.3,
                      repeat: 2,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wave Spider - Protagonist */}
          <AnimatePresence>
            {stage >= 1 && stage < 5 && (
              <motion.div
                className="relative z-10"
                initial={{ 
                  y: 200, 
                  scale: 0.3, 
                  rotate: 45,
                  opacity: 0
                }}
                animate={{ 
                  y: 0, 
                  scale: 1.2, 
                  rotate: 0,
                  opacity: 1
                }}
                exit={{ 
                  y: -50, 
                  scale: 0.8, 
                  opacity: 0 
                }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                {/* Motion blur trail */}
                <motion.div
                  className="absolute inset-0 blur-2xl"
                  style={{
                    background: 'linear-gradient(45deg, rgba(239, 68, 68, 0.4), rgba(59, 130, 246, 0.4))',
                  }}
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 0.4, 
                    repeat: 3 
                  }}
                />
                
                <Image
                  src="/images/wave-logo.png"
                  alt="Wave Spider Mascot"
                  width={256}
                  height={256}
                  className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10"
                  priority
                />
                
                {/* Energy aura */}
                <motion.div
                  className="absolute -inset-8 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3), rgba(59, 130, 246, 0.3), transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Spider Web forming the logo */}
          <AnimatePresence>
            {stage >= 2 && stage < 5 && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Web strands forming logo */}
                <div className="relative w-80 h-32 md:w-96 md:h-40">
                  {/* Horizontal strands */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`h-${i}`}
                      className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
                      style={{
                        top: `${20 + i * 20}%`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 0.6 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    />
                  ))}
                  
                  {/* Vertical strands */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`v-${i}`}
                      className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
                      style={{
                        left: `${10 + i * 12}%`,
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 0.6 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                    />
                  ))}
                  
                  {/* Diagonal strands */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`d-${i}`}
                      className="absolute top-1/2 left-1/2 w-96 h-0.5 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 0.4 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                    />
                  ))}
                </div>
                
                {/* Logo forming from web */}
                <motion.div
                  className="absolute flex items-center gap-3"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-2xl"
                    initial={{ rotate: -180 }}
                    animate={{ rotate: 0 }}
                    transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                  >
                    &lt;/&gt;
                  </motion.div>
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    WEB CODE
                  </motion.h1>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Slogan */}
          <AnimatePresence>
            {stage >= 3 && stage < 5 && (
              <motion.div
                className="absolute bottom-24 left-0 right-0 text-center z-20"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide"
                  style={{
                    textShadow: '0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  Conectando ideas, creando futuro
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Comic text effects - subtle details */}
          <AnimatePresence>
            {stage >= 1 && stage < 3 && (
              <motion.div
                className="absolute top-20 right-10 md:right-20 z-20"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  rotate: [-15, 5, 0]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, times: [0, 0.3, 1] }}
              >
                <span className="font-black text-2xl md:text-4xl text-red-500" style={{ textShadow: '2px 2px 0 #000' }}>
                  THWIP!
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {stage >= 2 && stage < 4 && (
              <motion.div
                className="absolute bottom-32 left-10 md:left-20 z-20"
                initial={{ scale: 0, rotate: 10 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  rotate: [10, -5, 0]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, times: [0, 0.3, 1] }}
              >
                <span className="font-black text-xl md:text-3xl text-blue-500" style={{ textShadow: '2px 2px 0 #000' }}>
                  BUILD
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {stage >= 3 && stage < 5 && (
              <motion.div
                className="absolute top-40 left-10 md:left-20 z-20"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  rotate: [-10, 5, 0]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, times: [0, 0.3, 1] }}
              >
                <span className="font-black text-xl md:text-3xl text-green-500" style={{ textShadow: '2px 2px 0 #000' }}>
                  DEPLOY
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Kinetic lines - Spider-Verse style */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
              style={{
                width: `${200 + Math.random() * 300}px`,
                top: `${10 + Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.8,
              }}
            />
          ))}

          {/* Skip Button */}
          <motion.button
            className="absolute bottom-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition-colors border border-white/20 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setShowAnimation(false)}
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
