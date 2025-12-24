import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

interface UseScrollAnimationOptions {
    threshold?: number;
    triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const { threshold = 0.1, triggerOnce = true } = options;
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold,
        triggerOnce,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else if (!triggerOnce) {
            controls.start('hidden');
        }
    }, [controls, inView, triggerOnce]);

    return { ref, controls, inView };
};

export default useScrollAnimation;
