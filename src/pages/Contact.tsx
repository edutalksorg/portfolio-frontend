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
            value: '+91 96401 11233 / +91 95051 11233',
            href: 'tel:+919640111233'
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
            <section className="py-12 sm:py-20 relative">
                <FloatingOrbs orbCount={3} />

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">

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

                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 sm:mb-8 leading-tight text-[var(--text-primary)]">
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

                            <p className="text-lg sm:text-xl text-[var(--text-muted)] mb-8 sm:mb-12 leading-relaxed">
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
                                                    className="p-4 bg-[var(--card)] rounded-2xl text-primary border border-[var(--border)] shadow-lg group-hover:bg-primary group-hover:text-white transition-colors"
                                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {info.icon}
                                                </motion.div>

                                                <div>
                                                    <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors text-[var(--text-primary)]">
                                                        {info.title}
                                                    </h4>
                                                    <p className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
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
                                className="bg-[var(--card)] p-6 sm:p-10 md:p-12 rounded-[40px] border border-[var(--border)] shadow-2xl relative overflow-hidden"
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
                                            className="mb-6 p-4 bg-[var(--error)]/10 border border-[var(--error)]/20 rounded-2xl"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            <p className="text-[var(--error)] text-sm font-medium">
                                                {errorMessage}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence mode="wait">
                                    {formState === 'success' ? (
                                        <motion.div
                                            key="success"
                                            className="text-center py-12"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <div className="w-20 h-20 bg-[var(--success)]/10 text-[var(--success)] rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Send size={40} />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Message Sent!</h3>
                                            <p className="text-[var(--text-muted)]">
                                                Thank you for reaching out. We'll get back to you shortly.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            onSubmit={handleSubmit}
                                            className="space-y-6 relative z-10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >

                                            {/* NAME + EMAIL */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                                <motion.div className="space-y-2">
                                                    <motion.label className="text-sm font-bold ml-1 uppercase tracking-wider text-[var(--text-primary)]">
                                                        Full Name
                                                    </motion.label>

                                                    <input
                                                        required
                                                        type="text"
                                                        name="name"
                                                        placeholder="John Doe"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full px-6 py-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    />
                                                </motion.div>

                                                <motion.div className="space-y-2">
                                                    <motion.label className="text-sm font-bold ml-1 uppercase tracking-wider text-[var(--text-primary)]">
                                                        Email Address
                                                    </motion.label>

                                                    <input
                                                        required
                                                        type="email"
                                                        name="email"
                                                        placeholder="john@example.com"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full px-6 py-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    />
                                                </motion.div>
                                            </div>

                                            {/* PHONE */}
                                            <motion.div className="space-y-2">
                                                <motion.label className="text-sm font-bold ml-1 uppercase tracking-wider text-[var(--text-primary)]">
                                                    Phone Number
                                                </motion.label>

                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="+91 96401 11233"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-6 py-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </motion.div>

                                            {/* MESSAGE */}
                                            <motion.div className="space-y-2">
                                                <motion.label className="text-sm font-bold ml-1 uppercase tracking-wider text-[var(--text-primary)]">
                                                    Your Message
                                                </motion.label>

                                                <textarea
                                                    required
                                                    name="message"
                                                    placeholder="How can we help you?"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    className="w-full px-6 py-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                                />
                                            </motion.div>

                                            {/* BUTTON */}
                                            <Magnetic strength={0.1}>
                                                <motion.button
                                                    disabled={formState === 'submitting'}
                                                    className="w-full py-5 bg-[var(--primary)] text-white font-black rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
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
