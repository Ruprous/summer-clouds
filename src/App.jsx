import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import HeroSection from "./HeroSection";
import WorksSection from "./WorksSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./components/Footer";
import './App.css'
import cloudImg1 from "./images/cumulonimbus-01.png";
import cloudImg2 from "./images/cumulonimbus-02.png";
import cloudImg3 from "./images/cumulonimbus-03.png";

function App() {
  // 雲を複数用意
  const cloudRefs = Array.from({ length: 6 }, () => useRef(null));

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      // すべての雲が上に動く
      if (cloudRefs[0].current) {
        cloudRefs[0].current.style.transform = `translateY(-${scrollY * 0.25}px) scale(1.7)`;
      }
      if (cloudRefs[1].current) {
        cloudRefs[1].current.style.transform = `translateY(-${scrollY * 0.18}px) scale(1.4)`;
      }
      if (cloudRefs[2].current) {
        cloudRefs[2].current.style.transform = `translateY(-${scrollY * 0.12}px) scale(1.2)`;
      }
      if (cloudRefs[3].current) {
        cloudRefs[3].current.style.transform = `translateY(-${scrollY * 0.09}px) scale(1.1)`;
      }
      if (cloudRefs[4].current) {
        cloudRefs[4].current.style.transform = `translateY(-${scrollY * 0.05}px) scale(0.9)`;
      }
      if (cloudRefs[5].current) {
        cloudRefs[5].current.style.transform = `translateY(-${scrollY * 0.03}px) scale(0.8)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [cloudRefs]);

  return (
    <>
      {/* 手前の雲（大きく動く） */}
      <img
        ref={cloudRefs[0]}
        src={cloudImg1}
        alt="cloud left front"
        style={{
          position: "fixed",
          left: "-180px",
          top: 0,
          width: "800px",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.5,
          userSelect: "none"
        }}
      />
      <img
        ref={cloudRefs[1]}
        src={cloudImg2}
        alt="cloud right front"
        style={{
          position: "fixed",
          right: "-160px",
          top: 120,
          width: "700px",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.5,
          userSelect: "none"
        }}
      />
      {/* 中間の雲 */}
      <img
        ref={cloudRefs[2]}
        src={cloudImg3}
        alt="cloud left middle"
        style={{
          position: "fixed",
          left: "60px",
          top: 320,
          width: "500px",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.4,
          userSelect: "none"
        }}
      />
      <img
        ref={cloudRefs[3]}
        src={cloudImg1}
        alt="cloud right middle"
        style={{
          position: "fixed",
          right: "40px",
          top: 400,
          width: "420px",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.4,
          userSelect: "none"
        }}
      />
      {/* 奥の雲 */}
      <img
        ref={cloudRefs[4]}
        src={cloudImg2}
        alt="cloud left back"
        style={{
          position: "fixed",
          left: "180px",
          top: 600,
          width: "320px",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.3,
          userSelect: "none"
        }}
      />
      <img
        ref={cloudRefs[5]}
        src={cloudImg3}
        alt="cloud right back"
        style={{
          position: "fixed",
          right: "160px",
          top: 700,
          width: "260px",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.3,
          userSelect: "none"
        }}
      />
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
