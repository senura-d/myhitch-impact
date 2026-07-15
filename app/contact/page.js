'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Calendar, Clock, Globe } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', org: '', note: '' });
  const [submitted, setSubmitted] = useState(false);
  const rootRef = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
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
          backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contact.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>SUPPORT & DEMOS</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Get in Touch with <br /><span className="gradient-text">Impact <br />Operations</span></h1>
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>We&apos;re Here</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="A Real Team, Not a Ticket Queue" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Have questions about security, compliance integration, or our volume pricing tiers? Let us know. Our response time averages under 4 hours.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="contact-grid reveal-section snap-section">
        {/* Contact Info & Info boxes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Global Offices</h3>
          <p>
            Whether you want a customized SLA contract, migration consulting, or support for a remote development deployment, our operations teams are ready to help.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(20, 184, 166, 0.08)', color: 'var(--teal-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={20} /></div>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Email Address</h4>
                <p style={{ fontSize: '0.85rem' }}>operations@myhitchimpact.org</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(20, 184, 166, 0.08)', color: 'var(--teal-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={20} /></div>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Phone Support</h4>
                <p style={{ fontSize: '0.85rem' }}>+1 (555) 019-2834 (Mon-Fri 9am-6pm PST)</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(20, 184, 166, 0.08)', color: 'var(--teal-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={20} /></div>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Office Address</h4>
                <p style={{ fontSize: '0.85rem' }}>300 Sand Hill Road, Building 4, Menlo Park, CA 94025</p>
              </div>
            </div>
          </div>

          <div className="card-glass" style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', borderLeft: '4px solid var(--gold-accent)' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--white)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Clock size={16} style={{ color: 'var(--gold-accent)' }} /> SLA Support Hours
            </h4>
            <p style={{ fontSize: '0.85rem' }}>
              Premium Grow and Enterprise customers gain 24/7/365 pager support. Standard ticket queries are resolved within one business day.
            </p>
          </div>
        </div>

        {/* Form panel */}
        <div className="card-glass" style={{ padding: '2rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(36,161,220,0.1)', color: 'var(--soft-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message Submitted Successfully</h3>
              <p style={{ fontSize: '0.9rem' }}>Thank you <strong>{formData.name}</strong>. An impact operations specialist has received your message and will reach out to you at <strong>{formData.email}</strong> shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Send a Message</h3>
              
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Jane Smith" 
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="jane@charity.org" 
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Organization Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Universal Care Foundation" 
                  className="form-control"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message Details</label>
                <textarea 
                  required 
                  rows={4}
                  placeholder="Briefly describe your request (e.g. demo sandbox request, school district migration, custom portal integration query...)" 
                  className="form-control"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  style={{ resize: 'vertical', minHeight: '100px' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Submit Operations Request
              </button>
            </form>
          )}
        </div>
      </div>
      
      <style jsx global>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Let&apos;s Talk</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Your Next Message Gets a Real Reply</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            No automated ticket number, no waiting in a queue. Just a straight answer from someone who understands what running a nonprofit actually looks like.
          </p>
        </div>
      </section>
    </div>
  );
}
