import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, TrendingUp, Users, Zap, ArrowRight, Briefcase, MapPin, Loader2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, Magnetic } from '../components/animations';
import { FloatingOrbs } from '../components/animations/ParticleField';
import api from '../utils/api';

interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
}

const Careers: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await api.get('/jobs');
            const data = response.data;

            if (data.success) {
                setJobs(data.jobs);
            }
        } catch (error) {
            console.error('Fetch jobs error:', error);
        } finally {
            setLoading(false);
        }
    };

    const values = [
        { icon: <Heart size={32} />, title: 'Work-Life Balance', description: 'Flexible hours and remote work options', color: 'from-indigo-500 to-violet-400' },
        { icon: <TrendingUp size={32} />, title: 'Growth Opportunities', description: 'Continuous learning and career advancement', color: 'from-green-500 to-emerald-400' },
        { icon: <Users size={32} />, title: 'Collaborative Culture', description: 'Work with passionate, talented individuals', color: 'from-blue-500 to-cyan-400' },
        { icon: <Zap size={32} />, title: 'Innovation First', description: 'Experiment with cutting-edge technologies', color: 'from-purple-500 to-violet-400' },
    ];

    return (
        <div className="pt-24 min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-transparent relative">
                <FloatingOrbs orbCount={4} />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.span
                            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.span
                                className="inline-flex items-center gap-2"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Briefcase size={16} /> We're Hiring!
                            </motion.span>
                        </motion.span>

                        <h1 className="text-3xl md:text-5xl font-black mb-6 dark:text-white">
                            Build the Future of{' '}
                            <motion.span
                                className="text-primary italic inline-block"
                                animate={{
                                    textShadow: [
                                        '0 0 0px rgba(79, 70, 229, 0)',
                                        '0 0 30px rgba(79, 70, 229, 0.3)',
                                        '0 0 0px rgba(79, 70, 229, 0)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Education
                            </motion.span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                            Join our mission to democratize quality education and empower millions of learners worldwide.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Magnetic>
                                <a
                                    href="#openings"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
                                >
                                    View Open Positions <ArrowRight size={20} />
                                </a>
                            </Magnetic>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-black mb-4 dark:text-white">
                            Why Work at <span className="text-primary italic">Edutalks?</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            We believe in creating an environment where you can thrive and make an impact
                        </p>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <StaggerItem key={idx}>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="text-center p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-xl transition-all h-full"
                                >
                                    <motion.div
                                        className={`inline-block p-4 bg-gradient-to-br ${value.color} text-white rounded-2xl mb-4`}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {value.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-white">{value.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Open Positions */}
            <section id="openings" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-black mb-4 dark:text-white">
                            Open <span className="text-primary italic">Positions</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Find your next opportunity and join our growing team
                        </p>
                    </FadeIn>

                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div
                                className="text-center py-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
                                <p className="mt-4 text-gray-600 dark:text-gray-400">Loading positions...</p>
                            </motion.div>
                        ) : jobs.length > 0 ? (
                            <motion.div
                                className="max-w-4xl mx-auto space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {jobs.map((job, idx) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.15)'
                                        }}
                                        className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary transition-all group"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors dark:text-white">{job.title}</h3>
                                                    <motion.span
                                                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {job.type}
                                                    </motion.span>
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                                                    <span className="flex items-center gap-1">
                                                        <Users size={16} className="text-primary" />
                                                        {job.department}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={16} className="text-primary" />
                                                        {job.location}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
                                            </div>
                                            <Magnetic strength={0.15}>
                                                <motion.a
                                                    href={`mailto:recruiter@edutalksacademy.in?subject=Application for ${job.title}`}
                                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all whitespace-nowrap"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Apply <ArrowRight size={18} />
                                                </motion.a>
                                            </Magnetic>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                className="text-center py-12"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <Briefcase className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                                    No open positions at the moment.
                                </p>
                                <p className="text-gray-500 dark:text-gray-500">
                                    Check back soon or send us your resume for future opportunities.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <FadeIn delay={0.3} className="text-center mt-12">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Don't see a perfect fit? We're always looking for talented individuals.
                        </p>
                        <Magnetic>
                            <a
                                href="mailto:recruiter@edutalksacademy.in?subject=General Application"
                                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all"
                            >
                                Send Us Your Resume <ArrowRight size={18} />
                            </a>
                        </Magnetic>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section with Wave */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 relative overflow-hidden">
                {/* Animated wave background */}
                <motion.div
                    className="absolute inset-0 opacity-30 dark:opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ef4444' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`
                    }}
                    animate={{
                        backgroundPositionX: ['0%', '100%']
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <motion.h2
                            className="text-2xl md:text-4xl font-black mb-6 text-gray-900 dark:text-white"
                            animate={{
                                textShadow: [
                                    '0 0 0px rgba(239, 68, 68, 0)',
                                    '0 0 20px rgba(239, 68, 68, 0.1)',
                                    '0 0 0px rgba(239, 68, 68, 0)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            Ready to Make an Impact?
                        </motion.h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Join our team and help shape the future of education for millions of learners.
                        </p>
                        <Magnetic>
                            <motion.a
                                href="mailto:recruiter@edutalksacademy.in"
                                className="inline-block px-10 py-5 bg-primary text-white font-black rounded-full hover:bg-primary-dark hover:shadow-2xl transition-all shadow-xl shadow-primary/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                            </motion.a>
                        </Magnetic>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Careers;
