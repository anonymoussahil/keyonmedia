# KeyOn Media Website — Next.js

A responsive, SEO-aware Next.js App Router website based on the supplied KeyOn Media homepage extraction JSON and company profile summary. The homepage and navigation use Material UI (MUI); the animated homepage uses Framer Motion. The theme is managed centrally through `config/theme.json`, with Poppins typography and a warm ivory, orange, peach, olive, sage, terracotta, charcoal and dark-brown palette. Theme CSS is generated through `npm run theme:generate`.

## Run locally

Requirements: Node.js 20.9+ and npm. Dependencies include `@mui/material`, `@mui/icons-material`, Emotion and `framer-motion`.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Pages

- Home, About, Portfolio, Contact
- 10 dedicated core service pages under `/services/[slug]`
- 9 digital-marketing workstream pages under `/services/digital-marketing/[child]`
- Generated `sitemap.xml` and `robots.txt`
- Page-specific title, meta description, canonical URL and Open Graph metadata
- Organization JSON-LD using company details transcribed from supplied material
- Material UI theme/components for layout, buttons, cards, navigation drawer and responsive navigation
- Framer Motion entrance/reveal transitions, gently floating hero shapes and hover-responsive cards
- `prefers-reduced-motion` support in the visual system

## Free deployment

This can be deployed on the Vercel Hobby/free tier subject to Vercel's current usage limits and terms. Connect the project to a Git repository and import it in Vercel; framework preset should be Next.js. No paid API is required by this project.

## Preview

Open `keyon-media-website-preview.html` for the standalone preview. Keep the `public/images/` directory beside it, because the preview references the extracted logo and artwork files there. The Next.js source is the Material UI + Framer Motion implementation; the HTML preview uses CSS animation.

## Before publishing

1. Confirm the phone numbers, email and address are current.
2. Review the extracted client logos and media examples on the homepage and portfolio page; verify each image crop and caption against the source profile.
3. Replace the text-based header/footer brand mark with an approved vector logo if one is available.
4. Confirm service coverage, media inventory, permissions and availability before making location-specific or performance claims.
5. Verify client names, logos, artwork captions and permissions before launch.
6. Connect Google Search Console after deployment and submit `/sitemap.xml`; this does not guarantee indexing.
7. Add a real privacy policy and terms page before collecting personal information. Current contact page uses email/phone links only and does not store form submissions.
8. Verify structured data, canonical host, sitemap, redirects and rendered HTML after deployment.

## Content integrity

Content is based on the supplied scraped homepage JSON and company profile summary. Some claims, testimonials, client relationships and contact details have not been independently verified. No search volume or ranking outcomes are claimed. SEO keywords in metadata are hypotheses, not verified demand data.


### Current visual palette
- Warm ivory `#FFF8F0` as the main background.
- Orange `#F47A35` for primary actions.
- Peach `#F4DCCB` for warm supporting panels.
- Sage `#DCE5C7` and olive `#596442` for selected sections and accents.
- Terracotta `#A95735` for limited accents.
- Charcoal `#383533` and dark brown `#49382F` for readable typography.
- Poppins is the primary font family and is set in `config/theme.json`.

## Fast theme editing (JSON)

All approved theme tokens live in `config/theme.json`: palette, typography, layout dimensions, motion, section backgrounds, and component roles. To change a theme:

1. Edit `config/theme.json`.
2. Run `npm run theme:generate` to regenerate `src/app/generated-theme.css`.
3. Run `npm run dev` or `npm run build` as usual. The `predev` and `prebuild` hooks regenerate the CSS automatically.

`src/components/Providers.tsx` reads the same JSON for the Material UI theme. Keep generated CSS out of manual edits; change the JSON source instead. Sections and components use named color roles so you can reassign roles without hunting through the site styles. Some decorative illustration-specific colors may still be explicitly styled in component CSS and should be reviewed when introducing a radically different palette.


## Extracted company-profile assets

- `public/images/clients/`: 21 individual client logo crops extracted from page 13 of the supplied company profile. Images were enlarged with Lanczos resampling and mild sharpening.
- `public/images/work/`: 27 advertising artwork and media-placement crops extracted from pages 4–11. Files are saved as WebP for efficient delivery.
- `public/images/brand/keyon-media-logo.png`: enlarged logo crop from the final profile page; inspect against an approved source before using it as the official brand asset.
- `src/lib/brand-assets.json`: manifest of all client and artwork assets, including category, alternative text, and source-page references.

Upscaling increases pixel dimensions and can improve on-screen presentation, but it cannot restore fine detail missing from the raster source brochure. The artwork gallery deliberately does not assign each media example to a specific client where that relationship is not stated in the source.
