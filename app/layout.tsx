import type { Metadata } from 'next';
import '../app/globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'JMG All Auto Recycling & Parts | Peterborough',
  description: 'We pay top price for your scrap vehicles with same-day free towing in Peterborough, Ontario. Call 647-778-7931.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <ScrollReveal />
        <main style={{ paddingTop: 72 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
