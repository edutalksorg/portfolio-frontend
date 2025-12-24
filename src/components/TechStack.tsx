import React from 'react';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem, FadeIn } from './animations';

interface Tech {
    name: string;
    icon: string;
    category: string;
}

const technologies: Tech[] = [
    // Frontend
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', category: 'Frontend' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', category: 'Frontend' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', category: 'Backend' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Backend' },
    { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'Backend' },

    // Database
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: 'Database' },

    // Tools & Others
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Tools' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'Tools' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Tools' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'Tools' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'Tools' },
];

const TechStack: React.FC = () => {
    const categories = Array.from(new Set(technologies.map(tech => tech.category)));

    return (
        <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Our <span className="text-primary italic">Technology</span> Stack
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We use cutting-edge technologies to deliver world-class learning experiences
                    </p>
                </FadeIn>

                {categories.map((category) => (
                    <div key={category} className="mb-16 last:mb-0">
                        <FadeIn delay={0.1} className="mb-8">
                            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 inline-flex items-center gap-4">
                                <span className="h-px w-10 bg-gray-300 dark:bg-gray-700"></span>
                                {category}
                                <span className="h-px w-10 bg-gray-300 dark:bg-gray-700"></span>
                            </h3>
                        </FadeIn>

                        <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                            {technologies
                                .filter(tech => tech.category === category)
                                .map((tech, index) => (
                                    <StaggerItem key={tech.name}>
                                        <motion.div
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="group relative"
                                        >
                                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex items-center justify-center aspect-square">
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-12 h-12 object-contain filter dark:brightness-90 transition-all group-hover:scale-110"
                                                    onError={(event) => {
                                                        event.currentTarget.style.display = 'none';
                                                        const parent = event.currentTarget.parentElement;
                                                        if (parent) {
                                                            const fallback = document.createElement('div');
                                                            fallback.className = 'w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xl';
                                                            fallback.textContent = tech.name.charAt(0);
                                                            parent.appendChild(fallback);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            {/* Tooltip */}
                                            <motion.div
                                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10"
                                                initial={{ y: 10, opacity: 0 }}
                                                whileHover={{ y: 0, opacity: 1 }}
                                            >
                                                {tech.name}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
                                            </motion.div>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                        </StaggerContainer>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
