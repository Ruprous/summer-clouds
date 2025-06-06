import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WorksSection.css";
import noImage from "./images/works/noimage.jpg";
import works from "./data/works.json";
import { Link } from "react-router-dom";

const WorksSection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 120 });
  }, []);

  const sortedWorks = works
    .slice()
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return b.date.localeCompare(a.date);
    })
    .slice(0, 6);

  return (
    <section className="works-section" id="works">
      <div className="works-box">
        <h2>WORKS</h2>
        <div className="works-list">
          {sortedWorks.map((work, i) => (
            <div
              className="work-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="work-info">
                <h3 className="work-title">{work.title}</h3>
                <div className="work-thumb-wrap thumb-16x9">
                  <Link to={`/works/${work.id}`}>
                    <img
                      src={work.thumbnail
                        ? work.thumbnail
                        : work.youtubeId
                        ? `https://img.youtube.com/vi/${work.youtubeId}/hqdefault.jpg`
                        : noImage}
                      alt={work.title}
                      className="work-thumb"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                </div>
                <div className="work-type">{work.type}</div>
                <p className="work-description">{work.descriptionShort || work.description}</p>
                <Link
                  to={`/works/${work.id}`}
                  className="work-detail-link"
                >
                  詳細
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <span
            className="andmore-anim-wrapper"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Link to="/works" className="andmore-link">
              他の作品はこちら
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;