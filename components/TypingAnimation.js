'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function TypingAnimation({ text, className, style, speed = 30, showCursor = true, startDelay = 0 }) {
  const [display, setDisplay] = useState('');
  const ref = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    setDisplay('');
    played.current = false;
    const el = ref.current;
    if (!el) return;

    let interval;
    let startTimeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played.current) {
            played.current = true;
            let i = 0;
            startTimeout = setTimeout(() => {
              interval = setInterval(() => {
                i++;
                setDisplay(text.slice(0, i));
                if (i >= text.length) clearInterval(interval);
              }, speed);
            }, startDelay);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
      {showCursor && <span className="typing-cursor">|</span>}
    </span>
  );
}
