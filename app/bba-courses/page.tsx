import Fuse from 'fuse.js'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SearchCourses } from '@/components/search-courses'

import BBA26Courses from '../../data/26.json'

const courses = Object.keys(BBA26Courses).map(key => {
  const course = BBA26Courses[key as keyof typeof BBA26Courses]
  return {
    ...course,
    id: key
  }
})

console.log(courses)

const fuse = new Fuse(courses, {
  keys: ['id', 'name', 'abbrev']
})

const CoursesPage = ({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const search = searchParams.search as string

  const result = fuse.search(search)

  console.log(result)

  return (
    <div className="mx-auto mb-16 grid h-[calc(100vh-6rem)] w-full lg:grid-cols-5 ">
      <div className="col-span-2 h-[calc(100vh-6rem)] px-8">
        <h1 className="font-display">BBA26 All Courses</h1>
        <h1 className="mt-4 font-display">Search for Course(s)</h1>

        <SearchCourses />
        <ScrollArea className="mt-8 h-full">
          {fuse.search(search).map(course => {
            return (
              <Card key={course.item.abbrev} className="mt-4 w-full">
                <CardHeader>
                  <CardTitle>{course.item.name}</CardTitle>
                  <CardDescription>
                    {course.item.id} {course.item.abbrev}
                  </CardDescription>
                  <CardDescription>{course.item.credit}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{course.item.description}</p>
                </CardContent>
                <CardFooter>
                  <p>{course.item.raw_prereq}</p>
                </CardFooter>
              </Card>
            )
          })}
        </ScrollArea>
      </div>
      <div className="col-span-2 h-[calc(100vh-6rem)] w-full lg:col-span-3 lg:border-l"></div>
    </div>
  )
}

export default CoursesPage
