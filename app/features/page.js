'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  Users, 
  Calendar, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  BookOpen,
  MessageSquare,
  Activity,
  Award,
  Database,
  Briefcase,
  DollarSign,
  Layers,
  School,
  Sparkles,
  SearchCode,
  ShieldAlert,
  GraduationCap,
  HardHat,
  Network
} from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

const allFeatures = [
  { id: 1, name: "Organization Profile", cat: "Governance", desc: "Verified profiles detailing mission, vision, team, financial transparency, and social integrations.", icon: Award },
  { id: 2, name: "Fundraising Platform", cat: "Finance", desc: "Online donations, recurring giving, emergency QR appeals, and automated tax receipts.", icon: Heart },
  { id: 3, name: "Volunteer Management", cat: "Logistics", desc: "Opportunity matching, calendar scheduling, hours tracking, and automated digital certifications.", icon: Users },
  { id: 4, name: "Event Management", cat: "Engagement", desc: "Event pages, ticketing via MYHitch Pass, check-ins, and fundraising dinner support.", icon: Calendar },
  { id: 5, name: "Sponsor Management", cat: "Finance", desc: "Sponsorship package structures, benefit deliverable tracking, and dedicated sponsor ROI dashboards.", icon: Briefcase },
  { id: 6, name: "Grant Management", cat: "Finance", desc: "Applications pipeline, deadlines tracking, document storage, and milestones reporting.", icon: DollarSign },
  { id: 7, name: "Project Management", cat: "Logistics", desc: "Milestones, task structures, media uploads, progress feeds, and budgets tracking.", icon: Layers },
  { id: 8, name: "AI Assistant", cat: "AI & Automation", desc: "Write proposals, social copy, reports translations, and budgets dynamically in seconds.", icon: Sparkles },
  { id: 9, name: "Member Management", cat: "Engagement", desc: "Membership database directories, renewals automation, dues collection, and digital member cards.", icon: Database },
  { id: 10, name: "Financial Dashboard", cat: "Finance", desc: "Cash flow ledgers, expenses categorizations, bank reconciliation, audits, and budgets analysis.", icon: DollarSign },
  { id: 11, name: "Analytics & KPI Dashboard", cat: "AI & Automation", desc: "Geographic distributions, donor retention tables, campaigns analytics, and SDG alignment charts.", icon: BarChart3 },
  { id: 12, name: "Communication Hub", cat: "Engagement", desc: "Email, SMS broadcast, WhatsApp API integration, push notices, and community newsletters.", icon: MessageSquare },
  { id: 13, name: "Impact Marketplace", cat: "Finance", desc: "Nonprofit merchandise sales, donation products catalogs, ticket sales, and charity auctions.", icon: Heart },
  { id: 14, name: "Resource Centre", cat: "Governance", desc: "Template directories, compliance policies, webinar archives, and governance checklists.", icon: BookOpen },
  { id: 15, name: "Community Directory", cat: "Engagement", desc: "Searchable register of regional NGOs, schools, clubs, foundations, and community providers.", icon: SearchCode },
  { id: 16, name: "Emergency Response", cat: "Logistics", desc: "Supply chain allocations, volunteer mobilization maps, disaster appeals, and live bulletins.", icon: ShieldAlert },
  { id: 17, name: "Board Governance", cat: "Governance", desc: "Meeting minutes logs, voter systems, compliance audits, risk registers, and digital boardrooms.", icon: ShieldCheck },
  { id: 18, name: "Impact Measurement", cat: "AI & Automation", desc: "Calculators for meals served, carbon offsets, SROI indicators, and automated impact reports.", icon: Activity },
  { id: 19, name: "PM&E Framework", cat: "Governance", desc: "Project Monitoring & Evaluation: location checkpoints, photo evidence, and risk flags.", icon: ShieldCheck },
  { id: 20, name: "School & Education", cat: "Logistics", desc: "Attendance logs, academic reports, asset registries, and donor scholarships portals.", icon: GraduationCap },
  { id: 21, name: "Beneficiary Management", cat: "Logistics", desc: "Profile folders, assistance history, case progress, and AI outcomes analytics.", icon: Users },
  { id: 22, name: "Custom Dashboards", cat: "AI & Automation", desc: "Build tailored ESG, SDG, and school development tracking panels in minutes.", icon: BarChart3 },
  { id: 23, name: "Monitoring & Compliance", cat: "Governance", desc: "Document tracking, financial audit preparation sheets, and regulatory checklists.", icon: ShieldCheck },
  { id: 24, name: "Digital Transformation Consulting", cat: "Governance", desc: "Integrate CRM systems, set up cloud migration, and optimize operational flows.", icon: Network },
  { id: 25, name: "Bespoke System Development", cat: "Governance", desc: "Tailored donor portals, volunteer registries, and mobile application builds.", icon: Network },
  { id: 26, name: "AI Impact Intelligence", cat: "AI & Automation", desc: "Forecast donor behaviors, predict outcomes, and generate executive summaries.", icon: Cpu }
];

const categories = ["All", "Finance", "Logistics", "Engagement", "AI & Automation", "Governance"];

export default function Features() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");
  const rootRef = useScrollReveal();

  const filteredFeatures = allFeatures.filter(f => {
    const matchesCat = activeCat === "All" || f.cat === activeCat;
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) || 
                          f.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
          backgroundImage: 'url("/Features.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>MODULE DIRECTORY</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Core Modules & <span className="gradient-text">Features</span></h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              MYHitch Impact is a fully modular platform. Explore our 26 core capabilities designed to digitize community programs, raise funds, and automate governance.
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>One Platform</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Stop Stitching Together Five Different Tools" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            A spreadsheet for donors, a separate app for volunteers, a third tool for events — none of it talks to each other. MYHitch replaces the patchwork with one connected system, so your data tells one consistent story instead of five conflicting ones.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Search, Categories & Grid */}
      <div className="reveal-section snap-section" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        background: 'rgba(15, 28, 63, 0.4)',
        padding: '1.5rem',
        borderRadius: '16px',
        border: '1px solid var(--card-border)'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search features (e.g. AI, volunteer, receipts...)" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            style={{ width: '100%', paddingLeft: '3rem' }}
          />
        </div>

        {/* Category Toggles */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCat(cat)}
              style={{
                background: activeCat === cat ? 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 100%)' : 'rgba(255, 255, 255, 0.03)',
                color: activeCat === cat ? 'var(--primary-deep)' : 'var(--text-secondary)',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid-3">
        {filteredFeatures.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div key={idx} className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(20, 184, 166, 0.08)',
                  color: 'var(--teal-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={20} />
                </div>
                <span className="badge badge-teal" style={{ fontSize: '0.65rem' }}>{f.cat}</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{f.name}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          );
        })}
      </div>
      
      {filteredFeatures.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
          No features found matching &quot;{search}&quot;. Try selecting &quot;All&quot; categories.
        </div>
      )}
      </div>
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Explore More</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Every Module Works Better Together</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Activate the modules you need today and add the rest as you grow. Everything shares one database, so nothing you switch on later requires starting over.
          </p>
        </div>
      </section>
    </div>
  );
}
