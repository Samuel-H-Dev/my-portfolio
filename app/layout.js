import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Site for Samuel Holmes',
  description: 'I am a Software Engineer, Trying to prove myself',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-zinc-900"}>{children}</body>
    </html>
  )
}
