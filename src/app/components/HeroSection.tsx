'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

// Neural network SVG background
function NeuralNetwork() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      
      {/* Connection lines */}
      <line x1="200" y1="200" x2="500" y2="350" stroke="url(#lineGrad)" strokeWidth="1" className="neural-path" />
      <line x1="500" y1="350" x2="800" y2="200" stroke="url(#lineGrad)" strokeWidth="1" className="neural-path" style={{ animationDelay: '0.5s' }} />
      <line x1="800" y1="200" x2="1100" y2="350" stroke="url(#lineGrad)" strokeWidth="1" className="neural-path" style={{ animationDelay: '1s' }} />
      <line x1="200" y1="200" x2="500" y2="600" stroke="url(#lineGrad)" strokeWidth="0.8" className="neural-path" style={{ animationDelay: '0.3s' }} />
      <line x1="500" y1="350" x2="800" y2="600" stroke="url(#lineGrad)" strokeWidth="0.8" className="neural-path" style={{ animationDelay: '0.8s' }} />
      <line x1="800" y1="200" x2="1100" y2="600" stroke="url(#lineGrad)" strokeWidth="0.8" className="neural-path" style={{ animationDelay: '1.2s' }} />
      <line x1="500" y1="600" x2="800" y2="700" stroke="url(#lineGrad)" strokeWidth="0.8" className="neural-path" style={{ animationDelay: '0.6s' }} />
      <line x1="800" y1="700" x2="1100" y2="600" stroke="url(#lineGrad)" strokeWidth="0.8" className="neural-path" style={{ animationDelay: '1.4s' }} />
      <line x1="300" y1="500" x2="500" y2="350" stroke="url(#lineGrad)" strokeWidth="0.6" className="neural-path" style={{ animationDelay: '0.2s' }} />
      <line x1="1000" y1="500" x2="1100" y2="350" stroke="url(#lineGrad)" strokeWidth="0.6" className="neural-path" style={{ animationDelay: '1.6s' }} />
      {/* Nodes */}
      {[
      [200, 200], [500, 350], [800, 200], [1100, 350],
      [500, 600], [800, 700], [1100, 600], [300, 500], [1000, 500],
      [150, 400], [1250, 400], [650, 150], [650, 800]]?.
      map(([cx, cy], i) =>
      <g key={i}>
          <circle cx={cx} cy={cy} r="5" fill="url(#nodeGrad)" opacity="0.8" style={{ animationDelay: `${i * 0.15}s` }} />
          <circle cx={cx} cy={cy} r="12" fill="none" stroke="url(#nodeGrad)" strokeWidth="0.5" opacity="0.3" />
        </g>
      )}
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#6C63FF" />
        </radialGradient>
      </defs>
    </svg>);

}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Cinematic background with scrollBlur */}
      <div className="absolute inset-0 z-0 hero-bg">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_151a1155e-1772142294976.png"
          alt="Dark atmospheric data center with blue server rack lighting, deep shadows, cool steel infrastructure, dim moody environment"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />
        
        {/* Scrim — dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
      </div>
      {/* Atmospheric depth layers */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <div className="blob-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="blob-2 absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8"
        style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="blob-3 absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-6"
        style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>
      {/* Neural network overlay */}
      <div className="absolute inset-0 z-2 pointer-events-none">
        <NeuralNetwork />
      </div>
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-32 w-full">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
          
          <span className="w-2 h-2 rounded-full bg-cyan-ai animate-pulse-glow" />
          <span className="text-xs font-semibold tracking-widest uppercase text-muted">
            Artificial Intelligence Solutions
          </span>
        </div>

        {/* Main headline */}
        <div style={{ animation: 'slideInBlur 1.2s ease-out 0.4s both' }}>
          <h1 className="font-display font-bold leading-none tracking-tightest mb-6">
            <span
              className="block text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] text-foreground">
              
              Tinitiate
            </span>
            <span className="block text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] gradient-text">
              AI
            </span>
          </h1>
        </div>

        {/* Sub-grid: description + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          {/* Left: subtitle + description */}
          <div style={{ animation: 'fadeInUp 0.9s ease-out 0.7s both' }}>
            <p className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">
              AI Solutions for Businesses
            </p>
            <p className="text-base text-muted leading-relaxed max-w-lg">
              We build intelligent systems that automate workflows, surface insights, and unlock new capabilities — custom AI built for how your business actually works.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/10">
              {[
              { value: '50+', label: 'AI Projects' },
              { value: '200+', label: 'Clients Trained' },
              { value: '98%', label: 'Satisfaction Rate' }]?.
              map((stat) =>
              <div key={stat?.label}>
                  <p className="text-2xl font-display font-bold gradient-text">{stat?.value}</p>
                  <p className="text-xs text-muted mt-0.5">{stat?.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: CTAs */}
          <div style={{ animation: 'fadeInScale 0.8s ease-out 1s both' }}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/solutions"
                className="btn-gradient text-white font-display font-semibold text-base px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 group">
                
                Get Started
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/solutions"
                className="glass-card gradient-border text-foreground font-display font-semibold text-base px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 hover:bg-white/8 transition-colors">
                
                Explore AI Solutions
              </Link>
            </div>
            <p className="text-sm text-muted mt-4">
              No commitment required · Free consultation available
            </p>
          </div>
        </div>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>);

}