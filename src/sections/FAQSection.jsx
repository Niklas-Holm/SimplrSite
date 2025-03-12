import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import FilledButton from "../components/ui/FilledButton";
import OverlayForm from "../components/OverlayForm";

const faqData = [
    {
        question: "How long does it take to build my website?",
        answer: `We launch most websites within 7 days, depending on the plan you choose. 
        If you need something faster, let us know, and we’ll prioritize your project. 
        Our process is streamlined to be completely painless—just provide your details, 
        and we handle everything from design to hosting.`,
    },
    {
        question: "What exactly is SimplrSite?",
        answer: `SimplrSite is a subscription-based website service that gives businesses 
        a professional, high-quality website without the large upfront cost. 
        We take care of everything—design, hosting, security, updates, and even future redesigns.`,
    },
    {
        question: "How does the subscription work?",
        answer: `You pick a plan that fits your needs, and we build, host, and maintain your website 
        for a fixed monthly fee. No long-term contracts, no hidden costs, and you can upgrade, 
        downgrade, or cancel anytime.`,
    },
    {
        question: "What’s included in my monthly subscription?",
        answer: `Every plan includes website design, hosting, security, and updates. 
        The Pro and Enterprise plans offer advanced features like SEO optimization, 
        booking systems, and e-commerce functionality. You’ll also get a full website 
        redesign every 12-24 months to keep things fresh.`,
    },
    {
        question: "What do I need to provide to get started?",
        answer: `We make it simple—just send us your business details, logo, and any content 
        you'd like on your website. If you don’t have content, no problem! 
        We can provide placeholder text and stock images until you're ready.`,
    },
    {
        question: "What if I need updates or changes?",
        answer: `We offer a set number of content updates per month based on your plan. 
        Need more? Just upgrade, or we can offer additional updates for a small fee. 
        Updates include text, images, and minor tweaks—major redesigns are included 
        every 12-24 months depending on your plan.`,
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: `Absolutely! Every site we build is fully optimized for mobile, tablet, 
        and desktop viewing. Your customers will get a seamless experience no matter 
        what device they use.`,
    },
    {
        question: "Do I own my website?",
        answer: `You own all your content and branding, but the website itself is part of our subscription service. 
        If you cancel your subscription, the website will be taken offline. If you’d like to keep your website 
        and move it elsewhere, we can negotiate a one-time buyout price for full ownership.`,
    },    
    {
        question: "Can I cancel my subscription anytime?",
        answer: `Yes! You’re not locked into any long-term contracts. Your website will 
        remain active until the end of your billing period.`,
    },
    {
        question: "What happens if I need extra features later?",
        answer: `You can upgrade at any time if you need additional features. 
        Our Enterprise Plan includes unlimited pages and custom-built functionality, 
        so if you need more, we can handle it!`,
    },
    {
        question: "Do you offer e-commerce websites?",
        answer: `Yes! Our Enterprise Plan includes full e-commerce functionality, or you 
        can request an add-on to our Pro Plan. We support Shopify, WooCommerce, 
        or a fully custom-built store depending on your needs.`,
    },
    {
        question: "Is SEO included in all plans?",
        answer: `Basic SEO is included in the Pro and Enterprise plans, covering Google 
        indexing, meta tags, and search-friendly structure. Advanced SEO with keyword 
        research and analytics tracking is available in the Enterprise plan.`,
    },
    {
        question: "How is my website hosted?",
        answer: `We handle all hosting on a secure, high-performance cloud platform. 
        Every site includes SSL security to protect your customers and improve 
        Google rankings.`,
    },
    {
        question: "How do I contact support?",
        answer: `You can reach us at support@simplrsite.com. Pro users get priority support, 
        while Enterprise users have access to premium support with faster response times.`,
    },
    {
        question: "What makes SimplrSite better than hiring a web agency?",
        answer: `Hiring a web agency means paying thousands upfront, dealing with long 
        timelines, and handling your own maintenance. SimplrSite is affordable, 
        stress-free, and includes everything—design, hosting, security, and updates—at 
        a simple monthly price. No surprises, no tech headaches!`,
    },
    {
        question: "How do I get started?",
        answer: `Just visit simplrsite.com, choose a plan, book a meeting
         or email and we will get started right away!`,
    },
];
export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* ✅ FAQ Section */}
            <div className="max-w-2xl mx-auto py-12 px-4 text-white">
                <motion.h2 
                    className="text-left mb-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Any questions?
                </motion.h2>

                {/* ✅ FAQ List */}
                <motion.div 
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.2 }}
                    viewport={{ once: true }}
                >
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                        >
                            <FAQItem
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={activeIndex === index}
                                toggleFAQ={toggleFAQ}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <OverlayForm isOpen={showOverlay} onClose={() => setShowOverlay(false)} />

                {/* ✅ Button Fade-in */}
                <motion.button
                    onClick={() => setShowOverlay(true)} // ✅ Open overlay
                    className="mt-3 font-mono px-10 py-4 rounded-full bg-[#303030]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    Ask Us a Question
                </motion.button>
            </div>
        </>
    );
}

// ✅ FAQ Item Component with Expand/Collapse Animation
const FAQItem = ({ index, question, answer, isOpen, toggleFAQ }) => {
    return (
        <div className="border-b-1 border-[#303030] w-fit">
            <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium py-3 flex items-center gap-2 transition-all duration-300"
            >
                {/* ✅ Animated Chevron Icon */}
                <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDownIcon className="w-8 text-primary" />
                </motion.div>
                <span>{question}</span>
            </button>

            {/* ✅ Expand/Collapse Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="px-10 pb-4 text-gray-300">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};