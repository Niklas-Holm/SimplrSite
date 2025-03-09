import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import website1 from "../assets/website1.png";

const websites = [
    {
        image: website1,
        title: "JM-Fliserens Powerwashing",
        subtitle: "Powerwashing company located in Denmark",
    },
    {
        image: website1,
        title: "Master Webflow Like a Pro",
        subtitle: "Learn to build stunning Webflow sites with animations.",
    },
    {
        image: website1,
        title: "Next.js & Tailwind UI Kit",
        subtitle: "Build high-performance websites using Next.js and Tailwind.",
    },
];

export default function WebsiteShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const prevWebsite = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? websites.length - 1 : prevIndex - 1));
    };

    const nextWebsite = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex === websites.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="text-white flex flex-col items-center justify-center py-16 px-5">
            {/* Fixed Height to Prevent Layout Shifts */}
            <div className="relative w-full max-w-[600px] h-[350px] overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={websites[currentIndex].title}
                        className="absolute w-full h-full flex flex-col items-center justify-center gap-[10px]"
                        initial={{ x: `${direction * 110}%` }} // Start slightly off-screen with a gap
                        animate={{ x: "0%" }} // Slide into view
                        exit={{ x: `${-direction * 110}%` }} // Exit smoothly with a gap
                        transition={{ duration: 0.35, ease: "easeInOut" }} // Faster transition
                    >
                        {/* Website Preview */}
                        <div className="relative w-full h-[240px] bg-white rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={websites[currentIndex].image}
                                alt="Website Preview"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Dynamic Title & Subtitle */}
                        <h1 className="text-2xl font-bold text-center">
                            {websites[currentIndex].title}
                        </h1>
                        <p className="text-lg text-gray-300 text-center">
                            {websites[currentIndex].subtitle}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-6 mt-6">
                <button onClick={prevWebsite} className="w-12 h-12 flex items-center justify-center bg-primary text-gray-900 rounded-full text-2xl">
                    ←
                </button>
                <button onClick={nextWebsite} className="w-12 h-12 flex items-center justify-center bg-primary text-gray-900 rounded-full text-2xl">
                    →
                </button>
            </div>
        </div>
    );
}
