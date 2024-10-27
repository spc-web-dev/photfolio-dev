import CourseContainter from "@/components/dashboard/course/course-container"
import { SearchParams } from "@/lib/type"




export function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { course_id } = searchParams
}


function page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="">
        <CourseContainter searchParams={searchParams}/>
    </div>
  )
}

export default page