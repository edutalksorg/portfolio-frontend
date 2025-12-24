import React, { type ReactElement, useState } from 'react';
import { Brain, BarChart3, Terminal, Globe, Cloud, ShieldCheck, FileCode, ArrowRight, CheckCircle, Zap, BookOpen, Users, X, Send, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';
import { FloatingOrbs } from '../components/animations/ParticleField';
import TechStack from '../components/TechStack';
import FAQ from '../components/FAQ';

const Services: React.FC = () => {
    const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
    const [isEnrolling, setIsEnrolling] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const courses = [
        {
            icon: <Brain size={48} />,
            title: 'Artificial Intelligence & Machine Learning',
            description: 'Master neural networks, deep learning, and predictive modeling to build intelligent systems that solve real-world problems.',
            color: 'from-purple-600 to-indigo-500',
            curriculum: [
                'Introduction to Artificial Intelligence',
                'Machine Learning Fundamentals',
                'Supervised & Unsupervised Learning',
                'Deep Learning Essentials',
                'Neural Networks',
                'Natural Language Processing (NLP)',
                'Computer Vision',
                'AI Tools & Frameworks',
                'Generative AI Fundamentals',
                'Prompt Engineering'
            ]
        },
        {
            icon: <BarChart3 size={48} />,
            title: 'Data Science & Analytics',
            description: 'Extract powerful insights from complex data sets using statistical analysis, machine learning, and advanced visualization tools.',
            color: 'from-blue-600 to-cyan-500',
            curriculum: [
                'Data Science Foundations',
                'Python for Data Science',
                'Statistics for Data Science',
                'Data Analysis with Pandas & NumPy',
                'Data Visualization (Matplotlib, Seaborn)',
                'SQL for Data Analysts',
                'Big Data Basics',
                'Data Science Projects',
                'Business Analytics',
                'Power BI & Tableau Basics'
            ]
        },
        {
            icon: <Terminal size={48} />,
            title: 'Full Stack Development',
            description: 'Comprehensive training across both frontend and backend technologies to build scalable, production-ready applications.',
            color: 'from-emerald-600 to-teal-500',
            curriculum: [
                'Full Stack Web Development Overview',
                'Frontend Development (HTML, CSS, JavaScript)',
                'Advanced JavaScript',
                'React.js',
                'Backend Development with Node.js',
                'Express.js & REST APIs',
                'Database Management (MySQL, MongoDB)',
                'MERN Stack Development',
                'Authentication & Security Basics',
                'Full Stack Capstone Project'
            ]
        },
        {
            icon: <Globe size={48} />,
            title: 'Web Development',
            description: 'Design and develop modern, responsive, and high-performance websites using the latest standards and frameworks.',
            color: 'from-orange-600 to-amber-500',
            curriculum: [
                'Web Development Fundamentals',
                'Responsive Web Design',
                'Bootstrap & Tailwind CSS',
                'PHP & MySQL',
                'WordPress Development',
                'Website Deployment & Hosting'
            ]
        },
        {
            icon: <Cloud size={48} />,
            title: 'Cloud Computing & DevOps',
            description: 'Master AWS, Azure, and infrastructure automation while building robust CI/CD pipelines for modern software delivery.',
            color: 'from-sky-600 to-blue-500',
            curriculum: [
                'Cloud Computing Fundamentals',
                'AWS Cloud Practitioner Basics',
                'Microsoft Azure Fundamentals',
                'Google Cloud Platform Basics',
                'DevOps Fundamentals',
                'Docker Basics',
                'Kubernetes Introduction',
                'CI/CD Pipelines'
            ]
        },
        {
            icon: <ShieldCheck size={48} />,
            title: 'Cyber Security & Networking',
            description: 'Protect digital assets and networks from evolving threats through advanced security protocols and ethical hacking techniques.',
            color: 'from-red-600 to-rose-500',
            curriculum: [
                'Cyber Security Fundamentals',
                'Ethical Hacking Basics',
                'Network Fundamentals',
                'Linux for IT Professionals',
                'Information Security Basics',
                'Cyber Laws & Compliance'
            ]
        },
        {
            icon: <FileCode size={48} />,
            title: 'Programming Languages',
            description: 'Master core languages like Python, Java, and C++ to build a solid foundation for your career in software engineering.',
            color: 'from-violet-600 to-purple-500',
            curriculum: [
                'Python Programming',
                'Java Programming',
                'C Programming',
                'C++ Programming',
                'Data Structures & Algorithms'
            ]
        }
    ];

    const benefits = [
        { icon: <Zap size={24} />, text: 'Industry-relevant curriculum' },
        { icon: <Users size={24} />, text: 'Expert mentorship' },
        { icon: <CheckCircle size={24} />, text: 'Hands-on projects' },
        { icon: <BookOpen size={24} />, text: 'Flexible learning' }
    ];

    const handleClose = () => {
        setSelectedCourse(null);
        setIsEnrolling(false);
        setIsSubmitted(false);
    };

    const handleEnroll = () => {
        setIsEnrolling(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 3000);
    };

    return (
        <div className="pt-24 min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-transparent relative">
                <FloatingOrbs orbCount={3} />

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
                            What We Offer
                        </motion.span>

                        <h1 className="text-3xl md:text-5xl font-black mb-6">
                            <motion.span
                                className="text-primary italic inline-block"
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >Courses</motion.span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Comprehensive programs designed to transform your career through practical learning, expert mentorship, and real-world experience.
                        </p>

                        {/* Quick benefits */}
                        <StaggerContainer staggerDelay={0.1} className="flex flex-wrap justify-center gap-6 mt-10">
                            {benefits.map((benefit, idx) => (
                                <StaggerItem key={idx}>
                                    <motion.div
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                        whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                                    >
                                        <span className="text-primary">{benefit.icon}</span>
                                        <span className="font-medium">{benefit.text}</span>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </motion.div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, idx) => (
                            <StaggerItem key={idx}>
                                <motion.div
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col"
                                >
                                    <div className="flex-1">
                                        <motion.div
                                            className={`p-4 bg-gradient-to-br ${course.color} text-white rounded-2xl inline-block mb-6`}
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {course.icon}
                                        </motion.div>

                                        <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                            {course.description}
                                        </p>
                                    </div>

                                    <motion.div
                                        className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <button
                                            onClick={() => setSelectedCourse(course)}
                                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all cursor-pointer"
                                        >
                                            Learn More <ArrowRight size={18} />
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Technology Stack */}
            <TechStack />

            {/* Process Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-black mb-4">
                            Our Learning <span className="text-primary italic">Process</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A structured approach to help you master new skills effectively
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-primary via-primary to-primary/30" />

                        {[
                            { step: 1, title: 'Enroll', desc: 'Choose your program and sign up' },
                            { step: 2, title: 'Learn', desc: 'Access structured curriculum' },
                            { step: 3, title: 'Practice', desc: 'Work on real projects' },
                            { step: 4, title: 'Succeed', desc: 'Launch your career' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="text-center relative z-10"
                            >
                                <motion.div
                                    className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg shadow-primary/30"
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    animate={{
                                        boxShadow: [
                                            '0 10px 25px -5px rgba(79, 70, 229, 0.3)',
                                            '0 20px 35px -5px rgba(79, 70, 229, 0.4)',
                                            '0 10px 25px -5px rgba(79, 70, 229, 0.3)'
                                        ]
                                    }}
                                    transition={{
                                        boxShadow: { duration: 2, repeat: Infinity },
                                        scale: { duration: 0.2 }
                                    }}
                                >
                                    {item.step}
                                </motion.div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ />

            {/* Combined Modal for Curriculum & Enquiry */}
            <AnimatePresence mode="wait">
                {selectedCourse && (
                    <motion.div
                        key="modal"
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                        >
                            <div className={`h-2 bg-gradient-to-r ${selectedCourse.color}`} />

                            <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto custom-scrollbar">
                                <div className="flex justify-between items-center mb-8">
                                    {isEnrolling && !isSubmitted && (
                                        <button
                                            onClick={() => setIsEnrolling(false)}
                                            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-1 text-sm font-bold"
                                        >
                                            <ChevronLeft size={18} /> Back
                                        </button>
                                    )}
                                    <button
                                        onClick={handleClose}
                                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-400 hover:text-primary transition-colors ml-auto"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <AnimatePresence mode="wait">
                                    {!isEnrolling ? (
                                        <motion.div
                                            key="curriculum"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                        >
                                            <div className="flex items-center gap-6 mb-10">
                                                <div className={`p-4 bg-gradient-to-br ${selectedCourse.color} text-white rounded-2xl shadow-lg`}>
                                                    {React.cloneElement(selectedCourse.icon as ReactElement<{ size: number }>, { size: 32 })}
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-black leading-tight">{selectedCourse.title}</h3>
                                                    <p className="text-primary font-bold text-sm tracking-wider uppercase mt-1">Syllabus Overview</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                                {selectedCourse.curriculum.map((item: string, i: number) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50"
                                                    >
                                                        <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary text-xs font-bold rounded-full flex items-center justify-center">
                                                            {i + 1}
                                                        </span>
                                                        <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">{item}</p>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <div className="flex justify-center">
                                                <button
                                                    onClick={handleEnroll}
                                                    className="px-10 py-4 bg-primary text-white font-black rounded-full hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group"
                                                >
                                                    Enroll Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ) : isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-10"
                                        >
                                            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle size={40} />
                                            </div>
                                            <h3 className="text-3xl font-black mb-4">Interest Received!</h3>
                                            <p className="text-gray-600 dark:text-gray-400">Our success team will contact you shortly to discuss your journey in {selectedCourse.title}.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="enquiry-form"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <div className="text-center mb-10">
                                                <h3 className="text-3xl font-black mb-2">Join the Future</h3>
                                                <p className="text-gray-600 dark:text-gray-400">Fill in your details to begin your transformation.</p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">Your Name</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            placeholder="John Doe"
                                                            className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 focus:border-primary outline-none transition-all"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">Phone Number</label>
                                                        <input
                                                            required
                                                            type="tel"
                                                            placeholder="+91 98765 43210"
                                                            className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 focus:border-primary outline-none transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">Email Address</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 focus:border-primary outline-none transition-all"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">Selected Course</label>
                                                    <select
                                                        className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 focus:border-primary outline-none transition-all appearance-none"
                                                        defaultValue={selectedCourse.title}
                                                    >
                                                        {courses.map((c, idx) => (
                                                            <option key={idx} value={c.title}>{c.title}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                                                >
                                                    Interested <Send size={20} />
                                                </button>
                                            </form>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Services;
