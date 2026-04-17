'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const solutions = [
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that handle customer queries, qualify leads, and automate support — 24/7, at scale.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    accent: '#6C63FF',
    tags: ['GPT-4', 'LangChain', 'RAG'],
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'ml-models',
    title: 'Machine Learning Models',
    description: 'Custom predictive models trained on your data — from demand forecasting and churn prediction to anomaly detection and recommendation engines.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
        <path d="M12 2a10 10 0 0 1 10 10"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    accent: '#00D4FF',
    tags: ['PyTorch', 'scikit-learn', 'MLflow'],
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    description: 'End-to-end intelligent automation that replaces repetitive workflows — document processing, data extraction, approval routing, and more.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    accent: '#A855F7',
    tags: ['n8n', 'Python', 'APIs'],
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    description: 'Transform raw business data into actionable intelligence. Custom dashboards, predictive analytics, and AI-powered reporting that surfaces what matters.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    accent: '#6C63FF',
    tags: ['Pandas', 'Tableau', 'BigQuery'],
    colSpan: 'lg:col-span-2',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Visual AI that sees what humans miss — object detection, quality inspection, facial recognition, and real-time video analysis.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    accent: '#00D4FF',
    tags: ['OpenCV', 'YOLO', 'TensorFlow'],
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'nlp',
    title: 'NLP Solutions',
    description: 'Natural Language Processing that understands context, sentiment, and intent — powering document intelligence, content generation, and multilingual support across your entire operation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z"/>
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z"/>
      </svg>
    ),
    accent: '#A855F7',
    tags: ['BERT', 'GPT', 'spaCy', 'Transformers'],
    colSpan: 'lg:col-span-3',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SolutionsPreviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(0,212,255,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-ai mb-4">
              <span className="w-8 h-px bg-cyan-ai" />
              What We Build
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-foreground">
              Tinitiate AI{' '}
              <span className="gradient-text">Solutions</span>
            </h2>
          </div>
          <Link
            href="/solutions"
            className="shrink-0 glass-card gradient-border rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/8 transition-colors inline-flex items-center gap-2 group"
          >
            View all solutions
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Bento grid
          Row 1: [Chatbots cs-1] + [ML Models cs-1] + [Automation cs-1] = 3/3 ✓
          Row 2: [Data Analytics cs-2] + [Computer Vision cs-1] = 3/3 ✓
          Row 3: [NLP Solutions cs-3 (col-span-full)] = 3/3 ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className={`glass-card gradient-border rounded-3xl p-7 group hover:shadow-card-hover transition-all duration-300 ${
                sol.id === 'analytics' ? 'sm:col-span-2 lg:col-span-2' :
                sol.id === 'nlp'? 'sm:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `${sol.accent}18`, color: sol.accent }}
                >
                  {sol.icon}
                </div>
                <svg className="w-4 h-4 text-muted-subtle opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>

              <h3 className="font-display font-bold text-lg text-foreground mb-2">{sol.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{sol.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {sol.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: `${sol.accent}12`, color: sol.accent, border: `1px solid ${sol.accent}25` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}