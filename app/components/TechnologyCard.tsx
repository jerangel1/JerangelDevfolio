"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Card } from "../components/card";

interface TechnologyCardProps {
  name: string;
  description: string;
  logoSrc: string;
  link: string;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  description,
  logoSrc,
  link,
}) => (
  <Card>
    <Link href={link}>
      <article className="relative w-1xl h-full p-4 md:p-8 text-center items-center">
        <h2 className="text-xl font-bold text-zinc-100 mt-2 mb-5">{name}</h2>
        <div className="flex items-center justify-center gap-4">
          <h3 className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display justify-center text-center">
            <Image
              className="dark:drop-shadow-[0_0_1.9rem_#ffffff70]"
              src={logoSrc}
              width={50}
              height={50}
              alt={`${name} Logo`}
              layout="responsive"
            />
          </h3>
        </div>
        <div className="text-m text-zinc-100 mt-4 mb-10">{description}</div>
        <div className="absolute bottom-4 md:bottom-8">
          <p className=" hidden text-zinc-200 hover:text-zinc-50 lg:block">
            Read more <span aria-hidden="true">&rarr;</span>
          </p>
        </div>
      </article>
    </Link>
  </Card>
);
