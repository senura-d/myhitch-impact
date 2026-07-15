'use client';

import React, { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function HyperText({ text, className, style, duration = 800 }) {
  const [display, setDisplay] = useState(text);
  const ref = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played.current) {
            played.current = true;
            scramble();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const scramble = () => {
    const chars = text.split('');
    const totalIterations = 12;
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplay(
        chars
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < (iterations / totalIterations) * chars.length) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iterations++;
      if (iterations > totalIterations) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, duration / totalIterations);
  };

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
