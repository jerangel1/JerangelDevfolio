import { Icon } from "./icon";

interface FloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const FloatingButton = ({ isOpen, onClick }: FloatingButtonProps) => (
  <button
    onClick={onClick}
    className={`rounded-full overflow-visible
             transition-all duration-700 ease-in-out
             hover:scale-105 transform
             ${isOpen ? 'translate-x-[-3rem] translate-y-[3rem] scale-125' : 'scale-100'}
             focus:outline-none
             relative`}
  >
    {/* Background fog effect */}
    <div className={`absolute -inset-1/2 
                 bg-gradient-to-r from-blue-900/20 
                 via-purple-900/20 to-pink-900/20 
                 blur-2xl rounded-full
                 transition-all duration-700
                 ${isOpen ? 'scale-150 opacity-80' : 'scale-100 opacity-50'}
                 animate-pulse-slow`} />
    <Icon showMoon={true} isOpen={isOpen} />
  </button>
);