import { Metadata } from 'next';
import Banner from '~/components/banner';
import Header from '~/components/header';
import Navbar from '~/components/navbar';

export const metadata: Metadata = {
  title: 'Avion',
  description: 'Luxury homeware for people who love timeless design quality',
  openGraph: {
    images: ['/brand-img.png'],
  },
  keywords: ['sofa', 'avion', 'mebel', 'stoll', 'kursi', 'ustar', 'stull'],
};

export default function Home() {
  return (
      <>
        <Header />
        <Navbar/>
        <Banner/>
      </>
  );
}
