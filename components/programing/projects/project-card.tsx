import Image from "next/image";
import Img from "@/app/fonts/images/image-p1.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProjectCard({ value }: { value: number }) {
  return (
    <div
      className={`w-full bg-slate-100 shadow-sm rounded-md p-5 flex justify-center md:flex-nowrap flex-wrap gap-5 ${
        value % 2 === 1 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="relative min-w-64 w-64 h-52 group">
        <Image
          src={Img}
          alt="project"
          priority
          quality={95}
          className=" object-cover absolute w-full h-full rounded-md transition-all duration-300 ease-in-out group-hover:scale-110"
          width={250}
          height={200}
        />
      </div>
      <div className="flex justify-between flex-col gap-5 w-full md:min-w-52">
        <div className="space-y-2">
          <h3 className="text-lg font-thin">Photfolio</h3>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sint,
              molestias animi quo in inventore eum est nemo quas explicabo?
              Ullam quis, molestiae dignissimos nulla ex distinctio quas beatae
              suscipit.
            </p>
          </div>
        </div>
        <div className={`w-full flex items-center gap-2 ${value % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
          <Button asChild variant={"outline"}>
            <Link href={""}>View</Link>
          </Button>
          <Button asChild>
            <Link href={""}>Github Rep</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
