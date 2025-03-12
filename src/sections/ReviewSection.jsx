import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard";

import profile1 from "../assets/profilePics/noProfile.png";
import profile2 from "../assets/profilePics/noProfile.png";
import profile3 from "../assets/profilePics/noProfile.png";
import profile4 from "../assets/profilePics/noProfile.png";

export default function ReviewSection() {
    const reviews = [
        {
            stars: 5,
            highlight: "SimplrSite built my website in just a few days",
            reviewText: "SimplrSite built my website in just a few days, and I’ve already landed more clients than ever before. Professional, fast, and worth every dollar!",
            image: profile1,
            name: "Julius Mølsted",
            role: "Founder, JM-Fliserens Powerwashing",
        },
        {
            stars: 5,
            highlight: "website brings in leads every week",
            reviewText: "Before SimplrSite, my business had no online presence. Now, my website brings in leads every week. Couldn’t be happier! The team made the process incredibly easy, and I didn’t have to lift a finger.",
            image: profile2,
            name: "Axel Peterson",
            role: "Owner, AXEL Woodworking",
        },
        {
            stars: 5,
            highlight: "SimplrSite handled everything",
            reviewText: "I didn’t have time to build a website, and SimplrSite handled everything. It looks stunning and works perfectly! I love how they made it fit my brand and vision without me needing to micromanage the process.",
            image: profile3,
            name: "Liam Carter",
            role: "CEO, WoodWorks Woodworking",
        },
        {
            stars: 5,
            highlight: "I’m getting calls daily!",
            reviewText: "My website now ranks on Google, and I’m getting calls daily! The team at SimplrSite knows what they’re doing. I was skeptical at first, but this investment has paid off way faster than I expected.",
            image: profile4,
            name: "Brian Thompson",
            role: "Owner, BTRoof Roofing & Consulting",
        },
    ];

    return (
        <div className="flex flex-col items-center bg-white py-16">
            <motion.h1 
                className="text-4xl text-center font-bold text-gray-900 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                See what business owners say about us.
            </motion.h1>

            {/* Grid Layout for Reviews */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.3 }}
                viewport={{ once: true }}
            >
                {reviews.map((review, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                    >
                        <ReviewCard {...review} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
