
"use client";
import { Timeline } from "keep-react";
import { CalendarBlank } from "phosphor-react";
import { ReactDOM } from "react";
import { CalendarCheck } from 'lucide-react';


const TimelineItem = ({ title,company, date, content,url }) => (
  <Timeline.Item className="text-center align-items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-10">
    <div className="flex items-center justify-center">
      <Timeline.Point className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none mb-4">
      <CalendarCheck />
      </Timeline.Point>
    </div>
    <Timeline.Content>
      <a className="hover:border-gray-300" href={url}>
      <Timeline.Title>
        <h2 className={`text-center mb-3 text-2xl font-semibold inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none mb-4`}>
          {title}
        </h2>
      </Timeline.Title>
      </a>
      <Timeline.Body>
        {company}
      </Timeline.Body>
      <Timeline.Time>{date}</Timeline.Time>
      <Timeline.Body>
        <p className={`text-center max-w-[40ch]m-0 text-sm opacity-50 mt-5`}>
          {content}
        </p>
      </Timeline.Body>
    </Timeline.Content>
  </Timeline.Item>
)

const ResumeTimeline = () => (
  <div className="container w-full lg:w-1/2 p-10 relative justify-content-center">
    <div className="justify-content-center">
      <Timeline horizontal={true}>
        <TimelineItem
          title="Sales and marketing manager"
          date="2013-2017"
          url = "https://www.instagram.com/turismundovalencia/?hl=es"
          company={newFunction()}
          content="Entusiastic professional with more than 5 years of experience in the tourism sector, with a proven record of success in achieving sales goals, developing marketing strategies, and improving customer satisfaction."
        />
        <TimelineItem
          title="Director"
          date="2018-2023"
          company="Pravenca C.A"
          url = "https://pravenca1.wixsite.com/website-1"
          content="Executive Director with a proven track record of success in growing and transforming businesses. Led the development and implementation of strategic plans that resulted in a 25% annual increase in sales. Proactively managed the company's performance, taking corrective action to ensure efficiency and quality. Represented the company to clients, suppliers, and partners, building strong relationships."
        />
        <TimelineItem
          title="Frontend Developer"
          date="2020-2022"
          url = "https://jerangel1.github.io/Portfolio/"
          company="Freelance"
          content="Skilled Web Developer with a proven track record of success in creating high-quality, user-friendly websites and web applications."
        />
      </Timeline>
    </div>
    <div className="flex justify-center items-center"> 
      <iframe src="https://lottie.host/embed/f9e047cf-d7a4-41d3-b2bb-c17c60251be8/k8yHVOqLaC.json"></iframe>
    </div>
  </div>
);
export default ResumeTimeline;
function newFunction(): any {
  return "Travel Agency Turismundo CA";
}

