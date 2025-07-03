// Import Icones
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Sass
import "./Banner.scss";

// CV
import CV from "../../assets/cv/Anthony_Mackiw_CV.pdf"; 

// Images
import bannerImage from "../../assets/images/banner-image.jpg"; 

function Banner() {
  return (
    <section id="banner" className="banner">
      <div className="banner__content">
        <p className="banner__intro">Bonjour, je suis</p>
        <h1 className="banner__name">Mackiw Anthony</h1>
        <h2 className="banner__job">et je suis intégrateur web</h2>
        <p className="banner__desc">
          Je conçois et intègre des sites web modernes, responsifs et optimisés
          pour offrir la meilleure expérience utilisateur.
        </p>

        <div className="banner__socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
        </div>

        <a href={CV} className="banner__btn" download>
          Télécharger mon CV
        </a>
      </div>

      <div className="banner__image">
        <img src={bannerImage} alt="Illustration développeur" />
      </div>
    </section>
  );
}

export default Banner;