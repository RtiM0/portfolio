import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Inter, Playfair_Display } from "next/font/google"
import { TailwindIndicator } from '@/components/tailwind-indicator'

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
        <ThemeProvider defaultTheme="system">
          {children}
          <TailwindIndicator/>
        </ThemeProvider>
      </body>
    </html>
  )
}
