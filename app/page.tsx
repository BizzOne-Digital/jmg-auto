import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { value: '500+', label: 'Cars Purchased' },
  { value: '$TOP', label: 'Dollar Paid' },
  { value: 'SAME', label: 'Day Pickup' },
  { value: 'FREE', label: 'Towing Always' },
];

const mobileStats = [
  { value: '500+', label: 'Cars Purchased', icon: <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="currentColor"/> },
  { value: '$TOP', label: 'Dollar Paid', icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/> },
  { value: 'SAME', label: 'Day Pickup', icon: <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" fill="currentColor"/> },
  { value: 'FREE', label: 'Towing Always', icon: <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/> },
];

const steps = [
  {
    num: '01',
    title: 'Get a Quote',
    desc: 'Call or fill our quick form. Tell us your car year, make, model and condition.',
    icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
  },
  {
    num: '02',
    title: 'We Assess & Offer',
    desc: 'Our team gives you a fair, competitive cash offer based on the vehicle\'s value.',
    icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/>
  },
  {
    num: '03',
    title: 'Schedule Pickup',
    desc: 'We come to you — same day available. No hassle, no waiting at a lot.',
    icon: <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" fill="currentColor"/>
  },
  {
    num: '04',
    title: 'Get Paid Cash',
    desc: 'Receive instant cash on the spot. We handle all paperwork for you.',
    icon: <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="currentColor"/>
  },
];

const services = [
  {
    title: 'We Buy Scrap Cars',
    desc: 'Any make, any model, any condition. Running or not — we want it.',
    img: '/img1.png',
    icon: <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="currentColor"/>
  },
  {
    title: 'Free Same-Day Towing',
    desc: 'We come to your location. No towing fee — ever. Just call and we\'ll be there.',
    img: '/img2.png',
    icon: <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/>
  },
  {
    title: 'Top Cash Offers',
    desc: 'We offer the highest prices in the Peterborough area. Get paid on the spot.',
    img: '/img3.png',
    icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/>
  },
];

const testimonials = [
  { name: 'Marcus T.', location: 'Peterborough', text: 'Got $800 for my 2003 Honda that wouldn\'t start. They came same day, paid cash, no hidden fees. Highly recommended!', rating: 5 },
  { name: 'Sarah K.', location: 'Lindsay, ON', text: 'Easiest experience ever. Called at 9am, they were at my door by noon. Professional and fair pricing.', rating: 5 },
  { name: 'Dave M.', location: 'Kawartha Lakes', text: 'Finally got rid of that old truck rusting in my driveway. Great price, free tow, done in 30 minutes.', rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section hero-desktop-only" style={{ position: 'relative', minHeight: '92vh', marginTop: -72, display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--off-white)' }}>
        {/* Full-bleed hero art (car + watermark + "50+" card baked into the image), shifted right so it clears the text column */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/hero.png" alt="JMG Auto scrap car" fill style={{ objectFit: 'cover', objectPosition: 'right center' }} priority />
        </div>

        <div className="hero-content" style={{ position: 'relative', zIndex: 2, width: '100%', padding: '80px 5vw' }}>
          <div className="hero-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', gap: 24, flexWrap: 'wrap' }}>
            {/* Left: headline + copy + CTAs */}
            <div className="hero-text-col" style={{ maxWidth: 520 }}>
              <div className="badge" style={{ marginBottom: 24 }}>
                <svg width="12" height="12" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
                Peterborough, Ontario
              </div>
              <h1 style={{
                marginBottom: 20,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2.25rem, 4.5vw, 3.4rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                color: 'var(--black)',
              }}>
                We Pay<br />
                <span style={{ color: 'var(--red)' }}>Top Price</span><br />
                For Your<br />Scrap Car
              </h1>
              <p style={{
                marginBottom: 32,
                maxWidth: 460,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
              }}>
                Same-day pickup with free towing<br />anywhere in the Peterborough area.<br />Get instant cash for your scrap, damaged,<br /> or unwanted vehicle.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'nowrap' }}>
                <Link href="/booking" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 32px', whiteSpace: 'nowrap' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  Get Free Quote
                </Link>
              </div>
            </div>

            {/* Right: trust stats, then call button aligned with the Get Free Quote row */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-end', height: '100%', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-end' }}>
                {stats.map((s) => (
                  <div key={s.value} style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--red)', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gray-600)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <a href="tel:6477787931" className="btn-outline" style={{ marginTop:175 }}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/></svg>
                647-778-7931
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HERO — MOBILE */}
      <section className="hero-mobile-only" style={{ background: 'var(--off-white)', marginTop: -72 }}>
        {/* Image kept at its own aspect ratio so the car + watermark + "50+" card baked into it never get cropped/stretched */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '941 / 1672' }}>
          <Image src="/mobile-hero.png" alt="JMG Auto scrap car" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} priority />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '92px 20px 0', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: 20 }}>
              <svg width="12" height="12" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
              Peterborough, Ontario
            </div>
            <h1 style={{
              marginBottom: 16,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 8vw, 2.4rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: 'var(--black)',
            }}>
              We Pay<br />
              <span style={{ color: 'var(--red)' }}>Top Price</span><br />
              For Your<br />Scrap Car
            </h1>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '0.9rem',
              lineHeight: 1.6,
              color: 'var(--gray-600)',
            }}>
              Same-day pickup with free towing anywhere in the Peterborough area. Get instant cash for your scrap, damaged, or unwanted vehicle.
            </p>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 3, padding: '24px 20px 40px', marginTop: -110, textAlign: 'center' }}>
          <Link href="/booking" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '16px 32px', marginBottom: 24 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Get Free Quote
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 20 }}>
            {mobileStats.map((s) => (
              <div key={s.value} style={{ background: 'white', borderRadius: 'var(--radius)', padding: '10px 4px', boxShadow: 'var(--shadow-card)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" style={{ color: 'var(--red)', margin: '0 auto 4px' }}>{s.icon}</svg>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--red)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.55rem', fontWeight: 700, color: 'var(--gray-600)', letterSpacing: '0.02em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <a href="tel:6477787931" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/></svg>
            647-778-7931
          </a>
        </div>
      </section>

      {/* RED BANNER */}
      <div style={{ background: 'var(--red)', padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
            <span style={{ color: 'white', fontWeight: 200, fontSize: '1rem' }}>Free Same-Day Towing — No Hidden Fees — Instant Cash Payment</span>
          </div>
         
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>Simple Process</div>
            <h2 className="display-lg">How It Works</h2>
            <div className="red-stripe" style={{ margin: '16px auto 0' }} />
          </div>
          <div className="grid-4">
            {steps.map((step, i) => (
              <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ textAlign: 'center', padding: '0 8px' }}>
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: 24 }}>
                  <div style={{ width: 72, height: 72, background: 'var(--red-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" style={{ color: 'var(--red)' }}>{step.icon}</svg>
                  </div>
                  <span style={{ position: 'absolute', top: -4, right: -4, width: 22, height: 22, background: 'var(--red)', color: 'white', borderRadius: '50%', fontSize: '0.65rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.num}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--black)', marginBottom: 8 }}>{step.title}</h3>
                <p className="body-md" style={{ fontSize: '0.9rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 12 }}>What We Do</div>
              <h2 className="display-lg">Our Services</h2>
            </div>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
          <div className="grid-3">
            {services.map((svc, i) => (
              <div key={svc.title} className={`card reveal reveal-d${i + 1}`}>
                <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                  <Image src={svc.img} alt={svc.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ width: 44, height: 44, background: 'var(--red-light)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" style={{ color: 'var(--red)' }}>{svc.icon}</svg>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--black)', marginBottom: 8 }}>{svc.title}</h3>
                  <p className="body-md" style={{ fontSize: '0.9rem' }}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div className="reveal-left">
              <div className="section-label" style={{ marginBottom: 12 }}>Why JMG</div>
              <h2 className="display-lg" style={{ marginBottom: 20 }}>Peterborough&apos;s Most Trusted Scrap Car Buyer</h2>
              <div className="red-stripe" style={{ marginBottom: 28 }} />
              <p className="body-lg" style={{ marginBottom: 40 }}>
                We are a family-run scrap yard in Peterborough with years of experience. We believe in honest pricing, fast service, and zero hassle for our customers.
              </p>
              {[
                'Licensed & fully insured operation',
                'We accept all makes and models',
                'Running, damaged, or non-running vehicles',
                'Eco-friendly recycling process',
                'Transparent, no-lowball pricing',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 22, height: 22, background: 'var(--red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <span style={{ fontWeight: 500, color: 'var(--gray-800)' }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: 40 }}>
                <Link href="/about" className="btn-primary">Learn More About Us</Link>
              </div>
            </div>
            <div className="reveal-right" style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 500, position: 'relative' }}>
                <Image src="/homeabout.png" alt="Auto recycling yard" fill style={{ objectFit: 'cover' }} />
              </div>
              {/* Floating stat */}
              <div style={{ position: 'absolute', bottom: -24, left: -24, background: 'var(--red)', color: 'white', borderRadius: 'var(--radius)', padding: '20px 28px', boxShadow: 'var(--shadow-btn)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', lineHeight: 1 }}>500+</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cars Purchased</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            .why-grid > div:last-child { order: -1; }
            .why-grid > div:last-child > div:first-child { height: 320px !important; }
            .why-grid > div:last-child > div:last-child { left: 0 !important; padding: 14px 20px !important; }
          }
        `}</style>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>Happy Customers</div>
            <h2 className="display-lg">What People Say</h2>
            <div className="red-stripe" style={{ margin: '16px auto 0' }} />
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`reveal reveal-d${i + 1} testimonial-card`} style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--red)"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 20, fontSize: '0.95rem' }}>&quot;{t.text}&quot;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, background: 'var(--red-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--red)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ background: 'var(--red)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: 500, height: 500, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', animation: 'floatY 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-8%', width: 320, height: 320, background: 'rgba(255,255,255,0.04)', borderRadius: '50%', animation: 'floatY 6s ease-in-out infinite reverse' }} />
        <div className="container reveal-scale" style={{ textAlign: 'center', position: 'relative' }}>
          <h2 className="display-lg" style={{ color: 'white', marginBottom: 16 }}>Ready To Get Cash For Your Car?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Contact us today. We make it fast, easy, and pay you the most.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn-white" style={{ animation: 'pulseGlow 2.4s ease-in-out infinite' }}>Get a Free Quote</Link>
            <a href="tel:6477787931" className="cta-outline-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'white', fontWeight: 700, fontSize: '1rem', padding: '14px 28px', border: '2px solid rgba(255,255,255,0.5)', borderRadius: 50, textDecoration: 'none', letterSpacing: '0.05em' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              647-778-7931
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
