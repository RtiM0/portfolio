import './globals.css'
import { Inter, Playfair_Display } from "next/font/google"
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from 'next-themes'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
})

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
} satisfies Metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem={false} attribute={"class"}>
          {children}
          <TailwindIndicator/>
        </ThemeProvider>
      </body>
    </html>
  )
}
