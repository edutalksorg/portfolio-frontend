import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isInput, setIsInput] = useState(false);

    // Mouse position state for the main dot (instant)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => { };
        const handleMouseUp = () => { };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('clickable') ||
                window.getComputedStyle(target).cursor === 'pointer';

            const isInputField =
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.isContentEditable;

            setIsHovering(!!isClickable);
            setIsInput(!!isInputField);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none" aria-hidden="true">
            {/* Outer Circle (Static follow) */}
            <motion.div
                className="fixed top-0 left-0"
                style={{ x: mouseX, y: mouseY }}
            >
                <motion.div
                    className="rounded-full blur-[1px] -translate-x-1/2 -translate-y-1/2"
                    style={{
                        width: isHovering ? 45 : 30,
                        height: isHovering ? 45 : 30,
                        border: `2px solid ${isHovering ? '#FF006E' : '#00D9FF'}`,
                        backgroundColor: 'transparent',
                        boxShadow: isHovering
                            ? '0 0 10px rgba(255, 0, 110, 0.3)'
                            : '0 0 5px rgba(0, 217, 255, 0.2)',
                    }}
                    animate={{
                        opacity: isVisible ? 1 : 0
                    }}
                />
            </motion.div>

            {/* Inner Dot (Instant follow) */}
            <motion.div
                className="fixed top-0 left-0"
                style={{ x: mouseX, y: mouseY }}
                animate={{
                    opacity: isVisible ? 1 : 0
                }}
            >
                <div
                    className="rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                        width: isHovering ? 8 : 6,
                        height: isHovering ? 8 : 6,
                        backgroundColor: isHovering ? '#FF006E' : '#00D9FF',
                        boxShadow: isHovering ? '0 0 10px #FF006E' : '0 0 5px #00D9FF',
                        mixBlendMode: 'difference'
                    }}
                />
            </motion.div>

            {/* Input Indicator */}
            {isInput && (
                <motion.div
                    className="fixed top-0 left-0 h-5 w-[1px] bg-cyan-400"
                    style={{ x: mouseX, y: mouseY }}
                    animate={{ opacity: 1 }}
                />
            )}
        </div>
    );
};

export default CustomCursor;

