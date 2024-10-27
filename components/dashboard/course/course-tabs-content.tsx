import { TabsContent } from "@/components/ui/tabs"
import { coursesData, videosData } from "@/lib/data"
import CourseTable from "./course-table"

type Props = (typeof coursesData)[number]

function CourseTabsContent({ data }: { data: Props }) {
  const videos = videosData.filter(vd=>vd.course_id === data.id)

  return (
    <TabsContent value={data.id}>
        <CourseTable data={videos}/>
    </TabsContent>
  )
}

export default CourseTabsContent