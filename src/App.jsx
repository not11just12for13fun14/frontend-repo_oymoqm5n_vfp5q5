import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSpline from './HeroSpline'

function App() {
  // Scroll progress for timeline mapping
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })

  // Ambient amber accent intensity
  const amberGlow = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.08, 0.16, 0.24, 0.12])
  
  // Copy opacity per chapter
  const genesisOpacity = useTransform(scrollYProgress, [0.00, 0.08, 0.16, 0.22], [1, 1, 0.4, 0])
  const sparkOpacity   = useTransform(scrollYProgress, [0.18, 0.26, 0.34, 0.40], [0, 1, 1, 0])
  const growthOpacity  = useTransform(scrollYProgress, [0.38, 0.46, 0.54, 0.60], [0, 1, 1, 0])
  const queenOpacity   = useTransform(scrollYProgress, [0.58, 0.66, 0.74, 0.80], [0, 1, 1, 0])
  const finalOpacity   = useTransform(scrollYProgress, [0.78, 0.86, 0.92, 0.96], [0, 1, 1, 0])
  const messageOpacity = useTransform(scrollYProgress, [0.94, 0.975, 1.0], [0, 1, 1])

  // Parallax for subtle camera feel (applied to text)
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <div ref={containerRef} className="min-h-[200svh] bg-[#0A0A12]">
      {/* Hero 3D cover */}
      <HeroSpline />

      {/* Scrollytelling overlay copy */}
      <motion.div style={{ y: yParallax }} className="relative mx-auto max-w-3xl px-6 -mt-24 sm:-mt-32">
        <motion.section style={{ opacity: genesisOpacity }} className="py-24 sm:py-32">
          <PhaseCopy title="Genesis" subtitle="Birth" accent="#FFC300" text="15.11.2009 — The beginning."/>
        </motion.section>

        <motion.section style={{ opacity: sparkOpacity }} className="py-24 sm:py-32">
          <PhaseCopy title="Spark" subtitle="Awakening" accent="#FFC300" text="A new element takes form…"/>
        </motion.section>

        <motion.section style={{ opacity: growthOpacity }} className="py-24 sm:py-32">
          <PhaseCopy title="Growth" subtitle="Energy" accent="#FFC300" text="Every challenge refines the form."/>
        </motion.section>

        <motion.section style={{ opacity: queenOpacity }} className="py-24 sm:py-32">
          <PhaseCopy title="Maharani" subtitle="Confidence" accent="#FFC300" text="A little brilliance. A little royalty."/>
        </motion.section>

        <motion.section style={{ opacity: finalOpacity }} className="py-24 sm:py-32">
          <PhaseCopy title="Final" subtitle="Mastery" accent="#FFC300" text="16 years of becoming."/>
        </motion.section>

        <motion.section style={{ opacity: messageOpacity }} className="py-32 sm:py-40 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white/95">
            Happy 16th, Bhumika — You are the 16th Element.
          </h2>
          <p className="text-white/60 mt-4">With light, motion, and grace — always.</p>
        </motion.section>
      </motion.div>

      {/* Ambient amber glow that intensifies over the journey */}
      <motion.div
        style={{ opacity: amberGlow }}
        className="pointer-events-none fixed inset-0 mix-blend-screen"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,195,0,0.35),transparent_70%)]" />
      </motion.div>

      {/* Footer spacer for smooth end */}
      <div className="h-[30svh]" />
    </div>
  )
}

function PhaseCopy({ title, subtitle, text, accent = '#FFC300' }) {
  return (
    <div className="border-l border-white/10 pl-6">
      <div className="flex items-center gap-3">
        <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
        <p className="text-white/60 text-sm uppercase tracking-[0.2em]">{subtitle}</p>
      </div>
      <h3 className="mt-2 text-white/95 text-3xl sm:text-5xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-white/70 max-w-prose">{text}</p>
    </div>
  )
}

export default App
