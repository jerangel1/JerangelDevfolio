import Link from "next/link";
import { FaSalesforce, FaFreeCodeCamp } from "react-icons/fa";
import { SiPlatzi, SiUpwork } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

const certifications = [
    { href: "https://www.salesforce.com/trailblazer/jrangel55", icon: <FaSalesforce />, name: "Salesforce" },
    { href: "https://www.freecodecamp.org/Jerangel1", icon: <FaFreeCodeCamp />, name: "freeCodeCamp" },
    { href: "https://platzi.com/p/jerangel1/", icon: <SiPlatzi />, name: "Platzi" },
    { href: "https://linkedin.com/in/jerangel1", icon: <SlSocialLinkedin />, name: "LinkedIn" },
    { href: "https://www.upwork.com/freelancers/~012ff7c3bb8ddff457?viewMode=1", icon: <SiUpwork />, name: "Upwork" }
];

export const Certifications = () => (
    <div className="w-full backdrop-blur-md bg-black/30 
                 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8
                 border border-white/10 
                 shadow-lg shadow-blue-500/10
                 transform transition-all duration-300 
                 hover:bg-black/40
                 mb-20 md:mb-24">
        <h2 className="text-2xl md:text-3xl font-bold 
                   mb-6 md:mb-8 text-center
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-white to-blue-500">
            Education & Certifications
        </h2>

        <p className="text-sm text-center text-gray-300 mb-6">
            Platforms where I continuously learn and grow
        </p>

        <div className="flex flex-col space-y-3 md:space-y-4">
            {certifications.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-3 rounded-lg
                   text-gray-200 hover:text-white hover:bg-white/5
                   transform hover:translate-x-2 transition-all duration-300 
                   hover:drop-shadow-[0_0_0.9rem_#ffffff70] group"
                >
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                        {item.icon}
                    </span>
                    <span className="text-lg font-medium">{item.name}</span>
                </Link>
            ))}
        </div>
    </div>
);