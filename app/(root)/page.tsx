import AboutMe from "@/components/homepage/about-me";
import MyProfile from "@/components/homepage/my-profile";


export default function Home() {
  return (
    <div className="flex gap-2 h-screen lg:flex-row flex-col md:p-5 sm:p-10 p-5">
      <MyProfile />
      <AboutMe />
    </div>
  );
}
