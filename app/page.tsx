import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avion',
  description: 'Luxury homeware for people who love timeless design quality',
  openGraph: {
    images: ['/brand-img.png'],
  },
  keywords: ['sofa', 'avion', 'mebel', 'stoll', 'kursi', 'ustar', 'stull'],
};

export default function Home() {
  return <div className="flex gap-2">Home</div>;
}
