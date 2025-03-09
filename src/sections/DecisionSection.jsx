import React from "react";
import happyWoman from "../assets/happyWoman.png"

export default function DecisionSection () {
    return (
        <div className="bg-beige h-fit text-left text-gray-900 py-14 px-5">
            <h2>
                What if you could make{" "}
                <span className="bg-primary text-white px-2">
                    one decision
                </span>{" "}
                to simplify everything?
            </h2>
            <p className="text-2xl text-gray-800 pt-5">
                When you join SimplrSite, you get a <b>dedicated expert</b> to design, build, & evolve your website as you grow
            </p>
            <div className="w-full flex justify-center pt-10">
                <img src={happyWoman} className="w-2/3 "/>
            </div>
        </div>
    )
}