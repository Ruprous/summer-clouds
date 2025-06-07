import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import './App.css';

function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  useEffect(() => {
    const konami = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "b", "a"
    ];
    let pos = 0;
    const handler = (e) => {
      if (e.key === konami[pos]) {
        pos++;
        if (pos === konami.length) {
          setShowEasterEgg(true);
          pos = 0;
        }
      } else {
        pos = 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <BrowserRouter basename="/summer-clouds">
        <AppRoutes />
      </BrowserRouter>
      {showEasterEgg && (
        <div style={{
          position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.7)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <img src="/summer-clouds/images/works/toripi.gif" alt="Easter Egg" style={{ maxWidth: "80vw", maxHeight: "80vh", borderRadius: "16px", boxShadow: "0 0 32px #000" }} />
          <button onClick={() => setShowEasterEgg(false)} style={{ position: "absolute", top: 32, right: 32, fontSize: 32, background: "none", color: "#fff", border: "none", cursor: "pointer" }}>×</button>
        </div>
      )}
    </>
  );
}

export default App;
