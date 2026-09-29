import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://panenhub.vercel.app'),
  title: 'PanenHub - Ekosistem Rantai Pasok Pangan Segar Nusantara',
  description: 'Platform digital rantai pasok pangan segar terintegrasi dari petani kebun dan nelayan pesisir langsung ke mitra warung tetangga dan konsumen nusantara.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'PanenHub - Ekosistem Rantai Pasok Pangan Segar Nusantara',
    description: 'Beli sayur, buah, dan hasil laut segar langsung dari petani & nelayan. Bebas ongkir ambil di mitra warung tetangga.',
    url: 'https://panenhub.vercel.app',
    siteName: 'PanenHub Nusantara',
    images: [
      {
        url: '/favicon.svg',
        width: 512,
        height: 512,
        alt: 'PanenHub Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#f3f4f5] text-[#212121]">
        {children}
      </body>
    </html>
  );
}
