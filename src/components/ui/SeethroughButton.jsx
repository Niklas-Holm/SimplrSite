import React from "react";

export default function SeethroughButton ( { text } ) {
    return (
        <button className="text-l font-mono border rounded-full px-14 py-5 border-gray-400 text-gray-400">
            {text}
        </button>
    );
}