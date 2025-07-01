import { useState } from "react";
import "./Contact.scss";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage("");
    setSuccessMessage("");
  };

  const isValidEmail = (email) => {
    // Regex simple pour tester l'adresse mail
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifications simples
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    // Simuler l'envoi
    console.log("Formulaire soumis :", formData);

    setSuccessMessage("Votre message a bien été envoyé ✅");

    // Réinitialiser les champs
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <hr className="underline--white" />

      <div className="contact__content">
        <div className="contact__info">
          <p><FaPhone /> 0781983482</p>
          <p><FaEnvelope /> anthonymackiw@outlook.fr</p>
          <p><FaLocationArrow /> Le Grau du Roi, FRANCE</p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom et prénom *"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse email *"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="contact__row">
            <input
              type="tel"
              name="phone"
              placeholder="Numéro de téléphone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Votre message *"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {/* 🔔 Messages de retour */}
          {errorMessage && <p className="contact__error">{errorMessage}</p>}
          {successMessage && <p className="contact__success">{successMessage}</p>}

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
