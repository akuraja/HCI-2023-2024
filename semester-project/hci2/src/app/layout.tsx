import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <nav>
      <ul>
        <li><Link href="/">Početna</Link>    <Link href="/about">About</Link>     <Link href="/showcase">Showcase</Link>  </li>
      </ul>
    </nav> {children}</body>
    </html>
  )
}
