import Link from 'next/link'
import 'styles/index.css'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="flex flex-col justify-center px-8">
            <nav className="mx-auto flex w-full max-w-2xl flex-col items-center justify-between font-display">
              <div className="flex w-full">
                <h2 className="mt-8 mb-8 text-xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
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
