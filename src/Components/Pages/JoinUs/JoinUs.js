import React, { useState } from "react";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import DigitalNavigation from "../../Shared/DigitalNavigation/DigitalNavigation";
import "../Enregistrer/Enregistrer.scss";
import "./JoinUs.scss";

export default function JoinUs() {
  const [toggle, setToggle] = useState("registration");
  return (
    <div className="join-us join_us_section">
      <Navbar />
      <div className="container">
        <div className="header">
          <h2>Rejoignez -nous</h2>
          <p>
            Inscrivez-vous ou connectez-vous pour accéder à votre NFCard et{" "}
            <br /> pour louer votre bateau
          </p>
        </div>
        <div className="space25"></div>
        <div className="toggle_wrapper">
          <div className="toggle_two_btn">
            <button
              onClick={() => setToggle("registration")}
              className={`button ${toggle === "registration" && "active"}`}
            >
              Inscription
            </button>
            <button
              onClick={() => setToggle("login")}
              className={`button ${toggle === "login" && "active"}`}
            >
              Connexion
            </button>
          </div>
        </div>
        <div className="space50"></div>
        {toggle === "registration" ? (
          <div className="grid_col_2">
            <DigitalNavigation />
            <div className="wrapper wrapper2">
              <RegistrationForm />
            </div>
          </div>
        ) : (
          <div className="grid_col_2">
            <DigitalNavigation />
            <div className="wrapper wrapper2">
              <LoginForm />
            </div>
          </div>
        )}
      </div>
      <div className="space50"></div>
      <hr />
      <Footer />
    </div>
  );
}

function LoginForm() {
  return (
    <form>
      <h5>Connexion</h5>
      <div className="input_field">
        <label htmlFor="name-2">Email</label>
        <input
          type="text"
          className="input"
          name="name-2"
          placeholder="exemple@nfboat.com"
          id="name-2"
          required
        />
      </div>

      <div className="input_field">
        <label htmlFor="phone-2">Mot de passe</label>
        <input
          type="tel"
          className="input w-input"
          name="phone-2"
          placeholder="Mot de passe"
          id="phone-2"
          required
        />
      </div>

      <div className="submit">
        <input type="submit" value="Connexion" className="button" />
      </div>
    </form>
  );
}
function RegistrationForm() {
  return (
    <form>
      <h5>Inscription</h5>
      <div className="input_field">
        <label htmlFor="name-2a">Nom</label>
        <input
          type="text"
          className="input"
          name="name-2"
          placeholder="Jean"
          id="name-2a"
          required
        />
      </div>

      <div className="input_field">
        <label htmlFor="name-21">Prénom</label>
        <input
          type="text"
          className="input"
          name="name-2"
          placeholder="Dupont"
          id="name-21"
          required
        />
      </div>
      <div className="input_field">
        <label htmlFor="name-2-1">Email</label>
        <input
          type="text"
          className="input"
          name="name-2"
          placeholder="exemple@nfboat.com"
          id="name-2-1"
          required
        />
      </div>
      <div className="input_field">
        <label htmlFor="name-2-22">Numéro de téléphone</label>
        <input
          type="text"
          className="input"
          name="name-2-22"
          placeholder="06 00 00 00 00"
          id="name-2-22"
          required
        />
      </div>
      <div className="input_field">
        <label htmlFor="phone-221">Mot de passe</label>
        <input
          type="tel"
          className="input"
          name="phone-2"
          placeholder="Mot de passe"
          id="phone-221"
          required
        />
      </div>
      <div className="input_field">
        <label htmlFor="phone-2-1">Vérifier le mot de passe</label>
        <input
          type="tel"
          className="input"
          name="phone-2"
          placeholder="Mot de passe"
          id="phone-2-1"
          required
        />
      </div>

      <div className="submit">
        <input type="submit" value="Connexion" className="button" />
      </div>
    </form>
  );
}