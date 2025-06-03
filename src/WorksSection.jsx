import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WorksSection.css"; // ← この行が必要です
import noImage from "./images/works/noimage.jpg"; // 4:3の「No Image」画像を用意

const works = [
  {
    title: "RP-FolderWatcher",
    thumbnail: "",
    type: "AdobePlugin",
    date: "2025-06",
    description: "Premiere Pro用の軽量なAdobe CEPエクステンション。指定したフォルダを監視し、ファイルを自動的にプロジェクトにインポート。",
    url: "https://github.com/Ruprous/RP-FolderWatcher"
  },
  {
    title: "Circular-Arrange",
    thumbnail: "https://raw.githubusercontent.com/Ruprous/Circular-Arrange/refs/heads/main/images/sampleimage01.png",
    type: "BlenderAddon",
    date: "2025-05",
    description: "選択したオブジェクトを指定した数と半径の円の中に配置するための Blender アドオン。",
    url: "https://github.com/Ruprous/Circular-Arrange"
  },
  {
  "title": "PNZ CUSTOM V6. CAME BACK",
  "thumbnail": "https://imgx.foriio.com/images/store/29934e0ac6c5f327e9a1febacdafe5e9.png?auto=compress&w=2184",
  "type": "GraphicDesign",
  "date": "",
  "description": "PNZ主催・GauG協賛の「PNZ CUSTOM V6. CAME BACK 」\nメインビジュアル画像/メンバーリスト画像",
  "url": "https://www.foriio.com/works/556908"
}

];

const WorksSection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 120 });
  }, []);

  return (
    <section className="works-section" id="works">
      <div className="works-box">
        <h2>WORKS</h2>
        <div className="works-list">
          {works.map((work, i) => (
            <div
              className="work-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100} // 順番に遅延
            >
              <div className="work-info">
                <h3 className="work-title">{work.title}</h3>
                <div className="work-thumb-wrap">
                  <img
                    src={work.thumbnail ? work.thumbnail : noImage}
                    alt={work.title}
                    className="work-thumb"
                  />
                </div>
                <div className="work-type">{work.type}</div>
                <p className="work-description">{work.description}</p>
                <a href={work.url} target="_blank" rel="noopener noreferrer" className="work-detail-link">
                  詳細
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;