import { Metadata } from 'next';
import Banner from '~/components/banner';
import Brand from '~/components/brand';
import Idea from '~/components/idea';
import Product from '~/components/product';
import SignUp from '~/components/sign-up';

export const metadata: Metadata = {
  title: 'Avion',
  description: 'Luxury homeware for people who love timeless design quality',
  openGraph: {
    images: ['/brand-img.png'],
  },
  keywords: [
    'sofa',
    'avion',
    'mebel',
    'stoll',
    'kursi',
    'ustar',
    'stull',
    'Salayev Ilyos',
    'G`anijonov Shahzod',
    'Madraimov Sherzod',
    'Allaberganov Ismoiljon',
    'Asqarov Akbar',
  ],
};

export default function Home() {
  return (
    <>
      <Banner />
      <Brand />
      <Product />
      <Idea />
      <SignUp />
    </>
  );
}
