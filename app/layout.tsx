import './globals.css'
import { Inter, Playfair_Display } from "next/font/google"
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" attribute={"class"}>
          {children}
          <TailwindIndicator/>
        </ThemeProvider>
      </body>
    </html>
  )
}
