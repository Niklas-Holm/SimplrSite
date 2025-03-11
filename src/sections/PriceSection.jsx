import React, { useRef, useState, useEffect } from "react";
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

    // Detect screen size to switch between layouts
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

    // Slick settings for mobile slider
    const settings = {
        dots: false,
        infinite: false, // ✅ No infinite loop
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1, // ✅ Start at the middle plan
        centerMode: true,
        centerPadding: "20px", // ✅ Shows part of other slides
        arrows: false, // ✅ Custom arrows instead
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
        <div className="flex flex-col items-center bg-[#272727] pt-24 pb-20 px-2 border-red-500 rounded-t-2xl min-h-[900px] sm:min-h-[800px]">
            <div className="px-18 text-left md:text-center">
                <h2 className="text-white pb-8">
                    Join the stress-free website club.
                </h2>
                <h3 className="text-2xl pb-3">
                    Get a dedicated expert to design, build, and maintain your website effortlessly.
                </h3>
                <div className="pb-10">
                    <Link to="/contact">
                        <SeethroughButton text="Let's Talk" />
                    </Link>
                </div>
            </div>

            {/* ✅ Mobile: Show Slider, Desktop: Show Normal Layout */}
            {isMobile ? (
                <div className="w-full max-w-[1100px] relative">
                    <Slider ref={sliderRef} {...settings}>
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className="px-4">
                                <PricingCard
                                    header={plan.header}
                                    price={plan.price}
                                    features={plan.features}
                                    popular={plan.popular}
                                />
                            </div>
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
                </div>
            ) : (
                <div className="flex flex-col md:flex-row gap-5 w-full justify-center">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            header={plan.header}
                            price={plan.price}
                            features={plan.features}
                            popular={plan.popular}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
