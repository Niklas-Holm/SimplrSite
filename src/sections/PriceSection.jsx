import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SeethroughButton from "../components/ui/SeethroughButton";
import PricingCard from "../components/PricingCard";
import arrowIcon from "../assets/arrow.png"; // ✅ Custom arrow for navigation

export default function PriceSection() {
    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [currentSlide, setCurrentSlide] = useState(1); // ✅ Start at the middle plan

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pricingPlans = [
        {
            header: "Basic Plan",
            price: 99,
            features: [
                "Simple information site",
                "Mobile optimized",
                "Painless process",
                "Domain & security",
                "SSL certificate",
                "3 monthly changes",
                "Website redesign every 24 months",
            ],
            popular: false,
        },
        {
            header: "Pro Plan",
            price: 149,
            features: [
                "Custom-designed website",
                "Fully optimized",
                "Painless process",
                "Priority support",
                "Contact form",
                "Booking system",
                "Basic SEO",
                "Domain & security",
                "SSL certificate",
                "5 monthly changes",
                "Website redesign every 18 months",
            ],
            popular: true, // ✅ Most Popular Plan
        },
        {
            header: "Enterprise Plan",
            price: 249,
            features: [
                "Unlimited pages & features",
                "Fully custom-built website",
                "Painless process",
                "Premium support",
                "Advanced SEO & user tracking",
                "Blog & e-commerce included",
                "Domain & security",
                "SSL certificate",
                "Unlimited changes",
                "Website redesign every 12 months",
            ],
            popular: false,
        },
    ];    

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1, 
        centerMode: true,
        centerPadding: "20px", 
        arrows: false, 
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    const nextSlide = () => {
        if (sliderRef.current && currentSlide < pricingPlans.length - 1) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current && currentSlide > 0) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <motion.div 
            className="flex flex-col items-center bg-[#272727] pt-24 pb-20 px-2 border-red-500 rounded-t-2xl min-h-[900px] sm:min-h-[800px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.div 
                className="px-18 text-left md:text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="text-white pb-8">
                    Join the stress-free website club.
                </h2>
                <h3 className="text-2xl pb-3">
                    Get a dedicated expert to design, build, and maintain your website effortlessly.
                </h3>
                <motion.div 
                    className="pb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link to="/contact">
                        <SeethroughButton text="Let's Talk" />
                    </Link>
                </motion.div>
            </motion.div>

            {/* ✅ Mobile: Show Slider, Desktop: Show Normal Layout */}
            {isMobile ? (
                <motion.div 
                    className="w-full max-w-[1100px] relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Slider ref={sliderRef} {...settings}>
                        {pricingPlans.map((plan, index) => (
                            <motion.div key={index} className="px-4">
                                <PricingCard
                                    header={plan.header}
                                    price={plan.price}
                                    features={plan.features}
                                    popular={plan.popular}
                                />
                            </motion.div>
                        ))}
                    </Slider>

                    {/* ✅ Navigation Arrows at the Bottom */}
                    {pricingPlans.length > 1 && (
                        <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-4">
                            <button
                                onClick={prevSlide}
                                className={`w-12 h-12 bg-primary flex items-center justify-center rounded-full cursor-pointer ${
                                    currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                disabled={currentSlide === 0}
                            >
                                <img src={arrowIcon} alt="Previous" className="w-5 h-5 rotate-180" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className={`w-12 h-12 bg-primary flex items-center justify-center rounded-full cursor-pointer ${
                                    currentSlide === pricingPlans.length - 1 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                disabled={currentSlide === pricingPlans.length - 1}
                            >
                                <img src={arrowIcon} alt="Next" className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </motion.div>
            ) : (
                <motion.div 
                    className="flex flex-col md:flex-row gap-5 w-full justify-center"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.3 }}
                    viewport={{ once: true }}
                >
                    {pricingPlans.map((plan, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                        >
                            <PricingCard
                                header={plan.header}
                                price={plan.price}
                                features={plan.features}
                                popular={plan.popular}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
}
