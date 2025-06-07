import "./WorkDetail.css";
import { useParams } from "react-router-dom";
import works from "../data/works.json";
import Header from "./Header";
import Footer from "./Footer";
import CloudLayers from "../CloudLayers";

const WorkDetail = () => {
  const { id } = useParams();
  const work = works.find(w => w.id === id);

  if (!work) return <div>作品が見つかりません</div>;

  // 優先度: youtubeId > thumbnail > デフォルト画像
  let mediaContent = null;
  if (work.youtubeId) {
    mediaContent = (
      <div className="work-media work-media-youtube">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${work.youtubeId}`}
          title={work.title + " | YouTube動画"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  } else if (work.thumbnail && work.thumbnail.trim() !== "") {
    mediaContent = (
      <img
        className="work-media work-media-img"
        src={work.thumbnail}
        alt={work.title + " サムネイル画像"}
      />
    );
  } else {
    mediaContent = (
      <img
        className="work-media work-media-img"
        src="/summer-clouds/images/works/noimage.jpg"
        alt="No Image"
      />
    );
  }

  return (
    <>
      <CloudLayers />
      <Header />
      <div className="work-detail">
        <h2>{work.title}</h2>
        {mediaContent}
        <div className="work-meta">
          <span className="work-detail-type" title="カテゴリ">{work.type}</span>
          <span className="work-date" title="公開年月">{work.date.replace(/\-/g, ".")}</span>
        </div>
        <p className="work-description">{work.description}</p>
        {work.credit && work.credit.length > 0 && (
          <div className="work-credit">
            <h3>Credit</h3>
            <ul>
              {work.credit.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
        {(work.links && work.links.length > 0) || work.youtubeId ? (
          <div className="work-links">
            <h3>Links</h3>
            <ul>
              {work.youtubeId && (
                <li>
                  <a href={`https://www.youtube.com/watch?v=${work.youtubeId}`} target="_blank" rel="noopener noreferrer">
                    <span className="link-icon">▶</span> YouTubeで見る
                  </a>
                </li>
              )}
              {work.links && work.links.map((link, i) => (
                <li key={i}>
                  {link.url && link.label
                    ? <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <span className="link-icon">🔗</span> {link.label}
                      </a>
                    : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default WorkDetail;