'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(y > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (sentinelRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => setScrolled(!entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(sentinelRef.current);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} style={{ position: 'absolute', top: 20, left: 0, width: 1, height: 1, pointerEvents: 'none', opacity: 0 }} />
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--gray-200)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="JMG Auto" width={140} height={124} style={{ height: 60, width: 'auto', display: 'block', mixBlendMode: 'multiply' }} priority />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
            {navLinks.slice(0,6).map(link => (
              <Link key={link.href} href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link href="/booking" className="btn-primary nav-cta" style={{ padding: '10px 22px', fontSize: '0.8rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 5h18M3 12h18M3 19h18"/>
              </svg>
              Get a Quote
            </Link>
            <button onClick={() => setMenuOpen(true)}
              style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: 8, cursor: 'pointer', padding: 8, display: 'none', position: 'relative', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              className="hamburger-btn" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--black)" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => setMenuOpen(false)} style={{
          position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer'
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--black)" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <Link href="/" style={{ textDecoration: 'none', marginBottom: 24, display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="JMG Auto" width={140} height={124} style={{ height: 48, width: 'auto', mixBlendMode: 'multiply' }} />
        </Link>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/booking" className="btn-primary" style={{ marginTop: 24 }} onClick={() => setMenuOpen(false)}>
          Get a Free Quote
        </Link>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
