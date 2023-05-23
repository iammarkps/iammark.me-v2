import { useMDXComponent } from 'next-contentlayer/hooks'
import components from 'components/MDXComponents'

import Head from 'next/head'
import Image from 'next/image'

import { parseISO, format, formatDistanceToNow } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

import { SITE_URL } from 'lib/constants'

import profilePic from 'public/assets/blog/authors/iammarkps.jpg'

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return {
    title: post.title,
    description: post.excerpt,
    images: [
      {
        url: `${SITE_URL}${post.image}`,
      },
    ],
  }
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

const Post = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  const MDXContent = useMDXComponent(post.body.code)

  // const router = useRouter()
  const date = parseISO(post.date)

  // if (!router.isFallback && !post?.url) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css"
          integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="mx-auto flex w-full flex-col justify-center">
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
            <MDXContent components={components} />
          </div>
        </article>
      </div>
    </>
  )
}

export default Post
