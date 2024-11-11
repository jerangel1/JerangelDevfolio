import { useEffect, useState } from 'react';
import { useAnimationControls } from 'framer-motion';

export const useGalaxyRotation = () => {
    const [isRotating, setIsRotating] = useState(true);
    const controls = useAnimationControls();

    useEffect(() => {
        if (isRotating) {
            const element = document.querySelector('.galaxy-rotation');
            if (element) {
                const transform = getComputedStyle(element).transform;
                const matrix = new DOMMatrix(transform);
                const currentAngle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
                
                controls.start({
                    rotate: 360,
                    transition: {
                        duration: 100,
                        repeat: Infinity,
                        ease: "linear",
                        from: currentAngle
                    }
                });
            }
        } else {
            controls.stop();
        }
    }, [isRotating, controls]);

    return {
        isRotating,
        setIsRotating,
        controls
    };
};