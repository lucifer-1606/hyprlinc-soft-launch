import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TrustedBrands from "./components/TrustedBrands";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import HowItWorks from "./components/HowItWorks";
import PlatformPerformanceStats from "./components/PlatformPerformance";
import UserSpecificJoin from "./components/UserSpecificJoin";
import IndustryChallenge from "./components/IndustryChallenge";
import Features from "./components/Features";
import EndConnection from "./components/EndConnection";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import ShippingAndDeliveryPolicy from "./pages/ShippingAndDeliveryPolicy";
import DataDeletionInstructions from "./pages/DataDeletionInstructions";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";

// Home component containing the main landing page
function Home() {
  const [navOpen, setNavOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNavOpen(false);
  };

  return (
    <div className="">
      {/* Header */}
      <Header
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        scrollToSection={scrollToSection}
      />

      {/* hero section */}
      <Hero />

      {/* Join as a influencer, brand and agency */}
      <UserSpecificJoin />

      {/* Platform Performance Section */}
      <PlatformPerformanceStats />

      {/* Why Traditional Influencer Marketing Doesn't Work Anymore */}
      <IndustryChallenge />

      {/* How it works - Updated with consistent typography */}
      <HowItWorks scrollToSection={scrollToSection} />

      {/* Feature section */}
      <Features />

      {/* Trusted Branch */}
      <TrustedBrands />

      {/* FrequentlyAskedQuestions */}
      <FrequentlyAskedQuestions />

      {/* End Connection */}
      <EndConnection />

      {/* Footer Section */}
      <Footer />

    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/cancellation-policy" element={<CancellationRefundPolicy />} />
      <Route path="/shipping-policy" element={<ShippingAndDeliveryPolicy />} />
      <Route path="/data-deletion-instructions" element={<DataDeletionInstructions />} />
    </Routes>
  );
}

export default App;