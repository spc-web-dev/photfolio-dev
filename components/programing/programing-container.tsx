import MyProjects from "./projects/my-projects"
import MySkills from "./skills/my-skills"


function ProgramingContainer() {

  return (
    <div className="2xl:w-[50%] lg:w-[65%] w-full space-y-10">
        <MySkills />
        <MyProjects />
    </div>
  )
}

export default ProgramingContainer