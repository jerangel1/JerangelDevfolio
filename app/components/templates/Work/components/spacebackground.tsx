import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from "@/app/components/particles";

export const SpaceBackground = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    // Transformaciones para el parallax
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const particlesY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
    const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    return (
        <div ref={ref} className="fixed inset-0 overflow-hidden bg-black">
            {/* Fondo base con gradiente principal */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 bg-gradient-to-b 
                    from-black via-[#000022]/60 to-black"
            />

            {/* Capa secundaria */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 -z-30
                    bg-gradient-to-tr from-black 
                    via-[rgba(0,0,51,0.5)] 
                    to-[rgba(0,0,102,0.3)]"
            />



            {/* Estrellas con parallax */}
            <motion.div
                style={{ y: particlesY }}
                className="absolute inset-0 -z-10"
            >
                <Particles
                    className="absolute inset-0"
                    quantity={1000}
                />
            </motion.div>
        </div>
    );
};