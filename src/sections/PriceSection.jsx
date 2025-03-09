import React from "react";
import SeethroughButton from "../components/ui/SeethroughButton";
import PricingCard from "../components/PricingCard";

export default function PriceSection () {
    return (
        <div className="flex items-center flex-col bg-[#272727] py-15 px-2 border-red-500 rounded-t-2xl">
            <div className="px-18">
                <h2 className="text-white pb-8">
                    Join the worry-free website club.
                </h2>
                <h3 className="text-2xl pb-3">
                    Add a dedicated website expert to your team who will design, build, and manage your website.
                </h3>
                <div className="pb-10">
                    <SeethroughButton text="Let's Talk" />
                </div>
            </div>
            <PricingCard 
                header="SimplrSite Membership" 
                price={149} 
                features={[
                    "5 page website",
                    "Killer design",
                    "Painless process",
                    "Strategic updates",
                    "Dedicated expert",
                    "Domain and hosting",
                    "Future redesigns",
                ]} 
            />
        </div>
    );
}