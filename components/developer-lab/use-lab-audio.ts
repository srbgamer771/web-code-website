"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const DEFAULT_VOLUME = 0.28

export function useLabAudio() {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolumeState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_VOLUME
    const parsed = Number(window.localStorage.getItem("webcode-lab-volume"))
    return Number.isFinite(parsed) && parsed > 0 ? Math.min(0.6, Math.max(0.05, parsed)) : DEFAULT_VOLUME
  })
  const contextRef = useRef<AudioContext | null>(null)
  const masterRef = useRef<GainNode | null>(null)
  const beatTimerRef = useRef<number | null>(null)
  const beatStepRef = useRef(0)

  const stop = useCallback(async () => {
    if (beatTimerRef.current) window.clearInterval(beatTimerRef.current)
    beatTimerRef.current = null
    beatStepRef.current = 0

    const context = contextRef.current
    contextRef.current = null
    masterRef.current = null
    setPlaying(false)

    if (context && context.state !== "closed") await context.close()
  }, [])

  useEffect(() => () => void stop(), [stop])

  const start = useCallback(async () => {
    if (contextRef.current) return

    const context = new AudioContext()
    const master = context.createGain()
    const compressor = context.createDynamicsCompressor()
    master.gain.value = volume
    compressor.threshold.value = -24
    compressor.knee.value = 18
    compressor.ratio.value = 5
    master.connect(compressor).connect(context.destination)

    const padGain = context.createGain()
    const padFilter = context.createBiquadFilter()
    padGain.gain.value = 0.035
    padFilter.type = "lowpass"
    padFilter.frequency.value = 720
    padFilter.Q.value = 0.7
    padGain.connect(padFilter).connect(master)

    ;[55, 82.41, 110].forEach((frequency, index) => {
      const oscillator = context.createOscillator()
      const voiceGain = context.createGain()
      oscillator.type = index === 0 ? "sine" : "triangle"
      oscillator.frequency.value = frequency
      oscillator.detune.value = index === 2 ? -7 : index * 4
      voiceGain.gain.value = index === 0 ? 0.55 : 0.22
      oscillator.connect(voiceGain).connect(padGain)
      oscillator.start()
    })

    const textureBuffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate)
    const textureData = textureBuffer.getChannelData(0)
    for (let index = 0; index < textureData.length; index += 1) {
      textureData[index] = (Math.random() * 2 - 1) * 0.3
    }
    const texture = context.createBufferSource()
    const textureFilter = context.createBiquadFilter()
    const textureGain = context.createGain()
    texture.buffer = textureBuffer
    texture.loop = true
    textureFilter.type = "lowpass"
    textureFilter.frequency.value = 520
    textureGain.gain.value = 0.012
    texture.connect(textureFilter).connect(textureGain).connect(master)
    texture.start()

    const playBeat = () => {
      const now = context.currentTime
      const step = beatStepRef.current++ % 8

      if (step % 4 === 0) {
        const kick = context.createOscillator()
        const kickGain = context.createGain()
        kick.type = "sine"
        kick.frequency.setValueAtTime(82, now)
        kick.frequency.exponentialRampToValueAtTime(42, now + 0.18)
        kickGain.gain.setValueAtTime(0.08, now)
        kickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2)
        kick.connect(kickGain).connect(master)
        kick.start(now)
        kick.stop(now + 0.22)
      }

      if (step === 2 || step === 6) {
        const click = context.createOscillator()
        const clickGain = context.createGain()
        click.type = "triangle"
        click.frequency.value = 185
        clickGain.gain.setValueAtTime(0.025, now)
        clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08)
        click.connect(clickGain).connect(master)
        click.start(now)
        click.stop(now + 0.1)
      }
    }

    contextRef.current = context
    masterRef.current = master
    await context.resume()
    playBeat()
    beatTimerRef.current = window.setInterval(playBeat, 420)
    setPlaying(true)
  }, [volume])

  const toggle = useCallback(() => {
    if (playing) void stop()
    else void start()
  }, [playing, start, stop])

  const setVolume = useCallback((nextVolume: number) => {
    const safeVolume = Math.min(0.6, Math.max(0.05, nextVolume))
    setVolumeState(safeVolume)
    window.localStorage.setItem("webcode-lab-volume", String(safeVolume))
    const context = contextRef.current
    const master = masterRef.current
    if (context && master) master.gain.setTargetAtTime(safeVolume, context.currentTime, 0.04)
  }, [])

  return { playing, volume, toggle, setVolume }
}
