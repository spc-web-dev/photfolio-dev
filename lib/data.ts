import React from "react";
import { BiLogoGmail, BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter, FaGithub  } from "react-icons/fa6";


export const socialMediaData = [
    { 
        id: Math.random(),
        icon: React.createElement(BiLogoFacebook),
        name: 'facebook',
        link: 'example.link',
    },
    { 
        id: Math.random(),
        icon: React.createElement(BiLogoTelegram),
        name: 'telegram',
        link: 'example.link',
    },
    { 
        id: Math.random(),
        icon: React.createElement(BiLogoGmail),
        name: 'gmail',
        link: 'example.link',
    },
    { 
        id: Math.random(),
        icon: React.createElement(FaXTwitter),
        name: 'X',
        link: 'example.link',
    },
    { 
        id: Math.random(),
        icon: React.createElement(FaGithub),
        name: 'github',
        link: 'example.link',
    },
] as const;

export const programingSkillsData = [
    {
        id: Math.random(),
        name: 'html',
    },
    {
        id: Math.random(),
        name: 'css',
    },
    {
        id: Math.random(),
        name: 'javascript',
    },
    {
        id: Math.random(),
        name: 'typescript',
    },
    {
        id: Math.random(),
        name: 'tailwindcss',
    },
    {
        id: Math.random(),
        name: 'react.js',
    },
    {
        id: Math.random(),
        name: 'next.js',
    },
    {
        id: Math.random(),
        name: 'drizzle orm',
    },
    {
        id: Math.random(),
        name: 'node.js',
    },
    {
        id: Math.random(),
        name: 'express.js',
    },
    {
        id: Math.random(),
        name: 'mysql',
    },
    {
        id: Math.random(),
        name: 'mongodb',
    },
    {
        id: Math.random(),
        name: 'postgresql',
    },
] as const;

export const networkingSkillsData = [
    {
        id: 1,
        video: 'video.mp4',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.',
        name: 'mikrotik router',
    },
    {
        id: 2,
        video: 'video.mp4',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.',
        name: 'huawei management switch',
    },
    {
        id: 3,
        video: 'video.mp4',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.',
        name: 'tp-link router',
    },
    {
        id: 4,
        video: 'video.mp4',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.',
        name: 'access point unifi',
    },
    {
        id: 5,
        video: 'video.mp4',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis fugiat quas aperiam voluptatibus sed dicta.',
        name: 'access point ruijie',
    },
]

export const videosData = [
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 1,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 2,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 1,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 3,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 5,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 4,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 2,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 4,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 1,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 2,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 1,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 3,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 5,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 4,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 2,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 4,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 1,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 2,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 1,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 3,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 5,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 4,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 2,
        url: './video.mp4',
        date: new Date(),
    },
    {
        id:Math.random(),
        description:'in this video, you will learn about the basic configuration of mikrotik router',
        type_id: 4,
        url: './video.mp4',
        date: new Date(),
    },
] as const;



