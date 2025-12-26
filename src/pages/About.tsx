import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Heart, Rocket } from 'lucide-react';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, CountUp, Floating } from '../components/animations';
import { FloatingOrbs } from '../components/animations/ParticleField';
import TeamMember from '../components/TeamMember';
import type { TeamMemberData } from '../components/TeamMember';

const About: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMemberData[]>([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/team');
                const data = await response.json();
                if (data.success && data.data.length > 0) {
                    // Map backend dynamic team to TeamMemberData interface
                    const mappedTeam = data.data.map((m: any) => ({
                        id: m.id,
                        name: m.name,
                        role: m.role,
                        image: m.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=f97316&color=fff&size=400`,
                        bio: m.description || 'Dedicated professional helping students achieve their tech dreams.',
                        linkedin: '#',
                        twitter: '#',
                        email: '#'
                    }));
                    setTeamMembers(mappedTeam);
                } else {
                    // Fallback to initial team if DB is empty
                    setTeamMembers([
                        {
                            id: 1,
                            name: 'Dr. Rajesh Kumar',
                            role: 'Founder & CEO',
                            image: 'https://ui-avatars.com/api/?name=Dr+Rajesh+Kumar&background=f97316&color=fff&size=400',
                            bio: 'Visionary leader with 15+ years in EdTech, passionate about democratizing quality education.',
                            linkedin: '#',
                            email: 'rajesh@edutalks.com'
                        },
                        {
                            id: 2,
                            name: 'Priya Sharma',
                            role: 'Chief Technology Officer',
                            image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=f97316&color=fff&size=400',
                            bio: 'Tech innovator building scalable learning platforms that reach millions of students.',
                            linkedin: '#',
                            email: 'priya@edutalks.com'
                        },
                        {
                            id: 3,
                            name: 'Amit Patel',
                            role: 'Head of Curriculum',
                            image: 'https://ui-avatars.com/api/?name=Amit+Patel&background=f97316&color=fff&size=400',
                            bio: 'Curriculum expert designing industry-aligned programs that bridge the skill gap.',
                            linkedin: '#',
                            email: 'amit@edutalks.com'
                        },
                        {
                            id: 4,
                            name: 'Sneha Reddy',
                            role: 'Director of Student Success',
                            image: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=f97316&color=fff&size=400',
                            bio: 'Student advocate ensuring every learner achieves their career goals through personalized support.',
                            linkedin: '#',
                            email: 'sneha@edutalks.com'
                        }
                    ]);
                }
            } catch (error) {
                console.error('Fetch team error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTeam();
    }, []);

    return (
        <div className="pt-24 min-h-screen overflow-hidden">
            {/* Hero - Our Story */}
            <section className="py-20 relative">
                <FloatingOrbs orbCount={3} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <SlideIn direction="left">
                            <motion.span
                                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Our Story
                            </motion.span>
                            <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight dark:text-white">
                                Where{' '}
                                <motion.span
                                    className="text-primary italic inline-block"
                                    animate={{
                                        textShadow: [
                                            '0 0 0px rgba(79, 70, 229, 0)',
                                            '0 0 20px rgba(79, 70, 229, 0.3)',
                                            '0 0 0px rgba(79, 70, 229, 0)'
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    Innovation
                                </motion.span>
                                {' '}Meets Purpose
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                                Edutalks is a next-generation learning platform focused on delivering industry-relevant **Information Technology (IT) courses**. Our programs are designed to help students, graduates, and professionals build practical skills aligned with current and future tech careers.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                                Founded in 2024, Edutalks Learning Pvt. Ltd. was born out of a simple realization: education should be a conversation, not a monologue. We aim to bridge the gap between traditional learning and industry requirements.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                By combining expert mentorship with practical skill development, we empower students and professionals to take charge of their careers and lead with confidence.
                            </p>
                        </SlideIn>

                        <SlideIn direction="right" delay={0.3}>
                            <motion.div
                                className="relative aspect-square rounded-3xl bg-white dark:bg-gray-900 overflow-hidden border border-light-text/5 dark:border-white/5 shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                                <div className="flex items-center justify-center h-full relative">
                                    <motion.span
                                        className="text-primary text-6xl font-black opacity-10"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    >
                                        EDU TALKS
                                    </motion.span>
                                </div>
                                <Floating duration={4} distance={15} className="absolute top-16 left-16">
                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                                        <Rocket className="text-primary" size={24} />
                                    </div>
                                </Floating>
                                <Floating duration={5} distance={20} delay={1} className="absolute bottom-16 right-16">
                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                                        <Heart className="text-primary" size={24} />
                                    </div>
                                </Floating>
                            </motion.div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-6">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: 10000, suffix: '+', label: 'Students Trained' },
                            { value: 500, suffix: '+', label: 'Expert Mentors' },
                            { value: 50, suffix: '+', label: 'Courses Offered' },
                            { value: 95, suffix: '%', label: 'Success Rate' }
                        ].map((stat, idx) => (
                            <StaggerItem key={idx}>
                                <div className="p-4">
                                    <div className="text-4xl md:text-5xl font-black mb-2">
                                        <CountUp end={stat.value} suffix={stat.suffix} duration={2} delay={idx * 0.1} />
                                    </div>
                                    <p className="text-white/80 font-medium">{stat.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <FadeIn>
                            <div className="p-10 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 h-full hover:shadow-2xl transition-all">
                                <div className="mb-6 p-4 bg-primary/10 text-primary rounded-2xl inline-block">
                                    <Target size={32} />
                                </div>
                                <h3 className="text-3xl font-black mb-4 dark:text-white">Our Mission</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    To democratize quality education and career opportunities through interactive learning and expert-led mentorship programs. We believe every individual deserves access to world-class education regardless of their background.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="p-10 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 h-full hover:shadow-2xl transition-all">
                                <div className="mb-6 p-4 bg-primary/10 text-primary rounded-2xl inline-block">
                                    <Eye size={32} />
                                </div>
                                <h3 className="text-3xl font-black mb-4 dark:text-white">Our Vision</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    To become the world's most trusted EdTech platform for practical skill development and professional growth. We envision a future where education truly prepares individuals for real-world challenges.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 dark:text-white">
                            Meet Our <span className="text-primary italic">Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Passionate educators and industry experts dedicated to your success
                        </p>
                    </FadeIn>

                    <AnimatePresence mode="wait">
                        {!isLoading ? (
                            <StaggerContainer key="team-grid" staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {teamMembers.map((member, index) => (
                                    <StaggerItem key={member.id}>
                                        <TeamMember member={member} index={index} />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        ) : (
                            <div key="loader" className="flex justify-center items-center py-20">
                                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Join Our Community?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Start your learning journey today and build your future.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-10 py-5 bg-white text-red-600 font-bold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
                        >
                            Get Started
                        </a>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default About;
