import Image from 'next/image';
import Link from 'next/link';

const images = [
  { src: 'https://images.unsplash.com/photo-1693925380766-830b8062495d?q=80', title: 'Scrap Car Pickup', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?q=80', title: 'Towing Service' },
  { src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80', title: 'Auto Parts' },
  { src: 'https://images.unsplash.com/photo-1661293665910-67f16ae75795?q=80', title: 'Our Yard', span: 'wide' },
  { src: '/img5.png', title: 'Eco Recycling' },
  { src: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80', title: 'Vehicle Collection' },
  { src: 'https://images.unsplash.com/photo-1781177289398-a8641fdf12ff?q=80', title: 'Peterborough Pickup' },
  { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', title: 'Paperwork Done Right', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80', title: 'Cash Payment' },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: 16, background: 'rgba(255,255,255,0.15)', color: 'white' }}>Our Work</div>
          <h1 className="display-lg" style={{ color: 'white', marginBottom: 16 }}>Gallery</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 480, lineHeight: 1.7 }}>
            A look at our operations, pickups, and the vehicles we handle every day.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>Photo Gallery</div>
            <h2 className="display-lg">See Us in Action</h2>
            <div className="red-stripe" style={{ margin: '16px auto 0' }} />
          </div>

          {/* Masonry-style grid */}
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {images.map((img, i) => (
              <div key={i} className={`gallery-item${img.span === 'wide' ? ' gallery-wide' : ''}`} style={{
                gridColumn: img.span === 'wide' ? 'span 2' : 'span 1',
                height: img.span === 'wide' ? 320 : 260
              }}>
                <Image src={img.src} alt={img.title} fill style={{ objectFit: 'cover' }} />
                <div className="gallery-overlay">
                  <div style={{ textAlign: 'center' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white" style={{ marginBottom: 8 }}>
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>{img.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .gallery-grid { grid-template-columns: 1fr 1fr !important; gap: 14px !important; }
            .gallery-wide { grid-column: span 2 !important; }
            .gallery-item { height: 200px !important; }
          }
          @media (max-width: 480px) {
            .gallery-grid { grid-template-columns: 1fr !important; }
            .gallery-wide { grid-column: span 1 !important; }
            .gallery-item { height: 220px !important; }
          }
        `}</style>
      </section>

      {/* Social CTA */}
      <section className="section-sm" style={{ background: 'var(--off-white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Follow Us</div>
          <h2 className="display-md" style={{ marginBottom: 16 }}>See More on Instagram</h2>
          <p className="body-lg" style={{ marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
            Follow @jmgautorepair for more photos, updates, and behind-the-scenes from our yard.
          </p>
          <a href="https://instagram.com/jmgautorepair" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
            @jmgautorepair
          </a>
        </div>
      </section>

      <section style={{ background: 'var(--red)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md" style={{ color: 'white', marginBottom: 16 }}>Ready to Sell Your Car?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 36, fontSize: '1.05rem' }}>Same day pickup. Top dollar. No hassle.</p>
          <Link href="/booking" className="btn-white">Get a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
