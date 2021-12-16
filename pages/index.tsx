import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { format, formatDistanceToNow, parseISO } from 'date-fns'

import { allPosts } from '.contentlayer/data'

import pick from 'lib/pick'
import Layout from 'components/layout'

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>iammark | Blog</title>
      </Head>
      <div className="flex flex-col flex-1 items-start justify-center max-w-2xl mx-auto mb-16 w-full">
        <div>
          <p>
            A blog by <b>Possawat Suksai</b>
          </p>
        </div>
        <div className="flex flex-col w-full max-w-2xl items-start justify-center mt-16">
          {posts.map((post) => {
            const date = parseISO(post.date)

            return (
              <Link href={`/posts/${post.slug}`} key={post.slug}>
                <a className="w-full border-b-[1px] border-slate-300">
                  <div className="mb-4 mt-10">
                    <h3 className="w-full mb-2 text-xl font-bold md:text-2xl font-display">
                      {post.title}
                    </h3>
                    <p className="font-display my-4">{post.excerpt}</p>
                    <time dateTime={post.date} className="text-sm">
                      {format(date, 'LLLL d, yyyy')} (
                      {formatDistanceToNow(date, { addSuffix: true })})
                    </time>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const posts = allPosts.map((post) =>
    pick(post, ['title', 'date', 'slug', 'excerpt'])
  )

  return { props: { posts } }
}
