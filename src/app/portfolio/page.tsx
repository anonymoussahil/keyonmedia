import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import brandAssets from '@/lib/brand-assets.json';

export const metadata: Metadata = {
  title: 'Portfolio & Media Examples | KeyOn Media',
  description: 'Explore client logos and advertising formats featured in the KeyOn Media company profile, including print, PR, radio, TV, outdoor, transit and on-ground media.',
  alternates: { canonical: '/portfolio' },
};

export default function Portfolio() {
  return <>
    <section className="simple-hero">
      <div className="container">
        <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Our Work</span></div>
        <div className="eyebrow"><span className="eyebrow-line" /> PORTFOLIO & MEDIA EXAMPLES</div>
        <h1>Real placements.<br /><em>Across real channels.</em></h1>
        <p className="detail-lede">Browse client marks and advertising examples extracted from the supplied KeyOn Media company profile. The images show a range of media formats; they are not mapped to individual clients unless the source explicitly establishes the relationship.</p>
      </div>
    </section>

    <section className="section-pad portfolio-section">
      <div className="container">
        <div className="portfolio-collection-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> CLIENTS FEATURED IN THE PROFILE</div>
            <h2>Brands & organisations.</h2>
          </div>
          <p>The original logo artwork has been cropped and enlarged for web presentation. Some fine detail may remain limited by the resolution of the source brochure.</p>
        </div>
        <div className="client-logo-grid">
          {brandAssets.clients.map((client) => <article className="client-logo-card" key={client.src}>
            <div className="client-logo-frame">
              <Image src={client.src} alt={client.alt} fill sizes="(max-width: 600px) 45vw, (max-width: 1000px) 28vw, 16vw" style={{ objectFit: 'contain', padding: '8px' }} />
            </div>
            <p>{client.name}</p>
          </article>)}
        </div>

        <div className="portfolio-collection-heading artwork-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> ADVERTISING ARTWORK & PLACEMENTS</div>
            <h2>Media, made visible.</h2>
          </div>
          <p>These examples are grouped by format for easier review. Use them as an overview of the media formats showcased in the company profile.</p>
        </div>
        <div className="portfolio-image-grid">
          {brandAssets.work.map((item) => <article className="portfolio-image-card" key={item.id}>
            <div className="portfolio-art-frame">
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 600px) 92vw, (max-width: 1000px) 45vw, 30vw" style={{ objectFit: 'contain', padding: '6px' }} />
            </div>
            <div className="portfolio-art-caption">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <small>Source: company profile, page {item.sourcePage}</small>
            </div>
          </article>)}
        </div>

        <div className="portfolio-source-note"><b>Image preparation note</b><span>Logos and media examples were extracted from the supplied 14-page company-profile PDF, then resized with high-quality resampling and mild sharpening. Upscaling increases display dimensions but cannot recreate source detail that was not present in the scan. Confirm permission to publish client marks before launch.</span></div>
        <div className="center-cta"><h2>Have a brief for us?</h2><p>Tell us your objective and the channels you want to explore.</p><Link href="/contact" className="button">Discuss a project ↗</Link></div>
      </div>
    </section>
  </>;
}
