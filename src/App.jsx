import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Reserve from "./components/Reserve";

function useScrollAnimation(resetKey) {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden, .hidden2");

    // Reset animation
    hiddenElements.forEach((el) => el.classList.remove("show"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 },
    );

    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [resetKey]);
}

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    if (performance.navigation.type === 1) {
      return "main";
    }
    return "login";
  });

  const [lang, setLang] = useState("el");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    fetch("translations.json")
      .then((res) => res.json())
      .then((data) => setTranslations(data))
      .catch((err) => console.error("Error loading translations:", err));
  }, []);

  const t = (key) => {
    if (!translations[key]) return key;
    return translations[key][lang] || translations[key]["en"] || key;
  };

  useScrollAnimation(activeTab);

  const renderTab = () => {
    switch (activeTab) {
      case "reserve":
        return <Reserve t={t} onBackClick={() => setActiveTab("main")} />;
      case "main":
      default:
        return <Main t={t} onReserveClick={() => setActiveTab("reserve")} />;
    }
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 10000,
        }}>
        <button
          onClick={() => setLang(lang === "el" ? "en" : "el")}
          style={{
            padding: "8px 16px",
            borderRadius: "10px",
            cursor: "pointer",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}>
          {lang === "el" ? "English" : "Ελληνικά"}
        </button>
      </div>

      <div className="content">{renderTab()}</div>
    </div>
  );
}

export default App;
