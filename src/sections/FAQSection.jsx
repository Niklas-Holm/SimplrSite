import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import FilledButton from "../components/ui/FilledButton";

const faqData = [
    {
        question: "How long does it take to build my initial website?",
        answer: `We launch most websites within 30 days. If you’re on a tight schedule, 
        we can launch in as little as 7 days from when you become a member. Just let us know! 
        Our streamlined process includes a strategy session, wireframe review, and final 
        walkthrough before going live. You'll be kept informed at every step, and we’ll 
        handle the technical details.`,
    },
    {
        question: "What is SimplrSite?",
        answer: `SimplrSite is a subscription-based website design service that provides 
        businesses with high-quality, hassle-free websites at an affordable monthly price. 
        We handle everything from design and hosting to maintenance and updates, 
        so you can focus on growing your business.`,
    },
    {
        question: "How does the subscription work?",
        answer: `Our subscription model allows businesses to get a professional website without high upfront costs. 
        You choose a plan (Basic, Standard, or Premium), and we handle the design, hosting, and updates for a fixed 
        monthly fee. There are no long-term contracts, and you can cancel anytime.`,
    },
    {
        question: "What is included in the monthly fee?",
        answer: `Each plan includes professional website design, secure hosting, maintenance, and updates. 
        The Standard and Premium plans include additional features like multiple pages, SEO optimization, 
        and priority support.`,
    },
    {
        question: "What do I need to provide to get started?",
        answer: `We will need your business details, logo, images, and any content you'd like to include on the website. 
        If you don’t have content, we can provide basic placeholder text and stock images to get you started.`,
    },
    {
        question: "How do I request website changes?",
        answer: `Simply contact us through your dashboard or email, and our team will make the updates for you. 
        The number of changes you can request per month depends on your subscription plan.`,
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: `Yes! All websites we build are fully responsive and work on desktops, tablets, and mobile phones. 
        We ensure that your site looks great and functions properly on all screen sizes.`,
    },
    {
        question: "Do you handle website security?",
        answer: `Yes, we provide SSL certificates, regular updates, and secure hosting to keep your website safe. 
        We also monitor for potential security threats and apply fixes as needed.`,
    },
    {
        question: "Can I use my own domain?",
        answer: `Yes! If you already own a domain, we will connect it to your new website. 
        If you don’t have one, we can help you purchase a domain that best fits your brand.`,
    },
    {
        question: "Do I own my website?",
        answer: `You fully own your website’s content and branding. However, since we handle hosting and maintenance, 
        if you decide to cancel, you can request a static version of your site, but certain platform-specific 
        features may not transfer.`,
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: `Yes, you can cancel your subscription at any time. If you cancel, your website will remain active 
        until the end of your billing period.`,
    },
    {
        question: "What happens if I need more features later?",
        answer: `If you need additional features, you can upgrade your plan at any time. Just reach out, and we’ll 
        implement the requested upgrades.`,
    },
    {
        question: "Do you offer e-commerce websites?",
        answer: `Currently, our focus is on business websites, but we can discuss basic e-commerce functionality upon request. 
        If you need a full-fledged online store, we can offer a custom solution for an additional fee.`,
    },
    {
        question: "Is SEO included in all plans?",
        answer: `SEO optimization is included in our Premium Plan. This includes keyword optimization, meta descriptions, 
        Google indexing setup, and page speed enhancements to help your site rank better on search engines.`,
    },
    {
        question: "How is my website hosted?",
        answer: `Your website is hosted on a secure, high-performance cloud hosting platform. 
        We include an SSL certificate for security, ensuring your visitors’ data remains safe.`,
    },
    {
        question: "How do I contact support?",
        answer: `You can reach out to us via email at support@simplrsite.com. Premium plan users receive priority support 
        for faster response times.`,
    },
    {
        question: "How do I get started?",
        answer: `Getting started is easy! Just visit simplrsite.com, choose a plan, fill out a quick form with your business details, 
        and we’ll take care of the rest.`,
    },
];
export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false); // ✅ Track overlay state

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* ✅ FAQ Section */}
            <div className="max-w-2xl mx-auto py-12 px-4 text-white">
                <h2 className="text-left mb-6 text-white">Any questions?</h2>
                <div className="space-y-2">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={activeIndex === index}
                            toggleFAQ={toggleFAQ}
                        />
                    ))}
                </div>
                <button
                    onClick={() => setShowOverlay(true)} // ✅ Open overlay
                    className="mt-3 font-mono px-10 py-4 rounded-full bg-[#303030]"
                >
                    Ask Us a Question
                </button>
            </div>

            {/* ✅ Overlay Form */}
            {showOverlay && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={() => setShowOverlay(false)} // ✅ Close when clicking outside
                >
                    <div
                        className="bg-white w-full h-full max-w-md p-6 px-10 shadow-lg relative flex flex-col justify-center"
                        onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowOverlay(false)}
                            className="absolute top-4 right-4 text-black text-2xl font-bold"
                        >
                            ✕
                        </button>

                        {/* Form Header */}
                        <h2 className="text-2xl font-bold text-gray-900 text-center">
                            Ask Us a Question
                        </h2>

                        {/* Form Fields */}
                        <form className="mt-4 space-y-7">
                            {/* Name */}
                            <div>
                                <label className="text-gray-700 font-semibold">Name <span className="text-gray-600">(required)</span></label>
                                <div className="flex gap-4 mt-1">
                                    <div className="flex flex-col w-1/2">
                                        <label className="text-gray-900">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg focus:border-primary focus:ring-primary focus:ring-2 outline-none"
                                        />
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <label className="text-gray-900">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg focus:border-primary focus:ring-primary focus:ring-2 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-gray-700 font-semibold">Email <span className="text-gray-600">(required)</span></label>
                                <input
                                    type="email"
                                    className="w-full text-gray-900 p-3 bg-gray-100 rounded-lg mt-1 focus:border-primary focus:ring-primary focus:ring-2 outline-none"
                                />
                            </div>

                            {/* Question */}
                            <div>
                                <label className="text-gray-700 font-semibold">Your Question <span className="text-gray-600">(required)</span></label>
                                <textarea
                                    className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg mt-1 h-24 focus:border-primary focus:ring-primary focus:ring-2 outline-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-full text-lg font-bold"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

// ✅ FAQ Item Component
const FAQItem = ({ index, question, answer, isOpen, toggleFAQ }) => {
    return (
        <div className="border-b-1 border-[#303030] w-fit"> {/* ✅ Divider width matches text & icon */}
            <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium py-3 flex items-center gap-2 transition-all duration-300"
            >
                {/* ✅ Same Yellow Arrow as Before */}
                <ChevronDownIcon
                    className={`w-8 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
                <span>{question}</span>
            </button>

            {/* Expand/Collapse Animation */}
            <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="px-10 pb-4 text-gray-300">{answer}</p>
            </div>
        </div>
    );
};
