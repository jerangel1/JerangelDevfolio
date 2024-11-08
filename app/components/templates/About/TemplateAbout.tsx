"use client";

import { CustomButton } from "@/app/components/ui/customButton";
import { Background } from "@/app/components/templates/About/components/Background";
import { Header } from "@/app/components/templates/About/components/Header";
import { Biography } from "@/app/components/templates/About/components/Biography";
import { Certifications } from "@/app/components/templates/About/components/Certifications";
import { LottieAnimation } from "@/app/components/templates/About/components/LottieAnimations";
import NavLink from "@/app/components/NavLink";

export default function TemplateAbout() {
    return (
        <div className="relative h-screen w-full">
            <Background />

            <main className="relative z-10 text-white min-h-screen 
                     pt-20 pb-24 md:pt-24 md:pb-32">
                <CustomButton />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 
                     pt-16 md:pt-0">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 
                       max-w-7xl mx-auto">
                        <section className="w-full lg:w-2/3 space-y-4 md:space-y-6 
                            mb-6 md:mb-8">
                            <div className="rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 
                         backdrop-blur-md bg-black/30
                         border border-white/10 
                         shadow-lg shadow-blue-500/10
                         transform transition-all duration-500 
                         hover:bg-black/40">
                                <Header />
                                <Biography />
                            </div>
                        </section>

                        <aside className="w-full lg:w-1/3 
                             flex flex-col gap-4 md:gap-6
                         lg:sticky lg:top-24">
                            <div className="w-full backdrop-blur-md bg-black/30 
                         rounded-xl md:rounded-2xl p-4 md:p-6
                         border border-white/10 
                         shadow-lg shadow-blue-500/10
                         transform transition-all duration-300 
                         hover:bg-black/40">
                                <NavLink
                                    href="/pages/buildingPortfolio"
                                    title="How I Built My Portfolio"
                                    description="Journey through the creation process..."
                                />
                            </div>
                            <Certifications />
                        </aside>
                    </div>
                    <LottieAnimation />
                </div>
            </main>
        </div>
    );
}