import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/index.css'
import '@/styles/global.css'

import { IBMPlexSansThai, inter } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={cn(inter.variable, IBMPlexSansThai.variable)}>
      <body>
        <div className="h-screen">
          <div className="flex flex-col justify-center px-8">
            <nav className="mx-auto flex h-24 w-full max-w-2xl flex-col items-center justify-between py-6 font-display">
              <div className="flex w-full">
                <h2 className="text-xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
                  <Link href="/" className="hover:underline">
                    IAMMARKPS
                  </Link>
                </h2>
              </div>
            </nav>
          </div>
          <main className="flex flex-col justify-center px-8">{children}</main>
        </div>
        <Analytics />
        <TailwindIndicator />
      </body>
    </html>
  )
}
