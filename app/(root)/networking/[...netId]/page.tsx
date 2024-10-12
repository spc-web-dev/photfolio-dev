
import CourseContainer from "@/components/networking/course/course-container";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";


type Props = {
  netId: string;
};

async function page({ params }: { params: Props }) {
  return (
    <>
      <SignedIn>
        <div className="flex justify-center p-5">
          <CourseContainer id={params.netId}/>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default page;
