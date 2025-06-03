import React from "react";
import "./HeroSection.css";

const HeroSection = () => (
  <section className="hero-section" id="home">
    <h1 className="hero-title">Ruprous / ラプラス</h1>
    <h2 className="hero-portfolio">PORTFOLIO</h2>
    <div className="hero-description hero-desc-anim">
      <p>グラフィックデザイン・ロゴデザイン・映像制作・ジャケットデザイン・サムネイル制作</p>
      <p>ポスター/フライヤーデザイン・配信用オーバーレイ制作・SNSブランディング制作</p>
    </div>
  </section>
);

export default HeroSection;