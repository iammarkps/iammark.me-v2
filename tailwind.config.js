const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '800',
              fontFamily: `${theme('fontFamily.display')}`
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
              fontFamily: `${theme('fontFamily.display')}`
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              fontFamily: `${theme('fontFamily.display')}`
            },
            h4: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              fontFamily: `${theme('fontFamily.display')}`
            },
            blockquote: {
              fontWeight: '600',
              fontFamily: `${theme('fontFamily.display')}`
            }
          }
        },
        lg: {
          css: {
            h1: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            h2: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            h3: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            h4: {
              fontFamily: `${theme('fontFamily.display')}`
            }
          }
        },
        xl: {
          css: {
            h1: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            h2: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            h3: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            h4: {
              fontFamily: `${theme('fontFamily.display')}`
            }
          }
        }
      })
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      display: [
        'var(--font-inter)',
        'SF Pro Display',
        'var(--font-ibm-plex-sans-thai)',
        ...defaultTheme.fontFamily.sans
      ]
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
