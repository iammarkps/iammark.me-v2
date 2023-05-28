import Fuse from 'fuse.js'

import { ScrollArea } from '@/components/ui/scroll-area'
import { CourseCard } from '@/components/course-card'
import { SearchCourses } from '@/components/search-courses'

import BBA26Courses from '../../data/26.json'

const courses = Object.keys(BBA26Courses).map(key => {
  const course = BBA26Courses[key as keyof typeof BBA26Courses]
  return {
    ...course,
    id: key
  }
})

const fuse = new Fuse(courses, {
  keys: ['id', 'name', 'abbrev'],
  threshold: 0.25
})

const CoursesPage = ({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const search =
    typeof searchParams.search === 'string' ? searchParams.search : ''

  return (
    <div className="mx-auto grid h-[calc(100vh-6rem)] w-full  lg:grid-cols-12">
      <div className="col-span-1 h-full overflow-hidden px-8 lg:col-span-3">
        <h1 className="font-display">BBA26 All Courses</h1>
        <h1 className="mt-4 font-display">Search for Course(s)</h1>

        <SearchCourses />
        <ScrollArea className="h-full pt-8">
          {search
            ? fuse.search(search).map(course => {
                return <CourseCard course={course.item} key={course.item.id} />
              })
            : courses.map(course => {
                return <CourseCard course={course} key={course.id} />
              })}
        </ScrollArea>
      </div>
      <div className="col-span-3 h-full w-full lg:col-span-9 lg:border-l"></div>
    </div>
  )
}

export default CoursesPage
