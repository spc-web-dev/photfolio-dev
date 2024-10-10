import LessonContainer from "./lessons/lesson-container";
import MySkills from "./skills/my-skills";

const NetworkingContainer = () => {
  return (
    <div className="2xl:w-[50%] lg:w-[65%] w-full space-y-10">
      <MySkills />
      <LessonContainer />
    </div>
  );
};

export default NetworkingContainer;
