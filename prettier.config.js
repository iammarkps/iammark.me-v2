module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
    '@ianvs/prettier-plugin-sort-imports'
  ],
  semi: false,
  singleQuote: true,
  useTabs: false,
  trailingComma: 'none',
  tabWidth: 2,
  arrowParens: 'avoid',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]'
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy']
}
