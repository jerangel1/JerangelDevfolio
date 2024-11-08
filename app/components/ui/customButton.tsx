import { useState } from "react";
import { FloatingButton } from "./FloatingButton";
import { SocialMenu } from "./SocialMenu";
import { PortfolioModal } from "./PortfolioModal";

export const CustomButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed -top-16 -right-16 md:-top-20 md:-right-20 z-50">
      <div className="relative">
        <div className={`moon-button transition-all duration-700`}>
          <FloatingButton 
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div className={`absolute right-16 top-24 md:right-20 md:top-28
                      transition-all duration-500 ease-in-out
                      flex flex-col gap-4
                      ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
          <SocialMenu 
            isOpen={isOpen}
            onPortfolioClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <PortfolioModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};