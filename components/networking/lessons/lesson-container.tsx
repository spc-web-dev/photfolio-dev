import Title from "@/components/shared/title"
import VideoCard from "./video-card"
import { networkingSkillsData } from "@/lib/data"


function LessonContainer() {
  return (
    <div className="flex justify-center flex-col gap-5">
        <Title title="Lessons" />
        <div className="flex flex-col gap-5 justify-center">
            {networkingSkillsData.map(sk=>(
                <VideoCard {...sk} key={sk.id}/>
            ))}
        </div>
    </div>
  )
}

export default LessonContainer