import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Target, Sparkles, Code, ChevronDown, ShoppingBag } from 'lucide-react';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, CountUp, Floating, Magnetic, TextReveal } from '../components/animations';
import { FloatingOrbs } from '../components/animations/ParticleField';

const Home: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    const stats = [
        { label: 'Learners', value: 10000, suffix: '+', icon: <Users className="text-primary" /> },
        { label: 'Mentors', value: 500, suffix: '+', icon: <Users className="text-primary" /> },
        { label: 'Courses', value: 100, suffix: '+', icon: <BookOpen className="text-primary" /> },
        { label: 'Internships', value: 1000, suffix: '+', icon: <Sparkles className="text-primary" /> },
    ];

    const features = [
        {
            title: 'Learning',
            description: 'Acquire high-demand skills through our curated learning paths.',
            icon: <BookOpen size={32} />,
        },
        {
            title: 'Skill Development',
            description: 'Practical projects and workshops to bridge the gap between theory and practice.',
            icon: <Target size={32} />,
        },
        {
            title: 'Mentorship',
            description: 'One-on-one sessions with industry experts to guide your career.',
            icon: <Users size={32} />,
        },
        {
            title: 'Storytelling',
            description: 'Craft your narrative and build a personal brand that stands out.',
            icon: <Sparkles size={32} />,
        },
    ];

    const partners = [
        { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
        { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
        { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
    ];

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section with Black Gradient */}
            <motion.section
                className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
                style={{ opacity: heroOpacity, scale: heroScale }}
            >
                {/* Animated Background */}
                <FloatingOrbs orbCount={4} />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[128px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[128px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
                            <TextReveal text="Where Education Meets" delay={0.2} />
                            <br />
                            <motion.span
                                className="text-red-500 italic inline-block"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Conversation
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
                    >
                        Edutalks is redefining the EdTech landscape by creating a space where knowledge is shared through dialogue, mentorship, and practical experience.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-nowrap justify-center gap-2 items-center"
                    >
                        <Magnetic strength={0.2}>
                            <a href="/products" className="w-36 px-4 py-2.5 bg-white text-primary font-bold rounded-full hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-1.5 border-2 border-primary whitespace-nowrap text-xs md:text-sm">
                                Products <ShoppingBag size={16} />
                            </a>
                        </Magnetic>
                        <Magnetic strength={0.2}>
                            <a href="/internships" className="w-36 px-4 py-2.5 bg-primary text-white font-bold rounded-full hover:bg-red-700 transition-all transform hover:scale-105 flex items-center justify-center gap-1.5 shadow-xl shadow-primary/20 ripple-container whitespace-nowrap text-xs md:text-sm">
                                Internships <ArrowRight size={16} />
                            </a>
                        </Magnetic>
                        <Magnetic strength={0.2}>
                            <a href="/contact" className="w-36 px-4 py-2.5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105 whitespace-nowrap text-xs md:text-sm flex items-center justify-center">
                                Contact Us
                            </a>
                        </Magnetic>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown size={32} className="text-primary opacity-60" />
                </motion.div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-y border-red-100 dark:border-gray-700">
                <div className="container mx-auto px-6">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {stats.map((stat, idx) => (
                            <StaggerItem key={idx} className="text-center space-y-2">
                                <Floating duration={3} distance={10} delay={idx * 0.2}>
                                    <div className="flex justify-center mb-4 text-primary">
                                        {stat.icon}
                                    </div>
                                </Floating>
                                <h3 className="text-4xl font-black text-light-text-primary dark:text-dark-text-primary">
                                    <CountUp end={stat.value} suffix={stat.suffix} duration={2} delay={idx * 0.2} />
                                </h3>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary font-medium">{stat.label}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-6">
                    <FadeIn className="max-w-3xl mb-16">
                        <h2 className="text-2xl md:text-4xl font-black mb-6 tracking-tight dark:text-white">
                            Empowering Your <span className="text-primary italic">Future</span>
                        </h2>
                        <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            We provide a comprehensive ecosystem designed to help you grow, learn, and succeed in the modern professional world.
                        </p>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <StaggerItem key={idx}>
                                <motion.div
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 hover:bg-primary dark:hover:bg-primary transition-all duration-500 border border-light-text/5 dark:border-white/5 tilt-effect"
                                >
                                    <motion.div
                                        className="mb-6 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 text-primary group-hover:text-white group-hover:bg-black/20 transition-colors inline-block"
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors dark:text-white">{feature.title}</h4>
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary group-hover:text-white/80 transition-colors leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-20 bg-gradient-to-br from-red-50 via-white to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 dark:text-white">
                            <span className="text-primary italic">Courses</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Comprehensive programs designed to transform your career
                        </p>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: 'AI & Machine Learning', description: 'Master neural networks, deep learning, and predictive modeling to build intelligent systems.' },
                            { title: 'Data Science & Analytics', description: 'Extract powerful insights from complex data sets using statistical analysis and machine learning.' },
                            { title: 'Full Stack Development', description: 'Comprehensive training across frontend and backend technologies to build scalable applications.' }
                        ].map((course, idx) => (
                            <StaggerItem key={idx}>
                                <motion.div
                                    whileHover={{
                                        y: -5,
                                        borderColor: 'var(--primary)',
                                        boxShadow: '0 20px 40px -15px rgba(79, 70, 229, 0.2)'
                                    }}
                                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 transition-all"
                                >
                                    <h3 className="text-xl font-bold mb-3 dark:text-white">{course.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <FadeIn delay={0.4} className="text-center">
                        <Magnetic>
                            <a
                                href="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:scale-105"
                            >
                                View All Courses <ArrowRight size={20} />
                            </a>
                        </Magnetic>
                    </FadeIn>
                </div>
            </section>

            {/* Internships Preview Section */}
            <section className="py-20 bg-gradient-to-br from-pink-50 via-red-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 dark:text-white">
                            <span className="text-primary italic">Internship</span> Opportunities
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Gain real-world experience and build your portfolio
                        </p>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {[
                            { icon: <Code size={32} />, title: 'Real Projects', description: 'Work on actual products' },
                            { icon: <Users size={32} />, title: 'Mentorship', description: 'Learn from experts' },
                            { icon: <Target size={32} />, title: 'Skill Development', description: 'Cutting-edge tech' },
                            { icon: <Sparkles size={32} />, title: 'Certificate', description: 'Completion certificate' }
                        ].map((benefit, idx) => (
                            <StaggerItem key={idx}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center p-6"
                                >
                                    <motion.div
                                        className="inline-block p-4 bg-primary/10 text-primary rounded-2xl mb-4"
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.1
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {benefit.icon}
                                    </motion.div>
                                    <h3 className="text-lg font-bold mb-2 dark:text-white">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <FadeIn delay={0.4} className="text-center">
                        <Magnetic>
                            <a
                                href="/internships"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:scale-105"
                            >
                                Explore Internships <ArrowRight size={20} />
                            </a>
                        </Magnetic>
                    </FadeIn>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <SlideIn direction="left">
                            <h2 className="text-3xl md:text-4xl font-black mb-6 dark:text-white">
                                About <span className="text-primary italic">Edutalks</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                Founded in 2024, Edutalks Learning Pvt. Ltd. was born out of a simple realization: education should be a conversation, not a monologue. We aim to bridge the gap between traditional learning and industry requirements.
                            </p>
                            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-6 mb-8">
                                {[
                                    { label: 'Inclusion', icon: <Users size={24} /> },
                                    { label: 'Innovation', icon: <Sparkles size={24} /> },
                                    { label: 'Learning', icon: <Target size={24} /> },
                                    { label: 'Excellence', icon: <BookOpen size={24} /> }
                                ].map((value, idx) => (
                                    <StaggerItem key={idx}>
                                        <motion.div
                                            className="flex items-center gap-3"
                                            whileHover={{ x: 5 }}
                                        >
                                            <motion.div
                                                className="p-2 bg-primary/10 text-primary rounded-lg"
                                                whileHover={{ rotate: 10, scale: 1.1 }}
                                            >
                                                {value.icon}
                                            </motion.div>
                                            <span className="font-semibold text-gray-900 dark:text-white">{value.label}</span>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                            <Magnetic>
                                <a
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:scale-105"
                                >
                                    Learn More About Us <ArrowRight size={20} />
                                </a>
                            </Magnetic>
                        </SlideIn>

                        <SlideIn direction="right" delay={0.2}>
                            <motion.div
                                className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 overflow-hidden border border-primary/20"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="flex items-center justify-center h-full"
                                    animate={{
                                        rotate: [0, 5, -5, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <span className="text-primary text-7xl font-black opacity-20">EDUTALKS</span>
                                </motion.div>

                                {/* Floating decorative elements */}
                                <motion.div
                                    className="absolute top-10 right-10 w-20 h-20 bg-primary/30 rounded-full blur-xl"
                                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500/30 rounded-full blur-xl"
                                    animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                />
                            </motion.div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            {/* Partners Section with Marquee */}
            <section className="py-20 bg-gradient-to-br from-red-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 dark:text-white">
                            Trusted by <span className="text-primary italic">Industry Leaders</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Our students work at top companies worldwide
                        </p>
                    </FadeIn>

                    {/* Infinite scroll marquee */}
                    <div className="relative">
                        <div className="flex overflow-hidden">
                            <motion.div
                                className="flex gap-8 items-center"
                                animate={{ x: [0, -1200] }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            >
                                {[...partners, ...partners].map((partner, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.1 }}
                                        className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 min-w-[180px] shadow-sm hover:shadow-md transition-all"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-full h-8 object-contain"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                const parent = e.currentTarget.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = `<span class="text-gray-600 dark:text-gray-400 font-bold">${partner.name}</span>`;
                                                }
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-pink-50 via-red-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-6">
                    <FadeIn>
                        <motion.div
                            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-[40px] p-12 md:p-16 border border-primary/20 relative overflow-hidden"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Animated background elements */}
                            <motion.div
                                className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
                                animate={{ scale: [1.5, 1, 1.5], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            />

                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-black mb-6 dark:text-white">
                                    Ready to Transform Your <span className="text-primary italic">Career?</span>
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                    Join thousands of learners who are already building their future with Edutalks. Start your journey today!
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Magnetic>
                                        <a href="/services" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
                                            Explore Courses
                                        </a>
                                    </Magnetic>
                                    <Magnetic>
                                        <a href="/contact" className="px-8 py-4 bg-white dark:bg-gray-800 text-primary font-bold rounded-full hover:shadow-xl transition-all transform hover:scale-105 border-2 border-primary">
                                            Contact Us
                                        </a>
                                    </Magnetic>
                                </div>
                            </div>
                        </motion.div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Home;
