import React from "react";
import { motion } from "framer-motion";
import founderImage from "../assets/founder.jpg"; // Replace with actual image
import signature from "../assets/signature.png"; // Replace with actual signature image

export default function FounderSection() {
    return (
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-10">
            {/* ✅ Image Section - Slides in from the Left */}
            <motion.div 
                className="relative w-full md:w-[95%] xl:w-1/2 rounded-r-4xl xl:rounded-4xl overflow-hidden"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img 
                    src={founderImage} 
                    alt="Founder"
                    className="w-full h-75 object-cover rounded-r-2xl xl:rounded-4xl lg:h-100"
                />
            </motion.div>

            {/* ✅ Content Section - Slides in from the Right */}
            <motion.div 
                className="w-full md:w-[95%] xl:w-1/2 bg-white px-5 md:px-10 py-18 rounded-l-4xl xl:rounded-4xl shadow-lg ml-0 md:ml-auto"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2>
                    A great website is <br />
                    <span className="bg-primary text-white px-1">always evolving.</span>
                </h2>

                <p className="text-gray-800 text-lg leading-8 mt-4">
                Your website should grow with your business—not become a relic of the past. 
                During my time at a major tech firm, I saw firsthand how a sleek, modern website can make or break 
                a brand, especially when attracting younger clients. Today’s audience expects a polished, 
                engaging online experience, and if your site feels outdated, they’ll move on fast.<br />  
                That’s why I created SimplrSite—to build beautiful, high-performing websites that stand the test of time. 
                As a software engineer with a passion for design, I believe every business deserves a site that not only 
                looks great today but continues to evolve and stay ahead of the curve.
                </p>

                {/* Signature */}
                <motion.img 
                    src={signature} 
                    alt="Niklas Holm Signature"
                    className="w-40 mt-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                />
                <p className="text-gray-900 font-medium">Niklas Holm, Founder</p>
            </motion.div>
        </div>
    );
}
