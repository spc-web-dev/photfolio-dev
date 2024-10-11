import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

type Props = {
    src: string;
    description: string;
    type?: string ;
}

function CourseCard({src, description, type }: Props) {
  return (
    <Card className=" sm:min-w-40">
      <CardContent className="mt-5">
        <video controls className="w-full rounded-sm">
          <source src={src} type={type || "video/mp4"} />
          <source src={"./video.mp4"} type={type || "video/mp4"} />
        </video>
      </CardContent>
      <CardFooter>
        <CardDescription>{description}</CardDescription>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
