"use client";
import { Navigation } from "../components/nav";
import { HeaderWork } from "../components/HeaderWork"
import Particles from '../components/particles';
import React from 'react';
import ExperienceItem from '../components/experienceItem';

const experiences = [
  {
    id: 1,
    position: "Sales and marketing manager",
    date: "2013-2017",
    url: "https://www.instagram.com/turismundovalencia/?hl=es",
    company: "Travel Agency Turismundo C.A",
    content: "Entusiastic professional with more than 5 years of experience in the tourism sector with a proven record of success in achieving sales goals, developing marketing strategies, and improving customer satisfaction.",
  },
  {
    id: 2,
    position: "Director",
    date: "2018-2023",
    company: "Pravenca C.A",
    url: "https://pravenca1.wixsite.com/website-1",
    content: "Executive Director with a proven track record of success in growing and transforming businesses. Led the development and implementation of strategic plans that resulted in a 25% annual increase in sales. Proactively managed the company's performance, taking corrective action to ensure efficiency and quality. Represented the company to clients, suppliers, and partners, building strong relationships.",
  },
  {
    id: 3,
    position: "Frontend Developer",
    date: "2020-2022",
    url: "https://jerangel1.github.io/Portfolio/",
    company: "Freelance",
    content: "Skilled Web Developer with a proven track record of success in creating high-quality, user-friendly websites and web applications.",
  },
  {
    id: 4,
    position: "Full Stack Developer",
    date: "2023",
    url: "https://koa.agency/",
    company: "Koa Agency",
    content: "I worked on the development of two websites for an integrative education and psychotherapeutic accompaniment course on the essence of motherhood. I was responsible for editing the pages URLs to improve SEO, restructuring the content according to Adobe XD mockups, and delivering the project on time",
  },
  {
    id: 5,
    position: "Available",
    date: "2024",
    url: "https://github.com/jerangel1",
    company: "Ready for the next Project!",
    content: "Let's talk about your idea and make it happen"

  }
];

export default function Works() {
  return (
    <div className="flex flex-col gap-8 mt-15">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
      {<Navigation />}
      {<HeaderWork />}
      {/* line like <HR> */}
      <div className="w-full h-px bg-zinc-800 " />
      {/* line like <HR> */}
      <div className="flex flex-col items-center mt-35">
        {/* <TimelineComponent /> */}
        <div className="Timeline-Works w-full md:w-1/3 mx-auto">
          <ol className="relative border-s border-gray-200 ml-3">
            {
              experiences.map((experience) => (
                <li className="mb-8 md:mb-14 ms-0 md:ms-8" key={experience.id}>
                  <ExperienceItem key={experience.id} experience={experience} />
                </li>
              ))
            }
          </ol>
        </div>
        <div className="flex justify-center items-center mb-10">
          <iframe src="https://lottie.host/embed/f9e047cf-d7a4-41d3-b2bb-c17c60251be8/k8yHVOqLaC.json"></iframe>
        </div>
      </div>
    </div>
    )
}