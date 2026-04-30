import ThemeProvider from './components/ThemeProvider';
import './globals.css'

import { Outfit, Ovo } from 'next/font/google';


export const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
export const ovo = Ovo({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Nolan Tuttle',
  description: 'Nolan Tuttle Portfolio website!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-scrollbar" suppressHydrationWarning>
      <head />
      <body className='font-sans antialiased leading-8 overflow-x-hidden bg-white dark:bg-neutral-900 dark:text-gray-100'>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
