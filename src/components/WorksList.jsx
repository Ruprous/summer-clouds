import React, { useState } from "react";
import works from "../data/works.json";
import noImage from "../images/works/noimage.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CloudLayers from "../CloudLayers";
import UtilityPoles from "../UtilityPoles";
import "../WorksSection.css";

// type一覧を抽出
const allTypes = Array.from(new Set(works.map((w) => w.type).filter(Boolean)));

const sortedWorks = works
  .slice()
  .sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });

const WorksList = () => {
  const [sortOrder, setSortOrder] = useState("desc"); // desc:新しい順, asc:古い順
  const [typeFilter, setTypeFilter] = useState("");

  // フィルタ・ソート適用
  const filteredWorks = works
    .filter((w) => !typeFilter || w.type === typeFilter)
    .slice()
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return sortOrder === "desc"
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date);
    });

  return (
    <>
      <CloudLayers />
      <Header />
      <section className="works-section">
        <div className="works-box">
          <h2>ALL WORKS</h2>
          {/* 並び替え・検索UI */}
          <div className="works-filter-bar">
            <label>
              SORTING：
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="desc">NEWER</option>
                <option value="asc">OLDER</option>
              </select>
            </label>
            <label>
              SELECT TYPE：
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="">ALL</option>
                {allTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <button
              onClick={() => setTypeFilter("")}
              className={typeFilter ? "active" : "inactive"}
              tabIndex={typeFilter ? 0 : -1}
              disabled={!typeFilter}
            >
              リセット
            </button>
          </div>
          <div className="works-list">
            {filteredWorks.map((work, i) => (
              <div className="work-card" key={work.id || i}>
                <div className="work-info">
                  <h3 className="work-title">{work.title}</h3>
                  <div className="work-thumb-wrap">
                    <Link to={`/works/${work.id}`}>
                      <img
                        src={
                          work.youtubeId
                            ? `https://img.youtube.com/vi/${work.youtubeId}/hqdefault.jpg`
                            : work.thumbnail
                            ? work.thumbnail
                            : noImage
                        }
                        alt={work.title}
                        className="work-thumb"
                      />
                    </Link>
                  </div>
                  <div className="work-type">{work.type}</div>
                  <p className="work-description">{work.descriptionShort || work.description}</p>
                  <Link to={`/works/${work.id}`} className="work-detail-link">
                    詳細
                  </Link>
                </div>
              </div>
            ))}
            {filteredWorks.length === 0 && (
              <div
                style={{
                  color: "#fff",
                  textAlign: "center",
                  width: "100%",
                  margin: "32px 0",
                }}
              >
                該当する作品がありません。
              </div>
            )}
          </div>
        </div>
      </section>
      <UtilityPoles />
      <Footer />
    </>
  );
};

export default WorksList;