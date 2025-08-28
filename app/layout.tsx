import './globals.css'

import { Outfit, Ovo } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const ovo = Ovo({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Nolan Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
