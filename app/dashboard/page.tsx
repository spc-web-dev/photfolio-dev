import DashboardContainer from "@/components/dashboard/dashboard-container"
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs"


function page() {
  return (
    <>
      <SignedIn>
        <>
          <DashboardContainer />
        </>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

export default page