import React from "react";
import Header from "./components/Header";
import HeroSection from "./HeroSection";
import WorksSection from "./WorksSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./components/Footer";
import CloudLayers from "./CloudLayers";
import UtilityPoles from "./UtilityPoles";
import './App.css';

function App() {
  return (
    <>
      <CloudLayers />
      <Header />
      <HeroSection />
      <WorksSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <UtilityPoles />
    </>
  );
}

export default App;
