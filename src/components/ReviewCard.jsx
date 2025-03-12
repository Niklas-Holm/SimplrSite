import React from "react";

export default function ReviewCard({ stars, reviewText, highlight, image, name, role }) {
    // Function to highlight the specific text within the review
    const highlightText = (text, highlight) => {
        if (!highlight || !text.includes(highlight)) return text;

        const parts = text.split(highlight);
        return parts.reduce((acc, part, index) => {
            return index === parts.length - 1
                ? [...acc, part]
                : [...acc, part, <span key={index} className="bg-primary text-white px-1">{highlight}</span>];
        }, []);
    };

    return (
        <div className="max-w-lg p-6">
            {/* Star Rating */}
            <div className="flex space-x-1 text-yellow-500 text-2xl mb-4">
                {"★".repeat(stars).padEnd(5, "☆").split("").map((star, index) => (
                    <span key={index}>{star}</span>
                ))}
            </div>

            {/* Review Text with Highlighting */}
            <p className="text-lg text-gray-900 leading-relaxed">
                {highlightText(reviewText, highlight)}
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center mt-6">
                {/* Reviewer Image */}
                <img 
                    src={image}
                    alt={name}
                    className="w-9 h-9 object-cover"
                />

                {/* Reviewer Name & Role */}
                <div className="ml-4">
                    <p className="text-md text-gray-900">{name}</p>
                    <p className="text-md font-bold text-black">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}
