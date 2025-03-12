import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Booking from "../components/Booking";

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full max-w-[1400px] mx-auto px-8 pt-6 flex flex-col items-start">
            {/* ✅ Heading Animation */}
            <motion.h1
                className="text-text sm:leading-16 font-semibold text-6xl mb-4 sm:mb-0 sm:w-1/2 lg:text-8xl lg:leading-20 lg:w-7/10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Let's Talk
            </motion.h1>

            {/* ✅ Email Animation */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3 className="text-white text-xl">Email us at</h3>
                <h3 className="text-primary text-xl underline decoration-[#787878] decoration-1 underline-offset-5">
                    <a href="mailto:hello@simplrsite.com">hello@simplrsite.com</a>
                </h3>
            </motion.div>

            {/* ✅ Booking Section Fade-in */}
            <motion.div
                className="w-full flex justify-start pt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
            >
                <Booking />
            </motion.div>
        </div>
    );
}
