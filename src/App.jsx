import React from "react";
import Header from "./components/Header";
import HeroSection from "./HeroSection";
import WorksSection from "./WorksSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WorksSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
