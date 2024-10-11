import Navbar from "@/components/header/navbar"
import { SignedIn, UserButton } from "@clerk/nextjs"



function Layout({ children } : {
    children: React.ReactNode
}) {
  return (
    <div>
      <div className="w-full flex justify-center sticky top-0 bg-[rgba(238,230,230,0.2)] rounded-lg z-[100] backdrop-blur-sm items-center">
        <Navbar />
          <SignedIn>
            <div className=" absolute sm:right-5 right-2">
              <UserButton />
            </div>
          </SignedIn>
      </div>
        <>{children}</>
    </div>
  )
}

export default Layout