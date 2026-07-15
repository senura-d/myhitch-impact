'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TextReveal({ text, className, style, dimOpacity = 0.15 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const words = containerRef.current.querySelectorAll('.text-reveal-word');

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 45%',
          scrub: 1
        }
      }).to(words, {
        opacity: 1,
        stagger: 0.05,
        ease: 'none'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(' ');

  return (
    <span ref={containerRef} className={className} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          className="text-reveal-word"
          style={{ opacity: dimOpacity, display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
