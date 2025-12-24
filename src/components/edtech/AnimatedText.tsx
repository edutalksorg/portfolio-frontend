import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    animationType?: 'word' | 'character';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    className = '',
    delay = 0,
    animationType = 'word',
}) => {
    const words = text.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    if (animationType === 'character') {
        return (
            <motion.span
                className={className}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {text.split('').map((char, index) => (
                    <motion.span key={index} variants={child}>
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;
