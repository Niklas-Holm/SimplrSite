import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function OverlayForm({ isOpen, onClose }) {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsSuccess(false);

        const formData = new FormData(formRef.current);
        const emailData = {
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            email: formData.get("email"),
            question: formData.get("question"),
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            emailData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                setIsLoading(false);
                setIsSuccess(true);
                formRef.current.reset(); // ✅ Clears the form after submission

                setTimeout(() => {
                    setIsSuccess(false); // Reset button state after a delay
                }, 3000);
            },
            (error) => {
                setIsLoading(false);
                console.error("FAILED...", error.text);
            }
        );
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed bg-black/80 inset-0 flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={onClose} // ✅ Close when clicking outside
                >
                    <motion.div
                        className="bg-white w-full h-full min-h-[600px] md:h-9/12 md:rounded-2xl max-w-md p-6 px-10 shadow-lg relative flex flex-col justify-center"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-black text-2xl font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            ✕
                        </motion.button>

                        {/* Form Header */}
                        <motion.h2
                            className="text-2xl font-bold text-gray-900 text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Ask Us a Question
                        </motion.h2>

                        {/* Form Fields */}
                        <motion.form 
                            ref={formRef} 
                            onSubmit={sendEmail} 
                            className="mt-4 space-y-7"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div>
                                <label className="text-gray-700 font-semibold">
                                    Name <span className="text-gray-600">(required)</span>
                                </label>
                                <div className="flex gap-4 mt-1">
                                    <div className="flex flex-col w-1/2">
                                        <label className="text-gray-900">First Name</label>
                                        <input type="text" name="first_name" required className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg focus:border-primary focus:ring-primary focus:ring-2 outline-none"/>
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <label className="text-gray-900">Last Name</label>
                                        <input type="text" name="last_name" required className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg focus:border-primary focus:ring-primary focus:ring-2 outline-none"/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-700 font-semibold">
                                    Email <span className="text-gray-600">(required)</span>
                                </label>
                                <input type="email" name="email" required className="w-full text-gray-900 p-3 bg-gray-100 rounded-lg mt-1 focus:border-primary focus:ring-primary focus:ring-2 outline-none"/>
                            </div>

                            <div>
                                <label className="text-gray-700 font-semibold">
                                    Your Question <span className="text-gray-600">(required)</span>
                                </label>
                                <textarea name="question" required className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg mt-1 h-24 focus:border-primary focus:ring-primary focus:ring-2 outline-none"></textarea>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className={`w-full bg-primary text-white py-3 rounded-full text-lg font-bold flex items-center justify-center transition-all ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                                disabled={isLoading || isSuccess}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                {isLoading ? (
                                    <svg className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
                                ) : isSuccess ? (
                                    "✅ Success!"
                                ) : (
                                    "Send"
                                )}
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
