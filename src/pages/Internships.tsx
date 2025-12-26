import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Lightbulb, CheckCircle2, ArrowRight, Zap, Award, Target, Briefcase } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, Magnetic, Floating, CountUp } from '../components/animations';
import { FloatingOrbs } from '../components/animations/ParticleField';
import FAQ from '../components/FAQ';

const Internships: React.FC = () => {
    // Updated color palettes to match new Blue/Indigo theme (removed Pink)
    const benefits = [
        { icon: <Lightbulb size={32} />, title: 'Real Projects', description: 'Work on actual products used by thousands of students', color: 'from-yellow-400 to-orange-500' },
        { icon: <Users size={32} />, title: 'Mentorship', description: 'Learn from experienced industry professionals', color: 'from-cyan-500 to-blue-500' },
        { icon: <Code size={32} />, title: 'Skill Development', description: 'Hands-on experience with cutting-edge technologies', color: 'from-indigo-500 to-violet-600' },
        { icon: <CheckCircle2 size={32} />, title: 'Certificate', description: 'Receive completion certificate and letter of recommendation', color: 'from-emerald-500 to-teal-400' },
    ];

    const applicationSteps = [
        { step: 1, title: 'Browse Openings', description: 'Visit our Careers page to see available internship roles', icon: <Target size={24} /> },
        { step: 2, title: 'Submit Application', description: 'Send your resume and portfolio via the job portal', icon: <ArrowRight size={24} /> },
        { step: 3, title: 'Interview', description: 'Complete technical and HR interview rounds', icon: <Users size={24} /> },
        { step: 4, title: 'Start Learning', description: 'Begin your internship journey with us', icon: <Zap size={24} /> },
    ];

    return (
        <div className="pt-24 min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
                <FloatingOrbs orbCount={3} />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.span
                            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-primary/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Floating duration={2} distance={5} className="inline-flex items-center gap-2">
                                <Award size={16} /> Now Accepting Applications
                            </Floating>
                        </motion.span>

                        <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight dark:text-white">
                            Launch Your Career with{' '}
                            <motion.span
                                className="text-primary italic inline-block"
                                animate={{
                                    textShadow: [
                                        '0 0 0px rgba(79, 70, 229, 0)',
                                        '0 0 30px rgba(79, 70, 229, 0.3)',
                                        '0 0 0px rgba(79, 70, 229, 0)'
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                Edutalks
                            </motion.span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Gain real-world experience, build your portfolio, and work with cutting-edge technologies through our premium internship program.
                        </p>

                        <motion.div
                            className="flex flex-wrap justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Magnetic>
                                <a
                                    href="/careers"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
                                >
                                    View Open Positions <ArrowRight size={20} />
                                </a>
                            </Magnetic>
                        </motion.div>

                        {/* Quick stats */}
                        <StaggerContainer staggerDelay={0.1} className="flex flex-wrap justify-center gap-8 mt-16 md:mt-20">
                            {[
                                { value: 500, suffix: '+', label: 'Interns Placed' },
                                { value: 50, suffix: '+', label: 'Partner Companies' },
                                { value: 95, suffix: '%', label: 'Success Rate' }
                            ].map((stat, idx) => (
                                <StaggerItem key={idx}>
                                    <div className="text-center px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30">
                                        <div className="text-3xl font-black text-primary mb-1">
                                            <CountUp end={stat.value} suffix={stat.suffix} duration={2} delay={0.5 + idx * 0.2} />
                                        </div>
                                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-black mb-4 dark:text-white">
                            Why Intern at <span className="text-primary italic">Edutalks?</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Join our program and get hands-on experience that prepares you for the real world
                        </p>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, idx) => (
                            <StaggerItem key={idx}>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full group"
                                >
                                    <motion.div
                                        className={`inline-block p-4 bg-gradient-to-br ${benefit.color} text-white rounded-2xl mb-6 shadow-lg`}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {benefit.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors dark:text-white">{benefit.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Redirect CTA - Replaces the detailed positions list */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

                <div className="container mx-auto px-6">
                    <FadeIn>
                        <motion.div
                            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-red-500/30"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Decorative background circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <span className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-8">
                                    <Briefcase size={40} className="text-white" />
                                </span>
                                <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight text-white">
                                    Looking for Open Roles?
                                </h2>
                                <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-medium">
                                    We manage all our internship and full-time openings centrally. Visit our Careers page to find the perfect role for you.
                                </p>
                                <Magnetic>
                                    <a
                                        href="/careers"
                                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-red-600 font-bold text-lg rounded-full hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
                                    >
                                        Search Openings <ArrowRight size={22} />
                                    </a>
                                </Magnetic>
                            </div>
                        </motion.div>
                    </FadeIn>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-black mb-4 dark:text-white">
                            Application <span className="text-primary italic">Process</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Simple steps to start your journey with us
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
                        {/* Connection line (Desktop only) */}
                        <motion.div
                            className="hidden md:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            style={{ transformOrigin: 'left center' }}
                        />

                        {applicationSteps.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="text-center relative z-10 group"
                            >
                                <motion.div
                                    className="w-20 h-20 bg-white dark:bg-gray-800 border-4 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-110"
                                    whileHover={{ rotate: 10 }}
                                >
                                    {idx + 1}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
};

export default Internships;
