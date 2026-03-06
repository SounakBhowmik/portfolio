import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { profile } from '@/src/content/profile';

export const metadata: Metadata = {
  metadataBase: new URL('https://sounakbhowmik.vercel.app'),
  title: `${profile.name} | ${profile.title}`,
  description: profile.description,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.description,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | ${profile.title}`,
    description: profile.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
