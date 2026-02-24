import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown, Globe, User } from 'lucide-react';
import StudentImage from '../assets/image (2).png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { apiBaseUrl } from '../utils/api';

const LandingPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        grade: '',
        state: '',
        board: '',
        course: '',
        sessionMode: 'offline' as 'online' | 'offline',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [openDropdown, setOpenDropdown] = useState<'state' | 'grade' | 'board' | 'course' | null>(null);

    const IndianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
        "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
        "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
        "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"
    ];

    const handleOfflineSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch(`${apiBaseUrl}api/registrations`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus('success');
                setErrorMessage('');
                setFormData({ name: '', phone: '', email: '', grade: '', state: '', board: '', course: '', sessionMode: 'offline' }); // Reset form
            } else {
                // Parse error message from backend
                const errorData = await response.json();
                console.error('Registration error:', errorData.error);
                setSubmitStatus('error');
                setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error("Registration failed:", error);
            setSubmitStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <Navbar />

            <main>
                {/* Hero Section with Right-Side Form */}
                <div className="bg-gradient-to-br from-gray-900 via-[#1a1b4b] to-[#2d1b4e] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center" />
                    {/* Abstract Geometric Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-purple-300/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], x: [0, 100, 0] }}
                            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
                            className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ y: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                            className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-3xl"
                        />
                        {/* Background Wave Texture (Behind Content) */}
                        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 opacity-30">
                            <svg className="relative block w-[calc(100%+1.3px)] h-[150px] md:h-[300px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" fillOpacity="0.2"></path>
                                <path d="M97.29,62.88c56-11.85,112.59-15.08,168.66-3.79,68.7,13.84,131.6,44.75,202.93,52.36,66.82,7.13,137.66-8.91,200.7-32.91C732,59.38,803,34.05,876.59,25.94c77.12-8.52,154.54,6.43,222.86,39.36,31.7,15.28,62.15,26.75,98.66,23.12l1.9-88.42H0v11.7C24.47,21.57,59,54.8,97.29,62.88Z" fill="#ffffff" fillOpacity="0.4"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 pt-12 pb-12 lg:pt-20 lg:pb-2 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">

                            {/* Left Content */}
                            {/* Left Content - Interactive Visuals */}
                            <div className="relative h-[600px] w-full hidden lg:block">
                                {/* Student Image with Mask for Seamless Blending */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center items-start"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%), radial-gradient(circle at center, black 40%, transparent 80%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%), radial-gradient(circle at center, black 40%, transparent 80%)',
                                        maskComposite: 'intersect',
                                        WebkitMaskComposite: 'source-in'
                                    }}
                                >
                                    <img
                                        src={StudentImage}
                                        alt="Student Learning"
                                        className="h-[700px] w-auto object-contain filter contrast-125 saturate-110 brightness-105"
                                    />
                                </motion.div>

                                {/* Floating Glass Elements */}

                                {/* 1. Live Classes Badge - Glassmorphism */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute top-10 left-10 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl z-20 flex items-center gap-3"
                                >
                                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                    <span className="font-semibold text-gray-800">Live Classes</span>
                                </motion.div>

                                {/* 2. Success Rate - Glassmorphism */}
                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-32 right-10 p-5 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl z-20"
                                >
                                    <div className="text-sm text-gray-600 mb-1">Success Rate</div>
                                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                                        98%
                                    </div>
                                </motion.div>

                                {/* 3. Expert Tutors - Glassmorphism */}
                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-1/3 right-0 transform translate-x-10 p-4 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl z-20 flex flex-col items-center"
                                >
                                    <div className="flex -space-x-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white" />
                                        <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white" />
                                        <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white" />
                                    </div>
                                    <span className="text-xs font-bold text-gray-800">Expert Tutors</span>
                                </motion.div>                           {/* Floating Elements Removed as per user request */}

                            </div>

                            {/* Mobile View Strategy */}
                            <div className="lg:hidden text-center text-white mb-8">
                                <h1 className="text-4xl font-bold mb-4">Learn with ease. <br /><span className="text-yellow-400">Score with confidence.</span></h1>
                                <p className="opacity-90">Interactive learning for a batter future.</p>
                            </div>

                            {/* Right Content - The "Book Free Class" Form (Offline Registration) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-gray-900/90 backdrop-blur-sm text-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md mx-auto w-full border border-gray-800 border-t-8 border-t-purple-600"
                            >
                                <h3 className="text-2xl font-bold mb-2 text-center text-white">Book your Free Session</h3>
                                <p className="text-gray-400 text-center mb-4 text-sm">Learn from India's best teachers</p>

                                {/* Session Mode Toggle */}
                                <div className="mb-6">
                                    <p className="text-center text-gray-300 font-semibold mb-3">Select the Session Mode</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, sessionMode: 'online' })}
                                            className={`py-3 px-4 rounded-lg font-semibold transition-all ${formData.sessionMode === 'online'
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
                                                }`}
                                        >
                                            Online
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, sessionMode: 'offline' })}
                                            className={`py-3 px-4 rounded-lg font-semibold transition-all ${formData.sessionMode === 'offline'
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
                                                }`}
                                        >
                                            Offline
                                        </button>
                                    </div>
                                </div>


                                {/* Conditional Content Based on Session Mode */}
                                {formData.sessionMode === 'online' ? (
                                    /* Online Classes Card */
                                    <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                                        <div className="bg-purple-900/30 p-4 rounded-2xl mb-6 inline-block">
                                            <Globe size={40} className="text-purple-400" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-4">Online Classes</h4>
                                        <p className="text-gray-400 mb-8 max-w-sm">
                                            Live interactive classes, conceptual videos, and personalised learning journeys for every student.
                                            <span className="block mt-3 text-purple-400 font-semibold">
                                                You will be redirected to our trusted platform for live classes.
                                            </span>
                                        </p>
                                        <a
                                            href="https://www.eduwallah.work.gd/register"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full max-w-sm py-3 px-6 border-2 border-purple-600 text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all text-center"
                                        >
                                            Register Online
                                        </a>
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-center text-gray-300 font-semibold mb-2">Enter Your Details</p>

                                        <form onSubmit={handleOfflineSubmit} className="space-y-2">
                                            <div>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    value={formData.name}
                                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="Enter Mobile Number"
                                                    value={formData.phone}
                                                    maxLength={10}
                                                    pattern="[0-9]{10}"
                                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Enter Email Address"
                                                    value={formData.email}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition text-left flex items-center justify-between text-gray-700 ${openDropdown === 'state' ? 'border-purple-500 ring-2 ring-purple-500 ring-opacity-50' : 'border-gray-200'}`}
                                                        onClick={() => setOpenDropdown(openDropdown === 'state' ? null : 'state')}
                                                    >
                                                        <span className={`block truncate ${!formData.state ? 'text-gray-400' : ''}`}>
                                                            {formData.state || "Select State"}
                                                        </span>
                                                        <ChevronDown size={20} className={`transform transition-transform flex-shrink-0 ml-2 ${openDropdown === 'state' ? 'rotate-180' : ''}`} />
                                                    </button>

                                                    {openDropdown === 'state' && (
                                                        <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                                                            {IndianStates.map((state) => (
                                                                <div
                                                                    key={state}
                                                                    className="px-4 py-2.5 hover:bg-gray-800 cursor-pointer text-gray-700 text-sm transition border-b border-gray-50 last:border-0"
                                                                    onClick={() => {
                                                                        setFormData({ ...formData, state });
                                                                        setOpenDropdown(null);
                                                                    }}
                                                                >
                                                                    {state}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition text-left flex items-center justify-between text-gray-700 ${openDropdown === 'grade' ? 'border-purple-500 ring-2 ring-purple-500 ring-opacity-50' : 'border-gray-200'}`}
                                                        onClick={() => setOpenDropdown(openDropdown === 'grade' ? null : 'grade')}
                                                    >
                                                        <span className={`block truncate ${!formData.grade ? 'text-gray-400' : ''}`}>
                                                            {formData.grade === '1-5' ? 'Class 1-5' :
                                                                formData.grade === '6-10' ? 'Class 6-10' :
                                                                    formData.grade === 'intermediate' ? 'Intermediate' :
                                                                        formData.grade === 'ug' ? 'UG' :
                                                                            "Select Grade"}
                                                        </span>
                                                        <ChevronDown size={20} className={`transform transition-transform flex-shrink-0 ml-2 ${openDropdown === 'grade' ? 'rotate-180' : ''}`} />
                                                    </button>

                                                    {openDropdown === 'grade' && (
                                                        <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] overflow-hidden">
                                                            {[
                                                                { label: 'Class 1-5', value: '1-5' },
                                                                { label: 'Class 6-10', value: '6-10' },
                                                                { label: 'Intermediate', value: 'intermediate' },
                                                                { label: 'UG', value: 'ug' }
                                                            ].map((option) => (
                                                                <div
                                                                    key={option.value}
                                                                    className="px-4 py-2.5 hover:bg-gray-800 cursor-pointer text-gray-700 text-sm transition border-b border-gray-50 last:border-0"
                                                                    onClick={() => {
                                                                        setFormData({ ...formData, grade: option.value });
                                                                        setOpenDropdown(null);
                                                                    }}
                                                                >
                                                                    {option.label}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Conditional Board Dropdown - Only show for Grade 6-10 */}
                                                {formData.grade === '6-10' && (
                                                    <div className="relative">
                                                        <button
                                                            type="button"
                                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition text-left flex items-center justify-between text-gray-700 ${openDropdown === 'board' ? 'border-purple-500 ring-2 ring-purple-500 ring-opacity-50' : 'border-gray-200'}`}
                                                            onClick={() => setOpenDropdown(openDropdown === 'board' ? null : 'board')}
                                                        >
                                                            <span className={`block truncate ${!formData.board ? 'text-gray-400' : ''}`}>
                                                                {formData.board || "Select Board"}
                                                            </span>
                                                            <ChevronDown size={20} className={`transform transition-transform flex-shrink-0 ml-2 ${openDropdown === 'board' ? 'rotate-180' : ''}`} />
                                                        </button>

                                                        {openDropdown === 'board' && (
                                                            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] overflow-hidden">
                                                                {['State Board', 'CBSE', 'ICSE'].map((board) => (
                                                                    <div
                                                                        key={board}
                                                                        className="px-4 py-2.5 hover:bg-gray-800 cursor-pointer text-gray-700 text-sm transition border-b border-gray-50 last:border-0"
                                                                        onClick={() => {
                                                                            setFormData({ ...formData, board });
                                                                            setOpenDropdown(null);
                                                                        }}
                                                                    >
                                                                        {board}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Conditional Course Dropdown - Only show for UG */}
                                                {formData.grade === 'ug' && (
                                                    <div className="relative">
                                                        <button
                                                            type="button"
                                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition text-left flex items-center justify-between text-gray-700 ${openDropdown === 'course' ? 'border-purple-500 ring-2 ring-purple-500 ring-opacity-50' : 'border-gray-200'}`}
                                                            onClick={() => setOpenDropdown(openDropdown === 'course' ? null : 'course')}
                                                        >
                                                            <span className={`block truncate ${!formData.course ? 'text-gray-400' : ''}`}>
                                                                {formData.course || "Select Course"}
                                                            </span>
                                                            <ChevronDown size={20} className={`transform transition-transform flex-shrink-0 ml-2 ${openDropdown === 'course' ? 'rotate-180' : ''}`} />
                                                        </button>

                                                        {openDropdown === 'course' && (
                                                            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-60 overflow-y-auto">
                                                                {[
                                                                    'Artificial Intelligence and Machine Learning',
                                                                    'Data Science and Analytics',
                                                                    'Python Full Stack Development',
                                                                    'Java Full Stack Development',
                                                                    'Web Development',
                                                                    'Cloud Computing and DevOps',
                                                                    'Cyber Security and Networking',
                                                                    'C Programming',
                                                                    'C++ Programming',
                                                                    'Data Structures and Algorithms'
                                                                ].map((course) => (
                                                                    <div
                                                                        key={course}
                                                                        className="px-4 py-2.5 hover:bg-gray-800 cursor-pointer text-gray-700 text-sm transition border-b border-gray-50 last:border-0"
                                                                        onClick={() => {
                                                                            setFormData({ ...formData, course });
                                                                            setOpenDropdown(null);
                                                                        }}
                                                                    >
                                                                        {course}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Conditional Exam Prep Dropdown - Only show for Intermediate */}
                                                {formData.grade === 'intermediate' && (
                                                    <div className="relative">
                                                        <button
                                                            type="button"
                                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition text-left flex items-center justify-between text-gray-700 ${openDropdown === 'course' ? 'border-purple-500 ring-2 ring-purple-500 ring-opacity-50' : 'border-gray-200'}`}
                                                            onClick={() => setOpenDropdown(openDropdown === 'course' ? null : 'course')}
                                                        >
                                                            <span className={`block truncate ${!formData.course ? 'text-gray-400' : ''}`}>
                                                                {formData.course || "Select Exam Preparation"}
                                                            </span>
                                                            <ChevronDown size={20} className={`transform transition-transform flex-shrink-0 ml-2 ${openDropdown === 'course' ? 'rotate-180' : ''}`} />
                                                        </button>

                                                        {openDropdown === 'course' && (
                                                            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] overflow-hidden">
                                                                {['JEE', 'NEET', 'EAMCET', 'BITSAT'].map((exam) => (
                                                                    <div
                                                                        key={exam}
                                                                        className="px-4 py-2.5 hover:bg-gray-800 cursor-pointer text-gray-700 text-sm transition border-b border-gray-50 last:border-0"
                                                                        onClick={() => {
                                                                            setFormData({ ...formData, course: exam });
                                                                            setOpenDropdown(null);
                                                                        }}
                                                                    >
                                                                        {exam}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transform active:scale-95 transition-all mt-2
                      ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'}`}
                                            >
                                                {isSubmitting ? 'Scheduling...' : 'Schedule a Free Class'}
                                            </button>

                                            {submitStatus === 'success' && (
                                                <div className="bg-green-100 text-green-700 p-2 rounded text-center text-sm">
                                                    Registration successful! We'll contact you soon.
                                                </div>
                                            )}
                                            {submitStatus === 'error' && (
                                                <div className="bg-red-100 text-red-700 p-2 rounded text-center text-sm">
                                                    {errorMessage || 'Something went wrong. Please try again.'}
                                                </div>
                                            )}
                                        </form>
                                    </>
                                )}
                            </motion.div>

                        </div>
                    </div>


                </div>


                {/* Section: Comprehensive Learning Programs (Online/Offline Cards) */}
                <div className="py-16 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white">Comprehensive learning programs</h2>
                            <p className="text-gray-400 mt-2">& classes for all students</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Online Card */}
                            <div className="p-8 rounded-2xl border border-gray-800 shadow-xl bg-gray-800 hover:bg-gray-750 hover:shadow-2xl transition group relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">POPULAR</div>
                                <div className="flex items-start justify-between mb-6">
                                    <div className="bg-purple-900/40 p-3 rounded-xl text-purple-400">
                                        <Globe size={32} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">Online Classes</h3>
                                <p className="text-gray-400 mb-6">
                                    Live interactive classes, conceptual videos, and personalised learning journeys for every student.
                                    <span className="block mt-3 text-purple-400 font-semibold">
                                        You will be redirected to our trusted platform for live classes.
                                    </span>
                                </p>
                                <a
                                    href="https://www.eduwallah.work.gd/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full text-center py-3 rounded-lg border-2 border-purple-500 text-purple-400 font-bold hover:bg-purple-600 hover:text-white transition"
                                >
                                    Register Online
                                </a>
                            </div>

                            {/* Offline Info Card */}
                            <div className="p-8 rounded-2xl border border-gray-800 shadow-xl bg-gray-800 hover:shadow-2xl transition">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="bg-orange-900/40 p-3 rounded-xl text-orange-400">
                                        <User size={32} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">Classroom Learning</h3>
                                <p className="text-gray-400 mb-6">
                                    Experience the magic of in-person learning with India's top teachers at a centre near you.
                                    <span className="block mt-3 text-orange-400 font-semibold">
                                        Join our classroom programs for a comprehensive learning experience.
                                    </span>
                                </p>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="inline-block w-full text-center py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                                >
                                    Book Free Session
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Section: Our Learning Programs (Carousel) */}
                <div className="py-16 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white">Our Learning Programs</h2>
                            <p className="text-gray-400 mt-2">Explore programs designed for every grade</p>
                        </div>

                        {/* Horizontal Scrollable Program Cards */}
                        <div className="relative mb-8">
                            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                                {/* Program Card 1 */}
                                <div className="min-w-[280px] bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all flex-shrink-0 snap-start border border-gray-700">
                                    <div className="relative">
                                        <div className="bg-gradient-to-br from-pink-900/40 to-pink-800/40 rounded-t-2xl p-6 h-48 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-6xl mb-2">📚</div>
                                                <p className="text-sm font-semibold text-pink-400">An Active Learning Adventure</p>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            LKG - Class 3
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-white mb-2">EduTalks Early Learn Program</h3>
                                    </div>
                                </div>

                                {/* Program Card 2 */}
                                <div className="min-w-[280px] bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all flex-shrink-0 snap-start border border-gray-700">
                                    <div className="relative">
                                        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-t-2xl p-6 h-48 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-6xl mb-2">📱</div>
                                                <p className="text-sm font-semibold text-purple-400">Self-Study Pack</p>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Class 4 - 10
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-white mb-2">EduTalks The Learning App</h3>
                                    </div>
                                </div>

                                {/* Program Card 3 */}
                                <div className="min-w-[280px] bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all flex-shrink-0 snap-start border border-gray-700">
                                    <div className="relative">
                                        <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-t-2xl p-6 h-48 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-6xl mb-2">🎥</div>
                                                <p className="text-sm font-semibold text-blue-400">EduTalks :LIVE Classes</p>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Class 4 - 10
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-white mb-2">EduTalks Live Classes</h3>
                                    </div>
                                </div>

                                {/* Program Card 4 */}
                                <div className="min-w-[280px] bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all flex-shrink-0 snap-start border border-gray-700">
                                    <div className="relative">
                                        <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-t-2xl p-6 h-48 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-6xl mb-2">🎓</div>
                                                <p className="text-sm font-semibold text-cyan-400">Foundation Course</p>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Class 8 - 10
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-white mb-2">EduTalks Foundation Program</h3>
                                    </div>
                                </div>

                                {/* Program Card 5 */}
                                <div className="min-w-[280px] bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all flex-shrink-0 snap-start border border-gray-700">
                                    <div className="relative">
                                        <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/40 rounded-t-2xl p-6 h-48 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-6xl mb-2">🏆</div>
                                                <p className="text-sm font-semibold text-orange-400">EduTalks Advantage</p>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Class 11 - 12
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-white mb-2">EduTalks JEE/NEET Prep</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Explore All Button */}
                        <div className="text-center">
                            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                Explore All
                            </button>
                        </div>
                    </div>
                </div>


                {/* Section: The Advantage */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900">Get the EduTalks advantage</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                    <BookOpen size={28} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Conceptual clarity</h4>
                                <p className="text-gray-500 text-sm">Through visualisation and expert teaching.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-purple-600">
                                    <User size={28} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Personalised learning</h4>
                                <p className="text-gray-500 text-sm">Programs adapted to every student's pace.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-pink-600">
                                    <User size={28} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Unmatched attention</h4>
                                <p className="text-gray-500 text-sm">Individual attention from dedicated mentors.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: Testimonials */}
                <div className="py-16 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our students and parents love us</h2>
                        <div className="flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholders for partner/student stats */}
                            <div className="text-center">
                                <div className="text-3xl font-bold text-brand-600">150+ Million</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Downloads</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-brand-600">4.7+ Star</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">App Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-brand-600">1701+ Cities</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Worldwide</div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
            {/* <Chatbot /> */}
        </div>
    );
};

export default LandingPage;
