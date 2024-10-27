import { coursesData } from "@/lib/data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseTabsContent from "./course-tabs-content";
import { SearchParams } from "@/lib/type";
import Link from "next/link";

function CourseContainter({ searchParams }: { searchParams: SearchParams }) {
  const { course_id } = searchParams;
  return (
    <Tabs defaultValue={(course_id as string) || "mikrotik_router"}>
      <TabsList>
        {coursesData.map((cs) => (
          <TabsTrigger value={cs.id} key={cs.id} asChild>
            <Link href={`/dashboard/course?course_id=${cs.id}`}>{cs.name}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
      {coursesData.map((val) => (
        <CourseTabsContent key={val.id} data={val} />
      ))}
    </Tabs>
  );
}

export default CourseContainter;
