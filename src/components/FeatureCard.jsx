import React from "react";

export default function FeatureCard ( { icon, head, description } ) {
    return (
        <div className="flex justify-center items-center text-center flex-col">
            <img src={icon} className="w-12 pb-5 h-full" />
            <h2 className="text-gray-900 pb-5 text-2xl font-bold">{head}</h2>
            <p className="text-gray-800 text-xl">{description}</p>
        </div>
    );
}