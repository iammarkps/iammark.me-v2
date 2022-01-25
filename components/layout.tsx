import Link from 'next/link'
import Meta from './meta'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>
        <div className="flex flex-col justify-center px-8">
          <nav className="mx-auto flex w-full max-w-2xl flex-col items-center justify-between font-display">
            <div className="flex w-full">
              <h2 className="mt-8 mb-8 text-xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
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
