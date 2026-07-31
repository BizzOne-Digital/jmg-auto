import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'We Buy Scrap Cars',
    desc: 'Any year, any make, any model — running or not. We offer the best prices in the Peterborough area. Bring us your wrecked, totaled, high-mileage, or non-running vehicle.',
    img: '/img1.png',
    features: ['All makes and models accepted', 'Running or non-running', 'Instant cash payment', 'Fair market-value offers'],
    icon: <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="currentColor"/>
  },
  {
    title: 'Free Same-Day Towing',
    desc: 'We come to your home, work, or any location and tow your vehicle away for free. No waiting days — we can often arrange same-day pickup across Peterborough and surrounding areas.',
img: '/img2.png',
    features: ['We come to you', 'No towing fee — ever', 'Same-day available', 'Wide service area'],
    icon: <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/>
  },
  {
    title: 'Instant Cash Offers',
    desc: 'Get paid on the spot — no cheques, no delays. Our team assesses your vehicle and makes a competitive cash offer immediately.',
   img: '/img3.png',
    features: ['Cash in hand same day', 'No waiting for cheques', 'Competitive offers', 'No hidden deductions'],
    icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/>
  },
  {
    title: 'Paperwork Handled',
    desc: 'Selling a car involves plates, ownership, and paperwork. We guide you through the entire process and handle the documentation so you don\'t have to worry.',
    img: '/img4.png',
    features: ['We guide every step', 'Ownership transfer handled', 'Plate cancellation support', 'Quick & stress-free'],
    icon: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/>
  },
  {
    title: 'Eco-Friendly Recycling',
    desc: 'Your vehicle is responsibly dismantled and recycled according to Ontario environmental standards. We drain all fluids safely and recycle steel and metals.',
   img: '/img5.png',
    features: ['Safe fluid disposal', 'Metal recycling', 'Ontario compliant', 'Zero landfill approach'],
    icon: <path d="M17 8C8 10 5.9 16.17 3.82 19.5 2.71 21.27 4.5 23 6 22l1-1c1.5 1.5 3 1.5 4.5 0C14 19.5 17 16 17 8z" fill="currentColor"/>
  },
  {
    title: 'Used Auto Parts',
    desc: 'Looking for a specific part? We may have it in our inventory. Contact us with the year, make, and model and we\'ll check availability.',
    img: '/img6.png',
    features: ['Wide parts inventory', 'All major makes', 'Quality checked parts', 'Affordable pricing'],
    icon: <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="currentColor"/>
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: 16, background: 'rgba(255,255,255,0.15)', color: 'white' }}>What We Offer</div>
          <h1 className="display-lg" style={{ color: 'white', marginBottom: 16 }}>Our Services</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 520, lineHeight: 1.7 }}>
            From buying your scrap car to free towing and cash in hand — we handle everything.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {services.map((svc, i) => (
              <div key={svc.title} className="service-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
                <div className={`service-row-img ${i % 2 === 1 ? 'reveal-right' : 'reveal-left'}`} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 360, position: 'relative', direction: 'ltr' }}>
                  <Image src={svc.img} alt={svc.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="reveal" style={{ direction: 'ltr' }}>
                  <div style={{ width: 56, height: 56, background: 'var(--red-light)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" style={{ color: 'var(--red)' }}>{svc.icon}</svg>
                  </div>
                  <h2 className="display-md" style={{ marginBottom: 16 }}>{svc.title}</h2>
                  <div className="red-stripe" style={{ marginBottom: 20 }} />
                  <p className="body-lg" style={{ marginBottom: 24 }}>{svc.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                    {svc.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 20, height: 20, background: 'var(--red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        </div>
                        <span style={{ fontWeight: 500, color: 'var(--gray-800)', fontSize: '0.95rem' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/booking" className="btn-primary">Get Started</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .service-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 28px !important; }
            .service-row-img { height: 240px !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--red)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md" style={{ color: 'white', marginBottom: 16 }}>Have Questions About Our Services?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 36, fontSize: '1.05rem' }}>Call us directly or send us a message — we respond same day.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-white">Contact Us</Link>
            <a href="tel:6477787931" style={{ color: 'white', fontWeight: 700, padding: '14px 28px', border: '2px solid rgba(255,255,255,0.5)', borderRadius: 50, textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em' }}>647-778-7931</a>
          </div>
        </div>
      </section>
    </>
  );
}
