import React from "react";
import designIcon from "../assets/icons/designIcon.png";
import processIcon from "../assets/icons/processIcon.png";
import updatesIcon from "../assets/icons/updatesIcon.png";
import BulletWithIcon from "../components/BulletWithIcon";
import screenshot1 from "../assets/screenshots/screenshot1.jpg";
import screenshot2 from "../assets/screenshots/screenshot2.png";
import screenshot3 from "../assets/screenshots/screenshot3.jpg";
import screenshot4 from "../assets/screenshots/screenshot4.jpg";

export default function HeroSection() {
    return (
        <div style={{ height: "calc(100vh - 88px)" }} className="h-screen max-w-[1023px] max-h-[844px] sm:h-fit flex flex-col justify-between pt-18 px-14 relative overflow-hidden sm:pb-60 justify-self-center">
            
            {/* Hero Content (Side by Side on Larger Screens) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between sm:gap-10 lg:gap-14">
                
                {/* Header */}
                <h1 className="text-text leading-16 font-semibold text-6xl mb-7 sm:mb-0 sm:w-1/2">
                    Get a website. <span className="text-primary">Skip the drama.</span>
                </h1>

                {/* Bullet Points (Side by Side on Larger Screens) */}
                <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-col sm:w-1/2">
                    <BulletWithIcon icon={designIcon} text="Killer design" />
                    <BulletWithIcon icon={processIcon} text="Painless process" />
                    <BulletWithIcon icon={updatesIcon} text="Strategic updates" />
                </div>
            </div>

            {/* Website Screenshots */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1023px] flex justify-center items-end 
                sm:flex-row sm:gap-3 sm:justify-center sm:items-end">
                
                {/* Back Left Image */}
                <img 
                    src={screenshot1} 
                    alt="Website 1" 
                    className="absolute right-[5%] bottom-0 w-1/3 lg:w-[35%] max-w-[200px] h-auto rounded-t-2xl shadow-lg z-20 
                    sm:static sm:w-[22%]"
                />
                
                {/* Back Right Image */}
                <img 
                    src={screenshot2} 
                    alt="Website 2" 
                    className="absolute left-[5%] bottom-0 w-1/2 lg:w-[50%] max-w-[200px] h-auto rounded-t-2xl shadow-lg z-10 
                    sm:static sm:w-[22%]"
                />
                
                {/* Center Front Image */}
                <img 
                    src={screenshot3} 
                    alt="Website 3" 
                    className="relative w-3/7 lg:w-[40%] max-w-[200px] h-auto rounded-t-2xl shadow-xl z-30 
                    sm:static sm:w-[22%]"
                />

                {/* Floating/Offset Front Image */}
                <img 
                    src={screenshot4} 
                    alt="Website 4" 
                    className="absolute left-[65px] top-15 w-3/7 lg:w-[40%] max-w-[200px] h-auto rounded-t-2xl shadow-lg z-40 
                    sm:static sm:w-[22%]"
                />
            </div>
        </div>
    );
}
