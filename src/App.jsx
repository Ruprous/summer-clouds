import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./HeroSection";
import WorksSection from "./WorksSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./components/Footer";
import CloudLayers from "./CloudLayers";
import UtilityPoles from "./UtilityPoles";
import WorkDetail from "./components/WorkDetail";
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/summer-clouds">
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
