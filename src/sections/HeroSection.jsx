import React, { useEffect, useState } from "react";
import designIcon from "../assets/icons/designIcon.png";
import processIcon from "../assets/icons/processIcon.png";
import updatesIcon from "../assets/icons/updatesIcon.png";
import BulletWithIcon from "../components/BulletWithIcon";
import screenshot1 from "../assets/screenshots/screenshot1.jpg";
import screenshot2 from "../assets/screenshots/screenshot2.png";
import screenshot3 from "../assets/screenshots/screenshot3.jpg";
import screenshot4 from "../assets/screenshots/screenshot4.jpg";

export default function HeroSection() {
    // Track window width for dynamic scaling
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // **Dynamically Calculate Hero Section Height**
    const maxWidth = 1400; // Maximum width for scaling
    const minHeroHeight = 800-40; // Minimum hero section height (small screens)
    const maxHeroHeight = 800-72; // Maximum hero section height (1400px+ screens)

    // Linear interpolation for hero height
    const heroHeight = minHeroHeight + ((maxHeroHeight - minHeroHeight) * (windowWidth / maxWidth));

    return (
        <div
            style={{ height: `${heroHeight}px` }} // ✅ Hero height increases as screen widens
            className="w-full max-w-[1400px] mx-auto flex flex-col justify-between pt-18 px-8 sm:px-[30px] relative overflow-hidden"
        >
            {/* Hero Content */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between sm:gap-10 lg:gap-14 md:px-20 lg:px-30">
                {/* Header */}
                <h1 
                    className="text-text sm:leading-16 font-semibold text-6xl mb-7 sm:mb-0 sm:w-1/2 lg:text-8xl lg:leading-20 lg:w-7/10"
                >
                    Get a website. <span className="text-primary">Skip the drama.</span>
                </h1>

                {/* Bullet Points */}
                <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-col sm:w-1/2 text-[clamp(16px,2vw,27px)] lg:w-3/10">
                    <BulletWithIcon icon={designIcon} text="Killer design" />
                    <BulletWithIcon icon={processIcon} text="Painless process" />
                    <BulletWithIcon icon={updatesIcon} text="Strategic updates" />
                </div>
            </div>

            {/* Website Screenshots (Overlapping on Mobile, Expanded on Large Screens) */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center items-end sm:justify-center sm:items-end sm:px-[30px]">
                {/* Overlapping Images on Mobile */}
                <div className="absolute w-full flex justify-center items-end sm:hidden">
                    <img src={screenshot1} alt="Website 1" className="absolute right-[5%] bottom-0 w-1/3 max-w-[200px] h-auto rounded-t-2xl shadow-lg z-20" />
                    <img src={screenshot2} alt="Website 2" className="absolute left-[5%] bottom-0 w-1/2 max-w-[200px] h-auto rounded-t-2xl shadow-lg z-10" />
                    <img src={screenshot3} alt="Website 3" className="relative w-3/7 max-w-[200px] h-auto rounded-t-2xl shadow-xl z-30" />
                    <img src={screenshot4} alt="Website 4" className="absolute left-[65px] top-15 w-3/7 max-w-[200px] h-auto rounded-t-2xl shadow-lg z-40" />
                </div>

                {/* Stacked & Spaced Images on Large Screens (Moves Image 4 Down) */}
                <div className="hidden sm:flex w-full justify-center gap-3 items-end">
                    {/* Image 1 (Static) */}
                    <img 
                        src={screenshot1} 
                        alt="Website 1" 
                        className="w-[22%] max-w-[300px] h-auto rounded-t-2xl shadow-lg z-20"
                        style={{ transform: "translateY(40px)" }}
                    />

                    {/* Image 2 (Static, Full Height) */}
                    <img 
                        src={screenshot2} 
                        alt="Website 2" 
                        className="w-[22%] max-w-[300px] h-full rounded-t-2xl shadow-lg z-10"
                    />

                    {/* Image 3 (Static) */}
                    <img 
                        src={screenshot3} 
                        alt="Website 3" 
                        className="w-[22%] max-w-[300px] h-auto rounded-t-2xl shadow-xl z-30"
                        style={{ transform: "translateY(40px)" }}
                    />

                    {/* Image 4 (Moves Downwards Slightly) */}
                    <img 
                        src={screenshot4} 
                        alt="Website 4" 
                        className="w-[22%] max-w-[300px] h-auto rounded-t-2xl shadow-lg z-40 self-end"
                        style={{ transform: "translateY(90px)" }} // ✅ Fixed downward movement
                    />
                </div>
            </div>
        </div>
    );
}
