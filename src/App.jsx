import Navbar from "./components/Navbar";
import Hero from "./sections/HeroSection";
import Footer from "./components/Footer";
import PainSection from "./sections/PainSection";
import DecisionSection from "./sections/DecisionSection";
import WhatYouGetSection from "./sections/WhatYouGetSection";
import WebsiteShowcase from "./sections/WebsiteShowcaseSection";
import PriceSection from "./sections/PriceSection";
import ReviewSection from "./sections/ReviewSection";
import FAQSection from "./sections/FAQSection";
import FounderSection from "./sections/FounderSection";

function App() {
  return (
    <div className="bg-background text-text h-screen">
      <Navbar />
      <Hero />
      <PainSection />
      <DecisionSection />
      <WhatYouGetSection />
      <WebsiteShowcase />
      <PriceSection />
      <ReviewSection />
      <FAQSection />
      <FounderSection />
      <Footer />
    </div>
  );
}

export default App;
