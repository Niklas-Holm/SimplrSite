import React from "react";
import FilledButton from "./ui/FilledButton";

export default function PricingCard({ header, price, features = [] }) {
    return (
        <div className="bg-background p-10 rounded-4xl shadow-lg w-full max-w-sm border-primary border-4">
            <h3 className="text-2xl pb-5 font-bold text-primary text-left">{header}</h3>
            <h2 className="text-5xl pb-3 font-bold text-white text-left mt-2">${price}/mo</h2>

            {/* Features List */}
            <div className="mt-4 pb-10">
                <ul className="space-y-4 text-white text-center">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-[1.4rem] ">
                            <span className="text-primary">✓</span> <span className="underline decoration-gray-500 underline-offset-4 decoration-1">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="justify-self-center">
                <FilledButton text="Join the Club" />
            </div>
        </div>
    );
}
