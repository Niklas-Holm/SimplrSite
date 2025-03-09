import React from "react";
import FeatureCard from "../components/FeatureCard";
import designIcon from "../assets/icons/designIcon.png";
import processIcon from "../assets/icons/processIcon.png";
import updatesIcon from "../assets/icons/updatesIcon.png";

export default function WhatYouGetSection() {
    return (
        <div className="h-fit bg-white pb-24 rounded-2xl px-6 -mt-4 mx-auto flex justify-center">
            <div className="max-w-[1400px]">
                <h2 className="text-center px-7 pt-25 pb-15">
                    When you join SimplrSite, everything just works.
                </h2>

                {/* ✅ Mobile: Stacked Layout, Desktop: 3-Column Layout */}
                <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-16">
                    <FeatureCard icon={designIcon} head="Killer Design" description="We combine professional design with strategic layouts and clear messaging to meet your business goals." />
                    <FeatureCard icon={processIcon} head="Painless Process" description="Skip the usual website headaches. We keep you in the loop without drowning you in endless meetings." />
                    <FeatureCard icon={updatesIcon} head="Strategic Updates" description="Request updates anytime. We handle everything from quick text changes to strategic improvements." />
                </div>
            </div>
        </div>
    );
}
