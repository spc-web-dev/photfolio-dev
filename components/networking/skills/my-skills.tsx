import Title from "@/components/shared/title"
import { Button } from "@/components/ui/button"
import { networkingSkillsData } from "@/lib/data"


function MySkills() {
  return (
    <div className="flex justify-center flex-col gap-5">
        <Title title="Skills" />
        <div className="flex gap-2 flex-wrap items-center justify-center">
            {networkingSkillsData.map(skill=>(
                <Button key={skill.id} variant={'secondary'}>{skill.name}</Button>
            ))}
        </div>
    </div>
  )
}

export default MySkills