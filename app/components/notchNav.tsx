'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaHome, FaBriefcase, FaCode, FaFolder, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const navigation = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "/pages/about", icon: <FaUser /> },
    { name: "Work", href: "/pages/work", icon: <FaBriefcase /> },
    { name: "Skills", href: "/pages/skills", icon: <FaCode /> },
    { name: "Projects", href: "/pages/portfolio", icon: <FaFolder /> },
    { name: "Contact", href: "/pages/contact", icon: <FaEnvelope /> },
];

export default function NotchNav() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Versión desktop */}
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
                <div className="relative">
                    <div className="bg-gradient-to-r from-[#000022]/80 via-[#000066]/50 to-[#000022]/80 
                        backdrop-blur-md px-6 py-2 rounded-b-3xl border-b border-x border-[#0066ff]/10
                        shadow-lg shadow-blue-500/20">
                        <div className="flex items-center gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3 py-1 text-sm 
                                        ${pathname === item.href ? 'text-white' : 'text-gray-300'}
                                        hover:text-white transition-colors relative group`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span>{item.name}</span>
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 
                                        transition-all duration-300
                                        ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-6 
                        bg-gradient-to-r from-[#000022]/80 to-transparent 
                        rounded-l-full border-l border-[#0066ff]/10" />
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-6 
                        bg-gradient-to-l from-[#000022]/80 to-transparent 
                        rounded-r-full border-r border-[#0066ff]/10" />
                </div>
            </div>

            {/* Versión móvil */}
            <div className="md:hidden fixed top-0 left-0 w-full z-50">
                <div className="bg-gradient-to-r from-[#000022]/80 via-[#000066]/50 to-[#000022]/80 
                    backdrop-blur-md px-4 py-2 border-b border-[#0066ff]/10">
                    <div className="flex justify-between items-center">
                        <Link href="/" className={`text-sm ${pathname === '/' ? 'text-white' : 'text-gray-300'}`}>
                            <FaHome className="text-xl" />
                        </Link>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2"
                        >
                            <div className="w-6 h-0.5 bg-current mb-1"></div>
                            <div className="w-6 h-0.5 bg-current mb-1"></div>
                            <div className="w-6 h-0.5 bg-current"></div>
                        </button>
                    </div>
                </div>

                {/* Menú móvil desplegable */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-gradient-to-b from-[#000022]/95 to-[#000066]/95 
                        backdrop-blur-md border-b border-[#0066ff]/10">
                        {navigation.slice(1).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 
                                    ${pathname === item.href ? 'text-white bg-white/10' : 'text-gray-300'}
                                    hover:bg-white/5 transition-colors`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}