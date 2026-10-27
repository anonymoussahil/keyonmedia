import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/services';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link
            href="/"
            className="brand brand-light"
            aria-label="KeyOn Media home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              maxWidth: '100%',
              textDecoration: 'none',
            }}
          >
            <Image
              src="/images/brand/keyon-media-logo.png"
              alt="KeyOn Media Private Limited"
              width={294}
              height={82}
              priority
              style={{
                display: 'block',
                width: '250px',
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Link>

          <p>
            360° marketing and promotion solutions—connecting brand strategy,
            creative work and media formats.
          </p>

          <Link href="/contact" className="text-link">
            Start a conversation ↗
          </Link>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/about">About us</Link>
          <Link href="/portfolio">Our work</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3>Services</h3>
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>

        <div>
          <h3>Get in touch</h3>
          <a href="mailto:keyonmediapl@gmail.com">
            keyonmediapl@gmail.com
          </a>
          <a href="tel:+919920992393">+91 99209 92393</a>
          <a href="tel:+919137706231">+91 91377 06231</a>

          <p className="footer-address">
            B-006, Kinza Apartment,
            <br />
            behind Raj Atlantis, Kanakia Road,
            <br />
            Mira Road (East) – 401107
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} KeyOn Media Private Limited
        </span>

        <span>
          Developed by{' '}
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Bhaskara Codex
          </Link>
        </span>

        <span>Thoughtful communication. Clear creative.</span>

        <Link href="/contact">Privacy & enquiries</Link>
      </div>
    </footer>
  );
}