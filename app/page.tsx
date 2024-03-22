import { Metadata } from 'next';
import Banner from '~/components/banner';
import Brand from '~/components/brand';
import Header from '~/components/header';
import Navbar from '~/components/navbar';
import Product from '~/components/product';

export const metadata: Metadata = {
  title: 'Avion',
  description: 'Luxury homeware for people who love timeless design quality',
  openGraph: {
    images: ['/brand-img.png'],
  },
  keywords: ['sofa', 'avion', 'mebel', 'stoll', 'kursi', 'ustar', 'stull', 'Salayev Ilyos', 'G`anijonov Shahzod', 'Madraimov Sherzod', 'Allaberganov Ismoiljon', 'Asqarov Akbar' ],
};

export default function Home() {
  return (
      <>
        <Header />
        <Navbar/>
        <Banner/>
        <Brand/>
        <Product/>
      </>
  );
}
