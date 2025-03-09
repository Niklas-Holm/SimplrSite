import React from "react";

export default function BulletWithIcon ( { icon, text } ) {
    return (
        <div className="flex flex-row gap-3 items-center pb-5">
            <img src={icon} className="h-8" />
            <h3 className="font-body text-[1.4rem]" >{text}</h3>
        </div>
    )
}