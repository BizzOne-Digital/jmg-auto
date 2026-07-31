import Image from 'next/image';
import Link from 'next/link';

const values = [
  { title: 'Honest Pricing', desc: 'We give you the real market value for your vehicle — no lowball offers, no tricks.', icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/> },
  { title: 'Fast Service', desc: 'Same-day pickup available. We respect your time and get the job done quickly.', icon: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" fill="currentColor"/> },
  { title: 'Eco Responsible', desc: 'We follow all environmental regulations for vehicle recycling and parts disposal.', icon: <path d="M17 8C8 10 5.9 16.17 3.82 19.5 2.71 21.27 4.5 23 6 22l1-1c1.5 1.5 3 1.5 4.5 0C14 19.5 17 16 17 8z" fill="currentColor"/> },
  { title: 'Community Focused', desc: 'We are proud Peterborough locals serving our community with integrity.', icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/> },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: 16, background: 'rgba(255,255,255,0.15)', color: 'white' }}>About JMG</div>
          <h1 className="display-lg" style={{ color: 'white', marginBottom: 16, maxWidth: 600 }}>We Are Peterborough&apos;s Trusted Auto Recyclers</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 560, lineHeight: 1.7 }}>
            A family-run scrap yard dedicated to honest service, top cash offers, and responsible vehicle recycling.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 480, position: 'relative' }}>
              <Image src="/about.png" alt="Auto recycling team" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: 12 }}>Our Story</div>
              <h2 className="display-md" style={{ marginBottom: 20 }}>Built on Trust, Driven by Fair Deals</h2>
              <div className="red-stripe" style={{ marginBottom: 24 }} />
              <p className="body-lg" style={{ marginBottom: 20 }}>
                JMG All Auto Recycling & Parts was founded with one simple mission: give car owners the fairest price possible for their scrap or unwanted vehicles, with zero hassle.
              </p>
              <p className="body-md" style={{ marginBottom: 20 }}>
                Based in Peterborough, Ontario, we have served hundreds of customers across the region — from the city to surrounding towns like Lindsay, Kawartha Lakes, and beyond. Our team shows up on time, pays cash on the spot, and handles all the paperwork.
              </p>
              <p className="body-md" style={{ marginBottom: 32 }}>
                We accept all makes and models — running or not. Whether your car was in an accident, failed its safety inspection, or just too old to repair, we want it.
              </p>
              <div className="about-stats-row" style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {[['500+', 'Cars Bought'], ['100%', 'Free Towing'], ['5★', 'Customer Rating']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--red)', lineHeight: 1 }}>{val}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gray-600)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>What We Stand For</div>
            <h2 className="display-lg">Our Core Values</h2>
            <div className="red-stripe" style={{ margin: '16px auto 0' }} />
          </div>
          <div className="grid-4">
            {values.map((v) => (
              <div key={v.title} style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '32px 24px', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, background: 'var(--red-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" style={{ color: 'var(--red)' }}>{v.icon}</svg>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--black)', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="about-area-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: 12 }}>Where We Operate</div>
              <h2 className="display-md" style={{ marginBottom: 20 }}>Serving Peterborough & Surrounding Areas</h2>
              <div className="red-stripe" style={{ marginBottom: 24 }} />
              <p className="body-lg" style={{ marginBottom: 28 }}>We pick up vehicles across a wide region. If you&apos;re unsure whether we service your area, just call — we likely do.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {['Peterborough', 'Lindsay', 'Kawartha Lakes', 'Norwood', 'Havelock', 'Omemee', 'Lakefield', 'Bridgenorth'].map(area => (
                  <div key={area} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, background: 'var(--red)', borderRadius: '50%' }} />
                    <span style={{ fontWeight: 500, color: 'var(--gray-800)', fontSize: '0.95rem' }}>{area}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 36 }}>
                <Link href="/contact" className="btn-primary">Contact Us</Link>
              </div>
            </div>
            <div className="about-area-map" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 420, position: 'relative', background: 'var(--gray-200)' }}>
              <Image src="/about2.png" alt="Service area map" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(214,43,43,0.12)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, background: 'white', borderRadius: 'var(--radius)', padding: '16px 20px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--red)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>Peterborough, Ontario</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-story-grid, .about-area-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .about-story-grid > div:first-child { height: 280px !important; }
            .about-area-map { height: 260px !important; }
          }
          @media (max-width: 400px) {
            .about-stats-row { gap: 20px !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--red)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md" style={{ color: 'white', marginBottom: 16 }}>Ready to Sell Your Scrap Car?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 36, fontSize: '1.05rem' }}>Call us or book online — we respond fast.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn-white">Book a Pickup</Link>
            <a href="tel:6477787931" style={{ color: 'white', fontWeight: 700, padding: '14px 28px', border: '2px solid rgba(255,255,255,0.5)', borderRadius: 50, textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em' }}>647-778-7931</a>
          </div>
        </div>
      </section>
    </>
  );
}
