import React from "react";
import WebsiteShowcase from "../components/WebsiteShowcase";

export default function WebsiteShowcaseSection() {
    return (
        <div className="flex flex-col justify-center h-fit bg-background pt-18">
            <h2 className="text-white text-center px-5 -mb-8">
                Get a custom crafted website for your unique business.
            </h2>
            <WebsiteShowcase />
        </div>
    );
}
