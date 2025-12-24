import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company?: string;
    image: string;
    quote: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Software Engineer',
        company: 'Tech Corp',
        image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=f97316&color=fff&size=200',
        quote: 'Edutalks transformed my career! The mentorship program connected me with industry experts who guided me through real-world projects. I landed my dream job within 3 months of completing the course.',
        rating: 5
    },
    {
        id: 2,
        name: 'Rahul Kumar',
        role: 'Data Scientist',
        company: 'Analytics Inc',
        image: 'https://ui-avatars.com/api/?name=Rahul+Kumar&background=f97316&color=fff&size=200',
        quote: 'The practical approach to learning at Edutalks is unmatched. Instead of just theory, I worked on live projects that prepared me for the challenges in the industry. Highly recommended!',
        rating: 5
    },
    {
        id: 3,
        name: 'Ananya Reddy',
        role: 'Full Stack Developer',
        company: 'StartupXYZ',
        image: 'https://ui-avatars.com/api/?name=Ananya+Reddy&background=f97316&color=fff&size=200',
        quote: 'The internship program gave me hands-on experience that no classroom could provide. The instructors are patient, knowledgeable, and genuinely care about student success.',
        rating: 5
    },
    {
        id: 4,
        name: 'Vikram Singh',
        role: 'Product Manager',
        company: 'Innovation Labs',
        image: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=f97316&color=fff&size=200',
        quote: 'Edutalks helped me transition from engineering to product management. The career guidance and skill development programs are top-notch. Best investment in my career!',
        rating: 5
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = testimonials.length - 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            return newIndex;
        });
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        What Our <span className="text-primary italic">Students</span> Say
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Real stories from real people who transformed their careers with us
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Testimonial Card */}
                    <div className="relative h-[400px] md:h-[350px] overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        {/* Image */}
                                        <div className="flex-shrink-0">
                                            <div className="relative">
                                                <div className="absolute -top-2 -left-2 text-primary/20">
                                                    <Quote size={48} fill="currentColor" />
                                                </div>
                                                <img
                                                    src={currentTestimonial.image}
                                                    alt={currentTestimonial.name}
                                                    className="w-32 h-32 rounded-2xl object-cover border-4 border-white dark:border-gray-900 relative z-10"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-left">
                                            {/* Rating */}
                                            <div className="flex gap-1 justify-center md:justify-start mb-4">
                                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                                    <Star key={i} size={20} className="text-primary fill-primary" />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                                                "{currentTestimonial.quote}"
                                            </p>

                                            {/* Author */}
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {currentTestimonial.name}
                                                </h4>
                                                <p className="text-primary font-semibold">
                                                    {currentTestimonial.role}
                                                    {currentTestimonial.company && ` at ${currentTestimonial.company}`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => paginate(-1)}
                            className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
