import Image from 'next/image';
import Link from 'next/link';

const team = [
  {
    name: 'Sejad Ahmad',
    role: 'Owner & Founder',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Sejad founded JMG Auto Recycling with a passion for fair dealing and community service. With years in the auto industry, he ensures every customer gets the best value.',
  },
  {
    name: 'Mike Tremblay',
    role: 'Lead Towing Specialist',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Mike is our go-to for pickups across Peterborough and beyond. Fast, professional, and always on time — your car is in safe hands.',
  },
  {
    name: 'Chris Dupont',
    role: 'Vehicle Assessor',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'With 15+ years in auto mechanics, Chris accurately values every vehicle we purchase. His assessments are always fair and transparent.',
  },
  {
    name: 'Aisha Patel',
    role: 'Customer Relations',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Aisha is usually your first point of contact. She handles all inquiries and ensures every customer has a smooth, stress-free experience.',
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: 16, background: 'rgba(255,255,255,0.15)', color: 'white' }}>The People Behind JMG</div>
          <h1 className="display-lg" style={{ color: 'white', marginBottom: 16 }}>Meet Our Team</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 500, lineHeight: 1.7 }}>
            A dedicated group of professionals committed to giving you the best scrap car experience in Peterborough.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>Our People</div>
            <h2 className="display-lg">Experienced. Honest. Reliable.</h2>
            <div className="red-stripe" style={{ margin: '16px auto 0' }} />
          </div>
          <div className="grid-4">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <div style={{ height: 280, position: 'relative', overflow: 'hidden' }}>
                  <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--black)', marginBottom: 4 }}>{member.name}</h3>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{member.role}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: 12 }}>Careers</div>
              <h2 className="display-md" style={{ marginBottom: 20 }}>Want to Join Our Team?</h2>
              <div className="red-stripe" style={{ marginBottom: 24 }} />
              <p className="body-lg" style={{ marginBottom: 28 }}>
                We are always looking for motivated, honest people who take pride in their work. Whether you drive, assess vehicles, or handle operations — we would love to hear from you.
              </p>
              <a href="mailto:jmgallautorecyclers@gmail.com" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Send Your Resume
              </a>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 360, position: 'relative' }}>
              <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" alt="Team at work" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--red)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md" style={{ color: 'white', marginBottom: 16 }}>Our Team is Ready to Help You Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 36, fontSize: '1.05rem' }}>Reach out — we respond fast, every time.</p>
          <Link href="/contact" className="btn-white">Contact Our Team</Link>
        </div>
      </section>
    </>
  );
}
