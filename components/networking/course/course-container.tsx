"use client";
import { useEffect, useState } from "react";
import CourseHeader from "./course-header";
import { networkingSkillsData, videosData } from "@/lib/data";
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
  const [videos,setVideos] = useState<(typeof videosData)[number][]>()

  useEffect(() => {
    networkingSkillsData.map((nt) => nt.id === Number(id) && setData(nt));
    let vdos = videosData.filter(vdo=>vdo.type_id === Number(id))
    vdos && setVideos(vdos)
  }, [id]);

  return (
    <div className="2xl:w-[50%] lg:w-[65%] w-full space-y-10">
      <CourseHeader courseName={data?.name} description={data?.description} />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {videos && videos.map((vdo, index) => (
          <CourseCardLoading
            key={index}
            src={vdo.url}
            description={vdo.description}
            type="video/mp4"
          />
        ))}
      </div>
    </div>
  );
}

export default CourseContainer;
