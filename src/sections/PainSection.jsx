import React from "react";
import frustrated from "../assets/frustrated.png";

export default function PainSection() {
    return (
        <div className="relative bg-white w-full rounded-t-2xl overflow-hidden -mb-2 flex flex-col items-center text-center">
            {/* Text */}
            <h2 className="text-center p-4 pt-14">
                Building a new website can feel like working a second job.
            </h2>

            {/* Image - Scales Correctly */}
            <img 
                src={frustrated} 
                className="relative z-20 pb-12 px-6 w-[80%] sm:w-[60%] lg:w-[60%] max-w-3xl"
                alt="Frustrated person"
            />

            {/* ✅ Mobile SVG (Two Large Waves, Deep Valleys) */}
            <svg
                className="absolute bottom-0 left-0 w-full h-[120px] sm:hidden z-0"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#F0EBE3"
                    d="M0,240 C480,450 960,80 1440,240 L1440,320 H0 Z"
                    />
            </svg>


            {/* ✅ Desktop SVG (Two Large Waves, Deep Valleys) */}
            <svg
                className="absolute bottom-0 left-0 hidden sm:block w-full h-[180px] lg:h-[220px] z-0"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#F0EBE3"
                    d="M0,256 C480,400 960,100 1440,256 L1440,320 H0 Z"
                />
            </svg>
        </div>
    );
}
