import { useParams } from "react-router-dom";
import works from "../data/works.json";
import Header from "./Header";
import Footer from "./Footer";

const WorkDetail = () => {
  const { id } = useParams();
  const work = works.find(w => w.id === id);

  if (!work) return <div>作品が見つかりません</div>;

  return (
    <>
      <Header />
      <div className="work-detail">
        <h2>{work.title}</h2>
        <img src={work.thumbnail} alt={work.title} />
        <div>{work.type}</div>
        <div>{work.date}</div>
        <p>{work.description}</p>
        <a href={work.url} target="_blank" rel="noopener noreferrer">外部リンク</a>
      </div>
      <Footer />
    </>
  );
};

export default WorkDetail;