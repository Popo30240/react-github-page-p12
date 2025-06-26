import "./Apropos.scss";
import profilImage from "../../assets/images/picture-profil.jpg"; // adapte le nom réel ici

function Apropos() {
  return (
    <section id="apropos" className="apropos">
      <h2 className="apropos__title">À propos de moi</h2>
      <div className="apropos__container">
        <div className="apropos__image">
          <img src={profilImage} alt="Mackiw Anthony portrait" />
        </div>
        <div className="apropos__text">
          <h3 className="apropos__subtitle">Intégrateur web, frontend.</h3>
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
          <button className="apropos__btn">En savoir plus…</button>
        </div>
      </div>
    </section>
  );
}

export default Apropos;
