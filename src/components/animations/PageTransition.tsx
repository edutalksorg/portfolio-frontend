import React from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
    children: ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.5,
                        ease: "easeOut"
                    }
                }}
                exit={{
                    opacity: 0,
                    y: -20,
                    scale: 0.98,
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                    }
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export const SlidePageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.5,
                        ease: "easeOut"
                    }
                }}
                exit={{
                    opacity: 0,
                    x: -100,
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                    }
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export const FadePageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    }
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.4,
                        ease: "easeIn"
                    }
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export const ScalePageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 0.5,
                        ease: "easeOut"
                    }
                }}
                exit={{
                    opacity: 0,
                    scale: 1.05,
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                    }
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
