"use client";
import { Rocket } from "lucide-react";
import Link from "next/link";
import Particles from "@/app/components/particles";
import SkillsGalaxy from "@/app/components/templates/skills/components/Skillsgalaxy";

const Background = () => (
  <>
    <div className="fixed inset-0 bg-gradient-to-tr 
                    from-black via-black/95 
                    via-[#000022] via-[rgba(0,0,102,0.6)] 
                    to-[rgba(0,0,139,0.2)]" />

    <div className="fixed inset-0 -z-30
                    bg-gradient-to-r from-black 
                    via-black/90 via-[rgba(0,0,51,0.5)] 
                    to-[rgba(0,0,102,0.3)]
                    backdrop-blur-xl" />

    <Particles
      className="fixed inset-0 -z-10"
      quantity={1000}
    />
  </>
);

export default function TemplateSkills() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <Background />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-left space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-purple-400 to-blue-400">
              Dive into my Skills
            </h1>
            <Link 
              href="/projects" 
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300
                       transition-colors duration-300"
            >
              <span className="text-sm sm:text-base">Explore Projects</span>
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="flex-1 relative flex items-center justify-center">

          {/* Skills Galaxy */}
          <div className="w-full h-[calc(100vh-120px)]">
            <SkillsGalaxy />
          </div>
        </div>
      </div>
    </div>
  );
}