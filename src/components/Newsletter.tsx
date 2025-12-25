import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../utils/api';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const response = await api.post('/newsletter', { email });
            const data = response.data;

            if (data.success) {
                setStatus('success');
                setMessage('Thank you for subscribing! Check your email for confirmation.');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Failed to subscribe. Please try again.');
            }
        } catch (error: any) {
            console.error('Newsletter subscription error:', error);
            setStatus('error');
            setMessage(error.response?.data?.message || 'Network error. Please try again later.');
        }

        // Reset status after 5 seconds
        setTimeout(() => {
            setStatus('idle');
            setMessage('');
        }, 5000);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block p-4 bg-white/10 rounded-2xl mb-6">
                            <Mail size={40} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-4">
                            Stay Updated with <span className="italic">Edutalks</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-8">
                            Subscribe to our newsletter for the latest courses, internship opportunities, career tips, and exclusive offers.
                        </p>

                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    disabled={status === 'loading'}
                                    className="flex-1 px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                                >
                                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </div>

                            {/* Status Messages */}
                            {message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-4 p-4 rounded-2xl flex items-center gap-3 ${status === 'success'
                                        ? 'bg-green-500/20 border border-green-500/30'
                                        : 'bg-red-500/20 border border-red-500/30'
                                        }`}
                                >
                                    {status === 'success' ? (
                                        <CheckCircle2 size={20} className="flex-shrink-0" />
                                    ) : (
                                        <AlertCircle size={20} className="flex-shrink-0" />
                                    )}
                                    <p className="text-sm text-white">{message}</p>
                                </motion.div>
                            )}
                        </form>

                        <p className="text-sm text-white/70 mt-6">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
