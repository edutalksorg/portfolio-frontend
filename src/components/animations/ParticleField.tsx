import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

interface ParticleFieldProps {
    particleCount?: number;
    color?: string;
    maxSize?: number;
    speed?: number;
    connectDistance?: number;
    showConnections?: boolean;
    className?: string;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
    particleCount = 50,
    color = 'var(--primary)',
    maxSize = 4,
    speed = 0.5,
    connectDistance = 120,
    showConnections = true,
    className = ''
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize particles
        particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * maxSize + 1,
            speedX: (Math.random() - 0.5) * speed,
            speedY: (Math.random() - 0.5) * speed,
            opacity: Math.random() * 0.5 + 0.3
        }));

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        container.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle, i) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                // Mouse interaction - particles move away from cursor
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.x -= dx * force * 0.02;
                    particle.y -= dy * force * 0.02;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();

                // Draw connections
                if (showConnections) {
                    particlesRef.current.slice(i + 1).forEach(other => {
                        const dx = particle.x - other.x;
                        const dy = particle.y - other.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < connectDistance) {
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.strokeStyle = color;
                            ctx.globalAlpha = (1 - distance / connectDistance) * 0.2;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    });
                }
            });

            ctx.globalAlpha = 1;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            container.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [particleCount, color, maxSize, speed, connectDistance, showConnections]);

    return (
        <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

// Floating Orbs Component
interface FloatingOrbsProps {
    orbCount?: number;
    className?: string;
}

export const FloatingOrbs: React.FC<FloatingOrbsProps> = ({
    orbCount = 3,
    className = ''
}) => {
    const orbs = Array.from({ length: orbCount }, (_, i) => ({
        id: i,
        size: 200 + Math.random() * 300,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 15 + Math.random() * 10,
        delay: i * 2
    }));

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {orbs.map(orb => (
                <motion.div
                    key={orb.id}
                    className="absolute rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-[100px]"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                    }}
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -80, 60, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            ))}
        </div>
    );
};

// Gradient Mesh Background
interface GradientMeshProps {
    className?: string;
}

export const GradientMesh: React.FC<GradientMeshProps> = ({ className = '' }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]"
                style={{ top: '10%', left: '20%' }}
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px]"
                style={{ bottom: '20%', right: '10%' }}
                animate={{
                    x: [0, -80, 40, 0],
                    y: [0, 60, -40, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[150px]"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                animate={{
                    scale: [1, 1.3, 0.9, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
        </div>
    );
};

// Animated Grid Background
interface AnimatedGridProps {
    className?: string;
}

export const AnimatedGrid: React.FC<AnimatedGridProps> = ({ className = '' }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(var(--primary) 1px, transparent 1px),
                        linear-gradient(90deg, var(--primary) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            />
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, var(--bg) 70%)'
                }}
                animate={{
                    opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
};

export default ParticleField;
