'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TextAnimate({ text, className, style, by = 'word', delay = 0 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = containerRef.current.querySelectorAll('.text-animate-item');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.045,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, by, delay]);

  const parts = by === 'char' ? text.split('') : text.split(' ');

  return (
    <span ref={containerRef} className={className} style={style}>
      {parts.map((part, i) => (
        <span
          key={i}
          className="text-animate-item"
          style={{ display: 'inline-block', opacity: 0, marginRight: by === 'word' ? '0.25em' : 0 }}
        >
          {part === ' ' ? ' ' : part}
        </span>
      ))}
    </span>
  );
}
