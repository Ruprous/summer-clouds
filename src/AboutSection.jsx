import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutSection.css";
import profile from "./images/logo/profile.png";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 120 });
  }, []);

  return (
    <section className="about-section" id="about">
      <div
        className="about-box"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <h2>ABOUT ME</h2>
        <div className="about-content">
          <img src={profile} alt="プロフィール画像" className="about-profile" />
          <div>
            <p>
              グラフィックデザイナー・マルチメディアクリエイター。2018年10月より独学でグラフィックデザインを開始。<br />
              現在に至るまで多くのクリエイティブ制作に携わる。「色んな事を楽しくやる。」をスローガンに掲げる組織、
              <a href="https://x.com/PNZ_official" className="pnz-link" target="_blank" rel="noopener noreferrer">TEAM PNZ</a>に所属。
            </p>
            <p>
              ラプラスです。読めない？いや、読むんですよ。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;