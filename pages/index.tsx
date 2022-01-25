import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { format, formatDistanceToNow, parseISO } from 'date-fns'

import { allPosts } from '.contentlayer/data'

import { pick } from 'lib/utils'
import Layout from 'components/layout'

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const sorted = posts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  )

  return (
    <>
      <Head>
        <title>iammark | Blog</title>
      </Head>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-1 flex-col items-start justify-center">
        <div>
          <p>
            A blog by <b>Possawat Suksai</b>
          </p>
        </div>
        <div className="mt-16 flex w-full max-w-2xl flex-col items-start justify-center">
          {sorted.map((post) => {
            const date = parseISO(post.date)

            return (
              <Link href={`/posts/${post.slug}`} key={post.slug}>
                <a className="w-full border-b-[1px] border-slate-300">
                  <div className="mb-4 mt-10">
                    <h3 className="mb-2 w-full font-display text-xl font-bold md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="my-4 font-display">{post.excerpt}</p>
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
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Index

export async function getStaticProps() {
  const posts = allPosts.map((post) =>
    pick(post, ['title', 'date', 'slug', 'excerpt'])
  )

  return { props: { posts } }
}
