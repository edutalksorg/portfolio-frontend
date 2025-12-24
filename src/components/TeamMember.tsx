import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

export interface TeamMemberData {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
    github?: string;
    email?: string;
}

interface TeamMemberProps {
    member: TeamMemberData;
    index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
    return (
        <motion.div
            className="group h-full"
            whileHover={{ y: -10 }}
        >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square bg-gray-100 dark:bg-gray-700">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                    />
                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary text-white transition-all hover:scale-110"
                                    aria-label={`${member.name}'s LinkedIn`}
                                >
                                    <Linkedin size={20} />
                                </a>
                            )}

                            {member.github && (
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary text-white transition-all hover:scale-110"
                                    aria-label={`${member.name}'s GitHub`}
                                >
                                    <Github size={20} />
                                </a>
                            )}
                            {member.email && (
                                <a
                                    href={`mailto:${member.email}`}
                                    className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary text-white transition-all hover:scale-110"
                                    aria-label={`Email ${member.name}`}
                                >
                                    <Mail size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="text-center flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wide">
                        {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {member.bio}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamMember;
