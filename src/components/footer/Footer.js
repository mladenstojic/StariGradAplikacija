import { useState, useEffect } from "react";
import { FaRegCopyright } from "react-icons/fa";
import "./footer.css";
import GrbSrbije from "../../slike/srbija-grb.png";
import GrbGrada from "../../slike/uzice-grb.png";
import LogoAkademije from "../../slike/akademija-logo.png";
import Dimuse from "../../slike/dimuse_logo_white.png";

function Footer({ tekst }) {
  const [footerTekst, setFooterTekst] = useState([]);
  useEffect(() => {
    const getTekst = async () => {
      const izvuciTekst = await tekst;
      setFooterTekst(izvuciTekst);
    };

    getTekst();
  }, [tekst]);

  return (
    <>
      <section className="footer-container">
        <div className="footer-element-wrapper grb">
          <a href="https://www.kultura.gov.rs/">
            <img className="grb-slika" src={GrbSrbije} alt="grb srbije" />
          </a>
          <p className="grb-tekst">{footerTekst.grbSrbije}</p>
        </div>
        <div className="footer-element-wrapper grb">
          <a href="https://uzice.rs/">
            <img className="grb-slika" src={GrbGrada} alt="grb grada" />
          </a>
          <p className="grb-tekst">{footerTekst.grbGrada}</p>
        </div>
        <div className="footer-element-wrapper grb">
          <a href="https://akademijazs.edu.rs/">
            <img
              className="grb-slika"
              src={LogoAkademije}
              alt="logo akademije"
            />
          </a>
          <p className="grb-tekst">{footerTekst.logoAkademije}</p>
        </div>
        <div className="footer-element-wrapper grb">
          <img className="grb-slika" src={Dimuse} alt="logo dimuse" />
          <p className="grb-tekst">{footerTekst.logoDimuse}</p>
        </div>
        <p style={{ textAlign: "center", flexBasis: "100%", color: "white" }}>
          <FaRegCopyright /> {footerTekst.logoAkademije}{" "}
        </p>
      </section>
    </>
  );
}

export default Footer;
