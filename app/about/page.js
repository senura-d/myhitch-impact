'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Heart, CheckCircle2, ChevronRight, FileText, BarChart3, Users } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

export default function About() {
  const rootRef = useScrollReveal();
  const values = [
    { icon: Heart, title: "Mission-Driven", desc: "Every line of code we write is optimized to unlock social value and empower grassroots leaders." },
    { icon: ShieldCheck, title: "Absolute Transparency", desc: "We believe in trust through verification. All donation flows and project updates are verifiable." },
    { icon: Award, title: "Enterprise Grade", desc: "No more fragile software. We provide secure, SLA-backed, scalable cloud architecture to nonprofits." }
  ];

  const team = [
    { name: "Maya Patel", role: "Co-Founder & CEO", prev: "Formerly VP Impact Tech at Gates Foundation", image: '/team_maya.png', gradient: 'linear-gradient(135deg, #1a83b4 0%, #24A1DC 100%)' },
    { name: "Dr. Alistair Vance", role: "Chief of AI Systems", prev: "Formerly AI Researcher at DeepMind", image: '/team_alistair.png', gradient: 'linear-gradient(135deg, #0ea5e9 0%, #1e3a8a 100%)' },
    { name: "Elena Rostova", role: "Head of Community Operations", prev: "Formerly NGO Director at Red Cross Europe", image: '/team_elena.png', gradient: 'linear-gradient(135deg, #24A1DC 0%, #0ea5e9 100%)' }
  ];

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      {/* Hero */}
      <section className="hero-section snap-section">
        <div className="parallax-hero-bg" style={{ backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/about us .png")` }}></div>

        <div className="hero-content-anchor">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>WHO WE ARE</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Digitally Transforming <br /><span className="gradient-text">Social <br />Progress</span></h1>
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Our Story</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Built By People Who've Lived the Problem" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            MYHitch Impact is a digital platform built by engineers and social advocates. We believe community leaders, NGO coordinators, and educators should have access to the same high-caliber technology as Fortune 500 companies.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      {/* Pillars of Trust & Value */}
      <section className="grid-3" style={{ marginTop: 'var(--space-md)', alignItems: 'stretch' }}>
        {values.map((v, idx) => {
          const Icon = v.icon;
          return (
            <div key={idx} className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(36, 161, 220, 0.1)',
                color: 'var(--teal-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Icon size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{v.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{v.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Financial Transparency & Audits */}
      <section className="card-glass" style={{ padding: 'var(--space-xl)', border: '1px solid rgba(36,161,220,0.2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} className="transparency-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span className="badge badge-gold" style={{ alignSelf: 'flex-start' }}>ANNUAL AUDIT</span>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Financial Accountability</h2>
            <p>
              Trust is built on transparency. We publish our annual financial statements, tax reports, and external audit files directly. Our platform ensures that 95% of all funds collected reach direct beneficiaries.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <a href="#" className="btn btn-gold" style={{ fontSize: '0.9rem' }}>
                <FileText size={16} /> Download 2025 Annual Report
              </a>
              <a href="#" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>
                View Audit Ledger
              </a>
            </div>
          </div>

          <div style={{
            background: 'rgba(36, 161, 220, 0.05)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(36, 161, 220, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Q2 Expense Allocation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '2px', color: 'var(--text-secondary)' }}>
                  <span>Direct Community Projects</span>
                  <span style={{ color: 'var(--teal-accent)', fontWeight: 600 }}>88.5%</span>
                </div>
                <div className="progress-bar-container"><div className="progress-bar-fill" style={{ width: '88.5%' }}></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '2px', color: 'var(--text-secondary)' }}>
                  <span>Technology & Server Upkeep</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>6.8%</span>
                </div>
                <div className="progress-bar-container"><div className="progress-bar-fill" style={{ width: '6.8%' }}></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '2px', color: 'var(--text-secondary)' }}>
                  <span>Admin & Operations</span>
                  <span style={{ color: 'var(--gold-accent)', fontWeight: 600 }}>4.7%</span>
                </div>
                <div className="progress-bar-container"><div className="progress-bar-fill-gold progress-bar-fill" style={{ width: '4.7%' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--text-primary)' }}>Our Leadership Team</h2>
          <p style={{ maxWidth: '500px', margin: '0.5rem auto 0' }}>Guided by veterans of global philanthropy and enterprise cloud architectures.</p>
        </div>
        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {team.map((t, idx) => (
            <div key={idx} className="card-glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.9rem', padding: 0, overflow: 'hidden' }}>
              {/* Image card */}
              <div style={{
                width: '100%',
                aspectRatio: '4 / 3',
                background: t.gradient,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', padding: '0 1.5rem 1.75rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{t.name}</h3>
                <div className="badge badge-teal" style={{ fontSize: '0.7rem' }}>{t.role}</div>
                <p style={{ fontSize: '0.85rem' }}>{t.prev}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* Closing Statement */}
      <section style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Join Us</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Ready to Build With Us?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Whether you are a nonprofit looking for a technology partner or an engineer who wants your work to matter, we would like to hear from you.
          </p>
        </div>
      </section>
    </div>
  );
}
