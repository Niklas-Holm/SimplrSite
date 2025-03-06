import Navbar from "./components/Navbar";
import Hero from "./sections/HeroSection";
import Footer from "./components/Footer";
import PainSection from "./sections/PainSection";
import DecisionSection from "./sections/DecisionSection";

function App() {
  return (
    <div className="bg-background text-text h-screen">
      <Navbar />
      <Hero />
      <PainSection />
      <DecisionSection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
