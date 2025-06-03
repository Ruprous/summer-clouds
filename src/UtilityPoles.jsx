import React, { useEffect, useRef } from "react";
import denchu from "./images/denchu.png";

const UtilityPoles = () => {
  const ref = useRef();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;

      // スクロール割合（0〜1）
      const scrollRate = maxScroll > 0 ? scrollY / maxScroll : 0;

      // スクロールに応じて下から上へスライド
      if (ref.current) {
        const translateY = 100 * (1 - scrollRate); // 100%→0%
        // transitionを即時にすることで遅延をなくす
        ref.current.style.transition = "none";
        ref.current.style.transform = `translateY(${translateY}%)`;
        ref.current.style.pointerEvents = "none";
        // 次のフレームでtransitionを戻す（リサイズや他の動作用）
        requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transition = "transform 0s";
          }
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <img
      ref={ref}
      src={denchu}
      alt="電柱"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100vw",
        height: "auto",
        zIndex: -1,
        transform: "translateY(100%)",
        transition: "transform 0s",
        pointerEvents: "none",
        userSelect: "none",
        opacity: 0.9, // ここを追加（90%不透明）
      }}
    />
  );
};

export default UtilityPoles;