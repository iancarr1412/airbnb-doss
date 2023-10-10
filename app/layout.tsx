import './globals.css'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'
import ClientOnly from './components/ClientOnly'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb UK',
  description: 'Airbnb clone!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
          {/* <Modal isOpen/> */}
          <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  )
}
