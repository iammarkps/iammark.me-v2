import { useMDXComponent } from 'next-contentlayer/hooks'
import components from 'components/MDXComponents'

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Image from 'next/image'

import { parseISO, format, formatDistanceToNow } from 'date-fns'
import { allPosts } from '.contentlayer/data'
import type { Post as PostType } from '.contentlayer/types'

import { SITE_URL } from 'lib/constants'
import Layout from 'components/layout'

import profilePic from 'public/assets/blog/authors/iammarkps.jpg'

const Post = ({ post }: { post: PostType }) => {
  const MDXContent = useMDXComponent(post.body.code)

  const router = useRouter()
  const date = parseISO(post.date)

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{post.title} | iammarkps</title>
        <meta
          property="og:image"
          content={`${SITE_URL}${post.image}`}
          key="og:image"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css"
          integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="flex flex-col justify-center mx-auto w-full">
        <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-32">
          <h1 className="mb-4 text-3xl font-bold font-display text-black md:text-5x">
            {post.title}
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full font-display">
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
          <div className="w-full mt-4 prose max-w-none">
            <MDXContent components={components} />
          </div>
        </article>
      </div>
    </>
  )
}

Post.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Post

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

// Statically fetch post by slug
export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params?.slug)

  return { props: { post } }
}
