'use client';

import React from 'react';
import Link from 'next/link';
import { Check, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

export default function Pricing() {
  const rootRef = useScrollReveal();
  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      desc: "Perfect for local community clubs, small charities, and volunteer groups.",
      button: "Start Free Sandbox",
      btnClass: "btn-secondary",
      features: [
        "Up to 250 active members",
        "Basic volunteer scheduler",
        "Online donation pages (3.5% transaction fee)",
        "Standard templates (email & newsletters)",
        "Community forum support"
      ]
    },
    {
      name: "Grow",
      price: "$89",
      period: "/month",
      desc: "For regional NGOs, schools, and social enterprises ready to scale.",
      button: "Request Grow Trial",
      btnClass: "btn-primary",
      featured: true,
      features: [
        "Unlimited active members & donors",
        "Advanced volunteer clock-in & tracking",
        "AI Co-pilot: 20 templates drafts/mo",
        "Ticketing via MYHitch Pass (1% transaction fee)",
        "SDG target tracker & analytics",
        "Email, SMS, & WhatsApp blast tools",
        "Next business day support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For global foundations, government entities, and large school systems.",
      button: "Contact Operations",
      btnClass: "btn-gold",
      features: [
        "Unlimited everything",
        "AI Co-pilot: Unlimited prompts & proposals",
        "Bespoke system portals & custom API endpoints",
        "Dedicated board governance compliance locker",
        "Full database migration support",
        "Dedicated account manager",
        "SLA guaranteed uptime (99.99%)"
      ]
    }
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
          backgroundImage: 'url("/pricing.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>PRICING PLANS</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Scalable Plans for <br /><span className="gradient-text">Social Impact</span></h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              No hidden fees. Every plan includes secure database storage, SSL encryption, and GDPR compliance. Choose the plan that fits your community.
            </p>
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Fair Pricing</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Enterprise Tools Shouldn't Require an Enterprise Budget" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            We built our pricing the way we build everything else: transparently. No hidden setup fees, no surprise overage charges, and a dedicated discount path for small registered charities who need it most.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Grid */}
      <div className="reveal-section snap-section grid-3" style={{ alignItems: 'stretch' }}>
        {plans.map((p, idx) => (
          <div 
            key={idx} 
            className="card-glass" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              padding: '2rem',
              border: p.featured ? '2px solid var(--teal-accent)' : '1px solid var(--card-border)',
              position: 'relative'
            }}
          >
            {p.featured && (
              <span className="badge badge-teal" style={{ position: 'absolute', top: '-12px', left: '2rem', fontSize: '0.65rem' }}>
                MOST POPULAR
              </span>
            )}
            
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{p.name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{p.desc}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{p.price}</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{p.period}</span>
            </div>

            <Link href="/contact" className={`btn ${p.btnClass}`} style={{ textAlign: 'center', width: '100%' }}>
              {p.button} <ArrowRight size={14} />
            </Link>

            <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FEATURES INCLUDE:</div>
              {p.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.9rem' }}>
                  <Check size={16} style={{ color: p.featured ? 'var(--teal-accent)' : 'var(--gold-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Trust Signoffs */}
      <div className="card-glass reveal-section" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1, minWidth: '280px' }}>
          <ShieldCheck size={32} style={{ color: 'var(--teal-accent)', flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Are you a small registered charity?</h4>
            <p style={{ fontSize: '0.85rem' }}>We offer an additional 20% discount on the Grow plan for verified 501(c)(3) and charity commission groups.</p>
          </div>
        </div>
        <Link href="/contact" className="btn btn-secondary" style={{ fontSize: '0.9rem', flexShrink: 0 }}>
          Apply for Charity Discount
        </Link>
      </div>
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Still Deciding</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Try Before You Commit</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Every plan starts with a free sandbox. Explore the dashboards, run a real campaign, and decide with your team before a single dollar changes hands.
          </p>
        </div>
      </section>
    </div>
  );
}
