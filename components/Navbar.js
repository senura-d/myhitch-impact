'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  Users,
  Calendar,
  Cpu,
  BarChart3,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Sparkles,
  LogOut
} from 'lucide-react';

const subscribeToAuth = (callback) => {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
};
const getAuthSnapshot = () => window.localStorage.getItem('myhitch_loggedIn') === 'true';
const getAuthServerSnapshot = () => false;

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const loggedIn = useSyncExternalStore(subscribeToAuth, getAuthSnapshot, getAuthServerSnapshot);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLogout = () => {
    window.localStorage.removeItem('myhitch_loggedIn');
    setIsOpen(false);
    router.push('/');
  };

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  if (pathname === '/login') {
    return null;
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Solutions',
      type: 'dropdown',
      items: [
        { name: 'NGOs & Charities', href: '/solutions?type=ngos' },
        { name: 'Schools & Education', href: '/solutions?type=schools' },
        { name: 'Community Groups', href: '/solutions?type=community' },
        { name: 'Social Enterprises', href: '/solutions?type=enterprises' }
      ]
    },
    {
      name: 'Features',
      type: 'dropdown',
      items: [
        { name: 'Fundraising Platform', href: '/fundraising', icon: Heart },
        { name: 'Volunteer Management', href: '/volunteer', icon: Users },
        { name: 'Event Management', href: '/events', icon: Calendar },
        { name: 'AI Impact Assistant', href: '/ai-assistant', icon: Cpu },
        { name: 'Analytics & KPIs', href: '/analytics', icon: BarChart3 },
        { name: 'Project & PM&E', href: '/projects', icon: ShieldCheck }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    {
      name: 'Resources',
      type: 'dropdown',
      items: [
        { name: 'Resource Centre', href: '/resources', icon: BookOpen },
        { name: 'Case Studies', href: '/case-studies', icon: Sparkles },
        { name: 'About Us', href: '/about' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--card-border)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container navbar-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          height: '100%',
          overflow: 'hidden'
        }}>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="MYHitch Impact" className="navbar-logo" />
        </Link>

        {/* Desktop Menu */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          {navLinks.map((link, idx) => {
            if (link.type === 'dropdown') {
              return (
                <div key={idx} style={{ position: 'relative' }} className="nav-dropdown-wrapper">
                  <button 
                    onClick={() => toggleDropdown(link.name)}
                    className="nav-link"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {link.name}
                    <ChevronDown size={14} style={{
                      transform: activeDropdown === link.name ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease'
                    }} />
                  </button>
                  
                  {activeDropdown === link.name && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: '0.5rem',
                      background: 'var(--primary-navy)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '12px',
                      boxShadow: 'var(--shadow-lg)',
                      padding: '0.75rem',
                      minWidth: '220px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {link.items.map((item, itemIdx) => {
                        const Icon = item.icon;
                        return (
                          <Link 
                            key={itemIdx}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.75rem',
                              padding: '0.5rem 0.75rem',
                              borderRadius: '8px',
                              fontSize: '0.9rem',
                              color: 'var(--text-secondary)'
                            }}
                            className="dropdown-item-hover"
                          >
                            {Icon && <Icon size={16} style={{ color: 'var(--teal-accent)' }} />}
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link 
                key={idx} 
                href={link.href}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Dashboard/CTA Buttons */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '1rem'
        }} className="desktop-actions">
          {loggedIn ? (
            <>
              <Link href="/dashboard" className="btn btn-primary" style={{
                padding: '0.5rem 1.25rem',
                fontSize: '0.9rem'
              }}>
                Dashboard <ArrowRight size={14} />
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                <LogOut size={14} /> Log out
              </button>
            </>
          ) : (
            <Link href="/login" className="btn btn-primary" style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.9rem'
            }}>
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'block'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          top: '85px',
          background: 'rgba(15, 23, 42, 0.45)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 998
        }}
        className="mobile-toggle"
      />

      {/* Mobile Side Drawer */}
      <div
        style={{
          position: 'fixed',
          top: '85px',
          right: 0,
          width: 'min(82vw, 340px)',
          height: 'calc(100vh - 85px)',
          background: 'var(--primary-deep)',
          padding: '2rem 1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          overflowY: 'auto',
          zIndex: 999,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isOpen ? '-12px 0 30px rgba(15, 23, 42, 0.15)' : 'none'
        }}
        className="mobile-toggle"
      >
          {navLinks.map((link, idx) => {
            if (link.type === 'dropdown') {
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    justifyContent: 'between'
                  }}>
                    {link.name}
                  </div>
                  <div style={{
                    paddingLeft: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    borderLeft: '1px solid var(--card-border)'
                  }}>
                    {link.items.map((item, itemIdx) => (
                      <Link 
                        key={itemIdx}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link 
                key={idx} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: pathname === link.href ? 'var(--teal-accent)' : 'var(--text-primary)'
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <div style={{
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {loggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Go to Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <LogOut size={14} /> Log out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Sign In
              </Link>
            )}
          </div>
      </div>

      {/* Adding custom responsive CSS inside component to maintain single file and satisfy responsive requirements */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }

        .dropdown-item-hover:hover {
          background: rgba(15, 23, 42, 0.05);
          color: var(--text-primary) !important;
          padding-left: 1rem !important;
        }
        
        .nav-dropdown-wrapper:hover .dropdown-item-hover {
          transition: all 0.2s ease;
        }
      `}</style>
    </header>
    <div className="navbar-spacer"></div>
    </>
  );
}
