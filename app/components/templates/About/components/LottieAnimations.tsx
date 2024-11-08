import React from "react";

export const LottieAnimation = () => (
    <div className="fixed bottom-2 md:bottom-4 lg:bottom-8 
                   left-1/2 transform -translate-x-1/2
                   z-10">
        <iframe
            className="w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 
                   transform hover:scale-110 
                   transition-all duration-300
                   dark:drop-shadow-[0_0_0.4rem_#ffffff70]"
            src="https://lottie.host/embed/08959478-1e33-4e25-a721-9c887da852c6/ovTI83B1LJ.json"
        />
    </div>
);