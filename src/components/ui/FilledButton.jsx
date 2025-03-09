import React from "react";

export default function FilledButton ( { text, menuOpen = true } ) {
    return (
        <button
            className={`bg-primary text-white px-10 py-5 rounded-full font-regular font-mono text-l transition-all duration-700 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {text}
          </button>
    );
}