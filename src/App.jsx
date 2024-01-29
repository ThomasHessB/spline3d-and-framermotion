import React from "react";
import Spline from "@splinetool/react-spline";
import Header from "./components/Header";
import MainHero from "./components/MainHero";
import FeaturesSection from "./components/FeaturesSection";
import SecondHero from "./components/SecondHero";
import TestimonialText from "./components/TestimonialText";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import EndHero from "./components/EndHero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <MainHero />
      <FeaturesSection />
      <SecondHero />
      <TestimonialText />
      <TestimonialsSection />
      <EndHero />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
