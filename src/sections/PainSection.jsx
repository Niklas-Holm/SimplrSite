import React from "react";
import frustrated from "../assets/frustrated.png";

export default function PainSection() {
    return (
        <div className="relative bg-white h-fit w-full rounded-t-2xl overflow-hidden -mb-2">
            <h2 className="text-center p-4 pt-14">
                Building a new website can feel like working a second job.
            </h2>

            {/* Image with Negative Margin to Overlap the Wave */}
            <img src={frustrated} className="relative z-20 pb-12 px-6" />

            {/* Wave SVG */}
            <svg
                className="absolute -bottom-5 left-0 w-full h-[120px] z-0"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#F0EBE3"
                    d="M0,100C200,-20,400,20,600,100C800,180,1000,300,1200,260C1400,220,1440,160,1440,160V320H0Z"
                />
            </svg>
        </div>
    );
}
