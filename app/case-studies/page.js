'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Quote, Shield } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

export default function CaseStudies() {
  const rootRef = useScrollReveal();
  const cases = [
    {
      title: "How Green Future Alliance Mobilized 1,200 Volunteers",
      sector: "Environment",
      metric: "+1,200 Volunteers Matched",
      desc: "An in-depth look at how GFA moved from Excel sheets to MYHitch's volunteer calendar scheduler, reducing administrative tasks by 30 hours a week.",
      testimonial: "The digital clock-in system and verified certificates completely transformed volunteer engagement."
    },
    {
      title: "Hope Schools Group Secures $200k in Development Grants",
      sector: "Education",
      metric: "$200,000 Capital Raised",
      desc: "Using the AI Co-pilot to draft and format complex proposals, Hope Schools secured solar array funding for four primary facilities in under three weeks.",
      testimonial: "The AI proposal writer matched World Bank SDG indices automatically, resulting in instant donor approval."
    }
  ];

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      {/* Hero */}
      <section className="hero-section snap-section">
        <div className="parallax-hero-bg" style={{ backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/case study .png")` }}></div>

        <div className="hero-content-anchor">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>SUCCESS STORIES</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Proven Community <br /><span className="gradient-text">Transformation</span></h1>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="snap-section" style={{
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--white)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <TextureOverlay opacity={1} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Real Results</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Proof Beats Promises" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Read comprehensive case studies outlining project monitoring, volunteer mobilization, and AI grant-writing achievements.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {cases.map((c, idx) => (
          <div key={idx} className="card-glass" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }} className="case-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="badge badge-teal" style={{ fontSize: '0.65rem' }}>{c.sector}</span>
                  <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>{c.metric}</span>
                </div>

                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>{c.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>{c.desc}</p>

                <div style={{
                  background: 'rgba(15, 23, 42, 0.02)',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  borderLeft: '3px solid var(--gold-accent)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  marginTop: '0.5rem',
                  display: 'flex',
                  gap: '8px',
                  color: 'var(--text-secondary)'
                }}>
                  <Quote size={18} style={{ color: 'var(--gold-accent)', flexShrink: 0 }} />
                  <span>&quot;{c.testimonial}&quot;</span>
                </div>
              </div>

              {/* Graphic Mockup box */}
              <div style={{
                background: 'rgba(36, 161, 220, 0.06)',
                border: '1px solid rgba(36, 161, 220, 0.2)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '220px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(36, 161, 220, 0.12)',
                  color: 'var(--teal-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Shield size={26} />
                </div>
                <h4 style={{ color: 'var(--text-primary)' }}>Verified Audit Log</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>This project was verified for location coordinates, milestone evidence, and budget ledger audit compliance.</p>
                <a href="#" style={{ fontSize: '0.85rem', color: 'var(--teal-accent)', fontWeight: 600, display: 'flex', gap: '4px', justifyContent: 'center', alignItems: 'center' }}>
                  View Full Case Study <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Closing Statement */}
      <section style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Your Turn</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Your Organization Could Be Next</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Every case study here started the same way yours would: one team deciding the old spreadsheets were not going to cut it anymore.
          </p>
        </div>
      </section>
    </div>
  );
}
