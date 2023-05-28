import { IBM_Plex_Sans_Thai, Inter } from 'next/font/google'
import localFont from 'next/font/local'

import { cn } from './utils'

export const KaTeXAMS = localFont({
  variable: '--font-katex-ams',
  src: '../fonts/KaTeX_AMS-Regular.woff2',
  display: 'swap'
})

export const KaTeXCaligraphic = localFont({
  variable: '--font-katex-caligraphic',
  src: [
    {
      path: '../fonts/KaTeX_Caligraphic-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/KaTeX_Caligraphic-Regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap'
})

export const KaTeXFraktur = localFont({
  variable: '--font-katex-fraktur',
  src: [
    {
      path: '../fonts/KaTeX_Fraktur-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/KaTeX_Fraktur-Regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap'
})

export const KaTeXMain = localFont({
  variable: '--font-katex-main',
  src: [
    {
      path: '../fonts/KaTeX_Main-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/KaTeX_Main-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../fonts/KaTeX_Main-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/KaTeX_Main-Regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap'
})

export const KaTeXMath = localFont({
  variable: '--font-katex-math',
  src: [
    {
      path: '../fonts/KaTeX_Math-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../fonts/KaTeX_Math-Italic.woff2',
      weight: '400',
      style: 'italic'
    }
  ],
  display: 'swap'
})

export const KaTeXSansSerif = localFont({
  variable: '--font-katex-sans-serif',
  src: [
    {
      path: '../fonts/KaTeX_SansSerif-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/KaTeX_SansSerif-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/KaTeX_SansSerif-Regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap'
})

export const KaTeXScript = localFont({
  variable: '--font-katex-script',
  src: '../fonts/KaTeX_Script-Regular.woff2',
  display: 'swap'
})

export const KaTeXSize1 = localFont({
  variable: '--font-katex-size1',
  src: '../fonts/KaTeX_Size1-Regular.woff2',
  display: 'swap'
})

export const KaTeXSize2 = localFont({
  variable: '--font-katex-size2',
  src: '../fonts/KaTeX_Size2-Regular.woff2',
  display: 'swap'
})

export const KaTeXSize3 = localFont({
  variable: '--font-katex-size3',
  src: '../fonts/KaTeX_Size3-Regular.woff2',
  display: 'swap'
})

export const KaTeXSize4 = localFont({
  variable: '--font-katex-size4',
  src: '../fonts/KaTeX_Size4-Regular.woff2',
  display: 'swap'
})

export const KaTeXTypewriter = localFont({
  variable: '--font-katex-typewriter',
  src: '../fonts/KaTeX_Typewriter-Regular.woff2',
  display: 'swap'
})

export const KaTeXFontVariable = cn(
  KaTeXAMS.variable,
  KaTeXCaligraphic.variable,
  KaTeXFraktur.variable,
  KaTeXMain.variable,
  KaTeXMath.variable,
  KaTeXSansSerif.variable,
  KaTeXScript.variable,
  KaTeXSize1.variable,
  KaTeXSize2.variable,
  KaTeXSize3.variable,
  KaTeXSize4.variable,
  KaTeXTypewriter.variable
)

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

export const IBMPlexSansThai = IBM_Plex_Sans_Thai({
  variable: '--font-ibm-plex-sans-thai',
  subsets: ['thai', 'latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})
