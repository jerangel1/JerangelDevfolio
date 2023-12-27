"use client";
import { Mail, Linkedin } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <BsTwitterX size={78} />,
    href: "https://twitter.com/jerangel1",
    label: "Frontend web Developer",
    handle: "2020-2022",
    index:0,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto impedit ad eos ut blanditiis maiores quasi odio voluptatibus debitis molestias, rem quod, esse perferendis qui architecto velit reiciendis doloribus.",
  },
  {
    icon: <Mail size={78} />,
    href: "mailto:Jerangel1691@gmail.com",
    label: "Ceo Pravenca",
    handle: "2018-2023",
    index:1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto impedit ad eos ut blanditiis maiores quasi odio voluptatibus debitis molestias, rem quod, esse perferendis qui architecto velit reiciendis doloribus.",
  },
  {
    icon: <Linkedin size={78} />,
    href: "",
    label: "Sales Director",
    handle: "2013-2017",
    index:0,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto impedit ad eos ut blanditiis maiores quasi odio voluptatibus debitis molestias, rem quod, esse perferendis qui architecto velit reiciendis doloribus.",
  },
];

export default function Works() {
  return (
    <div className="relative pb-16">
      {<Navigation />}
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <div className="flex items-center justify-center">
            <iframe src="https://lottie.host/embed/3945cf96-0368-4bf5-b18e-fde844ca8201/kwqjXGwoDk.json"></iframe>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            From Travel Guru ✈ to Tech Ninja
          </h2>
          <p className="mt-4 text-xl text-zinc-400 mb-5">
            In this section, I showcase my professional journey, spanning three distinct landscapes: tourism, logistics, and web development.
          </p>
        </div>
      </div>
      {/* line like <HR> */}
      <div className="w-full h-px bg-zinc-800 " />
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 mt-10">

      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 mt-10">

<div className="flex flex-col gap-8 mt-15">
  {socials.map((s, index) => (
    <div key={s.handle} className={`flex items-center w-2xl mb-4 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
      <Card key={s.handle}>
        <Link
          href={s.href}
          target="_blank"
          className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
        >
          {s.icon}
        </Link>
        <p className="text-center mt-4">
          {s.label}
        </p>
        <p> {s.description}</p>
      </Card>
    </div>
  ))}
</div>
</div>
</div></div>)}