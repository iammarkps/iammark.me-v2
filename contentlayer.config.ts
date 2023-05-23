import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import math from 'remark-math'
import gfm from 'remark-gfm'
import katex from 'rehype-katex'
import highlight from 'rehype-prism-plus'
import slug from 'rehype-slug'
import autolinkHeadings from 'rehype-autolink-headings'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: '_posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [gfm, math],
    rehypePlugins: [slug, autolinkHeadings, katex, highlight],
  },
})
