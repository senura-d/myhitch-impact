'use client';

import React, { useState } from 'react';
import { Users, Calendar, Clock, MapPin, Award, CheckCircle2, Send, TrendingUp } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';
import NumberTicker from '@/components/NumberTicker';

export default function Volunteer() {
  const [registeredOpp, setRegisteredOpp] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const rootRef = useScrollReveal();

  const opportunities = [
    { id: 1, title: "Tree Planting & Forestation", org: "EcoMobilize", date: "Saturday, July 18", time: "9:00 AM - 1:00 PM", loc: "Green Haven Park", hours: 4 },
    { id: 2, title: "After-school Math Tutoring", org: "Hope Schools Group", date: "Every Tuesday", time: "3:30 PM - 5:30 PM", loc: "City Library Annex", hours: 2 },
    { id: 3, title: "Relief Food Supply Pack", org: "DirectReach Disaster relief", date: "Thursday, July 23", time: "1:00 PM - 5:00 PM", loc: "Port Warehouse 4B", hours: 4 }
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      setRegisteredOpp(opportunities.find(o => o.id === registeredOpp));
    }
  };

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
          backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Volunteer Management.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>VOLUNTEER PORTAL</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Coordinate Helpers, <br /><span className="gradient-text">Track Community Hours</span></h1>
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Why Volunteers Stay</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Recognition Turns Helpers Into Lifelong Supporters" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Onboard volunteers easily, match opportunities based on skill algorithms, track attendance with GPS registers, and reward them with verified digital certificates.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="volunteer-grid reveal-section snap-section">
        {/* Left: Active Opportunity Directory */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Open Opportunities</h3>
            <span className="badge badge-teal">{opportunities.length} Open</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {opportunities.map((opp) => {
              const isSelected = registeredOpp?.id === opp.id;
              return (
                <div
                  key={opp.id}
                  className="card-glass"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.1rem',
                    border: isSelected ? '1px solid var(--teal-accent)' : '1px solid var(--card-border)',
                    boxShadow: isSelected ? '0 0 0 3px rgba(36,161,220,0.12)' : undefined
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: 'rgba(36, 161, 220, 0.1)',
                        color: 'var(--teal-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontWeight: 700,
                        fontFamily: 'var(--font-heading)'
                      }}>
                        {opp.org.split(' ').map(w => w[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{opp.title}</h4>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hosted by {opp.org}</span>
                      </div>
                    </div>
                    <span className="badge badge-teal" style={{ fontSize: '0.65rem', flexShrink: 0 }}>{opp.hours} Hours Logged</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} style={{ color: 'var(--text-muted)' }} /> {opp.date}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} style={{ color: 'var(--text-muted)' }} /> {opp.time}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14} style={{ color: 'var(--text-muted)' }} /> {opp.loc}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Award size={14} style={{ color: 'var(--gold-accent)' }} /> Certificate Provided</div>
                  </div>

                  {isSelected ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'rgba(36,161,220,0.08)', border: '1px solid rgba(36,161,220,0.2)', padding: '10px', borderRadius: '8px', color: 'var(--teal-accent)', fontSize: '0.85rem', fontWeight: 600 }}>
                      <CheckCircle2 size={15} /> Registered for this Session
                    </div>
                  ) : (
                    <button
                      onClick={() => setRegisteredOpp(opp.id)}
                      className="btn btn-primary"
                      style={{ alignSelf: 'flex-start', padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
                    >
                      Select Opportunity
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Registration / Metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {registeredOpp && typeof registeredOpp === 'number' ? (
            <div className="card-glass" style={{ padding: '2rem', border: '1px solid rgba(14,165,233,0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Complete Registration</h3>
              <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  You are registering for: <strong style={{ color: 'var(--text-primary)' }}>{opportunities.find(o => o.id === registeredOpp).title}</strong>
                </div>

                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Joe Carpenter"
                    className="form-control"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="joe@gmail.com"
                    className="form-control"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 123-4567"
                    className="form-control"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Confirm Registration
                </button>
              </form>
            </div>
          ) : registeredOpp && typeof registeredOpp === 'object' ? (
            <div className="card-glass" style={{ padding: '2rem', textAlign: 'center', border: '1px solid rgba(36,161,220,0.3)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(36,161,220,0.1)', color: 'var(--teal-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Registration Confirmed!</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Thanks <strong style={{ color: 'var(--text-primary)' }}>{form.name}</strong>. A scheduling calendar invite has been sent to <strong style={{ color: 'var(--text-primary)' }}>{form.email}</strong>.
              </p>
            </div>
          ) : (
            <div className="card-glass" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '300px', textAlign: 'center', gap: '1rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(36, 161, 220, 0.1)',
                color: 'var(--teal-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Users size={28} />
              </div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>No Opportunity Selected</h4>
              <p style={{ fontSize: '0.85rem', maxWidth: '260px' }}>Select an open opportunity from the list on the left to start your registration checkout.</p>
            </div>
          )}

          {/* Analytics block */}
          <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={16} style={{ color: 'var(--teal-accent)' }} />
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Global Volunteer Metrics</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: Users, label: 'Total Active Helpers', value: 4820, suffix: ' Volunteers' },
                { icon: Clock, label: 'Hours Logged (Yearly)', value: 84520, suffix: ' Hours' },
                { icon: Award, label: 'Certificates Generated', value: 1240, suffix: ' Badges' }
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '10px 12px', background: 'rgba(15, 23, 42, 0.02)', border: '1px solid var(--card-border)', borderRadius: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <StatIcon size={14} style={{ color: 'var(--text-muted)' }} /> {stat.label}
                    </span>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                      <NumberTicker value={stat.value} suffix={stat.suffix} />
                    </strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .volunteer-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Grow Your Team</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>More Hands Are Waiting to Help</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Post an opportunity today and let the matching algorithm connect you with volunteers who already have the right skills and availability.
          </p>
        </div>
      </section>
    </div>
  );
}
