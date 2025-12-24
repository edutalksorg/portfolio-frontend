import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import AnimatedText from './AnimatedText';

export const HeroSection: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg)] via-[var(--bg)] to-[var(--accent)]/10" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-block px-4 py-2 rounded-full glass border border-[var(--primary)]/30"
                        >
                            <span className="text-[var(--primary)] font-semibold text-sm">
                                🚀 Transforming Education, One Student at a Time
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <AnimatedText text="Empowering" className="block" />
                            <span className="block gradient-text">
                                <AnimatedText text="Future Leaders" delay={0.3} />
                            </span>
                            <AnimatedText text="Through Innovation" className="block" delay={0.6} />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-lg md:text-xl text-muted max-w-xl"
                        >
                            We blend cutting-edge technology with personalized learning experiences to unlock
                            every student's potential and prepare them for tomorrow's challenges.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary flex items-center space-x-2 group"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary flex items-center space-x-2 group"
                            >
                                <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                                <span>Watch Demo</span>
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            className="grid grid-cols-3 gap-6 pt-8"
                        >
                            {[
                                { value: '10K+', label: 'Students' },
                                { value: '500+', label: 'Courses' },
                                { value: '98%', label: 'Success Rate' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-sm text-muted mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Hero Image/Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="relative"
                        >
                            {/* Hero Illustration Placeholder */}
                            <div className="premium-card aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden group">
                                {/* Animated gradient background */}
                                <motion.div
                                    animate={{
                                        background: [
                                            'linear-gradient(45deg, var(--primary), var(--accent))',
                                            'linear-gradient(135deg, var(--accent), var(--primary))',
                                            'linear-gradient(225deg, var(--primary), var(--accent))',
                                            'linear-gradient(315deg, var(--accent), var(--primary))',
                                        ],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    className="absolute inset-0 opacity-10"
                                />

                                {/* Icon Grid */}
                                <div className="relative z-10 grid grid-cols-3 gap-4 p-8">
                                    {['📚', '🎓', '💡', '🚀', '⭐', '🏆', '💻', '🌟', '📈'].map((icon, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            className="w-16 h-16 bg-card rounded-2xl shadow-lg flex items-center justify-center text-3xl cursor-pointer hover-lift"
                                        >
                                            {icon}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Floating elements */}
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full opacity-20 blur-xl"
                                />
                                <motion.div
                                    animate={{
                                        y: [0, 15, 0],
                                        rotate: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: 1,
                                    }}
                                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[var(--accent)] to-[var(--primary)] rounded-full opacity-20 blur-xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-[var(--primary)] rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-[var(--primary)] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
