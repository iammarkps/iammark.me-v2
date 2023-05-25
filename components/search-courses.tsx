'use client'

import { useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Input } from '@/components/ui/input'

export const SearchCourses = () => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const [isPending, startTransition] = useTransition()

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (query) {
      params.set('search', query)
    } else {
      params.delete('search')
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`)
    })
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Input onChange={e => handleSearch(e.target.value)} className="mt-4" />
    </div>
  )
}

// const searchReq = (query: string, parent: CourseRecord = {}): CourseRecord => {
//   if (Object.keys(parent).includes(query)) return parent

//   Object.assign(parent, {
//     [query]: BBA26Courses[query as keyof typeof BBA26Courses]
//   })

//   if (!Object.keys(BBA26Courses).includes(query)) return {}

//   BBA26Courses[query as keyof typeof BBA26Courses]['prereq'].forEach(
//     element => {
//       parent = searchReq(`${element}`, parent)
//     }
//   )
//   return parent
// }
