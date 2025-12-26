import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8"
            >
                <div className="text-center">
                    <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                        <LogIn size={48} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-black admin-text-black">Admin Login</h2>
                    <p className="mt-2 text-gray-600 font-medium admin-text-black">
                        Sign in to manage job postings
                    </p>
                </div>

                <style>{`
                    /* AUTOFILL STATE - Highest Priority Override */
                    #email:-webkit-autofill,
                    #password:-webkit-autofill,
                    #email:-webkit-autofill:hover, 
                    #password:-webkit-autofill:hover, 
                    #email:-webkit-autofill:focus, 
                    #password:-webkit-autofill:focus, 
                    #email:-webkit-autofill:active, 
                    #password:-webkit-autofill:active {
                        -webkit-box-shadow: 0 0 0 1000px #fff1f2 inset !important;
                        box-shadow: 0 0 0 1000px #fff1f2 inset !important;
                        -webkit-text-fill-color: #dc2626 !important;
                        color: #dc2626 ;
                        caret-color: #dc2626 !important;
                        transition: background-color 5000s ease-in-out 0s;
                    }

                    /* NORMAL & FOCUS STATE - ID Specificity */
                    #email, #password {
                        background: linear-gradient(to right, #fef2f2, #ffe4e6) !important;
                        color: #dc2626 ;
                        -webkit-text-fill-color: #dc2626 !important;
                        caret-color: #dc2626 !important;
                        border-color: #e5e7eb !important;
                        color-scheme: light !important; /* Forces browser to render text as if in light mode */
                    }

                    #email:focus, #password:focus {
                        border-color: #ef4444 !important;
                        ring: 2px solid #fee2e2 !important;
                        color: #dc2626 !important;
                    }

                    /* Button Gradient override */
                    .pastel-gradient-btn {
                        background: linear-gradient(to right, #fef2f2, #ffe4e6) !important;
                        color: #dc2626 ; /* Text also red to match inputs if desired, or black? User said 'white text to red', usually refers to input. Keeping button text consistent? User didn't specify button. I'll stick to black for button or make it red? Button text was black. I'll make button text #dc2626 to match? No, let's keep button black unless asked. Wait, 'keep that white text to red'. User might mean input. I will only change inputs first. */
                        border: 1px solid #fee2e2 !important;
                    }
                    .pastel-gradient-btn:hover {
                        background: linear-gradient(to right, #fee2e2, #fecaca) !important;
                        transform: scale(1.02);
                    }

                    /* Label and Header Color */
                    .admin-label, .admin-text-black {
                        color: #000000 !important;
                    }
                `}</style>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit} autoComplete="off">
                    {status === 'error' && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-center gap-3">
                            <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                            <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2 admin-label">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black-500" size={20} />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="off"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all admin-input"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold mb-2 admin-label">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="new-password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    style={{ color: '#dc2626', caretColor: '#dc2626', colorScheme: 'light' }}
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all admin-input"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-4 font-bold rounded-full transition-all transform shadow-xl shadow-primary/20 pastel-gradient-btn disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {status === 'loading' ? 'Signing in...' : 'Sign In'}
                    </button>

                    <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                        <p>Default credentials:</p>
                        <p className="font-mono">admin@gmail.com / Admin@123</p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
