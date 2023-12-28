'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import TimelineComponent from "../components/timelineComponent";
import { Navigation } from "../components/nav";
import { HeaderWork } from "../components/HeaderWork"
import Particles from '../components/particles';

export default function Works() {
  return (
    <div className="flex flex-col gap-8 mt-15">
      {<Navigation />}
      {<HeaderWork />}
      {/* line like <HR> */}
      <div className="w-full h-px bg-zinc-800 " />
      {/* line like <HR> */}
      <div className="flex flex-col items-center mt-8">
        <TimelineComponent />

      </div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
    </div>




  )
}