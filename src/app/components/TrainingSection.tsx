'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const courses = [
  {
    id: 'beginners',
    title: 'AI for Beginners',
    level: 'Beginner',
    duration: '6 weeks',
    description: 'No prior experience needed. Learn what AI is, how it works, and how to apply it to your business or career starting day one.',
    topics: ['What is AI/ML', 'Practical AI tools', 'Prompt engineering', 'AI ethics'],
    color: '#6C63FF',
    students: '1,200+',
  },
  {
    id: 'ml-training',
    title: 'Machine Learning Training',
    level: 'Intermediate',
    duration: '10 weeks',
    description: 'Build and deploy real ML models. From data preparation to production pipelines — hands-on, project-based learning.',
    topics: ['Supervised learning', 'Model evaluation', 'Feature engineering', 'MLOps basics'],
    color: '#00D4FF',
    students: '800+',
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning Training',
    level: 'Advanced',
    duration: '12 weeks',
    description: 'Master neural networks, transformers, and computer vision. Build systems that power the next generation of AI products.',
    topics: ['PyTorch fundamentals', 'CNNs & RNNs', 'Transformers', 'Model deployment'],
    color: '#A855F7',
    students: '450+',
  },
  {
    id: 'ai-business',
    title: 'AI for Businesses',
    level: 'All Levels',
    duration: '4 weeks',
    description: 'Designed for teams and executives. Understand AI strategy, vendor evaluation, ROI calculation, and how to lead AI transformation.',
    topics: ['AI strategy', 'Use case mapping', 'ROI frameworks', 'Change management'],
    color: '#6C63FF',
    students: '600+',
  },
];

const levelColors: Record<string, string> = {
  'Beginner': 'rgba(108,99,255,0.15)',
  'Intermediate': 'rgba(0,212,255,0.12)',
  'Advanced': 'rgba(168,85,247,0.15)',
  'All Levels': 'rgba(108,99,255,0.1)',
};

const levelTextColors: Record<string, string> = {
  'Beginner': '#6C63FF',
  'Intermediate': '#00D4FF',
  'Advanced': '#A855F7',
  'All Levels': '#8B85FF',
};

export default function TrainingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(168,85,247,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-purple-ai mb-4">
            <span className="w-8 h-px bg-purple-ai" />
            Learn AI
          </span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-foreground">
                AI Training{' '}
                <span className="gradient-text">Programs</span>
              </h2>
              <p className="text-muted text-lg mt-3 max-w-xl leading-relaxed">
                Structured learning paths for every level — from first steps to production deployment.
              </p>
            </div>
            <div className="shrink-0 glass-card rounded-2xl px-5 py-4 text-center">
              <p className="text-2xl font-display font-bold gradient-text">3,000+</p>
              <p className="text-xs text-muted mt-1">Professionals trained</p>
            </div>
          </div>
        </motion.div>

        {/* Course cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card gradient-border rounded-3xl p-7 group hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex flex-col gap-2">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full w-fit"
                    style={{ background: levelColors[course.level], color: levelTextColors[course.level] }}
                  >
                    {course.level}
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground">{course.title}</h3>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="text-xs text-muted">Duration</p>
                  <p className="text-sm font-semibold text-foreground">{course.duration}</p>
                </div>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-5">{course.description}</p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {course.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-2.5 py-1 rounded-full glass-card text-muted"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: course.color }}>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span className="text-xs text-muted">{course.students} enrolled</span>
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-semibold inline-flex items-center gap-1 group/link"
                  style={{ color: course.color }}
                >
                  Enroll now
                  <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}