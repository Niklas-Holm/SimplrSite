import React, { useEffect } from "react";
import logo from "../assets/logo.png";

export default function Booking() {
    useEffect(() => {
        // Load the Calendly script dynamically
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="w-full max-w-md mx-auto bg-black text-white rounded-lg p-0 shadow-lg">
            <div className="p-6">
                <img className="h-5 mb-2" src={logo} />
                <h1 className="text-2xl font-bold">Discovery Call</h1>
                <p className="text-gray-400 mt-2">
                    In this call, we’ll learn about you and your business, map out a simple sitemap for your website, and guide you through our process and pricing. Our goal is to give you all the details you need to decide if SimplrSite is the right fit. We’re excited to connect! 👋            
                </p>
            </div>

            {/* Calendly Embed */}
            <div 
                className="calendly-inline-widget mt-6" 
                data-url="https://calendly.com/niklasholm/30min"
                style={{ minWidth: "320px", height: "700px" }}
            ></div>
        </div>
    );
}
