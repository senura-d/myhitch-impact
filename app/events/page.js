'use client';

import React, { useState } from 'react';
import { Calendar, Ticket, MapPin, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import useScrollReveal from '@/components/useScrollReveal';
import TextureOverlay from '@/components/TextureOverlay';
import TextReveal from '@/components/TextReveal';

const eventInitials = (title) => title.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('') || title.slice(0, 2).toUpperCase();

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ticketQty, setTicketQty] = useState(1);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [email, setEmail] = useState('');
  const [ticketCode, setTicketCode] = useState('');
  const rootRef = useScrollReveal();

  const events = [
    { id: 1, title: "Annual Charity Fundraising Dinner", date: "Friday, August 14", time: "6:30 PM - 10:00 PM", price: "$120", loc: "Grand Plaza Ballroom, SF", desc: "A premium dinner gala bringing together corporate sponsors and community advocates to fund Q3 literacy projects." },
    { id: 2, title: "Youth Tech Literacy Workshop", date: "Saturday, September 5", time: "10:00 AM - 3:00 PM", price: "Free", loc: "MYHitch Innovation Centre", desc: "A workshop introducing students from underserved communities to basic coding, design thinking, and AI co-pilots." }
  ];

  const handleCheckout = (e) => {
    e.preventDefault();
    if (email) {
      setTicketCode(String(Math.floor(100000 + Math.random() * 900000)));
      setCheckoutComplete(true);
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
          backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Events.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="hero-content-anchor" style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px' }}>
            <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>MYHITCH PASS TICKETS</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>Community Events & <br /><span className="gradient-text">Fundraising <br />Dinners</span></h1>
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
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Why Events</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <TextReveal text="Every Gathering Is a Chance to Grow Your Mission" />
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Organize NGO galas, school seminars, and volunteer trainings. Custom ticket pages, email RSVP reminders, and fast door validation using MYHitch Pass QR scanners.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: 'var(--space-xl) 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="events-grid reveal-section snap-section">
        {/* Left: Events listing */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Upcoming Events</h3>
            <span className="badge badge-teal">{events.length} Live</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {events.map((evt) => {
              const isSelected = selectedEvent?.id === evt.id;
              return (
                <div
                  key={evt.id}
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
                        {eventInitials(evt.title)}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{evt.title}</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{evt.desc}</p>
                      </div>
                    </div>
                    <span className="badge badge-gold" style={{ fontSize: '0.65rem', flexShrink: 0 }}>{evt.price}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} style={{ color: 'var(--text-muted)' }} /> {evt.date}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} style={{ color: 'var(--text-muted)' }} /> {evt.time}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14} style={{ color: 'var(--text-muted)' }} /> {evt.loc}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Ticket size={14} style={{ color: 'var(--teal-accent)' }} /> MYHitch Pass Enabled</div>
                  </div>

                  {isSelected ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'rgba(36,161,220,0.08)', border: '1px solid rgba(36,161,220,0.2)', padding: '10px', borderRadius: '8px', color: 'var(--teal-accent)', fontSize: '0.85rem', fontWeight: 600 }}>
                      <CheckCircle2 size={15} /> Selected for Checkout
                    </div>
                  ) : (
                    <button
                      onClick={() => { setSelectedEvent(evt); setCheckoutComplete(false); }}
                      className="btn btn-primary"
                      style={{ alignSelf: 'flex-start', padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
                    >
                      Get Tickets
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Checkout form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {selectedEvent && !checkoutComplete ? (
            <div className="card-glass" style={{ padding: '2rem', border: '1px solid rgba(14,165,233,0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Ticket size={18} style={{ color: 'var(--teal-accent)' }} /> Checkout via MYHitch Pass
              </h3>
              <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Selected Event: <strong style={{ color: 'var(--text-primary)' }}>{selectedEvent.title}</strong>
                </div>

                <div className="form-group">
                  <label className="form-label">Ticket Quantity</label>
                  <select
                    className="form-control"
                    value={ticketQty}
                    onChange={(e) => setTicketQty(parseInt(e.target.value))}
                  >
                    <option value={1}>1 Ticket</option>
                    <option value={2}>2 Tickets</option>
                    <option value={3}>3 Tickets</option>
                    <option value={4}>4 Tickets</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Billing/RSVP Email</label>
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Purchase Ticket ({selectedEvent.price === 'Free' ? 'Free RSVP' : `$${120 * ticketQty}`})
                </button>
              </form>
            </div>
          ) : selectedEvent && checkoutComplete ? (
            <div className="card-glass" style={{ padding: '2rem', textAlign: 'center', border: '1px solid rgba(36,161,220,0.3)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(36,161,220,0.1)', color: 'var(--teal-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Tickets Dispatched!</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.2rem' }}>
                We have emailed {ticketQty} digital QR pass{ticketQty > 1 ? 'es' : ''} to <strong style={{ color: 'var(--text-primary)' }}>{email}</strong>.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: 'rgba(15, 23, 42, 0.03)', padding: '15px', borderRadius: '8px', fontSize: '0.75rem', textAlign: 'left', border: '1px dashed var(--card-border)', color: 'var(--text-secondary)' }}>
                <div>🎟️ <strong style={{ color: 'var(--text-primary)' }}>Ticket Code:</strong> PASS-EVT-{selectedEvent.id}-{ticketCode}</div>
                <div>📱 <strong style={{ color: 'var(--text-primary)' }}>Check-in Info:</strong> Please open the QR code on your mobile device at the venue doors.</div>
              </div>
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
                <Ticket size={28} />
              </div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>No Event Selected</h4>
              <p style={{ fontSize: '0.85rem', maxWidth: '260px' }}>Click &quot;Get Tickets&quot; on an event to configure checkout options.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .events-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
      </div>

      {/* Closing Statement */}
      <section className="reveal-section" style={{ padding: 'var(--space-xxl) 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="badge badge-teal" style={{ alignSelf: 'center' }}>Go Live</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Your Next Event Deserves Better Tools</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Stop chasing spreadsheets for RSVPs and door lists. Set up ticketing once and let MYHitch Pass handle registration, reminders, and check-in for you.
          </p>
        </div>
      </section>
    </div>
  );
}
