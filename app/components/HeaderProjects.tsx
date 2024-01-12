"use client";
import Particles from '../components/particles';

export const HeaderProjects = () => {
  return (
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-xl text-zinc-400">
          Step into my geeky realm and behold some of my proudest creations! 🕹️ These projects are a fusion of my professional spellcasting and personal experiments in the realm of bits and bytes.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
  <div className="flex justify-center items-center mb-10">
    <iframe
      src="https://lottie.host/embed/10666b38-985d-4e85-9f22-6beab01f7384/DuwmB5XfgG.json"
      className="mx-auto"
      title="Lottie Animation"
      width="300"
      height="300"
    ></iframe>
  </div>
</div>
<Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
  </div>
  )
}

export default HeaderProjects;
