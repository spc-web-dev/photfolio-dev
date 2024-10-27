import LeftSidebar from "@/components/dashboard/sidebar/left-sidebar";
import SmallScreen from "@/components/dashboard/sidebar/small-screen";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="lg:inline-block hidden sticky top-0 lg:max-h-screen">
        <LeftSidebar />
      </div>
      <div className="lg:hidden inline-block fixed sm:top-5 sm:right-5 top-2 right-2">
        <SmallScreen />
      </div>
      <div className="p-5 w-full bg-slate-50 min-h-screen lg:pt-5 pt-16">{children}</div>
    </div>
  );
}

export default Layout;
