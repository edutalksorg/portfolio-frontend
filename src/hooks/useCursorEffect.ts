import { useEffect, useRef } from 'react';

export const useCursorEffect = (magneticStrength: number = 0.3) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * magneticStrength;
            const deltaY = (e.clientY - centerY) * magneticStrength;

            const distanceFromCenter = Math.sqrt(
                Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
            );

            // Only apply effect if cursor is close enough
            if (distanceFromCenter < 150) {
                element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            } else {
                element.style.transform = 'translate(0, 0)';
            }
        };

        const handleMouseLeave = () => {
            element.style.transform = 'translate(0, 0)';
        };

        window.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [magneticStrength]);

    return elementRef;
};

export default useCursorEffect;
