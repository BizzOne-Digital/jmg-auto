'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const id = requestAnimationFrame(() => {
      const targets = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in-view');
        } else {
          observer.observe(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
