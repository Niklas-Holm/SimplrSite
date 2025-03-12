import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background text-white text-center px-6">
            {/* Animated Heading */}
            <motion.h1
                className="text-6xl font-bold text-primary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                404
            </motion.h1>

            {/* Subtext */}
            <motion.p
                className="text-xl text-gray-300 mt-4 max-w-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                Oops! The page you’re looking for doesn’t exist.
            </motion.p>

            {/* Back Home Button */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <Link to="/" className="mt-6 inline-block px-6 py-3 rounded-full bg-primary text-white text-lg font-semibold transition hover:opacity-80">
                    Go Home
                </Link>
            </motion.div>
        </div>
    );
}
