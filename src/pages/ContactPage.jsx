import React from "react";
import Booking from "../components/Booking";

export default function ContactPage() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-8 pt-6 flex flex-col items-start">
            <h1 className="text-text sm:leading-16 font-semibold text-6xl mb-4 sm:mb-0 sm:w-1/2 lg:text-8xl lg:leading-20 lg:w-7/10">
                Let's Talk
            </h1>
            <h3 className="text-white text-xl">Email us at</h3>
            <h3 className="text-primary text-xl underline decoration-[#787878] decoration-1 underline-offset-5">
                <a href="mailto:hello@simplrsite.com">hello@simplrsite.com</a>
            </h3>

            {/* ✅ Booking Section Now Matches Main Page Width */}
            <div className="w-full flex justify-start pt-10">
                <Booking />
            </div>
        </div>
    );
}
