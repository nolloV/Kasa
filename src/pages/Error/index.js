import "./error.scss";
import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__txt">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error;
