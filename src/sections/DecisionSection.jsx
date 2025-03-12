import React from "react";
import { motion } from "framer-motion";
import happyWoman from "../assets/happyWoman.png";

export default function DecisionSection() {
    return (
        <div 
            className="bg-beige h-fit text-left text-gray-900 py-14 px-5 md:px-30 flex flex-col md:flex-row items-center md:justify-between"
        >
            {/* ✅ Text Section */}
            <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="leading-13">
                    What if a{" "}
                    <span className="bg-primary text-white px-2">
                        single decision
                    </span>{" "}
                    could simplify everything?
                </h2>
                <p className="text-xl sm:text-2xl text-gray-800 pt-5">
                    With SimplrSite, a <b>dedicated expert</b> designs, builds, and updates your website to grow with you.
                </p>
            </motion.div>

            {/* ✅ Image Section */}
            <motion.div 
                className="w-full md:w-1/2 flex justify-center pt-10 md:pt-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
            >
                <img src={happyWoman} className="w-2/3 md:w-full max-w-lg"/>
            </motion.div>
        </div>
    );
}
