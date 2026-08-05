'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', color: 'white', paddingTop: 72 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48, paddingBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ background: 'white', borderRadius: 10, padding: '6px 10px', display: 'inline-flex', alignItems: 'center' }}>
                <Image src="/logo.png" alt="JMG Auto" width={140} height={124} style={{ height: 48, width: 'auto', display: 'block' }} />
              </div>
            </div>
            <p className="body-md" style={{ color: 'var(--gray-400)', maxWidth: 280, marginBottom: 24 }}>
              Peterborough&apos;s trusted scrap car buyer. We pay top dollar for your vehicle and offer same-day free towing.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {/* Social Icons */}
              {[
                { href: 'https://instagram.com/jmgautorepair', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/> },
                { href: 'tel:6477787931', icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/> },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gray-400)', transition: 'all 0.2s'
                }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--red)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'var(--gray-400)'; }}>
                  <svg width="16" height="16" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 20, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/gallery', 'Gallery']].map(([href, label]) => (
                <Link key={href} href={href} className="footer-link">{label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 20, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Buy Scrap Cars', 'Free Towing', 'Same Day Pickup', 'Auto Parts', 'Vehicle Assessment', 'Recycling'].map(s => (
                <span key={s} className="footer-link" style={{ cursor: 'default' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 20, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>, text: '647 778 7931', href: 'tel:6477787931' },
                { icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>, text: 'jmgallautorecyclers@gmail.com', href: 'mailto:jmgallautorecyclers@gmail.com' },
                { icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>, text: '2420 Providence Line, Peterborough, ON K9J 0G6', href: 'https://maps.google.com/?q=2420+Providence+Line,+Peterborough,+ON+K9J+0G6' },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, textDecoration: 'none' }}>
                  <div style={{ width: 32, height: 32, background: 'rgba(214,43,43,0.2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" style={{ color: 'var(--red)' }}>{item.icon}</svg>
                  </div>
                  <span style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.5 }}>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>© 2025 JMG All Auto Recycling & Parts. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {[['Privacy Policy', '#'], ['Terms of Service', '#']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontSize: '0.8rem', color: 'var(--gray-400)', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer > div > div:first-child > div:first-child p {
            max-width: 100% !important;
          }
          footer > div > div:last-child {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
