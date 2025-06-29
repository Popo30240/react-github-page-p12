import { useEffect, useRef, useState } from "react";
import "./SkillBar.scss";

function SkillBar({ skill }) {
  const barRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = barRef.current; // Copie la référence dans une variable locale
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node); // Utilise la variable locale ici
      }
    };
  }, []);

  return (
    <div className="skillbar" ref={barRef}>
      <div className="skillbar-header">
        <span className="skillbar-name">{skill.name}</span>
        <span className="skillbar-percent">{skill.level}%</span>
      </div>
      <div className="skillbar-track">
        <div
          className="skillbar-fill"
          style={{ width: visible ? `${skill.level}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
