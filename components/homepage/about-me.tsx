import LinkPage from "./link-page"
import SocialMedia from "./social-media"


function AboutMe() {
  return (
    <div className="flex-1 h-full grid place-items-center">
      <div className="md:w-[60%] w-full space-y-2">
        <h1 className="text-3xl">Hello, My name is RESSANN.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quo eius quam nobis tenetur sequi eligendi in nostrum deleniti, provident quia culpa commodi tempore dolores doloribus quisquam. Eaque laborum iusto sed impedit repellat! Vero maiores eum, quasi, dolorum ut sapiente odit facilis nostrum nobis, fugit iure earum distinctio labore quos?</p>
        <LinkPage />
        <div className="py-2">
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default AboutMe