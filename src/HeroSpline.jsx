import React, { useEffect, useRef, useState, memo } from 'react'
import Spline from '@splinetool/react-spline'
import { useInView } from 'framer-motion'

function HeroSplineInner() {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { margin: '0px 0px -40% 0px', amount: 0.1 })
  const [shouldRender, setShouldRender] = useState(false)

  // Only mount the heavy WebGL when the hero is entering view
  useEffect(() => {
    if (inView) setShouldRender(true)
  }, [inView])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100svh] bg-[#0A0A12] overflow-hidden [contain:paint]"
    >
      {shouldRender && (
        <Spline
          scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      )}

      {/* Single subtle glow layer (reduced overdraw) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,195,0,0.10),transparent_70%)]" />

      {/* Title overlay */}
      <div className="absolute inset-0 flex items-end sm:items-center justify-center text-center p-6 sm:p-12 will-change-transform">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-white/95 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            The 16th Element
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
            A 3D scrollytelling chronicle of transformation — elegant, reflective, awe-inspiring.
          </p>
        </div>
      </div>
    </div>
  )
}

const HeroSpline = memo(HeroSplineInner)
export default HeroSpline
