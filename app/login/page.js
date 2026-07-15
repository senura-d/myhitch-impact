'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Lock,
  User,
  Building2,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import TextureOverlay from '@/components/TextureOverlay';

export default function LoginPage() {
  const [mode, setMode] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [signInForm, setSignInForm] = useState({ email: '', password: '', remember: false });
  const [signUpForm, setSignUpForm] = useState({
    name: '',
    org: '',
    orgType: 'NGO',
    email: '',
    password: '',
    confirm: '',
    agree: false
  });

  const switchMode = (next) => {
    setMode(next);
    setSubmitted(false);
    setShowPassword(false);
    setShowConfirm(false);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (signInForm.email && signInForm.password) {
      window.localStorage.setItem('myhitch_loggedIn', 'true');
      setSubmitted(true);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      signUpForm.name &&
      signUpForm.org &&
      signUpForm.email &&
      signUpForm.password &&
      signUpForm.password === signUpForm.confirm &&
      signUpForm.agree
    ) {
      window.localStorage.setItem('myhitch_loggedIn', 'true');
      setSubmitted(true);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Full-bleed photo backdrop */}

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(115deg, rgba(253,253,252,0.85) 0%, rgba(236,246,253,0.6) 32%, rgba(203,230,250,0.15) 60%, rgba(159,210,251,0.0) 100%)',
        zIndex: 1
      }} />
      <TextureOverlay opacity={0.5} />

      <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="container" style={{ paddingTop: 'var(--space-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--text-secondary)'
          }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link href="/" className="login-mobile-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="MYHitch Impact" style={{ height: '36px', objectFit: 'contain' }} />
          </Link>
        </div>

        <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center', padding: 'var(--space-xl) 0' }}>
          <div className="login-hero-grid">
            {/* Marketing copy over the photo */}
            <div className="login-copy" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>PLATFORM ACCESS</span>

              <h1 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                One account. <br /><span className="gradient-text">Every impact tool</span> your team needs.
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '460px' }}>
                Manage fundraising, volunteers, events, analytics, and AI-assisted reporting from a single verified organization profile.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '0.5rem' }}>
                {[
                  'Public, verified impact dashboards',
                  'Bank-level encryption on every transaction',
                  'AI co-pilot for grants, translation & reporting'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: 'rgba(36, 161, 220, 0.12)',
                      color: 'var(--teal-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <CheckCircle2 size={14} />
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                borderTop: '1px solid var(--card-border)',
                paddingTop: '1.25rem',
                marginTop: '0.5rem'
              }}>
                <ShieldCheck size={16} style={{ color: 'var(--teal-accent)', flexShrink: 0 }} />
                Trusted by 14,200+ verified organizations worldwide
              </div>
            </div>

            {/* Floating form card */}
            <div className="card-glass" style={{ 
              padding: 'var(--space-xl)', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.75rem', 
              width: '100%', 
              maxWidth: '460px', 
              justifySelf: 'center', 
              background: 'rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.4)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
            }}>
          {/* Tab Switch */}
          <div style={{
            display: 'flex',
            background: 'rgba(15, 23, 42, 0.03)',
            border: '1px solid var(--card-border)',
            borderRadius: '9999px',
            padding: '4px'
          }}>
            <button
              onClick={() => switchMode('signin')}
              style={{
                flex: 1,
                background: mode === 'signin' ? 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 100%)' : 'none',
                color: mode === 'signin' ? '#fff' : 'var(--text-secondary)',
                boxShadow: mode === 'signin' ? '0 4px 14px rgba(36,161,220,0.3)' : 'none',
                border: 'none',
                borderRadius: '9999px',
                padding: '10px 0',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => switchMode('signup')}
              style={{
                flex: 1,
                background: mode === 'signup' ? 'linear-gradient(135deg, var(--teal-600) 0%, var(--teal-accent) 100%)' : 'none',
                color: mode === 'signup' ? '#fff' : 'var(--text-secondary)',
                boxShadow: mode === 'signup' ? '0 4px 14px rgba(36,161,220,0.3)' : 'none',
                border: 'none',
                borderRadius: '9999px',
                padding: '10px 0',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Sign Up
            </button>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'rgba(36,161,220,0.1)',
                color: 'var(--teal-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {mode === 'signin' ? 'Welcome back!' : 'Account created!'}
              </h3>
              <p style={{ fontSize: '0.9rem' }}>
                {mode === 'signin'
                  ? <>You&apos;re signed in as <strong>{signInForm.email}</strong>. Redirecting you to your dashboard...</>
                  : <>Thanks <strong>{signUpForm.name}</strong>, your organization profile for <strong>{signUpForm.org}</strong> is being verified. Check <strong>{signUpForm.email}</strong> for next steps.</>
                }
              </p>
              <Link href="/dashboard" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Go to Dashboard <ArrowRight size={16} />
              </Link>
            </div>
          ) : mode === 'signin' ? (
            <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Sign in to your account</h2>
                <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>Access your fundraising, volunteer, and impact dashboards.</p>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="email"
                    required
                    placeholder="jane@charity.org"
                    className="form-control"
                    style={{ paddingLeft: '38px' }}
                    value={signInForm.email}
                    onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    className="form-control"
                    style={{ paddingLeft: '38px', paddingRight: '38px' }}
                    value={signInForm.password}
                    onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={signInForm.remember}
                    onChange={(e) => setSignInForm({ ...signInForm, remember: e.target.checked })}
                  />
                  Remember me
                </label>
                <a href="#" style={{ color: 'var(--teal-accent)', fontWeight: 600 }}>Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Sign In <ArrowRight size={16} />
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.88rem' }}>
                Don&apos;t have an account?{' '}
                <button type="button" onClick={() => switchMode('signup')} style={{ background: 'none', border: 'none', color: 'var(--teal-accent)', fontWeight: 600, cursor: 'pointer', padding: 0 }}>
                  Sign up for free
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Create your organization account</h2>
                <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>Start your free 14-day sandbox — no credit card required.</p>
              </div>

              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="form-control"
                    style={{ paddingLeft: '38px' }}
                    value={signUpForm.name}
                    onChange={(e) => setSignUpForm({ ...signUpForm, name: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="auth-form-row">
                <div className="form-group">
                  <label className="form-label">Organization Name</label>
                  <div style={{ position: 'relative' }}>
                    <Building2 size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                      type="text"
                      required
                      placeholder="Green Future Alliance"
                      className="form-control"
                      style={{ paddingLeft: '38px' }}
                      value={signUpForm.org}
                      onChange={(e) => setSignUpForm({ ...signUpForm, org: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Organization Type</label>
                  <select
                    className="form-control"
                    value={signUpForm.orgType}
                    onChange={(e) => setSignUpForm({ ...signUpForm, orgType: e.target.value })}
                  >
                    <option value="NGO">NGO / Charity</option>
                    <option value="School">School / College</option>
                    <option value="Community">Community / Religious Group</option>
                    <option value="Social Enterprise">Social Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Work Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="email"
                    required
                    placeholder="jane@charity.org"
                    className="form-control"
                    style={{ paddingLeft: '38px' }}
                    value={signUpForm.email}
                    onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="auth-form-row">
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      className="form-control"
                      style={{ paddingLeft: '38px', paddingRight: '38px' }}
                      value={signUpForm.password}
                      onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                      type={showConfirm ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      className="form-control"
                      style={{ paddingLeft: '38px', paddingRight: '38px' }}
                      value={signUpForm.confirm}
                      onChange={(e) => setSignUpForm({ ...signUpForm, confirm: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}
                    >
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {signUpForm.confirm && signUpForm.confirm !== signUpForm.password && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 600 }}>Passwords don&apos;t match</span>
                  )}
                </div>
              </div>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  required
                  checked={signUpForm.agree}
                  onChange={(e) => setSignUpForm({ ...signUpForm, agree: e.target.checked })}
                  style={{ marginTop: '3px' }}
                />
                I agree to the Terms of Service and Privacy Policy
              </label>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.25rem' }}>
                <Sparkles size={16} /> Create Free Account
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.88rem' }}>
                Already have an account?{' '}
                <button type="button" onClick={() => switchMode('signin')} style={{ background: 'none', border: 'none', color: 'var(--teal-accent)', fontWeight: 600, cursor: 'pointer', padding: 0 }}>
                  Sign in
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
      </div>
      </div>

      <style jsx global>{`
        @media (min-width: 900px) {
          .login-hero-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
          .login-copy {
            display: flex !important;
          }
          .login-mobile-logo {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .login-copy {
            display: none !important;
          }
        }
        @media (min-width: 480px) {
          .auth-form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 479px) {
          .auth-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      </div>
  );
}

