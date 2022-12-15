import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import Languageselector from "../languageselector/Languageselector.js";
import "./navigation.css";
import { useTranslation } from "react-i18next";

function Navigation({ odaberi, jezik, tekst }) {
  const { t } = useTranslation();
  const [isHovering, setIsHovering] = useState(false);
  const [meni, setMeni] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const meniIkonica = () => {
    setMeni((current) => !current);
  };

  const referenca = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", zatvoriIzvan);
  }, []);

  function zatvori() {
    setMeni(false);
  }

  const zatvoriIzvan = (e) => {
    if (!referenca.current.contains(e.target)) setMeni(false);
  };

  return (
    <header>
      <div className="navigation-container">
        <nav>
          {meni ? (
            <FaTimes onClick={meniIkonica} className="nav-icon" size={30} />
          ) : (
            <FaBars onClick={meniIkonica} className="nav-icon" size={30} />
          )}

          <ul className="desktopnav">
            <Link to="/">
              <li>{t('pocetna')}</li>
            </Link>
            <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              {t('istorijat')}{" "}
              {isHovering ? <FaChevronUp /> : <FaChevronDown />}
              <ul>
                <Link
                  onClick={zatvori}
                  className="link"
                  to="/history/citadel"
                >
                  <li>{t('otvrdjavi')}</li>
                </Link>
                <Link
                  onClick={zatvori}
                  className="link"
                  to="/history/nikola-altomanovic"
                >
                  <li>{t('onikolialtomanovicu')}</li>
                </Link>
                <Link
                  onClick={zatvori}
                  className="link"
                  to="/history/vojinovic-family"
                >
                  <li>{t('oporodicivojinovic')}</li>
                </Link>
              </ul>
            </li>
            <Link to="/gallery">
              <li>{t('galerija')}</li>
            </Link>
            <Link to="/project">
              <li>{t('oprojektu')}</li>
            </Link>
            {/* < href='#'><li>{t('preuzmi}</li></')a> */}
          </ul>

          <ul ref={referenca} style={{ display: meni ? "block" : "none" }}>
            <Link to="/">
              <li>{t('pocetna')}</li>
            </Link>
            <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              {t('istorijat')}
              {isHovering ? <FaChevronUp /> : <FaChevronDown />}
              <ul>
                <Link className="link" to="/history/citadel">
                  <li>{t('otvrdjavi')}</li>
                </Link>
                <Link className="link" to="/history/nikola-altomanovic">
                  <li>{t('onikolialtomanovicu')}</li>
                </Link>
                <Link className="link" to="/history/vojinovic-family">
                  <li>{t('oporodicivojinovic')}</li>
                </Link>
              </ul>
            </li>
            <Link to="/gallery">
              <li>{t('galerija')}</li>
            </Link>
            <Link to="/project">
              <li>{t('oprojektu')}</li>
            </Link>
            {/* <a href="#">
              <li>{t('preuzmi')}</li>
            </a> */}
          </ul>
        </nav>

        <Languageselector odaberi={odaberi} jezik={jezik} />
      </div>
    </header>
  );
}

export default Navigation;
