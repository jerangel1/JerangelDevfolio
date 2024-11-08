import { FC, PropsWithChildren } from "react";
import Image from "next/image";

interface IconProps extends PropsWithChildren {
  showMoon?: boolean;
  isOpen?: boolean;
}

export const Icon: FC<IconProps> = ({ children, showMoon, isOpen }) => (
  <span className="relative flex items-center justify-center group">
    {showMoon ? (
      <div className="relative">
        {/* Fog effect behind moon */}
        <div className={`absolute inset-0 
                     blur-xl bg-gradient-to-r 
                     from-blue-900/30 via-purple-900/30 
                     to-pink-900/30
                     transition-all duration-700
                     ${isOpen ? 'scale-150 opacity-80' : 'scale-100 opacity-50'}
                     animate-pulse-slow rounded-full`} />
        
        {/* Moon image */}
        <Image
          src="/moon3d.webp" 
          width={200}
          height={200}
          alt="Moon Button"
          className={`relative z-10 rounded-full 
                   transition-all duration-700
                   group-hover:scale-110
                   ${isOpen ? 'brightness-125' : 'brightness-100'}
                   drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]`}
        />
        
        {/* Additional glow effect */}
        <div className={`absolute inset-0 z-20
                     bg-gradient-to-r from-transparent 
                     via-white/10 to-transparent
                     rounded-full blur-md
                     transition-all duration-700
                     ${isOpen ? 'opacity-90 scale-150' : 'opacity-50 scale-100'}
                     group-hover:opacity-75`} />
      </div>
    ) : (
      <span className="material-symbols-outlined text-4xl md:text-5xl 
                     transition-transform group-hover:scale-110">
        {children}
      </span>
    )}
  </span>
);