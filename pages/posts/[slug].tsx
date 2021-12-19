import { useMDXComponent } from 'next-contentlayer/hooks'
import components from 'components/MDXComponents'

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Image from 'next/image'

import { parseISO, format, formatDistanceToNow } from 'date-fns'
import { allPosts } from '.contentlayer/data'
import type { Post } from '.contentlayer/types'

import { SITE_URL } from 'lib/constants'
import Layout from 'components/layout'

const Post = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  const router = useRouter()
  const date = parseISO(post.date)

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center mx-auto w-full">
        <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-32">
          <Head>
            <title>{post.title} | iammarkps</title>
            <meta
              property="og:image"
              content={`${SITE_URL}${post.image}`}
              key="og:image"
            />
          </Head>
          <h1 className="mb-4 text-3xl font-bold font-display text-black md:text-5x">
            {post.title}
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full font-display">
            <div className="flex items-center">
              <Image
                src="/assets/blog/authors/iammarkps.jpg"
                width={48}
                height={48}
                alt="avatar"
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
    </Layout>
  )
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
