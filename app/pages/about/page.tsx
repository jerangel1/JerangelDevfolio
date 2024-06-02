"use client";

import Particles from "../../components/particles";
import Link from "next/link";
import { Navigation } from "../../components/nav";
import NavLink from "../../components/NavLink";
import { FaSalesforce, FaFreeCodeCamp } from "react-icons/fa";
import { SiPlatzi, SiUpwork } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { CustomButton } from "../../components/buttonSocials";
// DarkModeContext.js
import { DarkModeProvider } from "../../DarkModeContext";

export default function About() {
  return (
    <>
    <DarkModeProvider>
      <Particles
        className="absolute inset-0 -z-10"
        quantity={1500}
      />
   <main className="dark text-white min-h-screen flex flex-col items-center justify-center p-8 lg:p-16 overflow-x-hidden bg-gradient-to-tl from-black via-zinc-300/20 to-black">
        <Navigation />
        <CustomButton />
        <div className="container mx-auto p-6 md:p-20 flex md:flex-row flex-col justify-center items-center text-center">
          <section className="profile w-full mx-auto flex flex-col mb-10 gap-10 justify-center text-center font-mono sm:mt-12 md:mt-0">
            <h1 className=" p-8 text-3xl dark:drop-shadow-[0_0_0.9rem_#ffffff70] sm:mb-6 ">
              Welcome to My Devfolio
            </h1>
            <p className="text-sm">
              In June 2020, armed with no coding skills, I embarked on an
              ambitious journey: building a website. Armed only with a Wix
              account and unwavering determination, I dove into the digital
              realm. The result? Success! Witnessing my ideas come to life
              ignited a passion, guiding me down the path of self-taught coding.
              Fast forward to today, and I proudly stand as a full-stack
              developer. Yet, my love for code never wanes. Im always learning,
              pushing boundaries, fingers dancing on the keyboard like a maestro.
              As they say, practice makes perfect. Beyond code, I balance family
              time, immersing myself in comics, and conquering consoles. A proud
              geek, I passionately discuss Batman and Star Wars nuances. When
              night falls, I transform into a nocturnal coder, whispering, Im
              Batman.
            </p>
            <p className=" text-m">
              <span className="dark:drop-shadow-[0_0_1.9rem_#ffffff70] mb-10">
                Welcome to my world 💻
              </span>
              , where development and fun collide!
            </p>
          </section>
          <section className="w-full mx-auto flex flex-col gap-8 mb-15 p-5 justify-center text-center">
            <NavLink
              href="/pages/buildingPortfolio"
              title="How I built my portfolio"
              description=""
            />
            <div className="Certifications pt-4 justify-center text-center">
              <h2 className="text-2xl font-semibold mb-5  justify-center text-center ">Certifications</h2>
              <div className="text-3xl flex  items-center justify-center gap-8">
                <Link
                  href="https://www.salesforce.com/trailblazer/jrangel55"
                  className="hover:scale-125 transition-transform duration-300 transform"
                >
                  <FaSalesforce />
                </Link>
                <Link
                  href="https://www.freecodecamp.org/Jerangel1"
                  className="hover:scale-125 transition-transform duration-300 transform"
                >
                  <FaFreeCodeCamp />
                </Link>
                <Link
                  href="https://platzi.com/p/jerangel1/"
                  className="hover:scale-125 transition-transform duration-300 transform"
                >
                  <SiPlatzi />
                </Link>
                <Link
                  href="https://linkedin.com/in/jerangel1"
                  className="hover:scale-125 transition-transform duration-300 transform"
                >
                  <SlSocialLinkedin />
                </Link>
                <Link
                  href="https://www.upwork.com/freelancers/~012ff7c3bb8ddff457?viewMode=1"
                  className="hover:scale-125 transition-transform duration-300 transform"
                >
                  <SiUpwork />
                </Link>
              </div>
            </div>
            <div className="mt-10 mx-auto">
              <iframe
                className="w-40 h-40 font-bold tracking-tight text-zinc-100 dark:drop-shadow-[0_0_0.4rem_#ffffff70]"
                src="https://lottie.host/embed/08959478-1e33-4e25-a721-9c887da852c6/ovTI83B1LJ.json"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
      </DarkModeProvider>
    </>
  );
}