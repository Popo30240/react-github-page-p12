import "./about.scss";
import profilImage from "../../assets/images/picture-profil.jpg"; // adapte le nom réel ici

function about() {
  return (
    <section id="about" className="about">
      <h2 className="about__title">À propos de moi</h2>
      <div className="about__container">
        <div className="about__image">
          <img src={profilImage} alt="Mackiw Anthony portrait" />
        </div>
        <div className="about__text">
          <h3 className="about__subtitle">Intégrateur web, frontend.</h3>
          <p>
            Passionné par le développement web, j’ai suivi une formation
            d’intégrateur web chez OpenClassrooms.  
            <br />
            Je maîtrise HTML, CSS, JavaScript et React.
          </p>
          <p>
            Mon objectif est de transformer des maquettes en sites performants, accessibles et responsifs.
            <br />
            Rigoureux et curieux, j’aime relever de nouveaux défis techniques pour offrir des solutions adaptées aux besoins des utilisateurs.
          </p>
          <button className="about__btn">En savoir plus…</button>
        </div>
      </div>
    </section>
  );
}

export default about;
