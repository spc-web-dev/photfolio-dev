import LeftSidebar from "@/components/dashboard/sidebar/left-sidebar";


function Layout({ children }: {
    children: React.ReactNode;
}) {
  return (
    <div className="flex">
        <LeftSidebar />
        <div className="p-5 w-full bg-slate-50">{children}</div>
    </div>
  )
}

export default Layout