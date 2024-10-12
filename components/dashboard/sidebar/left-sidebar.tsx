"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiHome } from "react-icons/bi";


function LeftSidebar() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(0);
  useEffect(() => {
    setTotalHeight(
      (prev) =>
        (headerRef.current?.offsetHeight || 0) +
        (footerRef.current?.offsetHeight || 0)
    );
  });

  return (
    <div className=" max-w-sm sm:min-w-[24rem] min-h-screen flex flex-col justify-between">
      <h1
        ref={headerRef}
        className="text-center text-2xl font-medium font-sans p-5"
      >
        Dashboard
      </h1>
      <Separator className="" />
      <ScrollArea className={`flex-1  max-h-[calc(100vh_-_${totalHeight}px)]`}>
        <div className="p-5">
         content
        </div>
      </ScrollArea>
      <div
        ref={footerRef}
        className="flex justify-between items-center bg-slate-50 p-5"
      >
        <Button asChild variant={'outline'} className="">
            <Link href={'/'} className=""><BiHome /></Link>
        </Button>
        <small>laressann2001@gmail.com</small>
        <span className="rounded-full w-10 h-10 bg-blue-200 grid place-items-center font-extralight font-sans">
          LR
        </span>
      </div>
    </div>
  );
}

export default LeftSidebar;
