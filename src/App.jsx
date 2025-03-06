import Navbar from "./components/Navbar";
import Hero from "./sections/HeroSection";
import Footer from "./components/Footer";
import PainSection from "./sections/PainSection";

function App() {
  return (
    <div className="bg-background text-text h-screen">
      <Navbar />
      <Hero />
      <PainSection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
