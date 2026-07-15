'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';
import {
  Building2,
  GraduationCap,
  Users,
  BarChart3,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  TrendingUp,
  Award,
  Globe,
  Settings,
  Database,
  ShieldCheck
} from 'lucide-react';

const accentThemes = {
  ngos: {
    label: 'Teal',
    main: 'var(--teal-accent)',
    darkGradient: 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 100%)',
    tint: 'rgba(36, 161, 220, 0.1)',
    tintSoft: 'rgba(36, 161, 220, 0.05)',
    border: 'rgba(36, 161, 220, 0.2)',
    shadow: 'rgba(36, 161, 220, 0.3)'
  },
  schools: {
    label: 'Sky',
    main: '#0ea5e9',
    darkGradient: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)',
    tint: 'rgba(14, 165, 233, 0.1)',
    tintSoft: 'rgba(14, 165, 233, 0.05)',
    border: 'rgba(14, 165, 233, 0.2)',
    shadow: 'rgba(14, 165, 233, 0.3)'
  },
  community: {
    label: 'Navy',
    main: '#1e3a8a',
    darkGradient: 'linear-gradient(135deg, #0b1a30 0%, #1e3a8a 100%)',
    tint: 'rgba(30, 58, 138, 0.1)',
    tintSoft: 'rgba(30, 58, 138, 0.05)',
    border: 'rgba(30, 58, 138, 0.2)',
    shadow: 'rgba(30, 58, 138, 0.3)'
  },
  enterprises: {
    label: 'Slate Blue',
    main: '#38bdf8',
    darkGradient: 'linear-gradient(135deg, #1a83b4 0%, #38bdf8 100%)',
    tint: 'rgba(56, 189, 248, 0.1)',
    tintSoft: 'rgba(56, 189, 248, 0.05)',
    border: 'rgba(56, 189, 248, 0.2)',
    shadow: 'rgba(56, 189, 248, 0.3)'
  }
};

const moduleStatusRows = {
  ngos: [
    { icon: Database, label: 'Donor CRM & Receipt API', status: 'CONNECTED', tone: 'connected' },
    { icon: BarChart3, label: 'SDG Target Contribution Analytics', status: 'ENABLED', tone: 'connected' },
    { icon: ShieldCheck, label: 'Public Impact Dashboard Sync', status: 'READY', tone: 'ready' }
  ],
  schools: [
    { icon: Database, label: 'Student & Scholarship Records API', status: 'CONNECTED', tone: 'connected' },
    { icon: BarChart3, label: 'Capital Campaign Progress Tracker', status: 'ENABLED', tone: 'connected' },
    { icon: ShieldCheck, label: 'Board Auditing Compliance Locker', status: 'READY', tone: 'ready' }
  ],
  community: [
    { icon: Database, label: 'Member Directory & Card API', status: 'CONNECTED', tone: 'connected' },
    { icon: BarChart3, label: 'Event Ticketing & QR Validation', status: 'ENABLED', tone: 'connected' },
    { icon: ShieldCheck, label: 'Emergency Mobilize Hub Sync', status: 'READY', tone: 'ready' }
  ],
  enterprises: [
    { icon: Database, label: 'ESG Metrics Scorecard API', status: 'CONNECTED', tone: 'connected' },
    { icon: BarChart3, label: 'SROI Forecast Modeling Engine', status: 'ENABLED', tone: 'connected' },
    { icon: ShieldCheck, label: 'Audited Ledger Compliance Locker', status: 'READY', tone: 'ready' }
  ]
};

const solutionData = {
  ngos: {
    icon: Building2,
    badge: "NGOs & Charities",
    title: "Verify Outcomes, Grow Donor Base",
    desc: "Built to address trust deficits. Show donors exactly where funds are applied with public impact dashboards, secure receipts, and verified program profiles.",
    features: [
      "Tax-deductible donor receipts with automated PDF distribution",
      "Public SDG alignment index (e.g. tracking contribution to Hunger/Education)",
      "Crowdfunding dashboards with live emergency mobilize triggers",
      "Volunteer scheduler & opportunity matcher"
    ]
  },
  schools: {
    icon: GraduationCap,
    badge: "Schools & Education",
    title: "Optimize Infrastructure, Track Scholarships",
    desc: "Provide clear updates on capital campaigns, manage student sponsorship databases, track asset allocations, and present verified reports to board trustees.",
    features: [
      "Student registration & scholarship progress folders",
      "Infrastructure development campaign targets (e.g. new library builds)",
      "Digital school development dashboard showing asset lists",
      "Compliance audit sheets and Board meeting minutes archives"
    ]
  },
  community: {
    icon: Users,
    badge: "Community & Faith Groups",
    title: "Mobilize Helpers, Coordinate Campaigns",
    desc: "Perfect for clubs, temples, churches, and local services. Send WhatsApp/SMS blasts, sell tickets via MYHitch Pass, and manage volunteers during critical emergency operations.",
    features: [
      "Member register folders with digital membership cards",
      "WhatsApp, Email, & SMS group notification blasts",
      "Event ticketing with QR scanning door validation",
      "Emergency mobilize hubs (supply chains & volunteer coordinate)"
    ]
  },
  enterprises: {
    icon: BarChart3,
    badge: "Social Enterprises",
    title: "Quantify Social Return on Investment (SROI)",
    desc: "Bridge the gap between business metrics and impact. Demonstrate environmental, social, and governance (ESG) compliance with clean audits and analytical models.",
    features: [
      "ESG metrics scorecard compliant with global standards",
      "Audited double-entry cash flow ledgers ready for accountants",
      "Custom development portal modules built on our API",
      "Predictive donor behavior maps & funding forecast summaries"
    ]
  }
};

function SolutionsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('ngos');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && solutionData[type]) {
      setActiveTab(type);
    }
  }, [searchParams]);

  const current = solutionData[activeTab];
  const IconComponent = current.icon;
  const accent = accentThemes[activeTab];
  const statusRows = moduleStatusRows[activeTab];
  const rootRef = useScrollReveal();

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      {/* 1. Hero Section */}
      <section className="hero-section snap-section">
        <div className="parallax-hero-bg" style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          right: 0,
          bottom: '-10%',
          backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/solutions.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '540px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start', fontSize: '0.75rem' }}>
              TARGET SECTORS
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>
              Enterprise Tech for <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 60%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Public & Social Good</span>
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              We provide specialized dashboards, compliance models, and integrations tailored to the unique regulatory and operational needs of your organization.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
              <a href="#sectors" className="btn btn-primary">
                Explore Sectors <ChevronRight size={16} />
              </a>
            </div>
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Built For You</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="One Size Fits No One, So We Built Four" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            An NGO does not run like a school district. A community group does not run like a social enterprise. Instead of forcing every organization into the same rigid workflow, MYHitch adapts its modules, language, and dashboards to how your sector actually operates.
          </p>
        </div>
      </section>

      {/* 2. Solutions Grid Section */}
      <section id="sectors" className="reveal-section snap-section" style={{ padding: 'var(--space-xl) 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
        background: '#fff',
        padding: '6px',
        borderRadius: '12px',
        border: '1px solid var(--card-border)',
        boxShadow: 'var(--shadow-sm)',
        alignSelf: 'center'
      }}>
        {Object.keys(solutionData).map((key) => {
          const TabIcon = solutionData[key].icon;
          const tabAccent = accentThemes[key];
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: isActive ? tabAccent.darkGradient : 'none',
                color: isActive ? '#fff' : 'var(--text-secondary)',
                boxShadow: isActive ? `0 4px 14px ${tabAccent.shadow}` : 'none',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 18px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <TabIcon size={16} />
              {solutionData[key].badge}
            </button>
          );
        })}
      </div>

      {/* Display Card */}
      <div className="card-glass" style={{ padding: 'var(--space-xl)', border: `1px solid ${accent.border}`, transition: 'border-color 0.3s ease' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '3rem', alignItems: 'center' }} className="solution-inner-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: accent.tint,
                color: accent.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconComponent size={20} />
              </div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: accent.tint,
                color: accent.main,
                border: `1px solid ${accent.border}`
              }}>{current.badge}</span>
            </div>

            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>{current.title}</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>{current.desc}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '0.5rem 0' }}>
              {current.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '7px',
                    background: accent.tint,
                    flexShrink: 0
                  }}>
                    <CheckCircle2 size={14} style={{ color: accent.main }} />
                  </div>
                  <span style={{ color: 'var(--text-primary)', minWidth: 0, flex: 1 }}>{f}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="btn"
              style={{
                alignSelf: 'flex-start',
                marginTop: '0.5rem',
                background: accent.darkGradient,
                color: '#fff',
                boxShadow: `0 4px 14px ${accent.shadow}`
              }}
            >
              Request Demo for {current.badge}
            </Link>
          </div>

          {/* Interactive Mockup Panel */}
          <div style={{
            background: `linear-gradient(160deg, ${accent.tintSoft} 0%, rgba(255,255,255,0) 60%)`,
            border: `1px solid ${accent.border}`,
            borderRadius: '16px',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', minWidth: 0 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '9px',
                  background: accent.tint,
                  position: 'relative',
                  flexShrink: 0
                }}>
                  <Settings size={16} style={{ color: accent.main }} />
                  <span style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: accent.main
                  }} className="animate-pulse-glow" />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.03em', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>MODULE CONFIGURATOR</span>
              </div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: accent.tint,
                color: accent.main,
                border: `1px solid ${accent.border}`,
                flexShrink: 0
              }}>Active Status</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {statusRows.map((row, i) => {
                const RowIcon = row.icon;
                const statusColor = row.tone === 'ready' ? 'var(--gold-accent)' : 'var(--soft-green)';
                return (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    background: '#fff',
                    border: '1px solid var(--card-border)',
                    borderRadius: '10px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                      <RowIcon size={15} style={{ color: accent.main, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.83rem', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.label}</span>
                    </div>
                    <span style={{ color: statusColor, fontSize: '0.72rem', fontWeight: 700, flexShrink: 0 }}>{row.status}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.75rem', color: 'var(--text-muted)', paddingTop: '0.25rem', borderTop: '1px solid var(--card-border)' }}>
              <Globe size={14} style={{ flexShrink: 0 }} /> Global servers compliant with GDPR, HIPAA, and local Charity Commission boards.
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>

      <style jsx global>{`
        .hero-section {
          padding: var(--space-sm) 0 var(--space-lg);
          position: relative;
          overflow: hidden;
          min-height: 520px;
        }
        .hero-content-anchor {
          left: var(--space-md);
        }
        @media (min-width: 768px) {
          .hero-content-anchor {
            left: 4%;
          }
        }
        @media (min-width: 1024px) {
          .hero-section {
            min-height: calc(100vh - 70px);
          }
          .hero-content-anchor {
            left: 5%;
          }
          .solution-inner-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
        @media (min-width: 1400px) {
          .hero-content-anchor {
            left: 6%;
          }
        }
      `}</style>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Find Your Fit</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Not Sure Which Sector Fits? Ask Us.</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Many organizations blend more than one category — a school running a community food bank, a social enterprise partnering with an NGO. Tell us how you actually operate and we will help you configure the right combination.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function Solutions() {
  return (
    <Suspense fallback={<div style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '3rem' }}>Loading Solutions...</div>}>
      <SolutionsContent />
    </Suspense>
  );
}
