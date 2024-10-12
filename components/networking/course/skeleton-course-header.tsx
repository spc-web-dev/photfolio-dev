import { Skeleton } from "@/components/ui/skeleton"


function SkeletonCourseHeader() {
  return (
    <div className="space-y-2">
        <Skeleton className="w-40" />
        <Skeleton className="w-[90%]" />
    </div>
  )
}

export default SkeletonCourseHeader