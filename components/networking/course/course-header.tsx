
type Props = {
    courseName: string  | undefined;
    description: string | undefined;
}

function CourseHeader({ courseName, description }: Props) {
  return (
    <div className="space-y-2">
        <h1 className="text-xl capitalize">{courseName}</h1>
        <p>{description}</p>
    </div>
  )
}

export default CourseHeader