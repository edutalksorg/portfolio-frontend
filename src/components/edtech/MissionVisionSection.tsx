import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const MissionVisionSection: React.FC = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const cards = [
        {
            title: 'Our Mission',
            icon: Target,
            description:
                'To empower every student with accessible, high-quality education that adapts to their unique learning style and pace.',
            values: [
                'Personalized Learning Paths',
                'Cutting-Edge Technology',
                'Expert Mentorship',
                'Measurable Outcomes',
            ],
            gradient: 'from-red-500 to-pink-500',
        },
        {
            title: 'Our Vision',
            icon: Eye,
            description:
                'To become the global leader in innovative education, creating a future where every learner achieves their full potential.',
            values: [
                'Global Accessibility',
                'Continuous Innovation',
                'Community Building',
                'Lifelong Learning',
            ],
            gradient: 'from-blue-500 to-cyan-500',
        },
    ];

    const coreValues = [
        {
            icon: Heart,
            title: 'Student-Centric',
            description: 'Every decision prioritizes student success and wellbeing',
        },
        {
            icon: Lightbulb,
            title: 'Innovation-Driven',
            description: 'Constantly evolving with the latest educational technologies',
        },
        {
            icon: Users,
            title: 'Collaborative',
            description: 'Building strong partnerships between students, educators, and parents',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Committed to the highest standards in everything we do',
        },
    ];

    return (
        <section id="mission" ref={ref} className="py-24 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mission & <span className="gradient-text">Vision</span>
                    </h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Guided by purpose, driven by innovation
                    </p>
                </motion.div>

                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                                className="relative group"
                            >
                                <div className="glass p-8 rounded-3xl hover-lift relative overflow-hidden">
                                    {/* Animated gradient background */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 90, 0],
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                        className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${card.gradient} opacity-20 blur-3xl`}
                                    />

                                    {/* Icon */}
                                    <motion.div
                                        animate={{
                                            rotate: [0, 5, -5, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} mb-6`}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                                    <p className="text-muted mb-6 leading-relaxed">{card.description}</p>

                                    {/* Values */}
                                    <div className="space-y-3">
                                        {card.values.map((value, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: 0.4 + index * 0.2 + i * 0.1 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient}`} />
                                                <span className="text-sm font-medium">{value}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Core Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h3>
                    <p className="text-muted max-w-xl mx-auto">
                        The principles that guide every decision we make
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreValues.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                                className="premium-card text-center group hover-glow"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                    }}
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] mb-4"
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                                <p className="text-sm text-muted">{value.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Import missing icons
import { Users, Award } from 'lucide-react';

export default MissionVisionSection;
