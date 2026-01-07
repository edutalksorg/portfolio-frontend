import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Magnetic, StaggerContainer, StaggerItem } from './animations';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--bg)] border-t border-[var(--border)] text-[var(--text-primary)] pt-20 pb-10 overflow-hidden relative">
            {/* Background embellishment */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <StaggerItem className="space-y-6">
                        <Link to="/" className="inline-block group">
                            <span className="text-2xl font-black tracking-tighter">
                                <span className="text-primary">Edu</span>
                                <span className="text-[var(--text-primary)]">talks</span>
                            </span>
                        </Link>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
                            Where Education Meets Conversation. Empowering the next generation of professionals through innovation and mentorship.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <Facebook size={18} />, href: 'https://www.facebook.com/profile.php?id=61578676177087' },
                                { icon: <Instagram size={18} />, href: 'https://www.instagram.com/edutalks_tech?igsh=MXZjcm5mcDB0MzNi' },
                                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/edutalks-pvt-ltd/' },
                            ].map((social, idx) => (
                                <Magnetic key={idx} strength={0.2}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center bg-[var(--card)] rounded-full hover:bg-primary text-[var(--text-muted)] hover:text-white transition-all transform hover:scale-110"
                                    >
                                        {social.icon}
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                    </StaggerItem>

                    {/* Quick Links */}
                    <StaggerItem>
                        <h4 className="text-lg font-bold mb-6 text-[var(--text-primary)]">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Courses', path: '/services' },
                                { name: 'Internships', path: '/internships' },
                                { name: 'Careers', path: '/careers' }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="text-[var(--text-muted)] hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                                        <motion.span
                                            className="w-0 h-0.5 bg-primary"
                                            whileHover={{ width: 10 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                        <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </StaggerItem>

                    {/* Services */}
                    <StaggerItem>
                        <h4 className="text-lg font-bold mb-6 text-[var(--text-primary)]">Courses</h4>
                        <ul className="space-y-4">
                            {[
                                'Skill Development',
                                'Career Guidance',
                                'Mentorship',
                                'Corporate Training'
                            ].map((service, idx) => (
                                <li key={idx}>
                                    <Link to="/services" className="text-[var(--text-muted)] hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                                        <span className="group-hover:translate-x-1 transition-transform">{service}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </StaggerItem>

                    {/* Contact Info */}
                    <StaggerItem>
                        <h4 className="text-lg font-bold mb-6 text-[var(--text-primary)]">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-[var(--text-muted)] group">
                                <div className="p-2 bg-[var(--card)] rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin size={16} />
                                </div>
                                <span className="flex-1 pt-1">Hyderabad, Telangana, India</span>
                            </li>
                            <li className="flex gap-3 text-sm text-[var(--text-muted)] group">
                                <div className="p-2 bg-[var(--card)] rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone size={16} />
                                </div>
                                <span className="flex-1 pt-1">+91 96401 11233 / +91 95051 11233</span>
                            </li>
                            <li className="group">
                                <a href="mailto:contact@edutalksacademy.in" className="flex gap-3 text-sm text-[var(--text-muted)] hover:text-primary transition-colors">
                                    <div className="p-2 bg-[var(--card)] rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Mail size={16} />
                                    </div>
                                    <span className="flex-1 pt-1">contact@edutalksacademy.in</span>
                                </a>
                            </li>
                        </ul>
                    </StaggerItem>
                </StaggerContainer>

                <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)]">
                    <p className="flex items-center gap-1">
                        © {currentYear} Edutalks Learning Pvt. Ltd. Made with <Heart size={12} className="text-red-500 fill-red-500" /> in India.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
