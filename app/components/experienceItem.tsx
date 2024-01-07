import React from "react";
import Link from "next/link";

export interface ExperienceItemProps {
  experience: {
    id: number;
    position: string;
    date: string;
    url: string;
    company: string;
    content: string;
    category: {
      tag: string;
    };
    link: {
      url: string;
      text: string;
    };
  };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <ol className="mx-auto relative border-s border-gray-200 dark:border-gray-700">
      <li className="rounded-lg border border-transparent transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-10 ms-4 hover:scale-105 p-5 w-full">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {experience.date}
        </time>
        <div className="flex justify-end">
          <span
            className={`px-3 py-1 rounded-full ${
              experience.category.tag === "Available"
                ? "bg-green-500" // Color específico para Available
                : experience.category.tag === "Frontend"
                ? "bg-purple-400 text-white" // Color específico para frontend
                : experience.category.tag === "Sales"
                ? "bg-yellow-600 text-white" // Color específico para sales
                : experience.category.tag === "Full Stack"
                ? "bg-blue-600 text-white" // Color específico para Full Stack
                : experience.category.tag === "Strategy"
                ? "bg-gray-500 text-white" // Color específico para Strategy
                : `text-white`
            } text-sm font-medium hover:bg-opacity-70 cursor-pointer`}
          >
            {experience.category.tag}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {experience.position}
        </h3>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {experience.company}
        </h4>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {experience.content}
        </p>
        <div className="flex justify-end">
          <Link
            href={experience.link.url}
            className="inline-flex  px-4 py-2 text-sm font-medium text-gray-900 bg-white border-none rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M1 5h12m0 0L9 1m4 4L9 9"></path>
            </svg>
          </Link>
        </div>
      </li>
    </ol>
  );
};

export default ExperienceItem;
