
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';
import './generated-theme.css';

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Providers from '@/components/Providers';

const siteUrl = 'https://www.keyonmedia.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'KeyOn Media | Advertising, Marketing & Creative Solutions',
    template: '%s | KeyOn Media',
  },

  description:
    'Explore advertising, digital marketing, public relations, outdoor media, creative design and printing services with KeyOn Media Private Limited.',

  applicationName: 'KeyOn Media',

  openGraph: {
    type: 'website',
    siteName: 'KeyOn Media',
    title: 'KeyOn Media | Advertising, Marketing & Creative Solutions',
    description:
      'A connected approach to advertising, digital marketing, media and creative services.',
    url: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>
            <SiteHeader />

            <main>{children}</main>

            <SiteFooter />
            <GoogleAnalytics/>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
