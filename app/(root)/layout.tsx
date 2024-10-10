import Navbar from "@/components/header/navbar"



function Layout({ children } : {
    children: React.ReactNode
}) {
  return (
    <div>
      <div className="w-full flex justify-center sticky top-0 bg-[rgba(238,230,230,0.2)] rounded-lg z-[100] backdrop-blur-sm">
        <Navbar />
      </div>
        <>{children}</>
    </div>
  )
}

export default Layout