'use client';
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  { q: 'What types of vehicles do you buy?', a: 'We buy all makes and models — cars, trucks, vans, and SUVs. Running or non-running, damaged, accident vehicles, flood damage, high mileage, or any condition. As long as it is a vehicle, we are interested.' },
  { q: 'Do you offer free towing?', a: 'Yes, absolutely. Towing is always free. We come to your location — home, work, or anywhere in the Peterborough area — and tow the vehicle away at no cost to you.' },
  { q: 'How do I get a quote?', a: 'Simply call us at 647-778-7931 or fill out our online booking form. Give us the year, make, model, and general condition of the vehicle and we will give you a quote, usually within minutes.' },
  { q: 'How quickly can you pick up my car?', a: 'We offer same-day pickup in most cases. Depending on your location and our schedule, we can usually arrange pickup within hours of your call.' },
  { q: 'How do I get paid?', a: 'We pay cash on the spot at the time of pickup. No cheques, no delays, no waiting. You get paid when we take the vehicle.' },
  { q: 'Do I need to have the keys?', a: 'Having keys is helpful but not always required. Contact us with your situation and we will find a solution. We deal with many vehicles that are non-running or missing keys.' },
  { q: 'What documents do I need?', a: 'You will need to provide the vehicle ownership (title) in your name. Our team will walk you through the paperwork process — it is quick and simple.' },
  { q: 'Do you buy cars with expired safety or registration?', a: 'Yes. We do not require a valid safety certificate or current registration. We accept vehicles in any administrative or mechanical condition.' },
  { q: 'Do you service areas outside of Peterborough?', a: 'Yes. We serve Peterborough and surrounding areas including Lindsay, Kawartha Lakes, Norwood, Havelock, Omemee, Lakefield, and more. Call us to confirm your area.' },
  { q: 'Is there any cost or obligation to get a quote?', a: 'No. Getting a quote is completely free and there is no obligation to accept. We will give you an honest offer and the decision is entirely yours.' },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: 16, background: 'rgba(255,255,255,0.15)', color: 'white' }}>Got Questions?</div>
          <h1 className="display-lg" style={{ color: 'white', marginBottom: 16 }}>Frequently Asked Questions</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 520, lineHeight: 1.7 }}>
            Everything you need to know about selling your scrap car to JMG.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>FAQs</div>
            <h2 className="display-lg">Common Questions</h2>
            <div className="red-stripe" style={{ margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" style={{ borderColor: openIndex === i ? 'var(--red)' : 'var(--gray-200)' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: openIndex === i ? 'var(--red)' : 'var(--black)' }}>{faq.q}</span>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: openIndex === i ? 'var(--red)' : 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={openIndex === i ? 'white' : 'var(--gray-600)'} style={{ transition: 'transform 0.2s', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </button>
                {openIndex === i && (
                  <div style={{ padding: '0 24px 20px', borderTop: '1px solid var(--gray-200)' }}>
                    <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, paddingTop: 16, fontSize: '0.95rem' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-sm" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '56px', textAlign: 'center', boxShadow: 'var(--shadow-card)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <div className="section-label" style={{ marginBottom: 12 }}>Still Need Help?</div>
              <h2 className="display-md" style={{ marginBottom: 16 }}>We Are Always Here</h2>
              <p className="body-lg">Can&apos;t find the answer you need? Reach out directly — our team responds fast.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="tel:6477787931" className="btn-primary" style={{ justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call 647-778-7931
              </a>
              <Link href="/contact" className="btn-outline" style={{ justifyContent: 'center' }}>Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
