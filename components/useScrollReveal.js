'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useScrollReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      gsap.utils.toArray('.reveal-text').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Slow-moving depth layer — drifts across the entire page scroll
      gsap.utils.toArray('.parallax-slow').forEach((el) => {
        gsap.to(el, {
          y: () => window.innerHeight * 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
          }
        });
      });

      // Per-section floating blobs — drift within their own section
      gsap.utils.toArray('.parallax-blob').forEach((el) => {
        gsap.fromTo(el, { y: -60 }, {
          y: 60,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') || el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

      // Hero/banner backdrop images — move slower than foreground content
      gsap.utils.toArray('.parallax-hero-bg').forEach((el) => {
        gsap.to(el, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') || el.parentElement,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return rootRef;
}
