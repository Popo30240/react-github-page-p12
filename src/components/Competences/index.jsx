import SkillBar from "../SkillBar";
import "./Competences.scss";

function Competences({ skills = [] }) {
  return (
    <section className="competences" id="competences">
      <h2>
        Mes <span>compétences</span>
      </h2>
      <hr className="underline--red"/>
      <div className="competences__list">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Competences;
