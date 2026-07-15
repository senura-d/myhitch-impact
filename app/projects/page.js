'use client';

import React, { useState } from 'react';
import { Layers, CheckCircle2, AlertTriangle, Image as ImageIcon, MapPin, Camera, Sparkles } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

export default function Projects() {
  const [activeProj, setActiveProj] = useState(1);
  const [evidenceSubmitted, setEvidenceSubmitted] = useState(false);
  const rootRef = useScrollReveal();

  const projects = [
    {
      id: 1,
      title: "Turkana Solars Boreholes",
      budget: "$50,000",
      spent: "$45,200",
      status: "Active / Monitoring",
      kpis: [
        { label: "Boreholes Completed", value: "10 / 12" },
        { label: "Families Served", value: "8,500 Families" },
        { label: "Water Quality Rating", value: "98% Purity" }
      ],
      milestones: [
        { name: "Geological Survey", status: "Done" },
        { name: "First 6 Drill Sites Complete", status: "Done" },
        { name: "Filter Integration", status: "Done" },
        { name: "Final 2 Sites Drill Operations", status: "In Progress" }
      ]
    },
    {
      id: 2,
      title: "Rural Primary Textbooks",
      budget: "$15,000",
      spent: "$12,400",
      status: "Final Audit Prep",
      kpis: [
        { label: "Textbooks Procured", value: "4,000 Books" },
        { label: "Schools Supplied", value: "4 Schools" },
        { label: "Student Reach", value: "1,200 Pupils" }
      ],
      milestones: [
        { name: "Publisher Contract Signoffs", status: "Done" },
        { name: "Book Shipping to Central Hub", status: "Done" },
        { name: "Regional Deliveries Complete", status: "Done" },
        { name: "Audited Ledger Validation", status: "In Progress" }
      ]
    }
  ];

  const current = projects.find(p => p.id === activeProj);

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
          backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Projects.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>PM&E SYSTEM</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Project <br />Monitoring & <br /><span className="gradient-text">Milestone Tracking</span></h1>
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
        <div className="container reveal-text" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Stay Accountable</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Every Milestone, Verified in the Field" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Gain control of budgets, catalog location check-ins with verified photo evidence, and dynamically track KPI outcomes for donor audits.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="projects-grid reveal-section snap-section">
        {/* Left: Project List & Milestones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Active Projects</h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => { setActiveProj(p.id); setEvidenceSubmitted(false); }}
                style={{
                  background: activeProj === p.id ? 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 100%)' : 'transparent',
                  color: activeProj === p.id ? '#fff' : 'var(--text-secondary)',
                  border: activeProj === p.id ? 'none' : '1px solid var(--card-border)',
                  borderRadius: '8px',
                  padding: '10px 16px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {p.title}
              </button>
            ))}
          </div>

          <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{current.title} Milestones</h4>
              <span className="badge badge-teal" style={{ fontSize: '0.7rem', flexShrink: 0 }}>{current.status}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {current.milestones.map((m, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', padding: '10px 12px', background: 'rgba(15, 23, 42, 0.02)', border: '1px solid var(--card-border)', borderRadius: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} style={{ color: m.status === 'Done' ? 'var(--teal-accent)' : 'var(--text-muted)' }} />
                    {m.name}
                  </span>
                  <span className={`badge ${m.status === 'Done' ? 'badge-teal' : 'badge-gold'}`} style={{ fontSize: '0.65rem', flexShrink: 0 }}>
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: KPI Summary & Evidence submission */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>KPI Target Indicators</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {current.kpis.map((kpi, idx) => (
                <div key={idx} style={{ background: 'rgba(15, 23, 42, 0.02)', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{kpi.label}</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)', marginTop: '2px' }}>{kpi.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Check-in Mockup */}
          <div className="card-glass" style={{ padding: '2rem', border: '1px dashed var(--teal-accent)' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
              <Camera size={18} style={{ color: 'var(--teal-accent)' }} /> Submit Field Evidence (PME)
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '1.2rem' }}>
              Upload location-stamped photos to prove milestone completion. Photos undergo metadata verification.
            </p>

            {evidenceSubmitted ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'rgba(36,161,220,0.08)', border: '1px solid rgba(36,161,220,0.2)', padding: '12px', borderRadius: '8px', textAlign: 'center', color: 'var(--teal-accent)', fontSize: '0.85rem', fontWeight: 600 }}>
                <CheckCircle2 size={15} /> Evidence uploaded successfully. GPS metadata verified.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ border: '2px dashed var(--card-border)', borderRadius: '8px', padding: '2rem 1.5rem', textAlign: 'center', cursor: 'pointer', background: 'rgba(15, 23, 42, 0.015)' }} onClick={() => setEvidenceSubmitted(true)}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(36, 161, 220, 0.1)',
                    color: 'var(--teal-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem'
                  }}>
                    <ImageIcon size={26} />
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Click to select field photo (JPEG/PNG)</span>
                </div>
                <div style={{ display: 'flex', gap: '6px', fontSize: '0.75rem', color: 'var(--text-muted)', alignItems: 'center' }}>
                  <MapPin size={12} /> Auto-detecting coordinates: Latitude 1.2921 N, Longitude 36.8219 E (Nairobi, KE)
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Prove It</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Turn Field Work Into Funder Confidence</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            A milestone is only as credible as the evidence behind it. Start logging GPS-stamped photos today, and your next audit becomes a formality instead of a scramble.
          </p>
        </div>
      </section>
    </div>
  );
}
