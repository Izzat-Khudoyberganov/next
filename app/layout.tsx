import type { Metadata } from 'next';
import { Gilda_Display } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const roboto = Gilda_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
