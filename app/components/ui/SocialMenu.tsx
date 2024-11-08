import { LuGithub } from "react-icons/lu";
import { FcDocument } from "react-icons/fc";
import { GiTimeTrap } from "react-icons/gi";
import Link from "next/link";
import { Icon } from "./icon";

interface SocialMenuProps {
  isOpen: boolean;
  onPortfolioClick: () => void;
}

export const SocialMenu = ({ isOpen, onPortfolioClick }: SocialMenuProps) => (
    <div className={`menu flex flex-col gap-3 transition-all duration-500 
                   absolute top-16 right-0
                   ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
      {[
        { href: "https://github.com/jerangel1", icon: <LuGithub />, label: "GitHub" },
        { href: "https://flowcv.com/resume/kt73uigelr", icon: <FcDocument />, label: "Resume" },
        { icon: <GiTimeTrap />, label: "Portfolio", onClick: onPortfolioClick }
      ].map((item, index) => (
        item.onClick ? (
          <button
            key={index}
            onClick={item.onClick}
            className="rounded-lg p-3 bg-black/30 backdrop-blur-md
                     border border-white/10 
                     shadow-[0_0_10px_rgba(59,130,246,0.2)]
                     transition-all duration-300 
                     hover:bg-white/10
                     hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                     hover:scale-105 group"
          >
            <Icon>{item.icon}</Icon>
          </button>
        ) : (
          <Link
            key={index}
            href={item.href!}
            className="rounded-lg p-3 bg-black/30 backdrop-blur-md
                     border border-white/10 
                     shadow-[0_0_10px_rgba(59,130,246,0.2)]
                     transition-all duration-300 
                     hover:bg-white/10
                     hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                     hover:scale-105 group"
          >
            <Icon>{item.icon}</Icon>
          </Link>
        )
      ))}
    </div>
  );