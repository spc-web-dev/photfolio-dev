import Title from "@/components/shared/title";
import ProjectCard from "./project-card";

function MyProjects() {
  return (
    <div className="flex justify-center flex-col gap-5">
      <Title title="projects" />
      <div className="flex flex-col gap-5">
        {Array.from({ length : 6 }).map((_,index)=>(
            <ProjectCard key={index} value={index+1}/>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
