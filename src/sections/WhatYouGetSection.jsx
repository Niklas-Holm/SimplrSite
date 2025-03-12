import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../components/FeatureCard";
import designIcon from "../assets/icons/designIcon.png";
import processIcon from "../assets/icons/processIcon.png";
import updatesIcon from "../assets/icons/updatesIcon.png";

export default function WhatYouGetSection() {
    return (
        <div 
            className="h-fit bg-white pb-24 rounded-2xl px-6 -mt-4 mx-auto flex justify-center"
        >
            <div className="max-w-[1400px]">
                <motion.h2 
                    className="text-center px-7 pt-25 pb-15"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    When you choose SimplrSite, everything runs smoothly.
                </motion.h2>

                {/* ✅ Mobile: Stacked Layout, Desktop: 3-Column Layout */}
                <motion.div 
                    className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-16"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.3 }}
                    viewport={{ once: true }}
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <FeatureCard 
                            icon={designIcon} 
                            head="Stunning Design" 
                            description="We blend sleek aesthetics with purposeful layouts and clear messaging to support your business goals." 
                        />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <FeatureCard 
                            icon={processIcon} 
                            head="Effortless Process" 
                            description="Avoid the typical website frustrations. We keep you informed without overwhelming you with meetings." 
                        />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <FeatureCard 
                            icon={updatesIcon} 
                            head="Strategic Updates" 
                            description="Need changes? Just ask. From minor tweaks to major enhancements, we’ve got it covered." 
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
