import React from "react";
import "./SNSList.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CloudLayers from "./CloudLayers";
import PNZLogo from "./images/PNZ_logo.png";

// 仮データ例（後でpropsや外部データ化も可）
const snsLinks = [
  { name: "X (旧Twitter)", url: "https://x.com/Ruprous", desc: "お仕事報告から日常のポストまで幅広く行っています。ポスト…？？なんだそれは？？？ツイートやろがい。" },
  { name: "Twitch", url: "https://www.twitch.tv/ruprous/", desc: "Twitchです。サブチャンネル作る前はここでゲームの配信をしていました。" },
  { name: "YouTube", url: "https://www.youtube.com/@ruprous", desc: "経験から得た、ちょっとつかえるデザイン・GFX・blenderの知識を投稿していたり、ゲームのLIVE配信やモトブログ等をしております。" },
  { name: "YouTube(サブ)", url: "https://www.youtube.com/@RuprousNoNedoko", desc: "サブチャンネル。EditしたMontageやクリップなど。" },
  { name: "Geartics", url: "https://www.geartics.com/Ruprous", desc: "使用しているデバイスをここにまとめています。ここにアクセスしてもらうとチョットだけお金もらえるんでよかったらアクセスしてください。ここから買ってもらえると割とお金もらえるんでよかったら買ってください。" },
  { name: "エブリスタ", url: "https://estar.jp/users/364457212", desc: "五月雨望海としてここで小説を書いています。長編から短編まであるのでお時間あるときにでも読んでみてください。" },
  { name: "foriio", url: "https://www.foriio.com/ruprous", desc: "ポートフォリオ・作品まとめ。" },
  { name: "Behance", url: "https://www.behance.net/Ruprous", desc: "Behanceという、Adobe傘下の実績シェアのプラットフォームです。こちらには載せていないものや過去の作品はこちらから見れたりします。" },
  { name: "GitHub", url: "https://github.com/Ruprous", desc: "プログラム・コード公開用リポジトリ。" },
];

const SNSList = () => (
  <>
    <CloudLayers />
    <Header />
    <section className="sns-list-section">
      <h2>SNS</h2>
      <ul className="sns-list">
        {snsLinks.map((sns) => (
          <li key={sns.name} className="sns-list-item">
            <a href={sns.url} target="_blank" rel="noopener noreferrer">{sns.name}</a>
            <span className="sns-desc">{sns.desc}</span>
          </li>
        ))}
      </ul>
      <h3 className="sns-team-title">所属チーム</h3>
      <div className="sns-team-center">
        <div className="sns-list-item sns-team-pnz">
          <div className="sns-team-pnz-logo">
            <img src={PNZLogo} alt="TEAM PNZロゴ" style={{ width: 56, height: 56, borderRadius: 12, background: 'transparent', filter: 'brightness(0) invert(1)' }} />
          </div>
          <div className="sns-team-pnz-main">
            <div className="sns-team-pnz-title">TEAM PNZ</div>
            <div className="sns-team-pnz-desc">「色んな事を楽しくやる。」をスローガンに掲げる組織。APEX LEGENDSやVALORANTなどでPNZカスタムを運営しています。気軽に参加できる定期参加型のAPEXやモンハンワイルズのカスタムも開催中！</div>
            <div className="sns-team-pnz-links">
              <a href="https://x.com/PNZ_Official" target="_blank" rel="noopener noreferrer" className="sns-list-link">X（公式）</a>
              <a href="https://www.youtube.com/@TEAMPNZ" target="_blank" rel="noopener noreferrer" className="sns-list-link">YouTube（公式）</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default SNSList;
