import React from 'react'
import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="relative w-full h-[100svh] bg-[#0A0A12] overflow-hidden">
      <Spline
        scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,195,0,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 flex items-end sm:items-center justify-center text-center p-6 sm:p-12">
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
