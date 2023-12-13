import "./footer.scss";
import React from "react";
import logoFooter from "../../assets/logoFooter.svg";

function Footer() {
  return (
    <footer>
      <img className="footer__logo" src={logoFooter} alt="footer-logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
