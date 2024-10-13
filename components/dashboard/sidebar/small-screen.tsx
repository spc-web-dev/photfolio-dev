import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeftSidebarList from "./left-sidebar-list";
import { BiHome } from "react-icons/bi";
import Link from "next/link";

function SmallScreen() {
  return (
    <Sheet key={'left'}>
      <SheetTrigger asChild>
        <Button asChild className="z-[49]" variant={'outline'}>
          <span>
            <Menu />
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="p-0 flex flex-col justify-between">
        <SheetHeader className="p-5">
          <SheetTitle>Dashboard</SheetTitle>
        </SheetHeader>
        <div className="flex-1 px-5">
          <LeftSidebarList />
        </div>
        <SheetFooter>
            <div className="bg-slate-100 w-full flex justify-between items-center p-2">
            <Button asChild variant={"outline"} >
                <Link href={"/"} className="">
                <BiHome />
                </Link>
            </Button>
            <small>laressann2001@gmail.com</small>
            <span className="rounded-full w-10 h-10 bg-blue-200 grid place-items-center font-extralight font-sans">
                LR
            </span>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SmallScreen;
