// Import Icones
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Sass
import "./Banner.scss";

// CV
import CV from "../../assets/cv/CV_Dev_Web.pdf"; 

// Images
import bannerImage from "../../assets/images/banner-image.jpg"; 

function Banner() {
  return (
    <section id="banner" className="banner">
      <div className="banner__content">
        <h1 className="banner__name">Mackiw Anthony</h1>
        <h2 className="banner__job">INTEGRATEUR WEB</h2>
        <p className="banner__desc">
          Concepteur et intégrateur des sites web modernes, au design adaptatif et optimisés pour offrir la meilleure expérience utilisateur.
        </p>

        <div className="banner__socials">
          <a href="https://www.facebook.com/" title="Facebook"><FaFacebook /></a>
          <a href="https://www.linkedin.com/" title="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/" title="GitHub"><FaGithub /></a>
          <a href="https://www.instagram.com/" title="Instagram"><FaInstagram /></a>
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