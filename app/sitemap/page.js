'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Layers,
  Building2,
  DollarSign,
  LayoutDashboard,
  Heart,
  Users,
  Calendar,
  Cpu,
  BarChart3,
  ShieldCheck,
  Info,
  BookOpen,
  Sparkles,
  Mail,
  LogIn,
  ArrowRight
} from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

const siteGroups = [
  {
    title: 'Platform',
    desc: 'The core product — start here.',
    links: [
      { icon: Home, name: 'Home', href: '/', desc: 'Overview of the MYHitch Impact platform.' },
      { icon: Layers, name: 'Features', href: '/features', desc: 'Browse all 26 core modules.' },
      { icon: Building2, name: 'Solutions', href: '/solutions', desc: 'Tailored for NGOs, schools, community groups & enterprises.' },
      { icon: DollarSign, name: 'Pricing', href: '/pricing', desc: 'Plans for every organization size.' },
      { icon: LayoutDashboard, name: 'Dashboard', href: '/dashboard', desc: 'Live operational dashboard (demo).' }
    ]
  },
  {
    title: 'Modules',
    desc: 'Purpose-built tools for day-to-day operations.',
    links: [
      { icon: Heart, name: 'Fundraising', href: '/fundraising', desc: 'Secure donations, receipts, and appeals.' },
      { icon: Users, name: 'Volunteer Portal', href: '/volunteer', desc: 'Match, schedule, and track volunteers.' },
      { icon: Calendar, name: 'Event Management', href: '/events', desc: 'Ticketing and RSVP via MYHitch Pass.' },
      { icon: Cpu, name: 'AI Assistant', href: '/ai-assistant', desc: 'Draft proposals, translate, and structure budgets.' },
      { icon: BarChart3, name: 'Analytics & KPIs', href: '/analytics', desc: 'SDG alignment and impact measurement.' },
      { icon: ShieldCheck, name: 'Project Monitoring', href: '/projects', desc: 'Milestones, budgets, and field evidence.' }
    ]
  },
  {
    title: 'Company',
    desc: 'Who we are and how we prove it.',
    links: [
      { icon: Info, name: 'About Us', href: '/about', desc: 'Mission, values, and leadership team.' },
      { icon: Sparkles, name: 'Case Studies', href: '/case-studies', desc: 'Real results from real organizations.' },
      { icon: BookOpen, name: 'Resource Centre', href: '/resources', desc: 'Templates, checklists, and webinars.' },
      { icon: Mail, name: 'Contact', href: '/contact', desc: 'Talk to our operations team.' }
    ]
  },
  {
    title: 'Account',
    desc: 'Access your organization profile.',
    links: [
      { icon: LogIn, name: 'Sign In / Sign Up', href: '/login', desc: 'Access or create your account.' }
    ]
  }
];

export default function Sitemap() {
  const rootRef = useScrollReveal();

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      {/* Hero */}
      <section className="hero-section snap-section">
        <div className="parallax-hero-bg"></div>

        <div className="hero-content-anchor">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>SITE DIRECTORY</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Every Page, <br /><span className="gradient-text">One Place</span></h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              A complete map of the MYHitch Impact platform — every module, resource, and page linked together.
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Find Your Way</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Everything Is Connected" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Fundraising feeds your analytics. Volunteer hours feed your reports. Every module on MYHitch shares the same data, so nothing you build here lives in isolation. This page is simply the map of how it all fits together.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        {siteGroups.map((group, idx) => (
          <section key={idx} className="reveal-section snap-section" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.75rem' }}>{group.title}</h2>
              <p style={{ marginTop: '0.25rem' }}>{group.desc}</p>
            </div>
            <div className="grid-3">
              {group.links.map((link, i) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={i}
                    href={link.href}
                    className="card-glass"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: 'rgba(36, 161, 220, 0.1)',
                      color: 'var(--teal-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {link.name} <ArrowRight size={14} style={{ color: 'var(--teal-accent)' }} />
                    </h3>
                    <p style={{ fontSize: '0.88rem' }}>{link.desc}</p>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{link.href}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Still Looking?</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Can&apos;t Find What You Need?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            If a page is missing from this map, our operations team can point you in the right direction directly.
          </p>
        </div>
      </section>
    </div>
  );
}
