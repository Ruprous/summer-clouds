import React, { useEffect, useRef } from "react";
import cloudLeft from "./images/cumulonimbus-left.png";
import cloudRight from "./images/cumulonimbus-right.png";

// せり出し雲を追加し、左右で高さもずらす
const cloudLayers = [
  // 左側（通常）
  { src: cloudLeft, style: { left: "-300px", top: -120, width: "800px", opacity: 0.5 }, speed: 0.22, zIndex: 0 },
  { src: cloudLeft, style: { left: "-180px", top: 80, width: "600px", opacity: 0.35 }, speed: 0.12, zIndex: 0 },
  // 右側（通常）
  { src: cloudRight, style: { right: "-320px", top: -100, width: "900px", opacity: 0.45 }, speed: 0.18, zIndex: 0 },
  { src: cloudRight, style: { right: "-160px", top: 160, width: "500px", opacity: 0.3 }, speed: 0.08, zIndex: 0 },
  // 左側にせり出し雲（中央寄り・高さずらす）
  { src: cloudLeft, style: { left: "120px", top: 220, width: "520px", opacity: 0.32 }, speed: 0.13, zIndex: 0 },
  // 右側にせり出し雲（中央寄り・高さずらす）
  { src: cloudRight, style: { right: "100px", top: 340, width: "480px", opacity: 0.28 }, speed: 0.11, zIndex: 0 },
  // 反転して左側にright画像
  { src: cloudRight, style: { left: "-100px", top: 260, width: "400px", opacity: 0.28, transform: "scaleX(-1)" }, speed: 0.09, zIndex: 0 },
  { src: cloudRight, style: { left: "120px", top: 380, width: "350px", opacity: 0.22, transform: "scaleX(-1)" }, speed: 0.07, zIndex: 0 },
  { src: cloudRight, style: { left: "-220px", top: 500, width: "500px", opacity: 0.18, transform: "scaleX(-1)" }, speed: 0.05, zIndex: 0 },
  // 反転して右側にleft画像
  { src: cloudLeft, style: { right: "-120px", top: 340, width: "420px", opacity: 0.22, transform: "scaleX(-1)" }, speed: 0.06, zIndex: 0 },
  { src: cloudLeft, style: { right: "80px", top: 480, width: "380px", opacity: 0.16, transform: "scaleX(-1)" }, speed: 0.045, zIndex: 0 },
  { src: cloudLeft, style: { right: "-200px", top: 600, width: "520px", opacity: 0.13, transform: "scaleX(-1)" }, speed: 0.03, zIndex: 0 },
];

const CloudLayers = () => {
  const refs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;

      // スクロール割合（0〜1）
      const scrollRate = maxScroll > 0 ? scrollY / maxScroll : 0;

      // 雲が中心より上に来るように、移動量を調整
      cloudLayers.forEach((cloud, i) => {
        const moveUp = winHeight * 0.4 * scrollRate;
        refs.current[i].style.transform =
          `translateY(calc(-${scrollY * cloud.speed}px - ${moveUp}px))` +
          (cloud.style.transform ? ` ${cloud.style.transform}` : "");
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {cloudLayers.map((cloud, i) => (
        <img
          key={i}
          ref={el => refs.current[i] = el}
          src={cloud.src}
          alt={`cloud-layer-${i}`}
          style={{
            position: "fixed",
            top: cloud.style.top,
            left: cloud.style.left,
            right: cloud.style.right,
            width: cloud.style.width,
            opacity: cloud.style.opacity,
            zIndex: cloud.zIndex,
            pointerEvents: "none",
            userSelect: "none",
            transition: "transform 0.1s linear",
            ...(cloud.style.transform ? { transform: cloud.style.transform } : {}),
          }}
        />
      ))}
    </>
  );
};

export default CloudLayers;