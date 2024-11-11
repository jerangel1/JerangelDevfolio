"use client";
import { useState } from "react";
import Background from "./components/background";
import ContactHeader from "./components/contactHeader";
import SocialLinks from "./components/socialLinks";
import ContactForm from "./components/ContactForm";
import { socials } from "./components/socials";

export default function ContactTemplate() {
  const [selectedSocial, setSelectedSocial] = useState<number | null>(null);

  return (
    <div className="">
      <div className="min-h-screen w-full overflow-hidden">
        <Background />

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow container mx-auto px-4 py-16">
            <ContactHeader />

            <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
              <SocialLinks
                socials={socials}
                selectedSocial={selectedSocial}
                setSelectedSocial={setSelectedSocial}
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}