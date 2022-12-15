import "../naslovnaslika/naslovna.css";
import "./istorijat.css";
import Tip3 from "../sadrzaj/Tip3.js";
import Tip4 from "../sadrzaj/Tip4.js";
import Naslovna from "../naslovnaslika/Naslovna.js";
import NaslovnaSlika from "../../slike/naslovna.jpg";
import Slika from "../sadrzaj/Slika.js";
import Slika1 from "../../slike/260.jpg";
import Slika2 from "../../slike/217.jpg";
import Slika3 from "../../slike/skica1.png";
import Slika4 from "../../slike/skica3.png";
import Slika5 from "../../slike/skica4.png";
import Slika6 from "../../slike/334.jpg";
import audioRs from "../../audio/MP3_srp/Stari_grad.mp3";
import audioEng from "../../audio/MP3-eng/OldTown_eng.mp3";
import audioGer from "../../audio/MP3-nem/StariGrad_nem.mp3";
import audioRus from "../../audio/MP3-rus/Стари град.mp3";
import { useTranslation } from "react-i18next";

function Otvrdjavi() {
  const { t } = useTranslation();
  return (
    <>
      <Naslovna
        audioRs={audioRs}
        audioEng={audioEng}
        audioGer={audioGer}
        audioRus={audioRus}
        naslovnaSlika={NaslovnaSlika}
        title={t("citadel_main_title")}
        subtitle={t("citadel_main_subtitle")}
      />
      <article className="pozadina">
        <Tip3
          slika={Slika1}
          naslov={t("citadel_title1")}
          tekst={t("citadel_subtitle1")}
        />
        <Tip4 tekst={t("citadel_subtitle2")} />
        <Tip3
          slika={Slika2}
          orjentacija="row-reverse"
          tekst={t("citadel_subtitle3")}
        />
        <Tip4
          naslov={t("citadel_title2")}
          tekst={t("citadel_subtitle4")}
        />
        <Tip3 slika={Slika3} tekst={t("citadel_subtitle5")} />
        <Slika slika={Slika6} />
        <Tip3
          slika={Slika4}
          orjentacija="row-reverse"
          tekst={t("citadel_subtitle6")}
        />
        <Tip4 tekst={t("citadel_subtitle7")} />
        <Tip3 slika={Slika5} tekst={t("citadel_subtitle8")} />
        <ol className="izvor">
          {t("citadel_literatura")}
          <li>{t("citadel_literatura1")}</li>
          <li>{t("citadel_literatura2")}</li>
          <li>{t("citadel_literatura3")}</li>
          <li>{t("citadel_literatura4")}</li>
          <li>{t("citadel_literatura5")}</li>
        </ol>
      </article>
    </>
  );
}

export default Otvrdjavi;
