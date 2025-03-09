import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="bg-background text-text h-screen">
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
        } />
        <Route path="/contact" element={<div><ContactPage /><Footer /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
