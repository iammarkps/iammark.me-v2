import Link from 'next/link'
import Meta from './meta'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>
        <div className="flex flex-col justify-center px-8">
          <nav className="flex flex-col items-center justify-between w-full max-w-2xl font-display mx-auto">
            <div className="flex w-full">
              <h2 className="text-xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
                <Link href="/">
                  <a className="hover:underline">IAMMARKPS</a>
                </Link>
              </h2>
            </div>
          </nav>
        </div>
        <main className="flex flex-col justify-center px-8">{children}</main>
      </div>
    </>
  )
}

export default Layout
