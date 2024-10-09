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

export const skillsData = [
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