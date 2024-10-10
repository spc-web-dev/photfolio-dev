import { Button } from "@/components/ui/button"
import { programingSkillsData } from "@/lib/data"
import Title from "../../shared/title"


function MySkills() {
  return (
    <div className="flex justify-center flex-col gap-5">
       <Title title="Skills"/>
        <div className="flex gap-2 flex-wrap items-center justify-center">
            {programingSkillsData.map(skill=>(
                <Button key={skill.id} variant={'secondary'}>{skill.name}</Button>
            ))}
        </div>
    </div>
  )
}

export default MySkills