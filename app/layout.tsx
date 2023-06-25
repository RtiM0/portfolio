import { Inter, Ubuntu_Mono } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Mustafa Shakir',
  description: 'I am a software engineer with experience in designing and developing distributed systems and cloud-based solutions.',
  authors: [{ name: "Mustafa Shakir", url: "shakirmustafa.com" }],
  keywords: ["Software Engineer", "Potato"],
  creator: "Mustafa Shakir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shakirmustafa.com",
    title: "Mustafa Shakir",
    description: "I am a software engineer with experience in designing and developing distributed systems and cloud-based solutions.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://shakirmustafa.com/site.webmanifest"
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
    <html lang="en" className={`${inter.variable} ${mono.variable} dark:bg-black bg-zinc-50 dark:text-gray-50 flex h-full flex-col`}>
      <body className='font-inter'>{children}</body>
    </html>
  )
}
