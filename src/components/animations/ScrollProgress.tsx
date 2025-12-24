import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface ScrollProgressProps {
    color?: string;
    height?: number;
    position?: 'top' | 'bottom';
    className?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
    color = 'var(--primary)',
    height = 3,
    position = 'top',
    className = ''
}) => {
    const scrollProgress = useMotionValue(0);
    const scaleX = useSpring(scrollProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? scrollTop / docHeight : 0;
            scrollProgress.set(progress);
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, [scrollProgress]);

    return (
        <motion.div
            className={`fixed left-0 right-0 z-[100] origin-left ${position === 'top' ? 'top-0' : 'bottom-0'} ${className}`}
            style={{
                height,
                backgroundColor: color,
                scaleX,
                transformOrigin: 'left'
            }}
        />
    );
};

// Circular Progress Indicator
interface CircularProgressProps {
    size?: number;
    strokeWidth?: number;
    color?: string;
    className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
    size = 50,
    strokeWidth = 3,
    color = 'var(--primary)',
    className = ''
}) => {
    const [progress, setProgress] = useState(0);
    const circumference = (size - strokeWidth) * Math.PI;

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progressValue = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(progressValue);
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
            <svg width={size} height={size} className="transform -rotate-90">
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={(size - strokeWidth) / 2}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="text-gray-200 dark:text-gray-700"
                />
                {/* Progress circle */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={(size - strokeWidth) / 2}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: circumference * (1 - progress) }}
                />
            </svg>
            <span
                className="absolute inset-0 flex items-center justify-center text-xs font-bold"
                style={{ color }}
            >
                {Math.round(progress * 100)}%
            </span>
        </div>
    );
};

// Back to Top Button with Progress
interface BackToTopProps {
    showAfter?: number;
    className?: string;
}

export const BackToTop: React.FC<BackToTopProps> = ({
    showAfter = 400,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            setIsVisible(scrollTop > showAfter);
            setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showAfter]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center ${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
            {/* Progress ring */}
            <svg
                className="absolute inset-0 w-full h-full transform -rotate-90"
                viewBox="0 0 48 48"
            >
                <circle
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="2"
                />
                <motion.circle
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={138}
                    initial={{ strokeDashoffset: 138 }}
                    animate={{ strokeDashoffset: 138 * (1 - (progress || 0)) }}
                />
            </svg>
        </motion.button>
    );
};

export default ScrollProgress;
