import './globals.css'

import { Outfit, Ovo } from 'next/font/google';


export const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
export const ovo = Ovo({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Nolan Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
        <body className='font-sans antialiased leading-8 overflow-x-hidden'>
            {children}
        </body>
    </html>
  );
}
