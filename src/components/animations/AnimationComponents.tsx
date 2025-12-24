import React, { useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants, HTMLMotionProps } from 'framer-motion';

// ============================================
// FADE IN ANIMATION
// ============================================
interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    once?: boolean;
}

export const FadeIn = React.forwardRef<HTMLDivElement, FadeInProps>(({
    children,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    distance = 30,
    once = true,
    className = '',
    ...props
}, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const targetRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
    const isInView = useInView(targetRef, { once, margin: '-50px' });

    const directionOffset = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 }
    };

    return (
        <motion.div
            ref={targetRef}
            initial={{ opacity: 0, ...directionOffset[direction] }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
});
FadeIn.displayName = 'FadeIn';

// ============================================
// SLIDE IN ANIMATION
// ============================================
interface SlideInProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
    once?: boolean;
}

export const SlideIn = React.forwardRef<HTMLDivElement, SlideInProps>(({
    children,
    delay = 0,
    duration = 0.7,
    direction = 'left',
    distance = 100,
    once = true,
    className = '',
    ...props
}, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const targetRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
    const isInView = useInView(targetRef, { once, margin: '-100px' });

    const directionOffset = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: -distance, y: 0 },
        right: { x: distance, y: 0 }
    };

    return (
        <motion.div
            ref={targetRef}
            initial={{ opacity: 0, ...directionOffset[direction] }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{
                duration,
                delay,
                type: 'spring',
                stiffness: 100,
                damping: 20
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
});
SlideIn.displayName = 'SlideIn';

// ============================================
// SCALE IN ANIMATION
// ============================================
interface ScaleInProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    once?: boolean;
    scale?: number;
}

export const ScaleIn = React.forwardRef<HTMLDivElement, ScaleInProps>(({
    children,
    delay = 0,
    duration = 0.5,
    once = true,
    scale = 0.8,
    className = '',
    ...props
}, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const targetRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
    const isInView = useInView(targetRef, { once, margin: '-50px' });

    return (
        <motion.div
            ref={targetRef}
            initial={{ opacity: 0, scale }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
});
ScaleIn.displayName = 'ScaleIn';

// ============================================
// STAGGER CONTAINER
// ============================================
interface StaggerContainerProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
    children: ReactNode;
    staggerDelay?: number;
    delayChildren?: number;
    once?: boolean;
}

export const StaggerContainer = React.forwardRef<HTMLDivElement, StaggerContainerProps>(({
    children,
    staggerDelay = 0.1,
    delayChildren = 0,
    once = true,
    className = '',
    ...props
}, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const targetRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
    const isInView = useInView(targetRef, { once, margin: '-50px' });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren
            }
        }
    };

    return (
        <motion.div
            ref={targetRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
});
StaggerContainer.displayName = 'StaggerContainer';

// ============================================
// STAGGER ITEM
// ============================================
interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
}

export const StaggerItem = React.forwardRef<HTMLDivElement, StaggerItemProps>(({
    children,
    direction = 'up',
    distance = 30,
    className = '',
    ...props
}, ref) => {
    const directionOffset = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: -distance, y: 0 },
        right: { x: distance, y: 0 }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, ...directionOffset[direction] },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <motion.div ref={ref} variants={itemVariants} className={className} {...props}>
            {children}
        </motion.div>
    );
});
StaggerItem.displayName = 'StaggerItem';

// ============================================
// TYPEWRITER EFFECT
// ============================================
interface TypeWriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    cursor?: boolean;
    onComplete?: () => void;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
    text,
    delay = 0,
    speed = 50,
    className = '',
    cursor = true,
    onComplete
}) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const timeout = setTimeout(() => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setIsComplete(true);
                    onComplete?.();
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [isInView, text, delay, speed, onComplete]);

    return (
        <span ref={ref} className={className}>
            {displayText}
            {cursor && !isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
                />
            )}
        </span>
    );
};

// ============================================
// COUNT UP ANIMATION
// ============================================
interface CountUpProps {
    end: number;
    start?: number;
    duration?: number;
    delay?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    decimals?: number;
}

export const CountUp: React.FC<CountUpProps> = ({
    end,
    start = 0,
    duration = 2,
    delay = 0,
    suffix = '',
    prefix = '',
    className = '',
    decimals = 0
}) => {
    const [count, setCount] = useState(start);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;
        hasAnimated.current = true;

        const timeout = setTimeout(() => {
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / (duration * 1000), 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
                const currentValue = start + (end - start) * easeProgress;

                setCount(currentValue);

                if (now < endTime) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(animate);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [isInView, start, end, duration, delay]);

    return (
        <span ref={ref} className={className}>
            {prefix}{count.toFixed(decimals)}{suffix}
        </span>
    );
};

// ============================================
// PARALLAX WRAPPER
// ============================================
interface ParallaxWrapperProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
    children,
    speed = 0.5,
    className = ''
}) => {
    const [offset, setOffset] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const scrollY = window.scrollY;
            const elementTop = rect.top + scrollY;
            const relativeScroll = scrollY - elementTop + window.innerHeight;
            setOffset(relativeScroll * speed * 0.1);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y: offset }}>
                {children}
            </motion.div>
        </div>
    );
};

// ============================================
// FLOATING ANIMATION
// ============================================
interface FloatingProps {
    children: ReactNode;
    duration?: number;
    distance?: number;
    delay?: number;
    className?: string;
}

export const Floating: React.FC<FloatingProps> = ({
    children,
    duration = 3,
    distance = 20,
    delay = 0,
    className = ''
}) => {
    return (
        <motion.div
            animate={{
                y: [0, -distance, 0],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut'
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ============================================
// ROTATING ANIMATION
// ============================================
interface RotatingProps {
    children: ReactNode;
    duration?: number;
    className?: string;
}

export const Rotating: React.FC<RotatingProps> = ({
    children,
    duration = 20,
    className = ''
}) => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'linear'
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ============================================
// PULSE ANIMATION
// ============================================
interface PulseProps {
    children: ReactNode;
    duration?: number;
    scale?: number;
    className?: string;
}

export const Pulse: React.FC<PulseProps> = ({
    children,
    duration = 2,
    scale = 1.05,
    className = ''
}) => {
    return (
        <motion.div
            animate={{
                scale: [1, scale, 1],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut'
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ============================================
// MAGNETIC BUTTON WRAPPER
// ============================================
interface MagneticProps {
    children: ReactNode;
    strength?: number;
    className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({
    children,
    strength = 0.3,
    className = ''
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;
        setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ============================================
// TEXT REVEAL ANIMATION
// ============================================
interface TextRevealProps {
    text: string;
    delay?: number;
    className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
    text,
    delay = 0,
    className = ''
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const words = text.split(' ');

    return (
        <span ref={ref} className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '100%' }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: delay + i * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                    >
                        {word}
                    </motion.span>
                    {i < words.length - 1 && '\u00A0'}
                </span>
            ))}
        </span>
    );
};

// ============================================
// SHIMMER EFFECT
// ============================================
interface ShimmerProps {
    children: ReactNode;
    className?: string;
}

export const Shimmer: React.FC<ShimmerProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {children}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ x: ['0%', '200%'] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut'
                }}
            />
        </div>
    );
};

// ============================================
// GLOW EFFECT
// ============================================
interface GlowProps {
    children: ReactNode;
    color?: string;
    className?: string;
}

export const Glow = React.forwardRef<HTMLDivElement, GlowProps>(({
    children,
    color = 'rgba(225, 6, 0, 0.5)',
    className = '',
    ...props
}, ref) => {
    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            {...props}
        >
            <motion.div
                className="absolute inset-0 rounded-inherit blur-xl opacity-0"
                style={{ backgroundColor: color }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
});
Glow.displayName = 'Glow';

export default {
    FadeIn,
    SlideIn,
    ScaleIn,
    StaggerContainer,
    StaggerItem,
    TypeWriter,
    CountUp,
    ParallaxWrapper,
    Floating,
    Rotating,
    Pulse,
    Magnetic,
    TextReveal,
    Shimmer,
    Glow
};
