import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FloatingOrbs } from '../components/animations/ParticleField';
import api from '../utils/api';

const AdminLogin: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await api.post('/admin/login', formData);
            const data = response.data;

            if (data.success) {
                // Store token in localStorage
                localStorage.setItem('adminToken', data.token);
                localStorage.setItem('adminData', JSON.stringify(data.admin));

                // Redirect to admin dashboard
                navigate('/admin/dashboard');
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Login failed. Please try again.');
            }
        } catch (error: any) {
            console.error('Login error:', error);
            setStatus('error');
            setErrorMessage(error.response?.data?.message || 'Network error. Please try again later.');
        }
    };

    return (
        <div className="pt-24 min-h-screen overflow-hidden flex items-center justify-center relative">
            <FloatingOrbs orbCount={3} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md mx-auto w-full"
                >
                    <div className="bg-[var(--card)] p-8 sm:p-10 rounded-[40px] border border-[var(--border)] shadow-2xl relative overflow-hidden">

                        {/* Glow Decoration */}
                        <motion.div
                            className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        <div className="text-center mb-8 relative z-10">
                            <motion.div
                                className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 text-primary"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                            >
                                <LogIn size={32} />
                            </motion.div>
                            <h2 className="text-3xl font-black text-[var(--text-primary)] mb-2">Admin Login</h2>
                            <p className="text-[var(--text-muted)] font-medium">
                                Sign in to manage job postings
                            </p>
                        </div>



                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit} autoComplete="off">
                            {status === 'error' && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-center gap-3">
                                    <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                                    <p className="text-sm text-red-500">{errorMessage}</p>
                                </div>
                            )}

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={20} />
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="off"
                                            placeholder=""
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-900/50 border border-gray-700/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[var(--text-primary)]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="relative">
                                        <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={20} />
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            autoComplete="new-password"
                                            placeholder=""
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-900/50 border border-gray-700/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[var(--text-primary)]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-[var(--primary)] text-white font-black rounded-2xl hover:opacity-90 transition-all shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Signing in...' : 'Sign In'}
                            </motion.button>


                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminLogin;
