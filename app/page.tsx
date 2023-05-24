import { Metadata } from 'next'
import Link from 'next/link'
import { compareDesc, format, formatDistanceToNow, parseISO } from 'date-fns'

import { allPosts } from 'contentlayer/generated'

export default function Index() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="mx-auto mb-16 flex w-full max-w-2xl flex-1 flex-col items-start justify-center">
      <div>
        <p>
          A blog by <b>Possawat Suksai</b>
        </p>
      </div>
      <div className="mt-16 flex w-full max-w-2xl flex-col items-start justify-center">
        {posts.map(post => {
          const date = parseISO(post.date)

          return (
            <Link
              href={`/posts/${post.url}`}
              key={post.url}
              className="w-full border-b-[1px] border-slate-300"
            >
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
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'iammark | Blog'
}
