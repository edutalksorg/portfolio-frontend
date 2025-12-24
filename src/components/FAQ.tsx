import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { FadeIn, SlideIn, Magnetic } from './animations';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        category: 'General',
        question: 'What is Edutalks?',
        answer: 'Edutalks is an innovative EdTech platform that bridges the gap between traditional education and industry requirements through interactive learning, expert mentorship, and practical skill development programs.'
    },
    {
        id: 2,
        category: 'General',
        question: 'Who can join Edutalks?',
        answer: 'Edutalks is open to students, fresh graduates, and working professionals looking to upskill or transition to new career paths. We offer programs suitable for beginners to advanced learners.'
    },
    {
        id: 3,
        category: 'Courses',
        question: 'What types of courses do you offer?',
        answer: 'We offer a wide range of courses including Web Development, Data Science, AI/ML, Mobile App Development, Digital Marketing, and more. Each course includes hands-on projects and industry mentorship.'
    },
    {
        id: 4,
        category: 'Courses',
        question: 'Are the courses self-paced or scheduled?',
        answer: 'We offer both self-paced and instructor-led courses. Self-paced courses allow you to learn at your own speed, while scheduled courses include live sessions with instructors and peer interaction.'
    },
    {
        id: 5,
        category: 'Internships',
        question: 'How do I apply for an internship?',
        answer: 'You can apply for internships through our Internships page. Simply browse available positions, select one that matches your interests, and submit your application with your resume and portfolio.'
    },
    {
        id: 6,
        category: 'Internships',
        question: 'Are internships paid?',
        answer: 'Yes, most of our internships are paid. The stipend varies based on the role, duration, and your skill level. Details are mentioned in each internship posting.'
    },
    {
        id: 7,
        category: 'Mentorship',
        question: 'How does the mentorship program work?',
        answer: 'Our mentorship program connects you with industry experts for one-on-one guidance. Mentors help with career planning, project reviews, interview preparation, and skill development through regular sessions.'
    },
    {
        id: 8,
        category: 'Pricing',
        question: 'What are the course fees?',
        answer: 'Course fees vary depending on the program duration and complexity. We offer flexible payment plans and occasional discounts. Contact us for detailed pricing information for specific courses.'
    }
];

const FAQ: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(faqData.map(faq => faq.category)))];

    const filteredFAQs = faqData.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <FadeIn className="text-center mb-16">
                    <span className="inline-block p-3 bg-primary/10 text-primary rounded-2xl mb-6">
                        <HelpCircle size={32} />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Frequently Asked <span className="text-primary italic">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about our platform and programs.
                    </p>
                </FadeIn>

                <div className="max-w-4xl mx-auto">
                    {/* Search Bar */}
                    <FadeIn delay={0.1} className="mb-8">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm"
                            />
                        </div>
                    </FadeIn>

                    {/* Category Filters */}
                    <SlideIn direction="up" delay={0.2} className="flex flex-wrap gap-3 mb-10 justify-center">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm ${selectedCategory === category
                                    ? 'bg-primary text-white shadow-primary/25 shadow-lg'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </SlideIn>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        <AnimatePresence mode="wait">
                            {filteredFAQs.length > 0 ? (
                                filteredFAQs.map((faq, index) => (
                                    <motion.div
                                        key={faq.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`bg-white dark:bg-gray-800 rounded-2xl border transition-all duration-300 overflow-hidden ${openId === faq.id
                                                ? 'border-primary shadow-lg shadow-primary/5'
                                                : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(faq.id)}
                                            className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors focus:outline-none"
                                        >
                                            <div className="flex-1 pr-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">
                                                        {faq.category}
                                                    </span>
                                                </div>
                                                <h3 className={`text-lg font-bold transition-colors ${openId === faq.id ? 'text-primary' : 'text-gray-900 dark:text-white'
                                                    }`}>
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: openId === faq.id ? 180 : 0 }}
                                                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                                                className={`flex-shrink-0 p-2 rounded-full ${openId === faq.id ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'
                                                    }`}
                                            >
                                                <ChevronDown size={20} />
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {openId === faq.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700/50 mt-2">
                                                        <div className="pt-4">
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                        <Search size={32} />
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                                        No questions found matching your search.
                                    </p>
                                    <button
                                        onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                                        className="mt-4 text-primary font-bold hover:underline"
                                    >
                                        Clear filters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Still Have Questions CTA */}
                    <FadeIn delay={0.3}>
                        <div className="mt-12 text-center p-10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 rounded-[32px] border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-2xl font-bold mb-3 relative z-10">Still have questions?</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
                                Can't find the answer you're looking for? Our friendly team is here to help you.
                            </p>

                            <div className="relative z-10">
                                <Magnetic>
                                    <a
                                        href="/contact"
                                        className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                                    >
                                        Contact Support
                                    </a>
                                </Magnetic>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
