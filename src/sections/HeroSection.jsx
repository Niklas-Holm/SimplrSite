import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import designIcon from "../assets/icons/designIcon.png";
import processIcon from "../assets/icons/processIcon.png";
import updatesIcon from "../assets/icons/updatesIcon.png";
import BulletWithIcon from "../components/BulletWithIcon";
import screenshot1 from "../assets/screenshots/screenshot1.jpg";
import screenshot2 from "../assets/screenshots/screenshot2.jpg";
import screenshot3 from "../assets/screenshots/screenshot3.jpg";
import screenshot4 from "../assets/screenshots/screenshot4.jpg";

export default function HeroSection() {
    // Track window width for dynamic scaling
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // **Dynamically Calculate Hero Section Height**
    const maxWidth = 1400;
    const minHeroHeight = 800 - 40;
    const maxHeroHeight = 800 - 72;
    const heroHeight = minHeroHeight + ((maxHeroHeight - minHeroHeight) * (windowWidth / maxWidth));

    return (
        <motion.div
            style={{ height: `${heroHeight}px` }}
            className="w-full max-w-[1400px] mx-auto flex flex-col justify-between pt-18 px-8 sm:px-[30px] relative overflow-hidden"
        >
            {/* Hero Content */}
            <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between sm:gap-10 lg:gap-14 md:px-20 lg:px-30"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Header */}
                <motion.h1 
                    className="text-text sm:leading-16 font-semibold text-6xl mb-7 sm:mb-0 sm:w-1/2 lg:text-8xl lg:leading-20 lg:w-7/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Get a website. <span className="text-primary"><br />No stress, <br />No fuss.</span>
                </motion.h1>

                {/* Bullet Points */}
                <motion.div 
                    className="space-y-4 sm:space-y-0 sm:flex sm:flex-col sm:w-1/2 text-[clamp(16px,2vw,27px)] lg:w-4/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <BulletWithIcon icon={designIcon} text="Stunning design" />
                    <BulletWithIcon icon={processIcon} text="Seamless experience" />
                    <BulletWithIcon icon={updatesIcon} text="Strategic updates" />
                </motion.div>
            </motion.div>

            {/* Website Screenshots (Overlapping on Mobile, Expanded on Large Screens) */}
            <motion.div 
                className="absolute bottom-0 left-0 w-full flex justify-center items-end sm:justify-center sm:items-end sm:px-[30px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Overlapping Images on Mobile */}
                <div className="absolute w-full flex justify-center items-end sm:hidden">
                    <motion.img src={screenshot1} alt="Website 1" className="absolute right-[5%] bottom-0 w-1/3 max-w-[200px] h-auto rounded-t-2xl shadow-lg z-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    />
                    <motion.img src={screenshot4} alt="Website 2" className="absolute left-[5%] bottom-0 w-1/2 max-w-[200px] h-auto rounded-t-2xl shadow-lg z-10"
                        initial={{ opacity: 0, y: 90 }}
                        animate={{ opacity: 1, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    />
                    <motion.img src={screenshot3} alt="Website 3" className="relative w-3/7 max-w-[200px] h-auto rounded-t-2xl shadow-xl z-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    />
                    <motion.img src={screenshot2} alt="Website 4" className="absolute left-[65px] top-15 w-3/7 max-w-[200px] h-auto rounded-t-2xl shadow-lg z-40"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    />
                </div>

                {/* Stacked & Spaced Images on Large Screens */}
                <div className="hidden sm:flex w-full justify-center gap-3 items-end">
                    <motion.img src={screenshot1} alt="Website 1" className="w-[22%] max-w-[300px] h-auto rounded-t-2xl shadow-lg z-20"
                        style={{ transform: "translateY(40px)" }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    />
                    <motion.img src={screenshot2} alt="Website 2" className="w-[22%] max-w-[300px] h-full rounded-t-2xl shadow-lg z-10"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    />
                    <motion.img src={screenshot3} alt="Website 3" className="w-[22%] max-w-[300px] h-auto rounded-t-2xl shadow-xl z-30" 
                        style={{ transform: "translateY(40px)" }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    />
                    <motion.img 
                        src={screenshot4} 
                        alt="Website 4" 
                        className="w-[22%] max-w-[300px] h-auto rounded-t-2xl shadow-lg z-40 self-end"
                        initial={{ opacity: 0, y: 90 }} // ✅ Starts lower
                        animate={{ opacity: 1, y: 50 }} // ✅ Stays lowered by 50px instead of resetting to 0
                        transition={{ duration: 0.8, delay: 1.0 }}
                    />

                </div>
            </motion.div>
        </motion.div>
    );
}
