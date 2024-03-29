import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import NavBar from '@/components/NavBar';
import Searchbox from '@/components/Searchbox';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb clone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Providers>
          {/* Header*/}
          <Header />

          {/* Navbar*/}
          <NavBar />

          {/* SearchBox*/}
          <Searchbox />

         {children}
        </Providers>
      </body>
    </html>
  )
}
