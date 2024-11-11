import Particles from "@/app/components/particles";

export default function Background() {
    return (
        <>
            {/* Deep space base */}
            <div className="fixed inset-0 z-10 
                bg-gradient-to-tl from-black via-[#0B0033] to-[#1B0045]" />

            {/* Cosmic dust and stars */}
            <div className="fixed inset-0 z-10 
                bg-[radial-gradient(ellipse_at_center,rgba(16,0,43,0.8),transparent_100%)]" />


            {/* Star clusters */}
            <Particles
                className="fixed inset-0 z-20"
                quantity={400}
                staticity={20}
                ease={60}
                refresh={false}
            />

            {/* Distant galaxies */}
            <div className="fixed inset-0 z-30
                bg-[radial-gradient(circle_at_70%_20%,rgba(37,0,64,0.5),transparent_50%)]" />
            
            <div className="fixed inset-0 -z-15
                bg-[radial-gradient(circle_at_30%_80%,rgba(59,0,96,0.5),transparent_50%)]" />

            {/* Cosmic fog */}
            <div className="fixed inset-0 -z-5 
                bg-gradient-to-b from-transparent via-[#14002D]/10 to-black/20 
                backdrop-blur-[20px] pointer-events-none" />

            {/* Atmospheric glow */}
            <div className="fixed inset-0 -z-5
                bg-[radial-gradient(ellipse_at_top,rgba(16,0,43,0.3),transparent_70%)]
                pointer-events-none" />
        </>
    );
}