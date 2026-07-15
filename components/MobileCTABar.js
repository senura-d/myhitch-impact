'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Users, CalendarCheck, Mail } from 'lucide-react';

const actions = [
  { icon: Heart, label: 'Donate', href: '/fundraising', primary: true },
  { icon: Users, label: 'Volunteer', href: '/volunteer' },
  { icon: CalendarCheck, label: 'Demo', href: '/#demo' },
  { icon: Mail, label: 'Contact', href: '/contact' }
];

export default function MobileCTABar() {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/dashboard') return null;

  return (
    <>
      <nav aria-label="Quick actions" className="mobile-cta-bar">
        {actions.map((a, i) => {
          const Icon = a.icon;
          return (
            <Link
              key={i}
              href={a.href}
              className="mobile-cta-item"
              style={a.primary ? { color: 'var(--teal-accent)' } : undefined}
            >
              <Icon size={20} />
              <span>{a.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mobile-cta-spacer" />
    </>
  );
}
