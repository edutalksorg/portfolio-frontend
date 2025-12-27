import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { SlideIn, StaggerContainer, StaggerItem, Magnetic } from '../components/animations';
import { FloatingOrbs } from '../components/animations/ParticleField';
import api from '../utils/api';

const Contact: React.FC = () => {
    const [formState, setFormState] =
        useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (formState === 'success') {
            const timer = setTimeout(() => {
                setFormState('idle');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [formState]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        setErrorMessage('');

        try {
            const response = await api.post('/contact', formData);
            const data = response.data;

            if (data.success) {
                setFormState('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setFormState('error');
                setErrorMessage(
                    data.message || 'Failed to send message. Please try again.'
                );
            }
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setFormState('error');
            setErrorMessage(
                error.response?.data?.message ||
                'Network error. Please check your connection and try again.'
            );
        }
    };

    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            title: 'Visit Us',
            value: 'Hyderabad, Telangana, India',
            href: 'https://maps.google.com/?q=Hyderabad,Telangana,India'
        },
        {
            icon: <Phone size={24} />,
            title: 'Call Us',
            value: '+91 98765 43210',
            href: 'tel:+919876543210'
        },
        {
            icon: <Mail size={24} />,
            title: 'Email Us',
            value: 'contact@edutalksacademy.in',
            href: 'mailto:contact@edutalksacademy.in'
        }
    ];

    return (
        <div className="pt-24 min-h-screen overflow-hidden">
            <section className="py-20 relative">
                <FloatingOrbs orbCount={3} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                        {/* LEFT INFO */}
                        <SlideIn direction="left">
                            <motion.span
                                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Get In Touch
                            </motion.span>

                            <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight dark:text-white">
                                Let's{' '}
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
                                    Talk.
                                </motion.span>
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                                Have questions about our programs or want to partner with us?
                                Reach out and our team will get back to you within 24 hours.
                            </p>

                            <StaggerContainer staggerDelay={0.15} className="space-y-8">
                                {contactInfo.map((info, idx) => (
                                    <StaggerItem key={idx}>
                                        <a
                                            href={info.href}
                                            target={
                                                info.href.startsWith('http')
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            rel={
                                                info.href.startsWith('http')
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                            className="block"
                                        >
                                            <motion.div
                                                className="flex gap-6 items-center group cursor-pointer"
                                                whileHover={{ x: 10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <motion.div
                                                    className="p-4 bg-white dark:bg-gray-900 rounded-2xl text-primary border border-gray-200 dark:border-white/10 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors"
                                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {info.icon}
                                                </motion.div>

                                                <div>
                                                    <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors text-gray-900 dark:text-white">
                                                        {info.title}
                                                    </h4>
                                                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </a>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </SlideIn>

                        {/* RIGHT FORM */}
                        <SlideIn direction="right" delay={0.2}>
                            <motion.div
                                className="bg-white dark:bg-gray-900 p-10 md:p-12 rounded-[40px] border border-gray-200 dark:border-white/10 shadow-2xl relative overflow-hidden"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.3 }}
                            >

                                {/* Glow Decoration */}
                                <motion.div
                                    className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />

                                <AnimatePresence mode="wait">
                                    {formState === 'error' && (
                                        <motion.div
                                            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            <p className="text-red-600 dark:text-red-400 text-sm">
                                                {errorMessage}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence mode="wait">
                                    {formState === 'success' ? (
                                        <>
                                            {/* SUCCESS UI unchanged */}
                                        </>
                                    ) : (
                                        <motion.form
                                            onSubmit={handleSubmit}
                                            className="space-y-6 relative z-10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >

                                            {/* NAME + EMAIL */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                                <motion.div className="space-y-2">
                                                    <motion.label className="text-sm font-bold ml-1 uppercase tracking-wider text-gray-700 dark:text-white">
                                                        Full Name
                                                    </motion.label>

                                                    <input
                                                        required
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="John Doe"
                                                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                                                    />
                                                </motion.div>

                                                <motion.div className="space-y-2">
                                                    <motion.label className="text-sm font-bold ml-1 uppercase tracking-wider text-gray-700 dark:text-white">
                                                        Email Address
                                                    </motion.label>

                                                    <input
                                                        required
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="john@example.com"
                                                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                                                    />
                                                </motion.div>
                                            </div>

                                            {/* PHONE */}
                                            <motion.div className="space-y-2">
                                                <motion.label className="text-sm font-bold ml-1 uppercase tracking-wider text-gray-700 dark:text-white">
                                                    Phone Number
                                                </motion.label>

                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 00000 00000"
                                                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                                                />
                                            </motion.div>

                                            {/* MESSAGE */}
                                            <motion.div className="space-y-2">
                                                <motion.label className="text-sm font-bold ml-1 uppercase tracking-wider text-gray-700 dark:text-white">
                                                    Your Message
                                                </motion.label>

                                                <textarea
                                                    required
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    placeholder="How can we help you?"
                                                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                                                />
                                            </motion.div>

                                            {/* BUTTON */}
                                            <Magnetic strength={0.1}>
                                                <motion.button
                                                    disabled={formState === 'submitting'}
                                                    className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                                >
                                                    {formState === 'submitting' ? (
                                                        <>
                                                            <Loader2 className="animate-spin" size={20} />
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <motion.div
                                                                animate={{ x: [0, 5, 0] }}
                                                                transition={{
                                                                    duration: 1,
                                                                    repeat: Infinity
                                                                }}
                                                            >
                                                                <Send size={20} />
                                                            </motion.div>
                                                        </>
                                                    )}
                                                </motion.button>
                                            </Magnetic>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </SlideIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
