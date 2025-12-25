import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
import { FadeIn } from '../components/animations';
import { FloatingOrbs } from '../components/animations/ParticleField';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            {/* Header Section */}
            <section className="py-12 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
                <FloatingOrbs orbCount={2} />
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <span className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-6">
                                <Shield className="mr-2" size={20} />
                                <span className="font-semibold">Legal</span>
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black mb-6 dark:text-white">
                                Privacy <span className="text-primary italic">Policy</span>
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                We respect your privacy and are committed to protecting your personal information.
                            </p>
                        </motion.div>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeIn delay={0.2}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="mb-8">
                                    Welcome to EduTalks! We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how EduTalks (“we,” “our,” or “us”) collects, uses, discloses, and safeguards your data when you visit our websites or use our mobile applications, including:
                                </p>
                                <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>Attendance platform — <a href="https://edutalks.edu-attendance.work.gd/" className="text-primary hover:underline">https://edutalks.edu-attendance.work.gd/</a></li>
                                    <li>Exam platform — <a href="https://exam.eduexam.work.gd/" className="text-primary hover:underline">https://exam.eduexam.work.gd/</a></li>
                                    <li>English Communication platform — <a href="https://edutalks.tech" className="text-primary hover:underline">https://edutalks.tech</a></li>
                                    <li>Portfolio services — <a href="https://edutalksacademy.in" className="text-primary hover:underline">edutalksacademy.in</a></li>
                                </ul>
                                <p className="mb-12">
                                    This policy applies to all services, websites, and mobile applications operated by EduTalks.
                                </p>

                                <div className="space-y-12">
                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">1</span>
                                            Information We Collect
                                        </h2>

                                        <h3 className="text-xl font-bold mt-6 mb-3 dark:text-white">A. Personal Information You Provide</h3>
                                        <p className="mb-4 text-gray-600 dark:text-gray-400">We may collect personal information you voluntarily submit, including:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 text-gray-600 dark:text-gray-400">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Full name</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Email address</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Phone number</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Date of birth</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Username and password</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Profile picture (if provided)</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Educational details</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Attendance records</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Exam responses and results</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Voice recordings</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Portfolio details</li>
                                        </ul>

                                        <h3 className="text-xl font-bold mt-6 mb-3 dark:text-white">B. Automatically Collected Data</h3>
                                        <p className="mb-4 text-gray-600 dark:text-gray-400">When you access our services, we may automatically collect:</p>
                                        <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-400">
                                            <li>IP address</li>
                                            <li>Device type, model and operating system</li>
                                            <li>Browser type</li>
                                            <li>Pages visited and duration</li>
                                            <li>App usage analytics</li>
                                            <li>Log data</li>
                                        </ul>

                                        <h3 className="text-xl font-bold mt-6 mb-3 dark:text-white">C. Cookies and Tracking Technologies</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            We use cookies and similar technologies to improve performance, analyze usage trends, and personalize your experience. You may disable cookies via browser settings, but some features may not function properly.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">2</span>
                                            How We Use Your Information
                                        </h2>
                                        <p className="mb-4 text-gray-600 dark:text-gray-400">We use the collected information for purposes including:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-400">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>Providing, operating, and improving our services</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>Authenticating users and securing your accounts</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>Delivering attendance tracking, exam results, and pronunciation feedback</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>Personalizing your learning experience</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>Communicating important updates and notifications</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>Conducting research and analytics</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>Preventing fraud and protecting rights</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>Complying with legal obligations</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">3</span>
                                            Sharing Your Information
                                        </h2>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-bold dark:text-white">A. Service Providers</h4>
                                                <p className="text-gray-600 dark:text-gray-400">Third-party partners who perform services on our behalf (e.g., hosting, analytics, email delivery).</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold dark:text-white">B. Legal Requirements</h4>
                                                <p className="text-gray-600 dark:text-gray-400">If required by law, regulation, legal process, or governmental request.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold dark:text-white">C. Business Transfers</h4>
                                                <p className="text-gray-600 dark:text-gray-400">If EduTalks is involved in a merger, acquisition, or sale of assets, your information may be transferred.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold dark:text-white">D. With Your Consent</h4>
                                                <p className="text-gray-600 dark:text-gray-400">When you explicitly agree to share information with third parties.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">4</span>
                                            Data Security
                                        </h2>
                                        <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
                                            <Lock className="text-primary flex-shrink-0" size={24} />
                                            <p className="text-gray-600 dark:text-gray-400">
                                                We implement reasonable technical and organizational measures to protect your information from unauthorized access, loss, misuse, or alteration. However, no system is fully secure.
                                            </p>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">5</span>
                                            Third-Party Links
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Our services may contain links to external websites or tools. We are not responsible for their privacy practices. Please read their privacy policies separately.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">6</span>
                                            Children’s Privacy
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13 without parental consent. If we become aware of such data, we will delete it.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">7</span>
                                            Your Rights
                                        </h2>
                                        <p className="mb-4 text-gray-600 dark:text-gray-400">Depending on your region, you may have the right to:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Access your personal data</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Correct or update your data</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Delete your data</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Restrict or object to processing</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Port your information</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">8</span>
                                            Data Retention
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            We retain your personal information only as long as necessary for the purposes described in this policy, including legal obligations.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">9</span>
                                            International Transfers
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Your information may be processed in countries other than your own. By using EduTalks services, you consent to international data transfer.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">10</span>
                                            Updates to This Policy
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            We may modify this policy from time to time. We will notify you by updating the “Last Updated” date at the top and, where appropriate, via in-app or email notice.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm">11</span>
                                            Contact Us
                                        </h2>
                                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                                            <p className="mb-4 text-gray-600 dark:text-gray-400">
                                                If you have questions, concerns, or requests regarding this Privacy Policy, please contact:
                                            </p>
                                            <a href="mailto:contact@edutalks.tech" className="flex items-center gap-3 text-lg font-bold text-primary hover:underline">
                                                <Mail size={24} />
                                                contact@edutalks.tech
                                            </a>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};
import { Mail } from 'lucide-react';

export default PrivacyPolicy;
