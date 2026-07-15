'use client';

import React, { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const subscribeToYear = () => () => {};
const getYearSnapshot = () => new Date().getFullYear();
const getYearServerSnapshot = () => 2026;

export default function Footer() {
  const pathname = usePathname();
  const year = useSyncExternalStore(subscribeToYear, getYearSnapshot, getYearServerSnapshot);

  if (pathname === '/login' || pathname === '/dashboard') return null;

  return (
    <footer style={{
      background: 'var(--white)',
      borderTop: '1px solid var(--card-border)',
      padding: 'var(--space-xxl) 0 var(--space-md)',
      marginTop: 'auto',
      fontFamily: 'var(--font-body)'
    }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: 'var(--space-xl)', gap: '2.5rem' }}>
          {/* Mission & Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="MYHitch Impact" style={{ height: '120px', objectFit: 'contain' }} />
            </Link>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Empowering global community development, education, and social enterprises through modular software, data intelligence, transparency, and AI-powered operational tools.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)' }} className="social-icon-hover">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" style={{ color: 'var(--text-secondary)' }} className="social-icon-hover">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Platform</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link href="/features" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">Core Features</Link></li>
              <li><Link href="/solutions" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">Solutions Overview</Link></li>
              <li><Link href="/pricing" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">Pricing & Plans</Link></li>
              <li><Link href="/ai-assistant" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">AI Impact Assistant</Link></li>
              <li><Link href="/dashboard" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">Platform Dashboard</Link></li>
            </ul>
          </div>

          {/* Transparency & Governance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Trust & Transparency</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link href="/about" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">About MYHitch Impact</Link></li>
              <li><Link href="/resources" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">Resource Centre</Link></li>
              <li><Link href="/case-studies" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">Case Studies</Link></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">Audited Financials</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }} className="footer-link-hover">Compliance & Risk Register</a></li>
            </ul>
          </div>

          {/* Contact & Donation CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Support Our Mission</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> info@myhitchimpact.org</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> +1 (555) 019-2834</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Silicon Valley, CA</div>
            </div>
            <Link href="/fundraising" className="btn btn-gold" style={{ 
              fontSize: '0.9rem', 
              padding: '0.6rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}>
              <Heart size={16} fill="currentColor" style={{ marginRight: '8px' }} /> Donate to Communities
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--card-border)',
          paddingTop: 'var(--space-md)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }} className="footer-bottom">
          <div style={{ textAlign: 'center' }}>
            &copy; {year} MYHitch Impact. All rights reserved.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center' }}>
            <Link href="/sitemap" className="footer-link-hover">Sitemap</Link>
            <a href="#" className="footer-link-hover">Privacy Policy</a>
            <a href="#" className="footer-link-hover">Terms of Service</a>
            <a href="#" className="footer-link-hover">Cookie Policy</a>
            <a href="#" className="footer-link-hover">SLA Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
