import "./languageselector.css";
import ReactCountryFlag from "react-country-flag";
import { useEffect, useRef, useState } from "react";

import { FaChevronDown, FaChevronUp, FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Languageselector({ odaberi }) {
  const [isActive, setIsActive] = useState(false);
  const [activeLng, setActiveLng] = useState(0);

  const { i18n } = useTranslation();

  const prikazi = () => {
    setIsActive((current) => !current);
  };

  const languages= [
    {
      id: "rs",
      name: "RS",
    },
    {
      id: "en",
      name: "GB",
    },
    {
      id: "de",
      name: "DE",
    },
    {
      id: "ru",
      name: "RU",
    },
  ];

  const ref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", zatvoriIzvan);

    return () => document.removeEventListener("mousedown", zatvoriIzvan);
  }, []);

  const zatvoriIzvan = (e) => {
    if (!ref.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  const handleLanguageChange = (code, index) => {
    i18n.changeLanguage(code);
    setIsActive(false);
    setActiveLng(index);
  };

  return (
    <div ref={ref} className="language-container">
      <a
        className="facebook"
        href="https://www.facebook.com/profile.php?id=100085277840506&mibextid=LQQJ4d"
      >
        <FaFacebookF size={28} />
      </a>
      <div onClick={prikazi} className="language-selected">
        <ReactCountryFlag
          countryCode={languages[activeLng].name}
          svg
          style={{ width: "1.25em", height: "1.25em" }}
          title={languages[activeLng].name}
        />
        {languages[activeLng].name}
        {isActive ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div
        className="language-option-wrapper"
        style={{ display: isActive ? "block" : "none" }}
      >
        {languages.map((lang, index) => {
          return (
            <div
              key={lang.id}
              onClick={() => handleLanguageChange(lang.id, index)}
              className="language-option"
            >
              <ReactCountryFlag
                countryCode={lang.name}
                svg
                style={{ width: "1.25em", height: "1.25em" }}
                title={lang.name}
              />
              {lang.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Languageselector;
