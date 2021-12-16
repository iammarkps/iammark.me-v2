import Head from 'next/head'
import { SITE_URL } from 'lib/constants'

const Meta = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content="IAMMARKPS's blog" />
      <meta property="og:title" content="IAMMARKPS's blog" />
      <meta property="og:image" content={`${SITE_URL}/og.jpg`} key="og:image" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://iammark.me" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${SITE_URL}/og.jpg`} />
      <meta name="twitter:site" content="@iammarkps" />
      <meta name="twitter:creator" content="@iammarkps" />
      <meta name="twitter:title" content="iammark" />
      <meta name="twitter:description" content="IAMMARK" />
    </Head>
  )
}

export default Meta
