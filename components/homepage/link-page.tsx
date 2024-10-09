"use client";
import Link from "next/link";
import { Button } from "../ui/button";



function LinkPage() {
  return (
    <div className="space-x-2">
        <Button asChild variant={'secondary'}>
            <Link href={`/programing`} className="">Programing</Link>
        </Button>
        <Button asChild variant={'secondary'}>
            <Link href={`/networking`} className="">Networking</Link>
        </Button>
        <Button asChild variant={'secondary'} className="hover:bg-neutral-500 hover:text-white">
            <a href="../../app/fonts/CV/my-cv.pdf" download>Download my CV</a>
        </Button>
    </div>
  );
}

export default LinkPage;
