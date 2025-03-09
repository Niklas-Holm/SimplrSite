import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import website1 from "../assets/website1.png";
import arrowIcon from "../assets/arrow.png"; // ✅ Import custom arrow

const websites = [
    {
        id: 1,
        image: website1,
        title: "JM-Fliserens Powerwashing",
        subtitle: "Powerwashing company located in Denmark",
    },
    {
        id: 2,
        image: website1,
        title: "Master Webflow Like a Pro",
        subtitle: "Learn to build stunning Webflow sites with animations.",
    },
    {
        id: 3,
        image: website1,
        title: "Next.js & Tailwind UI Kit",
        subtitle: "Build high-performance websites using Next.js and Tailwind.",
    },
    {
        id: 4,
        image: website1,
        title: "E-commerce Web Solutions",
        subtitle: "Optimized online stores built with speed and performance in mind.",
    },
    {
        id: 5,
        image: website1,
        title: "Custom Web Apps",
        subtitle: "Bespoke web applications tailored to your needs.",
    },
];

export default function WebsiteShowcase() {
    const sliderRef = useRef(null); // ✅ Use ref to control the slider manually

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // ✅ Default: Show 1 slide on small screens
        slidesToScroll: 1,
        autoplay: false,
        arrows: false, // ✅ Disable default slick arrows
        responsive: [
            {
                breakpoint: 1024, // ✅ Up to 1024px (small screens) → Show 1 slide
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 3000, // ✅ Above 1024px (large screens) → Show 2 slides
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "20px", // ✅ Adds slight spacing between slides
                }
            }
        ]
    };

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div className="text-white flex flex-col items-center justify-center py-20 px-5">
            <div className="w-full max-w-[1100px] relative">
                <Slider ref={sliderRef} {...settings}>
                    {websites.map((website) => (
                        <div key={website.id} className="px-2 md:px-4"> {/* ✅ Adds horizontal spacing */}
                            <div className="relative w-full aspect-[16/10] bg-white rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={website.image}
                                    alt="Website Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 className="text-xl font-bold text-center mt-4">
                                {website.title}
                            </h1>
                            <p className="text-lg text-gray-300 text-center">
                                {website.subtitle}
                            </p>
                        </div>
                    ))}
                </Slider>

                {/* ✅ Navigation Arrows at the Bottom */}
                <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 flex gap-4">
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </div>
            </div>
        </div>
    );
}

// ✅ Custom Right Arrow (Inside a Primary Circle)
function NextArrow({ onClick }) {
    return (
        <div 
            className="w-12 h-12 bg-primary flex items-center justify-center rounded-full cursor-pointer"
            onClick={onClick}
        >
            <img src={arrowIcon} alt="Next" className="w-5 h-5" />
        </div>
    );
}

// ✅ Custom Left Arrow (Inside a Primary Circle, Rotated)
function PrevArrow({ onClick }) {
    return (
        <div 
            className="w-12 h-12 bg-primary flex items-center justify-center rounded-full cursor-pointer"
            onClick={onClick}
        >
            <img src={arrowIcon} alt="Previous" className="w-5 h-5 rotate-180" />
        </div>
    );
}
