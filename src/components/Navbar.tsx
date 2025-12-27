import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoLight from '../assets/edutalks-logo-light.svg';

import { Magnetic, StaggerContainer, StaggerItem } from './animations';

const Navbar: React.FC = () => {
    // const { theme } = useTheme(); // theme is no longer needed since navbar is always white
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();



    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Courses', path: '/services' },
        { name: 'Internships', path: '/internships' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 dark:bg-white/90 backdrop-blur-md py-3 shadow-lg border-b border-gray-200 dark:border-gray-300"
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                {/* Logo */}
                <Magnetic strength={0.2}>
                    <Link to="/" className="flex items-center group relative z-50">
                        <img
                            src={logoLight}
                            alt="EduTalks Logo"
                            className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                </Magnetic>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link) => (
                        <div key={link.path} className="relative">
                            <Link
                                to={link.path}
                                className={`text-sm font-bold transition-colors ${location.pathname === link.path
                                    ? 'text-primary'
                                    : 'text-gray-800 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4 relative z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-800"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isMobileMenuOpen ? 'close' : 'open'}
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col items-center justify-center pt-20 px-6"
                    >
                        <StaggerContainer className="flex flex-col items-center gap-6 sm:gap-8 text-center w-full">
                            {navLinks.map((link) => (
                                <StaggerItem key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-2xl sm:text-3xl font-black ${location.pathname === link.path
                                            ? 'text-primary'
                                            : 'text-gray-800 dark:text-white'
                                            } `}
                                    >
                                        {link.name}
                                    </Link>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

