'use client';
import { useState } from 'react';

const contactInfo = [
  { label: 'Phone', value: '647-778-7931', href: 'tel:6477787931', icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/> },
  { label: 'Email', value: 'sejad_ahmad@live.com', href: 'mailto:sejad_ahmad@live.com', icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/> },
  { label: 'Location', value: 'Peterborough, Ontario, Canada', href: '#', icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/> },
  { label: 'Instagram', value: '@jmgautorepair', href: 'https://instagram.com/jmgautorepair', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/> },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', carDetails: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <style>{`
        .contact-info-link { display: flex; align-items: flex-start; gap: 16px; text-decoration: none; padding: 20px; background: var(--off-white); border-radius: var(--radius); border: 2px solid transparent; transition: all 0.2s; }
        .contact-info-link:hover { border-color: var(--red); background: var(--red-light); }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } .form-2col { grid-template-columns: 1fr !important; } }
      `}</style>

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: 16, background: 'rgba(255,255,255,0.15)', color: 'white' }}>Get in Touch</div>
          <h1 className="display-lg" style={{ color: 'white', marginBottom: 16 }}>Contact Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 500, lineHeight: 1.7 }}>
            Call, email, or fill out the form. We respond fast — usually same day.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 72 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 12 }}>Reach Out</div>
              <h2 className="display-md" style={{ marginBottom: 20 }}>We Would Love to Hear From You</h2>
              <div className="red-stripe" style={{ marginBottom: 32 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                {contactInfo.map((info) => (
                  <a key={info.label} href={info.href} className="contact-info-link">
                    <div style={{ width: 44, height: 44, background: 'var(--red)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">{info.icon}</svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{info.label}</div>
                      <div style={{ fontWeight: 600, color: 'var(--black)', fontSize: '0.95rem' }}>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius)', padding: '24px' }}>
                <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--black)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Business Hours</h4>
                {[['Mon – Fri', '8:00 AM – 7:00 PM'], ['Saturday', '9:00 AM – 5:00 PM'], ['Sunday', 'Call for Availability']].map(([day, hours]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--gray-800)' }}>{day}</span>
                    <span style={{ color: 'var(--gray-600)' }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 72, height: 72, background: 'var(--red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.4rem', color: 'var(--black)', marginBottom: 12 }}>Message Sent!</h3>
                  <p className="body-md">Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontWeight: 700, fontSize: '1.3rem', color: 'var(--black)', marginBottom: 8 }}>Send Us a Message</h3>
                  <p className="body-md" style={{ marginBottom: 28, fontSize: '0.9rem' }}>Fill out the form below and we will respond same day.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div className="form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label className="form-label">Your Name</label>
                        <input className="form-input" placeholder="John Smith" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div>
                        <label className="form-label">Phone Number</label>
                        <input className="form-input" placeholder="647-XXX-XXXX" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Email Address</label>
                      <input className="form-input" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div>
                      <label className="form-label">Vehicle Details</label>
                      <input className="form-input" placeholder="e.g. 2008 Honda Civic, doesn't start" value={formData.carDetails} onChange={e => setFormData({...formData, carDetails: e.target.value})} />
                    </div>
                    <div>
                      <label className="form-label">Message</label>
                      <textarea className="form-input" rows={4} placeholder="Any other details..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ resize: 'vertical' }} />
                    </div>
                    <button onClick={() => setSubmitted(true)} className="btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '16px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      Send Message
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
