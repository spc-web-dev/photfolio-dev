import React from "react";
import { BiLogoGmail, BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

export const socialMediaData = [
  {
    id: Math.random(),
    icon: React.createElement(BiLogoFacebook),
    name: "facebook",
    link: "example.link",
  },
  {
    id: Math.random(),
    icon: React.createElement(BiLogoTelegram),
    name: "telegram",
    link: "example.link",
  },
  {
    id: Math.random(),
    icon: React.createElement(BiLogoGmail),
    name: "gmail",
    link: "example.link",
  },
  {
    id: Math.random(),
    icon: React.createElement(FaXTwitter),
    name: "X",
    link: "example.link",
  },
  {
    id: Math.random(),
    icon: React.createElement(FaGithub),
    name: "github",
    link: "example.link",
  },
] as const;

export const programingSkillsData = [
  {
    id: Math.random(),
    name: "html",
  },
  {
    id: Math.random(),
    name: "css",
  },
  {
    id: Math.random(),
    name: "javascript",
  },
  {
    id: Math.random(),
    name: "typescript",
  },
  {
    id: Math.random(),
    name: "tailwindcss",
  },
  {
    id: Math.random(),
    name: "react.js",
  },
  {
    id: Math.random(),
    name: "next.js",
  },
  {
    id: Math.random(),
    name: "drizzle orm",
  },
  {
    id: Math.random(),
    name: "node.js",
  },
  {
    id: Math.random(),
    name: "express.js",
  },
  {
    id: Math.random(),
    name: "mysql",
  },
  {
    id: Math.random(),
    name: "mongodb",
  },
  {
    id: Math.random(),
    name: "postgresql",
  },
] as const;

export const networkingSkillsData = [
  {
    id: 1,
    course_id: 'mikrotik_router',
    video: "/videos/video.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.",
    name: "mikrotik router",
  },
  {
    id: 2,
    course_id: 'huawei_switch',
    video: "/videos/video.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.",
    name: "huawei management switch",
  },
  {
    id: 3,
    course_id: 'tp-link_router',
    video: "/videos/video.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.",
    name: "tp-link router",
  },
  {
    id: 4,
    course_id: 'unifi_ap',
    video: "/videos/video.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.",
    name: "access point unifi",
  },
  {
    id: 5,
    course_id: 'ruijie_ap',
    video: "/videos/video.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.",
    name: "ruijie access point",
  },
];

export const videosData = [
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'huawei_switch',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'huawei_switch',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'huawei_switch',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'huawei_switch',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'huawei_switch',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'huawei_switch',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'ruijie_ap',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'ruijie_ap',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'ruijie_ap',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'ruijie_ap',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'ruijie_ap',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'ruijie_ap',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'mikrotik_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'mikrotik_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'mikrotik_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'mikrotik_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'mikrotik_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'mikrotik_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'mikrotik_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'mikrotik_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'unifi_ap',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'unifi_ap',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'unifi_ap',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'tp-link_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
  {
    thumbnail:'/images/image-p1.jpg',
    id: Math.random(),
    title:'Configure basic mikrotik router',
    description:
      "in this video, you will learn about the basic configuration of mikrotik router",
    course_id: 'tp-link_router',
    url: "/videos/video.mp4",
    date: new Date(),
  },
] 

export const rolesData = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Teacher",
    value: "teacher",
  },
  {
    label: "Student",
    value: "student",
  },
  {
    label: "Moderator",
    value: "moderator",
  },
] as const;

export const coursesData = [
    {
        id: 'mikrotik_router',
        name: 'Mikrotik Router',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aliquam!',
        thambnail: '/images/mikrotik.png',
    },
    {
        id: 'huawei_switch',
        name: 'Huawei Switch',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aliquam!',
        thambnail: '/images/huawei-switch.png',
    },
    {
        id: 'ruijie_ap',
        name: 'Ruijie Access Point',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aliquam!',
        thambnail: '/images/ruijie.jpg',
    },
] as const;
