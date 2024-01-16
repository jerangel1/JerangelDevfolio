import React from "react";
import Image from "next/image";
import "../certifications/styles.css";
import { Navigation } from "../../components/nav";
import Particles from "../../components/particles";

export default function Certifications() {
  return (
    <div className="dark flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl  p-8">
        Certifications
      </h1>
      <p className=" text-center flex-col mt-4 text-xl text-zinc-400 mb-22">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nisi veniam
        error natus, quam aut odio tenetur illum provident! Cupiditate aut
        placeat earum! Esse, iure ipsam! Error saepe nemo praesentium!
      </p>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <Image
              src="/certifications/ResponsiveWebDesign.png"
              alt="Preview Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center top"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
