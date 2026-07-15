'use client';

import React, { useState } from 'react';
import { BarChart3, TrendingUp, Heart, Users, MapPin, Globe, Filter, Calendar } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('Q2');
  const rootRef = useScrollReveal();

  const metricCards = [
    { label: "Donor Retention Rate", value: "78.2%", sub: "+4.1% QoQ", trend: "up", color: "var(--teal-accent)" },
    { label: "Cost Per Dollar Raised", value: "$0.05", sub: "-1.2¢ QoQ", trend: "down", color: "var(--soft-green)" },
    { label: "Net Promoter Score (Volunteers)", value: "76", sub: "Excellent (NPS)", trend: "up", color: "var(--gold-accent)" }
  ];

  const sdgContributions = [
    { goal: "SDG 1: No Poverty", amount: "$24,500", progress: 85, color: "#1e3a8a" },
    { goal: "SDG 2: Zero Hunger", amount: "$32,100", progress: 92, color: "#0ea5e9" },
    { goal: "SDG 3: Good Health & Well-being", amount: "$18,400", progress: 68, color: "#24A1DC" },
    { goal: "SDG 4: Quality Education", amount: "$45,200", progress: 95, color: "#38bdf8" }
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
          backgroundImage: 'url("/Analytics.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>IMPACT MEASUREMENT</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>KPI & Analytics <span className="gradient-text">Dashboard</span></h1>

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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Why It Matters</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="What Gets Measured Gets Funded" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Real-time analytics tracking donations, volunteer productivity, compliance risk, and global SDG alignment.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* KPI Cards & Chart Panels */}
      <div className="reveal-section snap-section" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div className="grid-3">
        {metricCards.map((c, i) => (
          <div key={i} style={{ 
            display: 'flex', flexDirection: 'column', gap: '0.8rem',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            borderRadius: '16px',
            padding: '1.5rem',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.06)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; }}
          >
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{c.label}</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{c.value}</span>
              <span style={{ fontSize: '0.85rem', color: c.trend === 'up' ? 'var(--soft-green)' : 'var(--teal-accent)', fontWeight: 700, background: c.trend === 'up' ? 'rgba(34,197,94,0.1)' : 'rgba(20,184,166,0.1)', padding: '4px 10px', borderRadius: '20px' }}>{c.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Panels */}
      <div className="grid-2" style={{ gap: '2.5rem' }}>
        {/* SDG Contribution */}
        <div style={{ 
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
            background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            borderRadius: '16px', padding: '2rem' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>UN SDG Contribution</h3>
            <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>TARGET INDEX</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
            Your organization's funding distribution mapped against specific United Nations Sustainable Development Goals.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '0.5rem' }}>
            {sdgContributions.map((sdg, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: sdg.color, boxShadow: `0 0 10px ${sdg.color}` }}></span>
                    {sdg.goal}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{sdg.amount} <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>({sdg.progress}%)</span></span>
                </div>
                <div style={{ height: '8px', background: 'rgba(0,0,0,0.04)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${sdg.progress}%`, height: '100%', background: `linear-gradient(90deg, ${sdg.color}bb, ${sdg.color})`, borderRadius: '4px', transition: 'width 1s ease-out' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Analytics Mockup */}
        <div style={{ 
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
            background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            borderRadius: '16px', padding: '2rem' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>Geographic Distribution</h3>
            <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>GLOBAL REACH</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
            Top regions receiving program allocations and volunteer mobilization density during Q2.
          </p>

          {/* SVG Map Illustration Mockup */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            height: '220px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.5)'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
              <path d="M50 100 C 100 80, 150 120, 200 90 C 250 60, 300 130, 350 110" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="100" cy="90" r="40" fill="#38bdf8" opacity="0.15" />
              <circle cx="280" cy="110" r="55" fill="#eab308" opacity="0.15" />
            </svg>

            {/* Float Markers */}
            <div style={{ position: 'absolute', top: '35%', left: '20%', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.4)', fontSize: '0.75rem', color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <MapPin size={12} style={{ color: '#38bdf8' }} /> East Africa (45%)
            </div>

            <div style={{ position: 'absolute', top: '55%', left: '55%', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(234, 179, 8, 0.4)', fontSize: '0.75rem', color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <MapPin size={12} style={{ color: '#eab308' }} /> Southeast Asia (35%)
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--card-border)', paddingTop: '1rem', marginTop: 'auto' }}>
            <span>Total Beneficiaries: <strong style={{ color: 'var(--text-primary)' }}>84,520</strong></span>
            <span>Total Projects: <strong style={{ color: 'var(--text-primary)' }}>142</strong></span>
          </div>
        </div>
      </div>
      </div>

      {/* SROI statement */}
      <section className="reveal-section snap-section" style={{ 
        padding: '3rem', 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 249, 255, 0.6))',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1)',
        borderRadius: '24px',
        display: 'flex', 
        alignItems: 'center', 
        gap: '2.5rem', 
        flexWrap: 'wrap',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background glow */}
        <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--teal-accent), #38bdf8)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 20px rgba(56, 189, 248, 0.3)',
          flexShrink: 0
        }}>
          <TrendingUp size={32} />
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Social Return on Investment (SROI) Ledger</h4>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, maxWidth: '600px' }}>
            MYHitch algorithms match donation output metrics with verified local data registers to dynamically compute SROI ratios.
          </p>
        </div>
        <a href="#" className="btn" style={{ 
          fontSize: '1rem', 
          fontWeight: 700, 
          padding: '12px 28px', 
          background: '#fff',
          color: 'var(--teal-accent)',
          border: '2px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(56, 189, 248, 0.2)'; e.currentTarget.style.borderColor = 'var(--teal-accent)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)'; }}
        >
          View Ledger Auditor
        </a>
      </section>
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>See the Proof</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Turn Your Data Into Donor Confidence</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Numbers alone do not win grants. Numbers tied to verified outcomes and public SDG alignment do. Start tracking today so your next report writes itself.
          </p>
        </div>
      </section>
    </div>
  );
}
