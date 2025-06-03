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
      </div>
      <Footer />
    </>
  );
};

export default WorkDetail;