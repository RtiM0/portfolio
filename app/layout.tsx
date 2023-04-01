import { Inter, Ubuntu_Mono } from 'next/font/google';
import './globals.css'

export const metadata = {
  title: 'Mustafa Shakir',
}

const inter = Inter({
  subsets: ['latin'],
  variable: "--inter"
})

const mono = Ubuntu_Mono({
  subsets: ['latin'],
  variable: "--ubuntu-mono",
  weight: "700"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className='font-inter'>{children}</body>
    </html>
  )
}
