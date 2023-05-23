import Link from 'next/link'
import { Inter, IBM_Plex_Sans_Thai } from 'next/font/google'

import 'styles/index.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

const IBMPlexSansThai = IBM_Plex_Sans_Thai({
  variable: '--font-ibm-plex-sans-thai',
  subsets: ['thai', 'latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={`${inter.variable} ${IBMPlexSansThai.variable}`}>
      <body>
        <div>
          <div className="flex flex-col justify-center px-8">
            <nav className="mx-auto flex w-full max-w-2xl flex-col items-center justify-between font-display">
              <div className="flex w-full">
                <h2 className="mb-8 mt-8 text-xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
                  <Link href="/" className="hover:underline">
                    IAMMARKPS
                  </Link>
                </h2>
              </div>
            </nav>
          </div>
          <main className="flex flex-col justify-center px-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
