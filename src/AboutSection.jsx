import React from "react";
import "./AboutSection.css";
import profile from "./images/logo/profile.png";

const AboutSection = () => (
  <section className="about-section" id="about">
    <div className="about-box">
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
            ラプラスです。読めない？いや、読むんですよ。YouTubeでも活動してまして、デザインや3DCGなどの動画を投稿したりゲームのLIVE配信をしております。
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;