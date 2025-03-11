import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function OverlayForm({ isOpen, onClose }) {
    const formRef = useRef();
    const [statusMessage, setStatusMessage] = useState("");

    if (!isOpen) return null;    

    const sendEmail = (e) => {
        e.preventDefault();

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
                setStatusMessage("✅ Your question has been sent successfully!");
                formRef.current.reset(); // ✅ Clears the form after submission
            },
            (error) => {
                setStatusMessage("❌ Failed to send. Please try again.");
                console.error("FAILED...", error.text);
            }
        );
    };

    
    return (
        <div
            className="fixed bg-black/80 inset-0 bg-opacity-80 flex justify-center items-center z-50"
            onClick={onClose} // ✅ Close when clicking outside
        >
            <div
                className="bg-white w-full h-full min-h-[600px] md:h-9/12 md:rounded-2xl max-w-md p-6 px-10 shadow-lg relative flex flex-col justify-center"
                onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black text-2xl font-bold"
                >
                    ✕
                </button>

                {/* Form Header */}
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Ask Us a Question
                </h2>

                {/* Form Fields */}
                <form ref={formRef} onSubmit={sendEmail} className="mt-4 space-y-7">
                    <div>
                        <label className="text-gray-700 font-semibold">Name <span className="text-gray-600">(required)</span></label>
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
                        <label className="text-gray-700 font-semibold">Email <span className="text-gray-600">(required)</span></label>
                        <input type="email" name="email" required className="w-full text-gray-900 p-3 bg-gray-100 rounded-lg mt-1 focus:border-primary focus:ring-primary focus:ring-2 outline-none"/>
                    </div>

                    <div>
                        <label className="text-gray-700 font-semibold">Your Question <span className="text-gray-600">(required)</span></label>
                        <textarea name="question" required className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg mt-1 h-24 focus:border-primary focus:ring-primary focus:ring-2 outline-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-primary text-white py-3 rounded-full text-lg font-bold">
                        Send
                    </button>

                    {statusMessage && <p className="text-center mt-2 text-sm">{statusMessage}</p>}
                </form>
            </div>
        </div>
    );
}