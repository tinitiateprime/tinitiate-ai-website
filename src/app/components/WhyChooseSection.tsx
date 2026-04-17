'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reasons = [
  {
    id: 'expertise',
    title: 'AI Expertise',
    description: 'Our team brings deep experience in neural networks, LLMs, and production-grade ML systems — not just proof-of-concepts.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
        <path d="M12 2a10 10 0 0 1 10 10"/>
        <path d="M12 12 2.1 12.5"/>
      </svg>
    ),
    accent: '#6C63FF',
    span: 'lg:col-span-2',
    metric: { value: '8+ years', label: 'AI specialization' },
  },
  {
    id: 'technology',
    title: 'Modern Technology',
    description: 'We use the latest AI frameworks — PyTorch, LangChain, OpenAI APIs, Hugging Face — so your systems stay ahead of the curve.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    accent: '#00D4FF',
    span: 'lg:col-span-2',
    metric: { value: '20+', label: 'AI frameworks used' },
  },
  {
    id: 'scalable',
    title: 'Scalable Solutions',
    description: 'From startup MVP to enterprise-grade deployment — our architectures scale with your growth without re-engineering.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    accent: '#A855F7',
    span: 'lg:col-span-1',
    metric: null,
  },
  {
    id: 'realworld',
    title: 'Real-World AI Applications',
    description: 'We don\'t build demos — we deploy AI that handles real business load: customer service bots processing 10k+ queries/day, ML models running in production with 99.9% uptime, automation pipelines saving hundreds of hours per month.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    accent: '#6C63FF',
    span: 'lg:col-span-3',
    metric: { value: '99.9%', label: 'Production uptime' },
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(108,99,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <span className="w-8 h-px bg-primary" />
            Our Advantage
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground">
            Why Choose{' '}
            <span className="gradient-text">Tinitiate AI</span>
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl leading-relaxed">
            We combine deep AI expertise with real-world engineering discipline to deliver solutions that actually work in production.
          </p>
        </motion.div>

        {/* Bento grid
          Row 1: [AI Expertise col-span-2] + [Modern Tech col-span-2] = 4/4 ✓
          Row 2: [Scalable col-span-1] + [Real-world col-span-3] = 4/4 ✓
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Card 1 — AI Expertise — col-span-2 */}
          <motion.div
            variants={cardVariants}
            className="glass-card gradient-border rounded-3xl p-8 lg:col-span-2 group hover:shadow-card-hover transition-shadow duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: `rgba(108,99,255,0.12)`, color: '#6C63FF' }}
            >
              {reasons?.[0]?.icon}
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">{reasons?.[0]?.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">{reasons?.[0]?.description}</p>
            <div className="mt-auto">
              <p className="text-3xl font-display font-bold gradient-text">8+ years</p>
              <p className="text-xs text-muted mt-1">AI specialization</p>
            </div>
          </motion.div>

          {/* Card 2 — Modern Technology — col-span-2 */}
          <motion.div
            variants={cardVariants}
            className="glass-card gradient-border rounded-3xl p-8 lg:col-span-2 group hover:shadow-card-hover transition-shadow duration-300 relative overflow-hidden"
          >
            {/* Decorative code snippet background */}
            <div className="absolute top-4 right-4 opacity-5 text-xs font-mono text-cyan-ai leading-tight select-none pointer-events-none">
              <div>import torch</div>
              <div>from langchain</div>
              <div>model.train()</div>
              <div>deploy(api)</div>
            </div>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: `rgba(0,212,255,0.1)`, color: '#00D4FF' }}
            >
              {reasons?.[1]?.icon}
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">{reasons?.[1]?.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">{reasons?.[1]?.description}</p>
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'LangChain', 'OpenAI', 'HuggingFace']?.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 3 — Scalable — col-span-1 */}
          <motion.div
            variants={cardVariants}
            className="glass-card gradient-border rounded-3xl p-8 lg:col-span-1 group hover:shadow-card-hover transition-shadow duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: `rgba(168,85,247,0.1)`, color: '#A855F7' }}
            >
              {reasons?.[2]?.icon}
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">{reasons?.[2]?.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{reasons?.[2]?.description}</p>
          </motion.div>

          {/* Card 4 — Real-world — col-span-3 */}
          <motion.div
            variants={cardVariants}
            className="glass-card gradient-border rounded-3xl p-8 lg:col-span-3 group hover:shadow-card-hover transition-shadow duration-300 relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)', filter: 'blur(30px)' }} />
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: `rgba(108,99,255,0.12)`, color: '#6C63FF' }}
            >
              {reasons?.[3]?.icon}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
              <div className="sm:col-span-2">
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{reasons?.[3]?.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{reasons?.[3]?.description}</p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { v: '10k+', l: 'Queries/day handled' },
                  { v: '99.9%', l: 'Production uptime' },
                  { v: '200h+', l: 'Saved per month' },
                ]?.map((m) => (
                  <div key={m?.l} className="glass-card rounded-xl p-3 text-center">
                    <p className="text-xl font-display font-bold gradient-text">{m?.v}</p>
                    <p className="text-xs text-muted mt-0.5">{m?.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}