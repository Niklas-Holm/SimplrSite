import React from "react";

export default function BulletWithIcon ( { icon, text } ) {
    return (
        <div className="flex flex-row gap-3 items-center pb-5 lg:gap-4 lg:pb-10">
            <img src={icon} className="h-8 lg:h-9" />
            <h3 className="font-body text-[1.4rem] lg:text-3xl" >{text}</h3>
        </div>
    )
}