'use client';

import React, { useRef, useEffect } from 'react';
import Icon from '@components/ui/AppIcon';

export default function CTABannerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="get-started" className="relative py-24 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA Card */}
        <div className="relative rounded-4xl overflow-hidden">
          {/* Shimmer border wrapper */}
          <div className="absolute inset-0 rounded-4xl p-px">
            <div className="shimmer-border absolute inset-0 rounded-4xl" />
          </div>

          {/* Inner content */}
          <div
            className="relative rounded-4xl p-12 md:p-20 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(6,11,24,0.95) 40%, rgba(123,47,255,0.1) 100%)' }}
          >
            {/* Background blobs */}
            <div
              className="absolute top-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }}
            />
            <div
              className="absolute bottom-[-30%] right-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Eyebrow */}
              <div className="reveal-item inline-flex items-center gap-3 mb-8">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                  <div className="ping absolute inset-0 w-2 h-2 rounded-full bg-brand-cyan" />
                </div>
                <span className="mono text-xs font-medium text-brand-cyan tracking-[0.2em] uppercase">
                  Start Your Journey Today
                </span>
              </div>

              <h2
                className="reveal-item font-bold text-foreground tracking-tight mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Ready to Launch Your{' '}
                <span className="gradient-text text-glow-cyan">Tech Career?</span>
              </h2>

              <p className="reveal-item text-foreground-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
                Join 5,000+ professionals who transformed their careers with Tinitiate. Enroll today and take the first step toward your future in IT.
              </p>

              {/* CTAs */}
              <div className="reveal-item flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#programs"
                  className="btn-glow inline-flex items-center justify-center gap-3 bg-brand-cyan text-bg-primary font-bold text-base px-10 py-4 rounded-full shadow-cyan-glow hover:scale-[1.03] transition-all duration-300"
                >
                  Explore All Programs
                  <Icon name="ArrowRightIcon" size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 glass-card text-foreground font-semibold text-base px-10 py-4 rounded-full hover:border-brand-cyan/30 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon name="PhoneIcon" size={16} className="text-brand-violet" />
                  Talk to an Advisor
                </a>
              </div>

              {/* Trust indicators */}
              <div className="reveal-item mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground-muted">
                {[
                  { icon: 'CheckCircleIcon', text: 'No upfront payment required' },
                  { icon: 'CheckCircleIcon', text: 'Flexible start dates' },
                  { icon: 'CheckCircleIcon', text: '100% online or in-person' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <Icon name={item.icon as 'CheckCircleIcon'} size={16} className="text-brand-cyan" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}