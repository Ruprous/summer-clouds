import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WorksSection.css"; // ← この行が必要です
import noImage from "./images/works/noimage.jpg"; // 4:3の「No Image」画像を用意

const works = [
  {
    title: "RP-FolderWatcher",
    thumbnail: "",
    type: "Adobe_Plugin",
    date: "2025-06",
    description: "A lightweight Adobe CEP extension for Premiere Pro. It monitors a specified folder and automatically imports stable files like images, videos, audio, PSDs, and AI files into the project.",
    url: "https://github.com/Ruprous/RP-FolderWatcher"
  },
  {
    title: "Blender アドオン",
    thumbnail: "",
    type: "Blender_Addon",
    date: "2025-05",
    description: "Blender用の便利なアドオン。",
    url: "https://github.com/xxxx"
  },
  {
    title: "Blender アドオン",
    thumbnail: "",
    type: "Blender_Addon",
    date: "2025-05",
    description: "Blender用の便利なアドオン。",
    url: "https://github.com/xxxx"
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
                <div className="work-type">ジャンル：{work.type}</div>
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