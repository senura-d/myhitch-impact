'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function NumberTicker({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.6,
  className,
  style
}) {
  const ref = useRef(null);
  const played = useRef(false);
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played.current) {
            played.current = true;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: value,
              duration,
              ease: 'power2.out',
              onUpdate: () => {
                setDisplay(
                  obj.val.toLocaleString(undefined, {
                    maximumFractionDigits: decimals,
                    minimumFractionDigits: decimals
                  })
                );
              }
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration, decimals]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
