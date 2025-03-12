import React from "react";
import { motion } from "framer-motion";
import WebsiteShowcase from "../components/WebsiteShowcase";

export default function WebsiteShowcaseSection() {
    return (
        <motion.div 
            className="flex flex-col justify-center h-fit bg-background pt-18"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.h2 
                className="text-white text-center px-5 -mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                Get a custom crafted website for your unique business.
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
            >
                <WebsiteShowcase />
            </motion.div>
        </motion.div>
    );
}
