import React, { useState } from "react";
import works from "../data/works.json";
import noImage from "../images/works/noimage.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CloudLayers from "../CloudLayers";
import UtilityPoles from "../UtilityPoles";
import "../WorksSection.css";

const allTypes = Array.from(new Set(works.map((w) => w.type).filter(Boolean)));
const ITEMS_PER_PAGE = 12;

const WorksList = () => {
  const [sortOrder, setSortOrder] = useState("desc"); // desc:新しい順, asc:古い順
  const [typeFilter, setTypeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // ページ番号（1始まり）

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

  // ページネーション用
  const totalPages = Math.ceil(filteredWorks.length / ITEMS_PER_PAGE);
  const pagedWorks = filteredWorks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // ページ番号リスト生成（最大5つ表示、現在ページを中心に）
  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, 5];
    if (currentPage >= totalPages - 2) return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  };

  // ページ変更時にスクロールトップ
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // currentPageが変わった直後にスクロール
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // フィルタ・ソート変更時は1ページ目に戻す
  React.useEffect(() => {
    setCurrentPage(1);
  }, [sortOrder, typeFilter]);

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
            {pagedWorks.map((work, i) => (
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
                  <div
                    className="work-type"
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => setTypeFilter(work.type)}
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === "Enter" || e.key === " ") setTypeFilter(work.type);
                    }}
                    aria-label={`タイプで絞り込み: ${work.type}`}
                  >
                    {work.type}
                  </div>
                  <p className="work-description">{work.descriptionShort || work.description}</p>
                  <Link to={`/works/${work.id}`} className="work-detail-link">
                    詳細
                  </Link>
                </div>
              </div>
            ))}
            {pagedWorks.length === 0 && (
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
          {/* ページネーションUI */}
          {totalPages > 1 && (
            <div className="pagination-bar" style={{ display: "flex", justifyContent: "center", gap: 4, margin: "32px 0 0 0" }}>
              <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} aria-label="最初のページ">&#171;</button>
              <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} aria-label="前のページ">&#60;</button>
              {getPageNumbers().map((num) => (
                <button
                  key={num}
                  onClick={() => handlePageChange(num)}
                  className={num === currentPage ? "active" : ""}
                  aria-current={num === currentPage ? "page" : undefined}
                >
                  {num}
                </button>
              ))}
              <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} aria-label="次のページ">&#62;</button>
              <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} aria-label="最後のページ">&#187;</button>
            </div>
          )}
        </div>
      </section>
      <UtilityPoles />
      <Footer />
    </>
  );
};

export default WorksList;