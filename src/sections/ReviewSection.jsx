import React from "react";
import ReviewCard from "../components/ReviewCard";

import profile1 from "../assets/profilePics/profile1.png";

export default function ReviewSection() {
    const reviews = [
        {
            stars: 5,
            highlight: "I never stress about my website",
            reviewText: "I never stress about my website. It’s already paying for itself and bringing in $500-$1,000+ a month.",
            image: profile1,
            name: "Mark Labriola II",
            role: "Founder, Brand Viva",
        },
        {
            stars: 5,
            highlight: "best website service",
            reviewText: "The best website service ever! They handle everything, and my business has grown.",
            image: profile1,
            name: "Sarah Johnson",
            role: "CEO, TechFlow",
        },
        {
            stars: 5,
            highlight: "Highly recommend",
            reviewText: "Highly recommend this team! My website looks professional and clean. Worth every penny!",
            image: profile1,
            name: "James Carter",
            role: "Marketing Director, Creative Co.",
        },
        {
            stars: 5,
            highlight: "Incredible customer service",
            reviewText: "Incredible customer service. They built exactly what I needed, and updates are quick!",
            image: profile1,
            name: "Emily Wilson",
            role: "Founder, StartUpGo",
        },
    ];

    return (
        <div className="flex flex-col items-center bg-white py-16">
            <h1 className="text-4xl text-center font-bold text-gray-900 mb-10">
                See what people like about us.
            </h1>

            {/* Grid Layout for Reviews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </div>
    );
}
