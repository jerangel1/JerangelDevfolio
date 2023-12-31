"use client";
import {Mail, Linkedin } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";

const socials = [
	{
		icon: <BsTwitterX  size={38} />,
		href: "https://twitter.com/jerangel1",
		label: "Twitter",
		handle: "@Jerangel1",
	},
	{
		icon: <Mail size={38} />,
		href: "mailto:Jerangel1691@gmail.com",
		label: "Email",
		handle: "Jerangel1691@gmail.com",
	},
	{
		icon: <Linkedin size={38} />,
		href: "https://www.linkedin.com/in/jerangel1/",
		label: "Linkedin",
		handle: "Jerangel1",
	},
];

export default function contact() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-400/0 via-zinc-1500 to-zinc-1100/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-19">
					{socials.map((s) => (
						<Card key={s.handle}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-40 h-25 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-white-300 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
