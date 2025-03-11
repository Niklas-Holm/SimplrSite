import React from "react";
import founderImage from "../assets/founder.jpg"; // Replace with actual image
import signature from "../assets/signature.png"; // Replace with actual signature image

export default function FounderSection() {
    return (
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-10">
            {/* ✅ Image Section (Left-Aligned on Mobile, Rounded on Large Screens) */}
            <div className="relative w-full md:w-[95%] xl:w-1/2 rounded-r-4xl xl:rounded-4xl overflow-hidden">
                <img 
                    src={founderImage} 
                    alt="Founder"
                    className="w-full h-75 object-cover rounded-r-2xl xl:rounded-4xl lg:h-100"
                />
            </div>

            {/* ✅ Content Section (Right-Aligned on Large Screens, Fully Rounded on XL Screens) */}
            <div className="w-full md:w-[95%] xl:w-1/2 bg-white px-5 md:px-10 py-18 rounded-l-4xl xl:rounded-4xl shadow-lg ml-0 md:ml-auto">
                <h2>
                    A great website is <br />
                    <span className="bg-primary text-white px-1">always evolving.</span>
                </h2>

                <p className="text-gray-800 text-lg leading-8 mt-4">
                    Your website should evolve with your business, not hold it back. 
                    After working with major companies and seeing countless websites become outdated, 
                    I knew there had to be a better way. That’s why I started SimplrSite—to create beautiful,
                    modern websites that stand the test of time.<br />
                    I’m a software engineer with a passion for web design, and I believe every business 
                    deserves a site that not only looks great today but keeps getting better.
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
