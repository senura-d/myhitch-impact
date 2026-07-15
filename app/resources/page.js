'use client';

import React from 'react';
import { BookOpen, FileText, Video, Download, CheckSquare } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

export default function Resources() {
  const rootRef = useScrollReveal();
  const downloads = [
    { type: "template", title: "NGO Governance Charter Model", size: "1.2 MB", desc: "A customizable bylaws template complying with international charity guidelines." },
    { type: "checklist", title: "Auditor Compliance Checklist", size: "480 KB", desc: "Preparation guide listing required accounting ledger records." },
    { type: "template", title: "School Development Plan Sheet", size: "2.4 MB", desc: "Outlines infrastructure campaign budgeting tables." },
    { type: "video", title: "Webinar: Grant Proposals with AI", duration: "45 mins", desc: "Tutorial on leveraging the AI Co-pilot for donor approvals." }
  ];

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      {/* Hero */}
      <section className="hero-section snap-section">
        <div className="parallax-hero-bg" style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          right: 0,
          bottom: '-10%',
          backgroundImage: 'url("/Resource Centre.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>RESOURCE LIBRARIES</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Templates & <br /><span className="gradient-text">Governance <br />Support</span></h1>
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Keep Learning</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="You Shouldn't Need a Consultant for This" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Download structured PDF templates, auditor preparation sheets, and tutorial videos to streamline compliance and operations.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Grid */}
      <div className="snap-section grid-2" style={{ gap: '2rem', alignItems: 'stretch' }}>
        {downloads.map((item, idx) => (
          <div key={idx} className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'rgba(36, 161, 220, 0.1)',
                color: 'var(--teal-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {item.type === 'template' && <FileText size={22} />}
                {item.type === 'checklist' && <CheckSquare size={22} />}
                {item.type === 'video' && <Video size={22} />}
              </div>
              <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>{item.size || item.duration}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>{item.title}</h4>
              <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
            </div>

            <a href="#" className="btn btn-secondary" style={{
              alignSelf: 'flex-start',
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              display: 'flex',
              gap: '6px',
              alignItems: 'center'
            }}>
              <Download size={14} /> Download File
            </a>
          </div>
        ))}
      </div>
      </div>

      {/* Closing Statement */}
      <section style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Keep Going</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Knowledge Is Only Useful If You Use It</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Download a template today, and put it to work this week. We would rather you finish one checklist than bookmark ten.
          </p>
        </div>
      </section>
    </div>
  );
}
