import "./oprojektu.css";
import AkademijaLogo from "../../slike/akademija-logo-crni.png";
import ProjekatLogo from "../../slike/dimuse_logo.jpg";
import grbGrad from "../../slike/uzice-grb.png";
import grbSrbija from "../../slike/srbija-grb.png";
import video from "../../oprojektu/video2.mp4";
import { useTranslation } from "react-i18next";
function Oprojektu() {
  const { t } = useTranslation();

  return (
    <>
      <div className="nav-line"></div>
      <div className="about-container">
        <div className="about-wrapper">
          <h1 className="naslov about-naslov">{t("naslov")}</h1>
          <ul className="about-lista">
            <li className="about-lista-element"> {t("nazivprojekta")}</li>
            <img
              className="about-image"
              src={ProjekatLogo}
              alt="logo projekta"
            />
            <li className="about-lista-element">
              <h4>{t("dimsue")}</h4>
            </li>
            <br />
            <br />
            <li className="about-lista-element">{t("nosilacprojekta")}</li>
            <img
              className="about-image"
              src={AkademijaLogo}
              alt="logo akademije"
            />
            <li className="about-lista-element">
              <h4>{t("akademija")}</h4>
            </li>
            <br />
            <br />
            <li className="about-lista-element"> {t("koordinator")}</li>
            <li className="about-lista-element">
              {" "}
              <h4>{t("koordinator1")}</h4>
            </li>
            <br />
            <br />
            <li className="about-lista-element">
              {t("finansiranje")}
              <ul className="about-podlista grbovi">
                <div className="grb">
                  <img
                    className="about-image"
                    src={grbSrbija}
                    alt="grb srbije"
                  />
                  <li
                    style={{ textAlign: "center" }}
                    className="about-lista-element"
                  >
                    <strong>{t("finansiranje1")}</strong>
                  </li>
                </div>

                <div className="grb">
                  <img className="about-image" src={grbGrad} alt="grb grada" />
                  <li
                    style={{ textAlign: "center" }}
                    className="about-lista-element"
                  >
                    <strong>{t("finansiranje2")}</strong>
                  </li>
                </div>
              </ul>
            </li>
            <br />
            <li className="about-lista-element">
              <h4>{t("prijavanaNaKonkurs")}</h4>
            </li>
            <li className="about-lista-element">
              <h4>{t("rezultati")}</h4>
            </li>
            <li className="about-lista-element">
              <h4>{t("rangiranje")}</h4>
            </li>
            <li className="about-lista-element">
              <h4>{t("poeni")}</h4>
            </li>
            <li className="about-lista-element">
              <h4>{t("implementacija")}</h4>
            </li>
            <br />
            <br />
            <li className="about-lista-element">
              <h4>{t("projektniTim")}</h4>
              <ol className="about-podlista">
                <li className="about-lista-element">{t("projektniTim1")}</li>
                <li className="about-lista-element">{t("projektniTim2")}</li>
                <li className="about-lista-element">{t("projektniTim3")}</li>
                <li className="about-lista-element">{t("projektniTim4")}</li>
                <li className="about-lista-element">{t("projektniTim5")}</li>
                <li className="about-lista-element">{t("projektniTim6")}</li>
                <li className="about-lista-element">{t("projektniTim7")}</li>
                <li className="about-lista-element">{t("projektniTim8")}</li>
                <li className="about-lista-element">{t("projektniTim9")}</li>
                <li className="about-lista-element">{t("projektniTim10")}</li>
                <li className="about-lista-element">{t("projektniTim11")}</li>
                <li className="about-lista-element">{t("projektniTim12")}</li>
                <li className="about-lista-element">{t("projektniTim13")}</li>
              </ol>
            </li>
          </ul>
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>{t('promocija1')}</p>
          <br />
          <br />
          <div className="about-podlista grbovi">
            <img
              style={{ margin: "10px auto", maxWidth: "300px" }}
              src={require("../../oprojektu/promocija1.jpeg")}
              alt="promocija1"
            />
            <img
              style={{ margin: "10px auto", maxWidth: "300px" }}
              src={require("../../oprojektu/promocija3.jpeg")}
              alt="promocija2"
            />
          </div>
          <br />
          <p style={{ textAlign: "justify" }}>{t('promocija2')}</p>
          <br />
          <br />
          <video width={"100%"} controls className="onama-video" src={video} />
          <br />
          <br />
          <div className="about-podlista grbovi">
            <img
              style={{ margin: "10px auto", maxWidth: "300px" }}
              src={require("../../oprojektu/promocija4.JPG")}
              alt="promocija3"
            />
            <img
              style={{ margin: "10px auto", maxWidth: "300px" }}
              src={require("../../oprojektu/promocija5.JPG")}
              alt="promocija4"
            />
            <img
              style={{ margin: "10px auto", maxWidth: "300px" }}
              src={require("../../oprojektu/promocija6.JPG")}
              alt="promocija5"
            />
            <img
              style={{ margin: "10px auto", maxWidth: "300px" }}
              src={require("../../oprojektu/plakat.jpg")}
              alt="promocija6"
            />
            <img
              style={{ margin: "10px auto", maxWidth: "300px" }}
              src={require("../../oprojektu/promocija7.JPG")}
              alt="promocija7"
            />
            <img
              style={{ margin: "10px auto", maxWidth: "300px" }}
              src={require("../../oprojektu/promocija8.JPG")}
              alt="promocija8"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Oprojektu;
