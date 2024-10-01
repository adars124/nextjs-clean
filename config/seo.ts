import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: 'Stock Sessions - Learn Stock Market Fundamentals',
  description:
    'Stock Sessions offers comprehensive training in stock market fundamentals, technical analysis, and investment strategies for beginners and intermediate investors.',
  keywords:
    'stock market, investing, technical analysis, fundamental analysis, financial education',
  authors: [{ name: 'Stock Sessions Team' }],
  creator: 'Stock Sessions',
  publisher: 'Stock Sessions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.stockssession.com',
    siteName: 'Stock Sessions',
    images: [
      {
        url: 'https://www.stockssession.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stock Sessions - Learn Stock Market Fundamentals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stocksessions',
    creator: '@stocksessions',
  },
};

export const getSEO = (pageMetadata?: Partial<Metadata>): Metadata => {
  if (pageMetadata) {
    return { ...defaultMetadata, ...pageMetadata };
  }
  return defaultMetadata;
};

export default getSEO;
