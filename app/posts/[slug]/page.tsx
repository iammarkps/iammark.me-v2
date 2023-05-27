import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { format, formatDistanceToNow, parseISO } from 'date-fns'

import '@/styles/katex.css'

import { SITE_URL } from '@/lib/constants'
import {
  KaTeXAMS,
  KaTeXCaligraphic,
  KaTeXFraktur,
  KaTeXMain,
  KaTeXMath,
  KaTeXSansSerif,
  KaTeXScript,
  KaTeXSize1,
  KaTeXSize2,
  KaTeXSize3,
  KaTeXSize4,
  KaTeXTypewriter
} from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Mdx } from '@/components/mdx-components'
import profilePic from '@/public/assets/blog/authors/iammarkps.jpg'

type MetadataProps = {
  params: { slug: string }
}

export const generateMetadata = async ({
  params
}: MetadataProps): Promise<Metadata> => {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [
        {
          url: `${SITE_URL}${post.image}`
        }
      ]
    }
  }
}

export const generateStaticParams = async () =>
  allPosts.map(post => ({ slug: post._raw.flattenedPath }))

const Post = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug)

  if (!post?.url) {
    return notFound()
  }

  const date = parseISO(post.date)

  return (
    <div
      className={cn(
        'mx-auto flex w-full flex-col justify-center',
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
      )}
    >
      <article className="mx-auto mb-32 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 font-display text-3xl font-bold text-black md:text-5xl">
          {post.title}
        </h1>
        <div className="flex w-full flex-col items-start justify-between font-display md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              src={profilePic}
              width={48}
              height={48}
              alt="avatar"
              placeholder="blur"
            ></Image>
            <p className="ml-2">iammarkps</p>
          </div>

          <p>
            <time dateTime={post.date}>{format(date, 'LLLL d, yyyy')}</time> (
            {formatDistanceToNow(date, { addSuffix: true })})
          </p>
        </div>
        <div className="prose mt-4 w-full max-w-none">
          <Mdx code={post.body.code} />
        </div>
      </article>
    </div>
  )
}

export default Post
