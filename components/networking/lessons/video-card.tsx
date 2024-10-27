import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { networkingSkillsData } from "@/lib/data"


type Props = (typeof networkingSkillsData)[number]

function VideoCard({ id, video, name, description }: Props) {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="uppercase">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <video controls className="w-full rounded-sm">
                <source src={video} type="video/mp4" />
                <source src={'/videos/video.mp4'} type="video/mp4" />
            </video>
        </CardContent>
        <CardFooter className="space-x-2">
            <Button variant={'secondary'}>Check out my youtube</Button>
            <Button>Get my course</Button>
        </CardFooter>
    </Card>
  )
}

export default VideoCard