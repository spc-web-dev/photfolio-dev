import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs"


function page() {
  return (
    <>
      <SignedIn>
        <div> dashboard page</div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

export default page