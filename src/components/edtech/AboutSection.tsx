import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';

export const AboutSection: React.FC = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const timeline = [
        {
            year: '2018',
            title: 'Foundation',
            description: 'Started with a vision to democratize quality education',
            icon: Target,
        },
        {
            year: '2020',
            title: 'Rapid Growth',
            description: 'Reached 5,000+ students across 10 cities',
            icon: Users,
        },
        {
            year: '2022',
            title: 'Innovation Award',
            description: 'Recognized for excellence in EdTech solutions',
            icon: Award,
        },
        {
            year: '2024',
            title: 'Global Expansion',
            description: 'Serving 10,000+ students in 50+ countries',
            icon: Zap,
        },
    ];

    const stats = [
        { value: 10000, suffix: '+', label: 'Active Students', color: 'from-red-500 to-pink-500' },
        { value: 500, suffix: '+', label: 'Expert Instructors', color: 'from-blue-500 to-cyan-500' },
        { value: 1000, suffix: '+', label: 'Courses Available', color: 'from-purple-500 to-indigo-500' },
        { value: 98, suffix: '%', label: 'Success Rate', color: 'from-green-500 to-emerald-500' },
    ];

    return (
        <section id="about" ref={ref} className="py-24 relative overflow-hidden">
            {/* Background gradient animation */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 50%, rgba(225, 6, 0, 0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(225, 6, 0, 0.1) 0%, transparent 50%)',
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 pointer-events-none"
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">EduTech</span>
                    </h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Pioneering the future of education with innovative technology and personalized learning experiences
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="premium-card text-center group"
                        >
                            <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm md:text-base text-muted">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]" />

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                                    className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-col md:space-x-0`}
                                >
                                    {/* Content card */}
                                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="premium-card hover-glow">
                                            <div className="flex items-center space-x-3 mb-3">
                                                {isEven ? (
                                                    <>
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                                            <p className="text-sm text-muted">{item.year}</p>
                                                        </div>
                                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
                                                            <Icon className="w-6 h-6 text-white" />
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
                                                            <Icon className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                                            <p className="text-sm text-muted">{item.year}</p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <p className="text-muted">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="relative flex items-center justify-center my-4 md:my-0 md:w-2/12">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={inView ? { scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.2, duration: 0.3 }}
                                            className="w-4 h-4 rounded-full bg-[var(--primary)] relative z-10"
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                                className="absolute inset-0 rounded-full bg-[var(--primary)]"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="hidden md:block md:w-5/12" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
