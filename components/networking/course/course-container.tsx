"use client";
import { useEffect, useState } from "react";
import CourseHeader from "./course-header";
import { networkingSkillsData } from "@/lib/data";
import dynamic from "next/dynamic";
import { SkeletonCourseCard } from "./skeleton-course-card";
import SkeletonCourseHeader from "./skeleton-course-header";

const CourseCardLoading = dynamic(() => import("./course-card"), {
  loading: () => (
    <>
      <SkeletonCourseCard />
    </>
  ),
});

function CourseContainer({ id }: { id: string }) {
  const [data, setData] = useState<(typeof networkingSkillsData)[number]>();

  useEffect(() => {
    networkingSkillsData.map((nt) => nt.id === Number(id) && setData(nt));
  }, [id]);

  return (
    <div className="2xl:w-[50%] lg:w-[65%] w-full space-y-10">
      <CourseHeader courseName={data?.name} description={data?.description} />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <CourseCardLoading
            key={index}
            src="./video.mp4"
            description="in this video, you will learn about the basic configuration of mikrotik router"
            type="video/mp4"
          />
        ))}
      </div>
    </div>
  );
}

export default CourseContainer;
