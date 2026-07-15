'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';
import HyperText from '@/components/HyperText';
import NumberTicker from '@/components/NumberTicker';
import TextAnimate from '@/components/TextAnimate';
import TypingAnimation from '@/components/TypingAnimation';
import { 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  Users, 
  Calendar, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Globe, 
  HelpCircle,
  Clock,
  MapPin,
  Lock,
  FileText,
  DollarSign,
  ChevronRight,
  UserCheck,
  Quote,
  Star
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('ngos');
  const [aiStep, setAiStep] = useState(0);
  const [demoForm, setDemoForm] = useState({ name: '', email: '', org: '', type: 'NGO' });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const trustStats = [
    { label: 'Verified Orgs', value: 14200, suffix: '+' },
    { label: 'Total Donations raised', value: 84.5, prefix: '$', suffix: 'M+', decimals: 1 },
    { label: 'Volunteers Managed', value: 450, suffix: 'k+' },
    { label: 'Countries Supported', value: 85, suffix: '+' }
  ];

  const coreModules = [
    { icon: Heart, name: 'Fundraising Platform', desc: 'Secure donation portals, monthly giving programs, QR codes, and automated tax receipts.', link: '/fundraising' },
    { icon: Users, name: 'Volunteer Portal', desc: 'Opportunity matching, scheduling, hours tracking, and automated digital certificates.', link: '/volunteer' },
    { icon: Calendar, name: 'Event Management', desc: 'Ticketing via MYHitch Pass, event landing pages, check-ins, and dinner appeals.', link: '/events' },
    { icon: Cpu, name: 'AI Assistant', desc: 'Auto-generate grant proposals, social media copy, translated reports, and budgets.', link: '/ai-assistant' },
    { icon: BarChart3, name: 'Analytics & KPIs', desc: 'Dynamic donor behaviors, campaign tracking, geographic distributions, and SDG alignment.', link: '/analytics' },
    { icon: ShieldCheck, name: 'Governance & PME', desc: 'Project monitoring, board meeting agendas, risk registers, and document compliance.', link: '/projects' }
  ];

  const howItWorks = [
    { number: '01', title: 'Register & Verify', desc: 'Onboard your organization with secure identity checks and financial transparency verification.' },
    { number: '02', title: 'Activate Modules', desc: 'Choose the tools you need—from event ticking and crowdfunding to volunteer tracking and grants.' },
    { number: '03', title: 'Collaborate with AI', desc: 'Use MYHitch AI assistant to draft proposals, translate newsletters, and optimize donor messaging.' },
    { number: '04', title: 'Measure & Scale', desc: 'Publish verified impact metrics, generate auto-audits, and demonstrate SROI to sponsors.' }
  ];

  const aiPrompts = [
    { title: "Grant Proposal Generator", prompt: "Write a grant proposal for a local medical outreach program targeting pediatric care.", response: "Creating proposal for 'Healthy Beginnings' initiative... Applying World Health SDG #3 metrics... Budget outlines structured... Summary generated in 4.2 seconds!" },
    { title: "Volunteer Outreach Copy", prompt: "Create a WhatsApp message inviting volunteers for our tree planting campaign on Saturday.", response: "🌳 Join us this Saturday at Green Haven Park! Let's plant 500 trees. Wear comfortable shoes. Register here: myhitch.org/e/green-haven 🌍" },
    { title: "Impact Summary Report", prompt: "Summarize Q2 achievements based on the volunteer attendance sheet and donation ledger.", response: "📊 Q2 Impact Summary: 1,240 volunteer hours logged (+12% QoQ). $45,200 raised. 4,100 meals distributed. SDG alignment: SDG 2 (Zero Hunger) & SDG 8." }
  ];

  const solutions = {
    ngos: {
      title: 'For NGOs & Registered Charities',
      desc: 'Build trust with donors through absolute transparency, streamline volunteer coordination, and use AI to secure major institutional grants.',
      bullets: ['Donor CRM with automated tax receipts', 'SDG contribution reporting', 'Public verified organization profiles']
    },
    schools: {
      title: 'For Educational Institutions',
      desc: 'Coordinate development campaigns, track student performance, manage scholarship programs, and distribute annual impact reports to board members.',
      bullets: ['Infrastructure & asset tracking', 'Scholarship management portals', 'Board meeting & compliance logs']
    },
    community: {
      title: 'For Community & Faith Groups',
      desc: 'Organize volunteer opportunities, handle small events, send email & SMS newsletters, and mobilize relief efforts during community emergencies.',
      bullets: ['Volunteer opportunity matching', 'Ticketing via MYHitch Pass', 'Emergency alert system (SMS/WhatsApp)']
    },
    enterprises: {
      title: 'For Social Enterprises',
      desc: 'Scale your social impact with business intelligence tools, measure ESG/SROI metrics, manage complex supply chains, and showcase outcomes to venture philanthropists.',
      bullets: ['ESG & SROI KPI dashboards', 'Audit-ready financial ledgers', 'Bespoke custom portals']
    }
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    if (demoForm.name && demoForm.email) {
      setDemoSubmitted(true);
    }
  };

  const rootRef = useScrollReveal();

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      {/* Background Glows */}
      <div className="parallax-slow" style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(36, 161, 220, 0.08) 0%, rgba(3, 10, 22, 0) 70%)',
        filter: 'blur(50px)',
        zIndex: -1
      }}></div>
      <div className="parallax-slow" style={{
        position: 'absolute',
        top: '40%',
        right: '5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(36, 161, 220, 0.06) 0%, rgba(3, 10, 22, 0) 70%)',
        filter: 'blur(60px)',
        zIndex: -1
      }}></div>

      {/* 1. Hero Section */}
      <section className="hero-section snap-section">
        {/* Hero Backdrop Image */}
        <div className="parallax-hero-bg" style={{ backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/home.png")` }}></div>

        <div className="hero-content-anchor">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '540px' }}>
            <div className="badge badge-teal" style={{ alignSelf: 'flex-start', fontSize: '0.75rem' }}>
              <Sparkles size={12} style={{ marginRight: '4px' }} /> AI-Powered Nonprofit Infrastructure
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>
              Empowering Communities <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 60%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Through Technology</span>
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              Help nonprofits, charities, schools, and community organizations raise funds, manage volunteers, track projects, measure impact, and automate operations with AI-powered tools.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
              <a href="#demo" className="btn btn-primary">
                Request a Demo <ArrowRight size={16} />
              </a>
              <Link href="/features" className="btn btn-secondary">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1b. Mission Statement Section */}
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Our Mission</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Technology Should Serve the Mission, Not the Other Way Around" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            We build the infrastructure so nonprofits, schools, and community groups can spend less time on spreadsheets and more time on the work that matters. Every tool on MYHitch is designed to be transparent, auditable, and easy enough for a volunteer to use on day one.
          </p>
        </div>
      </section>

      {/* 2. Trust Bar Section */}
      <section className="reveal-section snap-section" style={{
        padding: '2rem 0', 
        background: 'linear-gradient(135deg, #FDFDFC 0%, #ECF6FD 35%, #CBE6FA 70%, #9FD2FB 100%)', 
        borderTop: '1px solid rgba(0, 0, 0, 0.08)', 
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)' 
      }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.85rem', color: '#000000', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
              <Lock size={12} style={{ color: '#000000' }} />
              <HyperText text="SECURE DONATIONS & AUDITED COMPLIANCE IN PARTNERSHIP WITH VERIFIED ORGS" />
            </div>
            
            <div className="trust-logo-grid">
              <span className="trust-logo-item" style={{ color: '#000000' }}>GivTech</span>
              <span className="trust-logo-item" style={{ color: '#000000' }}>EduFund</span>
              <span className="trust-logo-item" style={{ color: '#000000' }}>EcoMobilize</span>
              <span className="trust-logo-item" style={{ color: '#000000' }}>DirectReach</span>
              <span className="trust-logo-item" style={{ color: '#000000' }}>SDG Alliance</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem', textAlign: 'center' }}>
              {trustStats.map((stat, i) => (
                <div key={i} style={{ borderRight: i < trustStats.length - 1 ? '1px solid rgba(0, 0, 0, 0.15)' : 'none' }} className="trust-stat-box">
                  <h3 style={{ fontSize: '2rem', color: '#000000', fontWeight: 800 }}>
                    <NumberTicker value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals || 0} />
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(0, 0, 0, 0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Modules Grid */}
      <section className="reveal-section snap-section" style={{ padding: 'var(--space-xxl) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Modular Architecture</span>
            <h2><TextAnimate text="Complete Social Impact Ecosystem" /></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', marginTop: '0.5rem' }}>
              Designed to connect departments, volunteers, and finances. Activate the exact modules your community organization requires.
            </p>
          </div>

          <div className="grid-3">
            {coreModules.map((mod, i) => {
              const IconComponent = mod.icon;
              return (
                <div key={i} className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(36, 161, 220, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--teal-accent)'
                  }}>
                    <IconComponent size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem' }}>{mod.name}</h3>
                  <p style={{ fontSize: '0.95rem' }}>{mod.desc}</p>
                  <Link href={mod.link} style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.85rem',
                    color: 'var(--teal-accent)',
                    fontWeight: 600
                  }}>
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How MYHitch Works */}
      <section className="reveal-section snap-section" style={{
        padding: 'var(--space-xxl) 0', 
        background: 'linear-gradient(135deg, #FDFDFC 0%, #ECF6FD 35%, #CBE6FA 70%, #9FD2FB 100%)',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        color: '#0f172a'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Simple Onboarding</span>
            <h2 style={{ color: '#0f172a' }}><TextAnimate text="How MYHitch Works" /></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', marginTop: '0.5rem', color: '#475569' }}>
              Deploying a digital transformation system for your social enterprise or community has never been easier.
            </p>
          </div>

          <div className="grid-4">
            {howItWorks.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '4.5rem',
                  fontWeight: 800,
                  color: 'var(--teal-accent)',
                  lineHeight: 1
                }}><HyperText text={step.number} /></span>
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Impact Metrics & Analytics Preview */}
      <section className="reveal-section snap-section" style={{ padding: 'var(--space-xxl) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="parallax-blob" style={{
          position: 'absolute',
          top: '-120px',
          right: '-160px',
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(36,161,220,0.10) 0%, rgba(36,161,220,0) 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>Impact Intelligence</span>
              <h2>Measure Outcomes. Prove Transparency.</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                Donors want trust. MYHitch empowers your community with public, verified impact pages that link donations directly to project outcomes. Demonstrate your contributions to the United Nations Sustainable Development Goals (SDGs) automatically.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(36, 161, 220, 0.1)',
                    flexShrink: 0
                  }}>
                    <MapPin size={19} style={{ color: 'var(--teal-accent)' }} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.98rem' }}>Geographic Mapping</strong>
                    <p style={{ fontSize: '0.88rem', marginTop: '2px' }}>Track where every dollar is spent and view volunteer distribution on live maps.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(36, 161, 220, 0.1)',
                    flexShrink: 0
                  }}>
                    <FileText size={19} style={{ color: 'var(--teal-accent)' }} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.98rem' }}>Audit Ready Reporting</strong>
                    <p style={{ fontSize: '0.88rem', marginTop: '2px' }}>Export PDF/Excel ledgers that comply with local regulatory agencies and tax boards.</p>
                  </div>
                </div>
              </div>
              <Link href="/analytics" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.75rem' }}>
                View Analytics Features <ArrowRight size={16} />
              </Link>
            </div>

            {/* Interactive Analytics Preview */}
            <div className="card-glass" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.25rem var(--space-md)',
                background: 'linear-gradient(135deg, rgba(36,161,220,0.06) 0%, rgba(36,161,220,0.01) 100%)',
                borderBottom: '1px solid var(--card-border)'
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Live Impact Dashboard</div>
                  <h4 style={{ fontSize: '1.05rem', marginTop: '2px' }}>SROI Analysis · Q2</h4>
                </div>
                <span className="badge badge-green">94% Target Achieved</span>
              </div>

              <div style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                {/* Metric 1 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Users size={15} style={{ color: 'var(--teal-accent)' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Beneficiaries Reached</span>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>45,210 People</span>
                  </div>
                  <div className="progress-bar-container"><div className="progress-bar-fill" style={{ width: '90%' }}></div></div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Heart size={15} style={{ color: 'var(--teal-accent)' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Meals Distributed (SDG 2)</span>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>12,500 Meals</span>
                  </div>
                  <div className="progress-bar-container"><div className="progress-bar-fill" style={{ width: '65%' }}></div></div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Globe size={15} style={{ color: 'var(--teal-accent)' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Carbon Offset (SDG 13)</span>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>820 Tons CO2</span>
                  </div>
                  <div className="progress-bar-container"><div className="progress-bar-fill" style={{ width: '80%' }}></div></div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  marginTop: '0.25rem',
                  background: 'rgba(36, 161, 220, 0.06)',
                  border: '1px solid rgba(36, 161, 220, 0.15)',
                  padding: '14px',
                  borderRadius: '12px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '9999px',
                    background: 'rgba(36, 161, 220, 0.12)',
                    flexShrink: 0
                  }}>
                    <TrendingUp size={16} style={{ color: 'var(--teal-accent)' }} />
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Social Return on Investment (SROI): </span>
                    For every $1.00 donated, MYHitch Impact platform generated <strong style={{ color: 'var(--teal-accent)' }}>$4.18</strong> in verified community value.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI Assistant Highlights */}
      <section className="reveal-section snap-section" style={{
        padding: 'var(--space-xxl) 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #FDFDFC 0%, #ECF6FD 35%, #CBE6FA 70%, #9FD2FB 100%)',
        color: '#0f172a'
      }}>
        <div className="parallax-blob" style={{
          position: 'absolute',
          top: '10%',
          left: '-160px',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(36, 161, 220, 0.1) 0%, rgba(36, 161, 220, 0) 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Interactive Chat Mockup */}
            <div className="card-glass" style={{
              padding: '0',
              background: '#ffffff',
              border: '1px solid var(--card-border)',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff', padding: '14px 18px', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: 'rgba(36, 161, 220, 0.1)'
                  }}>
                    <Sparkles size={15} style={{ color: '#24A1DC' }} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#000000', fontFamily: 'var(--font-heading)' }}>MYHITCH AI CO-PILOT</span>
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button onClick={() => setAiStep(0)} style={{ width: '10px', height: '10px', minWidth: '10px', minHeight: '10px', padding: 0, flexShrink: 0, borderRadius: '50%', background: aiStep === 0 ? '#24A1DC' : 'rgba(15, 23, 42, 0.15)', border: 'none', cursor: 'pointer' }}></button>
                  <button onClick={() => setAiStep(1)} style={{ width: '10px', height: '10px', minWidth: '10px', minHeight: '10px', padding: 0, flexShrink: 0, borderRadius: '50%', background: aiStep === 1 ? '#24A1DC' : 'rgba(15, 23, 42, 0.15)', border: 'none', cursor: 'pointer' }}></button>
                  <button onClick={() => setAiStep(2)} style={{ width: '10px', height: '10px', minWidth: '10px', minHeight: '10px', padding: 0, flexShrink: 0, borderRadius: '50%', background: aiStep === 2 ? '#24A1DC' : 'rgba(15, 23, 42, 0.15)', border: 'none', cursor: 'pointer' }}></button>
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.1rem', minHeight: '260px' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Choose a preset to demo:</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {aiPrompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setAiStep(idx)}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          background: aiStep === idx ? '#38bdf8' : 'rgba(15,23,42,0.03)',
                          border: aiStep === idx ? '1px solid #38bdf8' : '1px solid var(--card-border)',
                          color: aiStep === idx ? '#0b1a30' : 'var(--text-secondary)',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {p.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'rgba(36, 161, 220, 0.06)', padding: '12px 14px', borderRadius: '10px', borderLeft: '3px solid #38bdf8' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Prompt</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontStyle: 'italic', marginTop: '4px' }}>&quot;{aiPrompts[aiStep].prompt}&quot;</div>
                </div>

                <div style={{ background: 'rgba(36, 161, 220, 0.06)', padding: '12px 14px', borderRadius: '10px', borderLeft: '3px solid #38bdf8' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: '#0284c7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <Sparkles size={12} style={{ color: '#0284c7' }} /> Generated Output
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginTop: '4px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    <TypingAnimation key={aiStep} text={aiPrompts[aiStep].response} speed={18} />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span className="badge" style={{ 
                alignSelf: 'flex-start',
                background: 'rgba(36, 161, 220, 0.2)',
                color: '#38bdf8',
                borderColor: 'rgba(36, 161, 220, 0.3)'
              }}>AI Co-Pilot</span>
              <h2 style={{ color: 'var(--text-primary)' }}>Operational Support, Powered by AI</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                Nonprofit staffs are often overworked and underfunded. MYHitch AI assistant functions as a copywriter, translator, policy advisor, and data analyst—designed to save you 20+ hours of admin work every week.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    flexShrink: 0
                  }}>
                    <FileText size={19} style={{ color: '#38bdf8' }} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.98rem' }}>Proposal Writing</strong>
                    <p style={{ fontSize: '0.88rem', marginTop: '2px', color: 'var(--text-secondary)' }}>Draft grant-ready templates tailored for global sponsors.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    flexShrink: 0
                  }}>
                    <Globe size={19} style={{ color: '#38bdf8' }} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.98rem' }}>Language Translation</strong>
                    <p style={{ fontSize: '0.88rem', marginTop: '2px', color: 'var(--text-secondary)' }}>Communicate instantly with donors and volunteers in 45+ languages.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    flexShrink: 0
                  }}>
                    <DollarSign size={19} style={{ color: '#38bdf8' }} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.98rem' }}>Budget Structuring</strong>
                    <p style={{ fontSize: '0.88rem', marginTop: '2px', color: 'var(--text-secondary)' }}>Auto-format financial tables from reporting templates.</p>
                  </div>
                </div>
              </div>

              <Link href="/ai-assistant" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.75rem' }}>
                Try AI Assistant Features <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Solutions by Organization Type */}
      <section className="reveal-section snap-section" style={{ padding: 'var(--space-xxl) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="parallax-blob" style={{
          position: 'absolute',
          top: '5%',
          left: '-160px',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(36,161,220,0.07) 0%, rgba(36,161,220,0) 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Tailored Solutions</span>
            <h2><TextAnimate text="Solutions for Every Social Pillar" /></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', marginTop: '0.5rem' }}>
              A modular platform that fits the governance models of public, private, and social sector organizations.
            </p>

            {/* Tab Controls - Mobile Dropdown */}
            <div className="mobile-only" style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }}>
              <select 
                value={activeTab} 
                onChange={(e) => setActiveTab(e.target.value)}
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid var(--teal-500)',
                  background: '#fff',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                <option value="ngos">NGOs & Charities</option>
                <option value="schools">Schools & Education</option>
                <option value="community">Community Groups</option>
                <option value="enterprises">Social Enterprises</option>
              </select>
            </div>

            {/* Tab Controls - Desktop */}
            <div className="desktop-only" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '6px',
              background: '#fff',
              border: '1px solid var(--card-border)',
              boxShadow: 'var(--shadow-sm)',
              borderRadius: '24px',
              padding: '6px',
              marginTop: '1.5rem',
              maxWidth: '100%'
            }}>
              {Object.keys(solutions).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: activeTab === tab ? 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 100%)' : 'none',
                    color: activeTab === tab ? '#fff' : 'var(--text-secondary)',
                    boxShadow: activeTab === tab ? '0 4px 14px rgba(36,161,220,0.3)' : 'none',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '8px 18px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textTransform: 'uppercase'
                  }}
                >
                  {tab === 'ngos' && 'NGOs & Charities'}
                  {tab === 'schools' && 'Schools & Education'}
                  {tab === 'community' && 'Community Groups'}
                  {tab === 'enterprises' && 'Social Enterprises'}
                </button>
              ))}
            </div>
          </div>

          <div className="card-glass" style={{ padding: 'var(--space-lg)', position: 'relative' }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>{solutions[activeTab].title}</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>{solutions[activeTab].desc}</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  marginTop: '0.5rem',
                  fontSize: '0.95rem'
                }}>
                  {solutions[activeTab].bullets.map((b, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px',
                        borderRadius: '7px',
                        background: 'rgba(36, 161, 220, 0.1)',
                        flexShrink: 0
                      }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--teal-accent)' }} />
                      </div>
                      {b}
                    </div>
                  ))}
                </div>
                <Link href={`/solutions?type=${activeTab}`} className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                  Learn More about this Solution <ArrowRight size={16} />
                </Link>
              </div>

              {/* Graphic Mockup inside Solution Box */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(36,161,220,0.06) 0%, rgba(36,161,220,0.01) 100%)',
                border: '1px solid var(--card-border)',
                borderRadius: '16px',
                padding: '1.5rem',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(36, 161, 220, 0.12)'
                    }}>
                      <UserCheck size={18} style={{ color: 'var(--teal-accent)' }} />
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Active Profiles Registered</span>
                  </div>
                  <span className="badge badge-teal">Live</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'stretch', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>12,800+</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Verified Members</div>
                  </div>
                  <div style={{ width: '1px', background: 'var(--card-border)' }} />
                  <div>
                    <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>99.2%</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Retention Rate</div>
                  </div>
                </div>

                <div>
                  <div className="progress-bar-container"><div className="progress-bar-fill" style={{ width: '99.2%' }}></div></div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '6px' }}>Updated in real time across all verified organizations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Featured Services Detail */}
      <section className="reveal-section snap-section" style={{
        padding: 'var(--space-xxl) 0', 
        background: 'linear-gradient(135deg, #FDFDFC 0%, #ECF6FD 35%, #CBE6FA 70%, #9FD2FB 100%)',
        color: '#0f172a'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="badge" style={{ 
              marginBottom: '0.5rem', 
              background: 'rgba(56, 189, 248, 0.2)',
              color: '#38bdf8',
              borderColor: 'rgba(56, 189, 248, 0.35)'
            }}>Ecosystem Highlights</span>
            <h2 style={{ color: 'var(--text-primary)' }}><TextAnimate text="Six Pillars of Community Digitization" /></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
              Deep integrations across financial management, tracking, compliance, and communication.
            </p>
          </div>

          <div className="grid-3">
            <div className="card-glass" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.8rem',
              background: '#ffffff',
              border: '1px solid var(--card-border)'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}><HyperText text="01 / FINANCIAL" /></div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Fundraising & Giving</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Enable digital receipts, crowdfunding campaigns, QR donation stands, and monthly recurrence programs.</p>
            </div>
            
            <div className="card-glass" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.8rem',
              background: '#ffffff',
              border: '1px solid var(--card-border)'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}><HyperText text="02 / LOGISTICS" /></div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Volunteer Portal</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mobilize helpers, match opportunities, record hours automatically, and distribute digital certificates.</p>
            </div>

            <div className="card-glass" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.8rem',
              background: '#ffffff',
              border: '1px solid var(--card-border)'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}><HyperText text="03 / ENGAGEMENT" /></div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Event Management</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Setup ticketing, print custom digital passes, scan QR codes at doors, and host donor dinners.</p>
            </div>

            <div className="card-glass" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.8rem',
              background: '#ffffff',
              border: '1px solid var(--card-border)'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}><HyperText text="04 / AUTOMATION" /></div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>AI Grant Writer</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Generate grant applications, social content, and annual summaries in multiple languages instantly.</p>
            </div>

            <div className="card-glass" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.8rem',
              background: '#ffffff',
              border: '1px solid var(--card-border)'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}><HyperText text="05 / GOVERNANCE" /></div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Audit & Compliance</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Maintain board meeting minutes, voting logs, compliance risk records, and annual reports.</p>
            </div>

            <div className="card-glass" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.8rem',
              background: '#ffffff',
              border: '1px solid var(--card-border)'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}><HyperText text="06 / COMMUNITY" /></div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Emergency Response</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Coordinate supply chain distributions, volunteer mobilizations, and fundraising alerts in emergency events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials & Case Study Success Stories */}
      <section className="reveal-section snap-section" style={{ padding: 'var(--space-xxl) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="parallax-blob" style={{
          position: 'absolute',
          top: '20%',
          right: '-140px',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(36,161,220,0.07) 0%, rgba(36,161,220,0) 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Global Impact Stories</span>
            <h2><TextAnimate text="Success Stories from the Field" /></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', marginTop: '0.5rem' }}>
              Hear how community builders, charity directors, and school superintendents digitized operations.
            </p>
          </div>

          <div className="grid-2">
            {[
              {
                accent: 'teal',
                quote: "Deploying MYHitch Volunteer Portal saved our environmental foundation over 30 hours of administration every week. We matched 1,200 volunteers with tree planting sessions in under three clicks. The automatic certification was the cherry on top.",
                name: 'Dr. Sarah Jenkins',
                role: 'Executive Director, Green Future Alliance',
                initials: 'SJ'
              },
              {
                accent: 'navy',
                quote: "Our educational foundation was struggling with grant applications. With MYHitch AI Assistant, we successfully drafted, translated, and submitted four complex proposals to global sponsors. Two were approved, securing $200k in school infrastructure development funding.",
                name: 'Samuel Lim',
                role: 'Superintendent, Hope Schools Group',
                initials: 'SL'
              }
            ].map((t, idx) => {
              const isTeal = t.accent === 'teal';
              const accentColor = isTeal ? 'var(--teal-accent)' : '#1e3a8a';
              const accentGradient = isTeal
                ? 'linear-gradient(135deg, var(--teal-600), var(--teal-accent))'
                : 'linear-gradient(135deg, #0b1a30, #1e3a8a)';
              const accentTint = isTeal ? 'rgba(36,161,220,0.08)' : 'rgba(30,58,138,0.08)';

              return (
                <div
                  key={idx}
                  className="card-glass"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    padding: 'var(--space-lg)',
                    position: 'relative',
                    overflow: 'hidden',
                    borderTop: `3px solid ${accentColor}`
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '20px',
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: accentTint,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'rotate(8deg)'
                  }}>
                    <Quote size={26} style={{ color: accentColor, transform: 'rotate(-8deg)' }} fill={accentColor} strokeWidth={0} />
                  </div>

                  <div style={{ display: 'flex', gap: '3px' }}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} style={{ color: accentColor }} fill={accentColor} strokeWidth={0} />
                    ))}
                  </div>

                  <p style={{ fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-primary)', maxWidth: '90%' }}>
                    &quot;{t.quote}&quot;
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--card-border)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: accentGradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-heading)',
                      flexShrink: 0
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem' }}>{t.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Final CTA & Demo Booking Form */}
      <section id="demo" className="reveal-section snap-section" style={{ padding: 'var(--space-xxl) 0', position: 'relative' }}>
        <div className="parallax-blob" style={{
          position: 'absolute',
          bottom: '10%',
          left: '20%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(36, 161, 220, 0.05) 0%, rgba(3, 10, 22, 0) 70%)',
          filter: 'blur(40px)',
          zIndex: -1
        }}></div>

        <div className="container">
          <div className="card-glass" style={{
            background: 'linear-gradient(135deg, #FDFDFC 0%, #ECF6FD 35%, #CBE6FA 70%, #9FD2FB 100%)',
            border: '1px solid rgba(36, 161, 220, 0.15)',
            padding: 'var(--space-xl)',
            borderRadius: '24px'
          }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: '#0f172a' }}>
                <span className="badge" style={{
                  alignSelf: 'flex-start',
                  background: 'rgba(36, 161, 220, 0.15)',
                  color: '#0284c7',
                  borderColor: 'rgba(36, 161, 220, 0.3)'
                }}>Get Started Today</span>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)' }}><TextAnimate text="Ready to Accelerate Your Social Impact?" /></h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Request a live walkthrough of the platform or sign up for a free sandbox. Experience how our unified compliance, volunteer management, and AI assistant can transform your organization.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}><CheckCircle2 size={16} style={{ color: '#0284c7' }} /> Free 14-day premium sandbox sandbox</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}><CheckCircle2 size={16} style={{ color: '#0284c7' }} /> Custom SLA & security compliance certifications</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}><CheckCircle2 size={16} style={{ color: '#0284c7' }} /> Bespoke developer API access</div>
                </div>
              </div>

              {/* Demo Form */}
              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
                {demoSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(36,161,220,0.1)', color: 'var(--teal-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Demo Request Received!</h3>
                    <p style={{ fontSize: '0.9rem' }}>An impact operations specialist will reach out to you at <strong>{demoForm.email}</strong> within 12 hours to schedule a Zoom walkthrough.</p>
                  </div>
                ) : (
                  <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Contact Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe" 
                        className="form-control" 
                        value={demoForm.name} 
                        onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })} 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Work Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@organization.org" 
                        className="form-control" 
                        value={demoForm.email} 
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })} 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Organization Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Red Cross Local" 
                        className="form-control" 
                        value={demoForm.org} 
                        onChange={(e) => setDemoForm({ ...demoForm, org: e.target.value })} 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Organization Type</label>
                      <select 
                        className="form-control" 
                        value={demoForm.type} 
                        onChange={(e) => setDemoForm({ ...demoForm, type: e.target.value })}
                      >
                        <option value="NGO">NGO / Charity</option>
                        <option value="School">School / College</option>
                        <option value="Community">Community / Religious Group</option>
                        <option value="Social Enterprise">Social Enterprise</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                      Request Zoom Walkthrough
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
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
        }
        @media (min-width: 1400px) {
          .hero-content-anchor {
            left: 6%;
          }
        }
      `}</style>
    </div>
  );
}
