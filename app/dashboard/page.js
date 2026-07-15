'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  BarChart3,
  Users,
  DollarSign,
  Layers,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Plus,
  RefreshCw,
  FolderLock,
  Clock,
  MapPin
} from 'lucide-react';
import NumberTicker from '@/components/NumberTicker';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [donations, setDonations] = useState([
    { donor: 'Alice Johnson', amount: 150, date: 'Today, 2:14 PM', status: 'Receipt Sent' },
    { donor: 'Michael Chang', amount: 500, date: 'Today, 11:05 AM', status: 'Receipt Sent' },
    { donor: 'DirectReach Fund', amount: 5000, date: 'Yesterday', status: 'Audit Cleared' }
  ]);
  const [newDonationAmount, setNewDonationAmount] = useState('');
  const [newDonorName, setNewDonorName] = useState('');
  const [complianceChecked, setComplianceChecked] = useState(true);
  const [checkingCompliance, setCheckingCompliance] = useState(false);

  const stats = [
    { label: 'Total Donations Raised', value: 45210, prefix: '$', decimals: 2, sub: '+12.4% this month', icon: DollarSign, color: 'var(--teal-accent)', tint: 'rgba(36,161,220,0.1)' },
    { label: 'Volunteers Engaged', value: 342, suffix: ' Members', sub: '1,420 hours logged', icon: Users, color: '#0284c7', tint: 'rgba(14,165,233,0.1)' },
    { label: 'Project Progress', value: 85, suffix: '%', sub: '10 / 12 boreholes drilling', icon: Layers, color: '#1a83b4', tint: 'rgba(26,131,180,0.1)' },
    { label: 'Compliance Score', value: 98.5, suffix: '%', decimals: 1, sub: 'Zero flagged risks', icon: ShieldCheck, color: 'var(--teal-600)', tint: 'rgba(26,131,180,0.1)' }
  ];

  const volunteersToday = [
    { name: 'Sarah Jenkins', site: 'Turkana Site', status: '4 Hours Active', live: true },
    { name: 'Alistair Vance', site: 'Math Tutoring Site', status: 'Completed (2 hrs)', live: false }
  ];

  const handleAddDonation = (e) => {
    e.preventDefault();
    if (!newDonationAmount || !newDonorName) return;

    const newDonation = {
      donor: newDonorName,
      amount: parseFloat(newDonationAmount),
      date: 'Just now',
      status: 'Receipt Pending'
    };

    setDonations([newDonation, ...donations]);
    setNewDonationAmount('');
    setNewDonorName('');
  };

  const handleRunAudit = () => {
    setCheckingCompliance(true);
    setComplianceChecked(false);
    setTimeout(() => {
      setCheckingCompliance(false);
      setComplianceChecked(true);
    }, 1500);
  };

  return (
    <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Link href="/" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--text-secondary)',
        alignSelf: 'flex-start',
        marginBottom: '-1rem'
      }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      {/* Title Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        borderRadius: 'var(--border-radius-lg)',
        padding: '1.75rem 2rem',
        background: 'linear-gradient(135deg, #FDFDFC 0%, #ECF6FD 35%, #CBE6FA 70%, #9FD2FB 100%)',
        border: '1px solid var(--card-border)'
      }}>
        <div>
          <span className="badge badge-teal" style={{ marginBottom: '0.4rem' }}>ADMIN CONSOLE</span>
          <h1 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>MYHitch Impact Dashboard</h1>
          <p style={{ fontSize: '0.9rem' }}>Welcome back, administrator. Here is your community&apos;s active overview status.</p>
        </div>

        <button
          onClick={handleRunAudit}
          disabled={checkingCompliance}
          className="btn btn-primary"
          style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
        >
          {checkingCompliance ? (
            <>
              <RefreshCw size={14} style={{ animation: 'spin 1.5s linear infinite' }} />
              Verifying ledgers...
            </>
          ) : (
            <>
              <FolderLock size={14} /> Run Compliance Audit
            </>
          )}
        </button>
      </div>

      {/* Stats Widgets */}
      <div className="grid-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="card-glass" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: s.tint,
                color: s.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Icon size={20} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{s.label}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-primary)', margin: '2px 0' }}>
                  <NumberTicker value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals || 0} />
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{s.sub}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="dashboard-grid">
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Tabs Menu */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
            {['Overview', 'Financials', 'Volunteers', 'Compliance'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                style={{
                  background: activeTab === tab.toLowerCase() ? 'rgba(36, 161, 220, 0.1)' : 'none',
                  color: activeTab === tab.toLowerCase() ? 'var(--teal-accent)' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderBottom: activeTab === tab.toLowerCase() ? '2px solid var(--teal-accent)' : '2px solid transparent'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Recent Ledger Entries</h3>
                <span className="badge badge-teal" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <TrendingUp size={11} /> Live
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {donations.map((d, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px',
                    background: 'rgba(15, 23, 42, 0.02)',
                    borderRadius: '8px',
                    border: '1px solid var(--card-border)'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>{d.donor}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{d.date}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--teal-accent)' }}>+${d.amount.toFixed(2)}</div>
                      <span className="badge badge-teal" style={{ fontSize: '0.6rem', padding: '1px 6px' }}>{d.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'financials' && (
            <div className="card-glass" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Log Manual Donation Entry</h3>
              <form onSubmit={handleAddDonation} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                <div className="form-group" style={{ flex: 1, minWidth: '180px' }}>
                  <label className="form-label">Donor / Sponsor Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. World Bank Grant"
                    className="form-control"
                    value={newDonorName}
                    onChange={(e) => setNewDonorName(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ flex: 1, minWidth: '180px' }}>
                  <label className="form-label">Amount ($)</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 5000"
                    className="form-control"
                    value={newDonationAmount}
                    onChange={(e) => setNewDonationAmount(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ height: '42px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <Plus size={16} /> Add Entry
                </button>
              </form>
            </div>
          )}

          {activeTab === 'volunteers' && (
            <div className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Volunteers Logged Today</h3>
              <p style={{ fontSize: '0.9rem' }}>Verify or clock-out active volunteers currently operating on GPS project coordinates.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {volunteersToday.map((v, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'rgba(15, 23, 42, 0.02)', borderRadius: '8px', border: '1px solid var(--card-border)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                      <MapPin size={14} style={{ color: 'var(--text-muted)' }} /> {v.name} ({v.site})
                    </span>
                    <span className={v.live ? 'badge badge-teal' : 'badge badge-gold'}>{v.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Compliance Lock Status</h3>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: 'rgba(36,161,220,0.08)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(36,161,220,0.2)' }}>
                <CheckCircle2 size={24} style={{ color: 'var(--teal-accent)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>SLA Auditing Standard Approved</h4>
                  <p style={{ fontSize: '0.85rem' }}>All double-entry financial ledger records match tax rules. Risk registry contains zero flagged actions.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - AI Suggestion Board */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card-glass" style={{ border: '1px solid rgba(14,165,233,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <Sparkles size={18} style={{ color: 'var(--gold-accent)' }} />
              <h4 style={{ color: 'var(--gold-accent)', fontSize: '1rem' }}>AI Co-Pilot Insights</h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
              <div style={{ background: 'rgba(14,165,233,0.06)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(14,165,233,0.15)' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Funding Alert:</span>{' '}
                <span style={{ color: 'var(--text-secondary)' }}>Primary school textbook appeal is 82% complete. AI suggests launching a matching donation appeal on social channels today.</span>
              </div>

              <div style={{ background: 'rgba(14,165,233,0.06)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(14,165,233,0.15)' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Volunteer Optimization:</span>{' '}
                <span style={{ color: 'var(--text-secondary)' }}>Attendance records project 15% drop-off for next week&apos;s tree planting. AI draft ready to dispatch email reminders.</span>
              </div>
            </div>
          </div>

          <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} style={{ color: 'var(--teal-accent)' }} />
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Upcoming Milestones</h4>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Final borehole drill sites</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>3 days</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Q3 board compliance review</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>9 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (min-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1.3fr 0.7fr !important;
          }
        }
      `}</style>
    </div>
  );
}
