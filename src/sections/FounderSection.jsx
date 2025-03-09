import React from "react";
import founderImage from "../assets/founder.jpg"; // Replace with actual image
import signature from "../assets/signature.png"; // Replace with actual signature image

export default function FounderSection() {
    return (
        <div className="max-w-md mx-auto space-y-5">
            {/* Image Section (Attached to Left) */}
            <div className="relative w-[95%] rounded-r-4xl overflow-hidden">
                <img 
                    src={founderImage} 
                    alt="Founder"
                    className="w-full h-75 object-cover rounded-r-2xl"
                />
            </div>

            {/* Content Section (Right-Aligned) */}
            <div className="ml-auto w-[95%] bg-white px-10 py-18 rounded-l-4xl shadow-lg">
                <h2 >
                    A great website is <br />
                    <span className="bg-primary text-white px-1">never finished.</span>
                </h2>

                <p className="text-gray-800 text-lg leading-8 mt-4">
                    Your website shouldn't be frozen in time. It's a living extension of your 
                    business and should evolve with you. After building hundreds of sites for 
                    clients worldwide, I've watched too many websites become outdated, 
                    costing businesses real customers. That's why I founded SiteClub – to 
                    build websites that don't just maintain their value, they get better with time.
                </p>

                {/* Signature */}
                <img 
                    src={signature} 
                    alt="Benjamin Manley Signature"
                    className="w-40 mt-6"
                />
                <p className="text-gray-900 font-medium">Niklas Holm, Founder</p>
            </div>
        </div>
    );
}
