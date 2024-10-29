import React from "react";
import styled from "styled-components";

const AnimatedRocket = styled.div`
  &.checked {
    animation: 4s nav linear infinite;
  }

  @keyframes nav {
    0% { transform: translateX(1.3em) rotate(45deg); }
    10% { transform: translateX(1.1em) rotate(45deg); }
    30% { transform: translateX(1.2em) rotate(45deg); }
    50% { transform: translateX(1em) rotate(45deg); }
    70% { transform: translateX(1.2em) rotate(45deg); }
    80% { transform: translateX(1em) rotate(45deg); }
    90% { transform: translateX(1.2em) rotate(45deg); }
    100% { transform: translateX(1.3em) rotate(45deg); }
  }
`;

const Star = styled.svg`
  &.checked {
    animation: 2s piscar linear infinite;
  }

  @keyframes piscar {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const RocketSwitch = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <label className="relative inline-block w-14 h-8 text-base">
            <input
                type="checkbox"
                className="opacity-0 w-0 h-0"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span className={`absolute cursor-pointer inset-0 pt-1.5 
        ${isChecked ? 'bg-[#2b4360]' : 'bg-[#c7dbd7]'}
        transition-all duration-400 rounded-full shadow-lg border border-white`}>

                <AnimatedRocket className={`fug absolute ${isChecked ? 'checked' : ''}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className={`absolute h-6 w-6 left-1 bottom-1 transition-transform duration-400 
              ${isChecked ? 'translate-x-5' : ''} rotate-45 fill-white`}
                        viewBox="0 0 16 16"
                    >
                        <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
                        <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
                    </svg>
                </AnimatedRocket>

                <div className="stars">
                    {[
                        { top: "1.75rem", left: "3.25rem" },
                        { top: "3.5rem", left: "4.75rem" },
                        { top: "4.5rem", left: "2.25rem" },
                        { top: "5.75rem", left: "6rem" }
                    ].map((position, index) => (
                        <Star
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="4"
                            fill="#fff"
                            className={`absolute w-1 h-1 transition-opacity duration-200
                ${isChecked ? 'opacity-100 checked' : 'opacity-0'}
                star-${index + 1}`}
                            style={position}
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </Star>
                    ))}
                </div>
            </span>
        </label>
    );
};

export default RocketSwitch;