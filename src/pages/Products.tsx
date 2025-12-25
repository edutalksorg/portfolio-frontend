import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Mic, GraduationCap } from 'lucide-react';
import { FadeIn, Magnetic, StaggerContainer, StaggerItem } from '../components/animations';

const Products: React.FC = () => {
    return (
        <div className="min-h-screen pt-20 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 flex flex-col items-center justify-center">
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-6"
                        >
                            <ShoppingBag className="mr-2" size={20} />
                            <span className="font-semibold">Our Store</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight dark:text-white">
                            Premium <span className="text-primary italic">Products</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
                            Cutting-edge tools designed to enhance your learning experience.
                            <br />
                            <span className="text-base text-primary font-medium mt-2 inline-block">These features are coming soon!</span>
                        </p>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                            {/* AI Pronunciation Product */}
                            <StaggerItem>
                                <motion.a
                                    href="https://edutalks.tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden group block"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Mic size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 dark:text-white">AI Pronunciation</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        Master any language with our advanced AI-powered pronunciation coach. Get real-time feedback on your accent and intonation.
                                    </p>

                                    <div className="inline-flex items-center text-sm font-semibold text-white bg-primary px-4 py-2 rounded-full">
                                        Try Now <ArrowRight size={14} className="ml-2" />
                                    </div>
                                </motion.a>
                            </StaggerItem>

                            {/* Exam Portal Product */}
                            <StaggerItem>
                                <motion.a
                                    href="https://exam.eduexam.work.gd/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden group block"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 mx-auto group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                        <GraduationCap size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 dark:text-white">Exam Portal</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        Comprehensive testing platform with mock exams, detailed analytics, and personalized study recommendations.
                                    </p>

                                    <div className="inline-flex items-center text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-full">
                                        Try Now <ArrowRight size={14} className="ml-2" />
                                    </div>
                                </motion.a>
                            </StaggerItem>
                        </StaggerContainer>

                        <div className="max-w-md mx-auto">
                            <Magnetic>
                                <a href="/" className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700">
                                    Return Home <ArrowRight size={18} className="ml-2" />
                                </a>
                            </Magnetic>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Products;
