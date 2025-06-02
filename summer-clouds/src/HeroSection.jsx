import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './HeroSection.css';
import Cloud from './components/Cloud';

const HeroSection = () => {
  useEffect(() => {
    const clouds = document.querySelectorAll('.cloud');
    gsap.to(clouds, {
      y: '+=20',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="sky">
        <Cloud className="cloud" />
        <Cloud className="cloud" />
        <Cloud className="cloud" />
      </div>
      <div className="utility-pole">
        {/* UtilityPole component will be added here later */}
      </div>
    </section>
  );
};

export default HeroSection;