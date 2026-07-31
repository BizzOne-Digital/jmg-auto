'use client';
import { useState } from 'react';
import Link from 'next/link';

const steps = ['Vehicle Info', 'Your Details', 'Schedule', 'Confirm'];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    year: '', make: '', model: '', condition: '', hasKeys: '', hasTitle: '',
    name: '', phone: '', email: '', address: '',
    date: '', time: '', notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const conditions = ['Running — drives fine', 'Running — has issues', 'Not running', 'Accident damage', 'Flood damage', 'Other'];
  const times = ['8:00 AM – 10:00 AM', '10:00 AM – 12:00 PM', '12:00 PM – 2:00 PM', '2:00 PM – 4:00 PM', '4:00 PM – 6:00 PM'];

  const stepContent = [
    // Step 0 — Vehicle Info
    <div key="step0" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        <div>
          <label className="form-label">Vehicle Year</label>
          <input className="form-input" placeholder="e.g. 2005" value={form.year} onChange={e => setForm({...form, year: e.target.value})} />
        </div>
        <div>
          <label className="form-label">Make</label>
          <input className="form-input" placeholder="e.g. Toyota" value={form.make} onChange={e => setForm({...form, make: e.target.value})} />
        </div>
        <div>
          <label className="form-label">Model</label>
          <input className="form-input" placeholder="e.g. Camry" value={form.model} onChange={e => setForm({...form, model: e.target.value})} />
        </div>
      </div>
      <div>
        <label className="form-label">Vehicle Condition</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 8 }}>
          {conditions.map(c => (
            <button key={c} onClick={() => setForm({...form, condition: c})} style={{
              padding: '12px 16px', borderRadius: 'var(--radius)', border: '2px solid', textAlign: 'left',
              borderColor: form.condition === c ? 'var(--red)' : 'var(--gray-200)',
              background: form.condition === c ? 'var(--red-light)' : 'white',
              color: form.condition === c ? 'var(--red)' : 'var(--gray-800)',
              fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s'
            }}>{c}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label className="form-label">Do you have keys?</label>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            {['Yes', 'No'].map(v => (
              <button key={v} onClick={() => setForm({...form, hasKeys: v})} style={{
                flex: 1, padding: '12px', borderRadius: 'var(--radius)', border: '2px solid',
                borderColor: form.hasKeys === v ? 'var(--red)' : 'var(--gray-200)',
                background: form.hasKeys === v ? 'var(--red-light)' : 'white',
                color: form.hasKeys === v ? 'var(--red)' : 'var(--gray-800)',
                fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
              }}>{v}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="form-label">Do you have the title?</label>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            {['Yes', 'No'].map(v => (
              <button key={v} onClick={() => setForm({...form, hasTitle: v})} style={{
                flex: 1, padding: '12px', borderRadius: 'var(--radius)', border: '2px solid',
                borderColor: form.hasTitle === v ? 'var(--red)' : 'var(--gray-200)',
                background: form.hasTitle === v ? 'var(--red-light)' : 'white',
                color: form.hasTitle === v ? 'var(--red)' : 'var(--gray-800)',
                fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
              }}>{v}</button>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Step 1 — Your Details
    <div key="step1" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label className="form-label">Full Name</label>
          <input className="form-input" placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        </div>
        <div>
          <label className="form-label">Phone Number</label>
          <input className="form-input" placeholder="647-XXX-XXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        </div>
      </div>
      <div>
        <label className="form-label">Email Address</label>
        <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
      </div>
      <div>
        <label className="form-label">Pickup Address</label>
        <input className="form-input" placeholder="Full address where the vehicle is located" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
      </div>
    </div>,

    // Step 2 — Schedule
    <div key="step2" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div>
        <label className="form-label">Preferred Pickup Date</label>
        <input className="form-input" type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} min={new Date().toISOString().split('T')[0]} />
      </div>
      <div>
        <label className="form-label">Preferred Time Window</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
          {times.map(t => (
            <button key={t} onClick={() => setForm({...form, time: t})} style={{
              padding: '14px 18px', borderRadius: 'var(--radius)', border: '2px solid',
              borderColor: form.time === t ? 'var(--red)' : 'var(--gray-200)',
              background: form.time === t ? 'var(--red-light)' : 'white',
              color: form.time === t ? 'var(--red)' : 'var(--gray-800)',
              fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left'
            }}>{t}</button>
          ))}
        </div>
      </div>
      <div>
        <label className="form-label">Additional Notes</label>
        <textarea className="form-input" rows={3} placeholder="Access instructions, gate codes, anything we should know..." value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} style={{ resize: 'vertical' }} />
      </div>
    </div>,

    // Step 3 — Confirm
    <div key="step3" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius)', padding: '24px' }}>
        <h4 style={{ fontWeight: 700, color: 'var(--black)', marginBottom: 16 }}>Vehicle</h4>
        {[['Year / Make / Model', `${form.year} ${form.make} ${form.model}`], ['Condition', form.condition], ['Has Keys', form.hasKeys], ['Has Title', form.hasTitle]].map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--gray-600)' }}>{l}</span>
            <span style={{ fontWeight: 600, color: 'var(--black)' }}>{v || '—'}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius)', padding: '24px' }}>
        <h4 style={{ fontWeight: 700, color: 'var(--black)', marginBottom: 16 }}>Your Details</h4>
        {[['Name', form.name], ['Phone', form.phone], ['Email', form.email], ['Pickup Address', form.address]].map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--gray-600)' }}>{l}</span>
            <span style={{ fontWeight: 600, color: 'var(--black)' }}>{v || '—'}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius)', padding: '24px' }}>
        <h4 style={{ fontWeight: 700, color: 'var(--black)', marginBottom: 16 }}>Schedule</h4>
        {[['Date', form.date], ['Time', form.time]].map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--gray-600)' }}>{l}</span>
            <span style={{ fontWeight: 600, color: 'var(--black)' }}>{v || '—'}</span>
          </div>
        ))}
      </div>
    </div>
  ];

  if (submitted) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--off-white)', padding: '40px 24px' }}>
        <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '64px 48px', textAlign: 'center', maxWidth: 480, boxShadow: 'var(--shadow-card)' }}>
          <div style={{ width: 80, height: 80, background: 'var(--red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--black)', marginBottom: 12 }}>Booking Received!</h2>
          <p className="body-md" style={{ marginBottom: 12 }}>Thank you, {form.name}. We have received your pickup request and will contact you at {form.phone} to confirm.</p>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', marginBottom: 36 }}>Expected response: within 2 hours during business hours.</p>
          <Link href="/" className="btn-primary" style={{ justifyContent: 'center' }}>Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: 16, background: 'rgba(255,255,255,0.15)', color: 'white' }}>Schedule Pickup</div>
          <h1 className="display-lg" style={{ color: 'white', marginBottom: 16 }}>Book a Pickup</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 500, lineHeight: 1.7 }}>
            Fill out the form below to schedule your free vehicle pickup and get a cash offer.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {/* Progress */}
          <div style={{ display: 'flex', gap: 0, marginBottom: 48 }}>
            {steps.map((s, i) => (
              <div key={s} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  {i > 0 && <div style={{ flex: 1, height: 3, background: i <= step ? 'var(--red)' : 'var(--gray-200)', transition: 'background 0.3s' }} />}
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: i < step ? 'var(--red)' : i === step ? 'var(--red)' : 'var(--gray-200)',
                    color: i <= step ? 'white' : 'var(--gray-400)', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.3s', flexShrink: 0
                  }}>
                    {i < step ? <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> : i + 1}
                  </div>
                  {i < steps.length - 1 && <div style={{ flex: 1, height: 3, background: i < step ? 'var(--red)' : 'var(--gray-200)', transition: 'background 0.3s' }} />}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: i === step ? 'var(--red)' : 'var(--gray-400)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Form card */}
          <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '40px', boxShadow: 'var(--shadow-card)', marginBottom: 24 }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.3rem', color: 'var(--black)', marginBottom: 24 }}>
              Step {step + 1}: {steps[step]}
            </h3>
            {stepContent[step]}
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
              className="btn-outline" style={{ opacity: step === 0 ? 0.4 : 1, cursor: step === 0 ? 'not-allowed' : 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
              Previous
            </button>
            {step < steps.length - 1 ? (
              <button onClick={() => setStep(step + 1)} className="btn-primary">
                Next Step
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            ) : (
              <button onClick={() => setSubmitted(true)} className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="section-sm" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, textAlign: 'center' }}>
            {[
              { icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/>, title: 'Instant Cash', desc: 'Get paid the same day we pick up your vehicle.' },
              { icon: <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/>, title: 'Free Towing', desc: 'We come to you, absolutely zero towing fees.' },
              { icon: <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" fill="currentColor"/>, title: 'Same Day Service', desc: 'Book today, get picked up today in most cases.' },
            ].map(item => (
              <div key={item.title}>
                <div style={{ width: 56, height: 56, background: 'var(--red-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" style={{ color: 'var(--red)' }}>{item.icon}</svg>
                </div>
                <h4 style={{ fontWeight: 700, color: 'var(--black)', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
