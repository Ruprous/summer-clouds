import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import HeroSection from "./HeroSection";
import WorksSection from "./WorksSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./components/Footer";
import CloudLayers from "./CloudLayers";
import UtilityPoles from "./UtilityPoles";
import WorkDetail from "./components/WorkDetail";
import WorksList from "./components/WorksList";
import SNSList from "./SNSList";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
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
        <Route path="/works" element={<WorksList />} />
        <Route path="/sns" element={<SNSList />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
