import type { Metadata } from 'next'
import './globals.css'
import Header from './Header'
import Footer from './Footer'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className='container mx-auto bg-slate-700 text-slate-50'>
        <header>
          <Header />
        </header>
        <footer>
          <Footer />
        </footer>
        {children}
      </body>
    </html>
  )
}
