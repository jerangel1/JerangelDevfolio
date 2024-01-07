"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Accordion = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (sectionId: number) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === sectionId ? null : sectionId
    );
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {/* Section 1 */}
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border border-b border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3 ${
            openSection === 1 ? "active" : ""
          }`}
          onClick={() => toggleSection(1)}
          aria-expanded={openSection === 1}
          aria-controls="accordion-collapse-body-1"
        >
          <span className="flex items-center">
            How I Built My Portfolio?
            <Image
              src="/icons8-build-64.png"
              alt="build Logo"
              className="ml-2 transition-transform transform motion-reduce:transform-none"
              width={34}
              height={24}
              priority
            />
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform transform ${
              openSection === 1 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`p-5 border border-b border-gray-200 dark:border-gray-700 ${
          openSection === 1 ? "block" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        {/* Content for Section 1 */}
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          My portfolio was built with{" "}
          <Link href="https://nextjs.org">Next.js</Link> and{" "}
          <Link href="https://nextra.vercel.app">Nextra</Link>
        </p>
        <Link
          href="/pages/buildingPortfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="dark:text-gray-400 inline-block w-auto group p-1 dark:hover:bg-gray-700 hover:shadow-md hover:rounded-md transition-all">
            More info {""}
            <span className="inline-block transition-transform group-hover:translate-x-4 hover:scale-110">
              -&gt;
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};
