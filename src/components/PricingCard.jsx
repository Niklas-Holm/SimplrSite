import React from "react";
import { Link } from "react-router-dom";
import FilledButton from "./ui/FilledButton";

export default function PricingCard({ header, price, features = [], popular = false }) {
    return (
        <div className={`my-10 relative bg-background p-8 rounded-4xl shadow-lg w-full max-w-sm border-primary border-4 
            ${popular ? "scale-105 border-amber-400" : ""} transition-all duration-300`}
        >
            {/* ✅ Most Popular Badge */}
            {popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                </div>
            )}

            <h3 className="text-2xl pb-5 font-bold text-primary text-left">{header}</h3>
            <h2 className="text-5xl pb-3 font-bold text-white text-left mt-2">${price}/mo</h2>

            {/* Features List */}
            <div className="mt-4 pb-10">
                <ul className="space-y-4 text-white text-center">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-[1.4rem] ">
                            <span className="text-primary">✓</span> 
                            <span className="underline decoration-gray-500 underline-offset-4 decoration-1">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="justify-self-center">
                <Link to="/contact">
                    <FilledButton text="Join the Club" />
                </Link>
            </div>
        </div>
    );
}
