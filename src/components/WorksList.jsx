import React from "react";
import works from "../data/works.json";
import noImage from "../images/works/noimage.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CloudLayers from "../CloudLayers";
import UtilityPoles from "../UtilityPoles";
import "../WorksSection.css";

const allTypes = Array.from(new Set(works.map((w) => w.type).filter(Boolean))).sort();
const ITEMS_PER_PAGE = 12;

function getPageFromQuery(search) {
  const params = new URLSearchParams(search);
  const page = parseInt(params.get("page"), 10);
  return isNaN(page) || page < 1 ? 1 : page;
}

function getQueryValue(search, key, fallback) {
  const params = new URLSearchParams(search);
  const value = params.get(key);
  return value !== null ? value : fallback;
}

const WorksList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // URLクエリから状態を取得
  const sortOrder = getQueryValue(location.search, "sort", "desc");
  const typeFilter = getQueryValue(location.search, "type", "");
  const currentPage = parseInt(getQueryValue(location.search, "page", "1"), 10) || 1;

  // クエリ変更時に状態をURLに反映
  const setQuery = (paramsObj) => {
    const params = new URLSearchParams(location.search);
    Object.entries(paramsObj).forEach(([k, v]) => {
      if (v === "" || v == null) {
        params.delete(k);
      } else {
        params.set(k, v);
      }
    });
    navigate({ search: params.toString() }, { replace: false });
  };

  // 並び替え・フィルタ変更時
  const handleSortChange = (e) => setQuery({ sort: e.target.value, page: 1 });
  const handleTypeChange = (e) => setQuery({ type: e.target.value, page: 1 });
  const handleReset = () => setQuery({ type: "", page: 1 });
  const handlePageChange = (page) => setQuery({ page });

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

  // currentPageが変わった直後にスクロール
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

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
                onChange={handleSortChange}
              >
                <option value="desc">NEWER</option>
                <option value="asc">OLDER</option>
              </select>
            </label>
            <label>
              SELECT TYPE：
              <select
                value={typeFilter}
                onChange={handleTypeChange}
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
              onClick={handleReset}
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
                  <div className="work-thumb-wrap thumb-16x9">
                    <Link to={`/works/${work.id}?page=${currentPage}&sort=${sortOrder}&type=${typeFilter}`}>
                      <img
                        src={
                          work.thumbnail
                            ? work.thumbnail
                            : work.youtubeId
                            ? `https://img.youtube.com/vi/${work.youtubeId}/hqdefault.jpg`
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
                    onClick={() => setQuery({ type: work.type, page: 1 })}
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === "Enter" || e.key === " ") setQuery({ type: work.type, page: 1 });
                    }}
                    aria-label={`タイプで絞り込み: ${work.type}`}
                  >
                    {work.type}
                  </div>
                  <p className="work-description">{work.descriptionShort || work.description}</p>
                  <Link to={`/works/${work.id}?page=${currentPage}&sort=${sortOrder}&type=${typeFilter}`} className="work-detail-link">
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