'use client';

import React, { useState } from 'react';
import { Heart, DollarSign, Lock, CreditCard, ShieldCheck, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

export default function Fundraising() {
  const [donateAmount, setDonateAmount] = useState('100');
  const [frequency, setFrequency] = useState('monthly');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [donorDetails, setDonorDetails] = useState({ name: '', email: '', custom: '' });
  const rootRef = useScrollReveal();

  const activeAppeals = [
    { title: "Clean Water Boreholes", raised: "$45,200", target: "$50,000", progress: 90, desc: "Installing solar-powered filtration stations in Turkana District, Kenya." },
    { title: "School Textbook Fund", raised: "$12,400", target: "$15,000", progress: 82, desc: "Buying primary textbooks for 4 rural schools in Southeast Asia." }
  ];

  const handleDonate = (e) => {
    e.preventDefault();
    if (donorDetails.name && donorDetails.email) {
      setFormSubmitted(true);
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
          backgroundImage: 'url("/Fundraising.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>SECURE DONATIONS</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Empower Local <br /><span className="gradient-text">Causes Worldwide</span></h1>
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Why It Works</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Donors Give More When They Can See Where It Goes" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Raise funds with secure digital payments, automatically issue regulatory tax receipts, and show donors their exact impact alignment in real-time.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="fundraising-grid reveal-section snap-section">
        {/* Left Panel: Appeals list & transparency block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Active Campaigns</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {activeAppeals.map((appeal, idx) => (
              <div key={idx} className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{appeal.title}</h4>
                  <span className="badge badge-teal" style={{ fontSize: '0.65rem' }}>{appeal.progress}% Funded</span>
                </div>
                <p style={{ fontSize: '0.9rem' }}>{appeal.desc}</p>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px', color: 'var(--text-secondary)' }}>
                    <span>Raised: <strong>{appeal.raised}</strong></span>
                    <span>Target: <strong>{appeal.target}</strong></span>
                  </div>
                  <div className="progress-bar-container"><div className="progress-bar-fill" style={{ width: `${appeal.progress}%` }}></div></div>
                </div>
              </div>
            ))}
          </div>

          {/* Secure details */}
          <div className="card-glass" style={{ borderLeft: '4px solid var(--soft-green)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Lock size={16} style={{ color: 'var(--soft-green)' }} /> 256-bit Security Encryption
            </h4>
            <p style={{ fontSize: '0.85rem' }}>
              All transactions are PCI-DSS compliant. Donations are directly wired to the verified bank account of the registered organization, bypassing middle intermediaries.
            </p>
          </div>
        </div>

        {/* Right Panel: Donation Checkout portal mockup */}
        <div className="card-glass" style={{ padding: '2rem', border: '1px solid rgba(20, 184, 166, 0.2)' }}>
          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(36,161,220,0.1)', color: 'var(--soft-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Donation Successful!</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Thank you for donating <strong>${donateAmount}</strong> ({frequency === 'monthly' ? 'Monthly' : 'One-time'}) to Turkana Boreholes.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                🧾 An automated 501(c)(3) tax receipt has been emailed to <strong>{donorDetails.email}</strong>.
              </div>
            </div>
          ) : (
            <form onSubmit={handleDonate} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Heart size={18} style={{ color: 'var(--teal-accent)' }} /> Quick Give Checkout
              </h3>

              {/* Frequency */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: 'rgba(255,255,255,0.03)',
                padding: '4px',
                borderRadius: '8px',
                border: '1px solid var(--card-border)'
              }}>
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  style={{
                    background: frequency === 'one-time' ? 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 100%)' : 'none',
                    color: frequency === 'one-time' ? 'var(--primary-deep)' : 'var(--text-secondary)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Give One-time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  style={{
                    background: frequency === 'monthly' ? 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 100%)' : 'none',
                    color: frequency === 'monthly' ? 'var(--primary-deep)' : 'var(--text-secondary)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Give Monthly 🌟
                </button>
              </div>

              {/* Amount Quick Selects */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                {['25', '50', '100', '250'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setDonateAmount(amt); setDonorDetails({ ...donorDetails, custom: '' }); }}
                    style={{
                      background: donateAmount === amt && !donorDetails.custom ? 'rgba(20, 184, 166, 0.15)' : 'rgba(255,255,255,0.02)',
                      border: donateAmount === amt && !donorDetails.custom ? '1px solid var(--teal-accent)' : '1px solid var(--card-border)',
                      color: donateAmount === amt && !donorDetails.custom ? 'var(--teal-accent)' : 'var(--text-secondary)',
                      borderRadius: '6px',
                      padding: '10px 0',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="form-group">
                <label className="form-label">Or Custom Amount ($)</label>
                <input 
                  type="number" 
                  placeholder="Enter custom amount" 
                  className="form-control" 
                  value={donorDetails.custom}
                  onChange={(e) => {
                    setDonorDetails({ ...donorDetails, custom: e.target.value });
                    setDonateAmount(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Alice Johnson" 
                  className="form-control" 
                  value={donorDetails.name}
                  onChange={(e) => setDonorDetails({ ...donorDetails, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="alice@gmail.com" 
                  className="form-control" 
                  value={donorDetails.email}
                  onChange={(e) => setDonorDetails({ ...donorDetails, email: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
                <CreditCard size={16} /> Donate ${donateAmount} {frequency === 'monthly' ? '/ Month' : ''}
              </button>
            </form>
          )}
        </div>
      </div>
      
      <style jsx global>{`
        @media (min-width: 768px) {
          .fundraising-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Start Today</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Your First Campaign Can Launch This Week</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            No developer required. Set your goal, share the link, and start collecting secure donations with automated receipts by the end of the day.
          </p>
        </div>
      </section>
    </div>
  );
}
